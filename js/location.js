/* ===== REVEAL ===== */

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active")
    }
  })
},{threshold:0.15})

document.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el))


/* ===== CARD TILT ===== */

document.querySelectorAll(".card").forEach(card=>{

  card.addEventListener("mousemove",e=>{
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width/2
    const centerY = rect.height/2

    const rotateX = (y-centerY)/12
    const rotateY = (centerX-x)/12

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`

    card.style.setProperty("--x",x+"px")
    card.style.setProperty("--y",y+"px")
  })

  card.addEventListener("mouseleave",()=>{
    card.style.transform="rotateX(0) rotateY(0)"
  })

})


/* ===== MAGNETIC BUTTON ===== */

document.querySelectorAll(".magnetic").forEach(btn=>{

  btn.addEventListener("mousemove",e=>{
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width/2
    const y = e.clientY - rect.top - rect.height/2

    btn.style.transform =
      `translate(${x*0.25}px, ${y*0.25}px)`
  })

  btn.addEventListener("mouseleave",()=>{
    btn.style.transform="translate(0,0)"
  })

})