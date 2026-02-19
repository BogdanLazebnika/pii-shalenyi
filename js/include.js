/**
 * include.js – підвантажує HTML‑фрагменти у елементи,
 * які мають атрибут data-include.
 *
 * Підтримує асинхронне fetch() + async/await.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Збираємо всі елементи, що потребують підключення
    const includes = document.querySelectorAll('[data-include]');

    includes.forEach(async (el) => {
        const url = el.dataset.include; // шлях, зазначений у data-include

        try {
            const response = await fetch(url, { cache: 'force-cache' });
            if (!response.ok) {
                throw new Error(`Не вдалось завантажити ${url} (status ${response.status})`);
            }
            const html = await response.text();
            el.innerHTML = html;
        } catch (err) {
            console.error(err);
            // На випадок помилки можна показати запасний варіант:
            el.innerHTML = `<p class="include-error">Помилка підключення шаблону.</p>`;
        }
    });
});
