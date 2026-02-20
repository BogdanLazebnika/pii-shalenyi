/* =========================================================
   MENU DATA (редагуєш тільки тут)
   ========================================================= */

const menuItems = [
{
  name:"Лате",
  category:"Класика",
  price:"65 грн",
  desc:"Ніжна кава з молоком",
  img:"img/latte.webp",
  badge:"HIT"
},
{
  name:"Капучино",
  category:"Класика",
  price:"60 грн",
  desc:"Класичний баланс смаку",
  img:"img/cappuccino.webp"
},
{
  name:"Матча лате",
  category:"Авторські",
  price:"85 грн",
  desc:"Японський чай преміум",
  img:"img/matcha.webp",
  badge:"NEW"
},
{
  name:"Фрапе",
  category:"Холодні",
  price:"80 грн",
  desc:"Освіжаюча холодна кава",
  img:"img/frappe.webp"
},
{
  name:"Круасан",
  category:"Десерти",
  price:"85 грн",
  desc:"Французька випічка",
  img:"img/croissant.webp"
},
{
  name:"Лате",
  category:"Класика",
  price:"65 грн",
  desc:"Ніжна кава з молоком",
  img:"img/latte.webp",
  badge:"HIT"
},
{
  name:"Капучино",
  category:"Класика",
  price:"60 грн",
  desc:"Класичний баланс смаку",
  img:"img/cappuccino.webp"
},
{
  name:"Матча лате",
  category:"Авторські",
  price:"85 грн",
  desc:"Японський чай преміум",
  img:"img/matcha.webp",
  badge:"NEW"
},
{
  name:"Фрапе",
  category:"Холодні",
  price:"80 грн",
  desc:"Освіжаюча холодна кава",
  img:"img/frappe.webp"
},
{
  name:"Круасан",
  category:"Десерти",
  price:"85 грн",
  desc:"Французька випічка",
  img:"img/croissant.webp"
},
{
  name:"Лате",
  category:"Класика",
  price:"65 грн",
  desc:"Ніжна кава з молоком",
  img:"img/latte.webp",
  badge:"HIT"
},
{
  name:"Капучино",
  category:"Класика",
  price:"60 грн",
  desc:"Класичний баланс смаку",
  img:"img/cappuccino.webp"
},
{
  name:"Матча лате",
  category:"Авторські",
  price:"85 грн",
  desc:"Японський чай преміум",
  img:"img/matcha.webp",
  badge:"NEW"
},
{
  name:"Фрапе",
  category:"Холодні",
  price:"80 грн",
  desc:"Освіжаюча холодна кава",
  img:"img/frappe.webp"
},
{
  name:"Круасан",
  category:"Десерти",
  price:"85 грн",
  desc:"Французька випічка",
  img:"img/croissant.webp"
},
{
  name:"Лате",
  category:"Класика",
  price:"65 грн",
  desc:"Ніжна кава з молоком",
  img:"img/latte.webp",
  badge:"HIT"
},
{
  name:"Капучино",
  category:"Класика",
  price:"60 грн",
  desc:"Класичний баланс смаку",
  img:"img/cappuccino.webp"
},
{
  name:"Матча лате",
  category:"Авторські",
  price:"85 грн",
  desc:"Японський чай преміум",
  img:"img/matcha.webp",
  badge:"NEW"
},
{
  name:"Фрапе",
  category:"Холодні",
  price:"80 грн",
  desc:"Освіжаюча холодна кава",
  img:"img/frappe.webp"
},
{
  name:"Круасан",
  category:"Десерти",
  price:"85 грн",
  desc:"Французька випічка",
  img:"img/croissant.webp"
},
{
  name:"Лате",
  category:"Класика",
  price:"65 грн",
  desc:"Ніжна кава з молоком",
  img:"img/latte.webp",
  badge:"HIT"
},
{
  name:"Капучино",
  category:"Класика",
  price:"60 грн",
  desc:"Класичний баланс смаку",
  img:"img/cappuccino.webp"
},
{
  name:"Матча лате",
  category:"Авторські",
  price:"85 грн",
  desc:"Японський чай преміум",
  img:"img/matcha.webp",
  badge:"NEW"
},
{
  name:"Фрапе",
  category:"Холодні",
  price:"80 грн",
  desc:"Освіжаюча холодна кава",
  img:"img/frappe.webp"
},
{
  name:"Круасан",
  category:"Десерти",
  price:"85 грн",
  desc:"Французька випічка",
  img:"img/croissant.webp"
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

  grid.innerHTML = show.map(item=>`
    <div class="menuCard" onclick='openModal(${JSON.stringify(item)})'>

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