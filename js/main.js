/* =========================================================
   MENU DATA (редагуєш тільки тут)
   ========================================================= */

const menuItems = [

/* ---------- ЧОРНА КАВА ---------- */
{
  name:"Еспресо",
  category:"Чорна кава",
  price:"24 грн",
  desc:"Класичний концентрований кавовий шот",
  img:"img/menu/espresso.webp"
},
{
  name:"Допіо",
  category:"Чорна кава",
  price:"38 грн",
  desc:"Подвійна порція еспресо",
  img:"img/menu/doppio.webp"
},
{
  name:"Американо",
  category:"Чорна кава",
  price:"M 27 грн • L 38 грн",
  desc:"Еспресо з додаванням гарячої води",
  img:"img/menu/americano.webp"
},

/* ---------- КАВА З МОЛОКОМ ---------- */
{
  name:"Флет вайт",
  category:"Кава з молоком",
  price:"48 грн",
  desc:"Насичена кава з ніжною молочною текстурою",
  img:"img/menu/flatwhite.webp"
},
{
  name:"Капучино",
  category:"Кава з молоком",
  price:"M 35 грн • L 45 грн • XL 55 грн",
  desc:"Еспресо з молоком та пінкою",
  img:"img/menu/cappuccino.webp"
},
{
  name:"Лате",
  category:"Кава з молоком",
  price:"M 35 грн • L 45 грн • XL 55 грн",
  desc:"М'яка кава",
  img:"img/menu/latte.webp"
},
{
  name:"Раф",
  category:"Кава з молоком",
  price:"M 45 грн • L 55 грн • XL 65 грн",
  desc:"Кремова кава з ніжною текстурою",
  img:"img/menu/raf.webp"
},
{
  name:"Американо з молоком",
  category:"Кава з молоком",
  price:"M 30 грн • L 45 грн",
  desc:"Американо з додаванням молока",
  img:"img/menu/americano-milk.webp"
},
{
  name:"Капуоранж",
  category:"Кава з молоком",
  price:"M 50 грн • L 60 грн",
  desc:"Кава з апельсиновими нотами",
  img:"img/menu/capuorange.webp"
},
{
  name:"Мокко",
  category:"Кава з молоком",
  price:"M 43 грн • L 55 грн • XL 65 грн",
  desc:"Кава з шоколадом та молоком",
  img:"img/menu/mocha.webp"
},
{
  name:"Кава по-віденськи",
  category:"Кава з молоком",
  price:"40 грн",
  desc:"Кава з вершками",
  img:"img/menu/vienna.webp"
},

/* ---------- НЕ КАВА ---------- */
{
  name:"Матча-лате",
  category:"Не кава",
  price:"M 55 грн • L 65 грн",
  desc:"Японський чай з молоком",
  img:"img/menu/matcha.webp"
},
{
  name:"Какао класичний",
  category:"Не кава",
  price:"M 40 грн • L 45 грн • XL 55 грн",
  desc:"Гарячий шоколадний напій",
  img:"img/menu/cocoa.webp"
},
{
  name:"Шоколад",
  category:"Не кава",
  price:"M 40 грн • L 50 грн",
  desc:"Густий шоколадний напій",
  img:"img/menu/hotchocolate.webp"
},
{
  name:"Чай натуральний",
  category:"Не кава",
  price:"M 45 грн • L 60 грн",
  desc:"Натуральний заварний чай",
  img:"img/menu/tea.webp"
},
{
  name:"Чай листовий",
  category:"Не кава",
  price:"23 грн",
  desc:"Класичний листовий чай",
  img:"img/menu/leaftea.webp"
},

/* ---------- COLD MENU ---------- */
{
  name:"Espresso tonic",
  category:"Холодні",
  price:"L 65 грн • XL 85 грн",
  desc:"Еспресо з тоніком та льодом",
  img:"img/menu/espresso-tonic.webp"
},
{
  name:"BAMBL",
  category:"Холодні",
  price:"L 60 грн • XL 80 грн",
  desc:"Освіжаючий кавовий напій",
  img:"img/menu/bambl.webp"
},
{
  name:"ICE latte",
  category:"Холодні",
  price:"L 60 грн • XL 70 грн",
  desc:"Холодний лате з льодом",
  img:"img/menu/ice-latte.webp"
},
{
  name:"ICE Raf",
  category:"Холодні",
  price:"L 60 грн • XL 80 грн",
  desc:"Холодний кремовий раф",
  img:"img/menu/ice-raf.webp"
},
{
  name:"Frape",
  category:"Холодні",
  price:"L 60 грн • XL 80 грн",
  desc:"Холодна збита кава",
  img:"img/menu/frappe.webp"
},
{
  name:"Lemonad classic",
  category:"Холодні",
  price:"L 55 грн • XL 70 грн",
  desc:"Класичний лимонад",
  img:"img/menu/lemonade.webp"
},
{
  name:"Mojito",
  category:"Холодні",
  price:"L 70 грн • XL 80 грн",
  desc:"Освіжаючий м'ятний напій",
  img:"img/menu/mojito.webp"
},
{
  name:"ICE Cocoa",
  category:"Холодні",
  price:"L 60 грн • XL 70 грн",
  desc:"Холодне какао",
  img:"img/menu/ice-cocoa.webp"
},
{
  name:"Sangria",
  category:"Холодні",
  price:"L 80 грн • XL 100 грн",
  desc:"Фруктовий холодний напій",
  img:"img/menu/sangria.webp"
},

/* ---------- ДОДАТКИ ---------- */
{
  name:"Арабіка",
  category:"Додатки",
  price:"8 грн",
  desc:"Додатковий шот",
  img:"img/menu/add.webp"
},
{
  name:"Лимон",
  category:"Додатки",
  price:"8 грн",
  desc:"Скибка лимона",
  img:"img/menu/add.webp"
},
{
  name:"Згущене молоко",
  category:"Додатки",
  price:"M 10 грн • L 15 грн",
  desc:"Додаткове згущене молоко",
  img:"img/menu/add.webp"
},
{
  name:"Мед",
  category:"Додатки",
  price:"15 грн",
  desc:"Натуральний мед",
  img:"img/menu/add.webp"
},
{
  name:"Сироп",
  category:"Додатки",
  price:"8 грн",
  desc:"Смаковий сироп",
  img:"img/menu/add.webp"
},
{
  name:"Кава без кофеїну",
  category:"Додатки",
  price:"10 грн",
  desc:"Decaf",
  img:"img/menu/add.webp"
},
{
  name:"Маршмелоу",
  category:"Додатки",
  price:"15 грн",
  desc:"Міні маршмелоу",
  img:"img/menu/add.webp"
},
{
  name:"Безлактозне молоко",
  category:"Додатки",
  price:"M 10 грн • L 15 грн",
  desc:"Альтернатива молоку",
  img:"img/menu/add.webp"
},
{
  name:"Рослинне молоко",
  category:"Додатки",
  price:"M 30 грн • L 35 грн • XL 40 грн",
  desc:"Альтернативне молоко",
  img:"img/menu/add.webp"
},
{
  name:"Додаткове Еспресо",
  category:"Додатки",
  price:"15 грн",
  desc:"Додатковий шот еспресо",
  img:"img/menu/add.webp"
}

];


/* =========================================================
   STATE
   ========================================================= */

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const moreBtn = document.getElementById("moreBtn");

let active = "Всі";
let visible = 6;


/* =========================================================
   FILTERS
   ========================================================= */

const cats = ["Всі",...new Set(menuItems.map(i=>i.category))];

cats.forEach(cat=>{
  const b=document.createElement("button");
  b.className="menu__filter";
  b.textContent=cat;
  if(cat==="Всі") b.classList.add("active");

  b.onclick=()=>{
    document.querySelectorAll(".menu__filter").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    active=cat;
    visible=6;
    render();
  };

  filters.appendChild(b);
});


/* =========================================================
   RENDER
   ========================================================= */

function render(){

  const data = active==="Всі"
    ? menuItems
    : menuItems.filter(i=>i.category===active);

  const show = data.slice(0,visible);

  grid.innerHTML = show.map((item,index)=>`
    <div class="menuCard" data-index="${index}">

      ${item.badge ? `<div class="menuCard__badge">${item.badge}</div>`:""}

      <div class="menuCard__img"
        style="background-image:url(${item.img})"></div>

      <div class="menuCard__body">
        <div class="menuCard__title">${item.name}</div>
        <div class="menuCard__desc">${item.desc}</div>
        <div class="menuCard__price">${item.price}</div>
      </div>

    </div>
  `).join("");

  // ✅ ось тут відкриття модалки
  document.querySelectorAll(".menuCard").forEach(card=>{
    card.onclick = () => {
      const index = card.dataset.index;
      openModal(show[index]);
    };
  });

  moreBtn.style.display = visible>=data.length ? "none":"inline-flex";
}
render();


/* =========================================================
   SHOW MORE
   ========================================================= */

moreBtn.onclick=()=>{
  visible+=6;
  render();
};


/* =========================================================
   MODAL
   ========================================================= */

const modal=document.getElementById("menuModal");
const modalContent=document.getElementById("modalContent");

function openModal(item){

  modalContent.innerHTML=`
    <div class="menuModal__img"
      style="background-image:url(${item.img})"></div>

    <div class="menuModal__body">
      <h2>${item.name}</h2>
      <p>${item.desc}</p>
      <h3>${item.price}</h3>
    </div>
  `;

  modal.classList.add("open");
}

modal.onclick=e=>{
  if(e.target===modal) modal.classList.remove("open");
};








































/* ===== REVEAL ON SCROLL ===== */

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active")
    }
  })
},{threshold:0.15})

document.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el))



/* ===== OPEN GOOGLE MAP ROUTE ===== */

document.querySelectorAll(".routeBtn").forEach(btn=>{
  btn.addEventListener("click", e=>{

    const card = e.target.closest(".card")
    const lat = card.dataset.lat
    const lng = card.dataset.lng

    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

    window.open(url, "_blank")
  })
})







const reviews = document.querySelectorAll('.review');
let r = 0;

setInterval(()=>{
  reviews[r].classList.remove('active');
  r = (r+1) % reviews.length;
  reviews[r].classList.add('active');
},4000);