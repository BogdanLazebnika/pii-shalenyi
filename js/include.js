/* js/include.js */
document.addEventListener('DOMContentLoaded', async () => {
    const includes = document.querySelectorAll('[data-include]');
    const promises = [...includes].map(async el => {
        const url = el.dataset.include;
        try {
            const resp = await fetch(url, { cache: 'force-cache' });
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const html = await resp.text();
            el.innerHTML = html;                       // вставляємо розмітку

            // 1) подія «для конкретного елементу» (можна слухати у js‑компоненті)
            el.dispatchEvent(new CustomEvent('include:loaded', { bubbles: true }));

        } catch (err) {
            console.error(err);
            el.innerHTML = `<p class="include-error">Помилка підключення шаблону.</p>`;
        }
    });

    // 2) глобальна подія – коли *усі* включені фрагменти готові
    await Promise.all(promises);
    document.dispatchEvent(new Event('includes:loaded'));
});
