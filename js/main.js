const btn = document.querySelector('.modalBtn')
const closeBtn = document.querySelector('.closeBtn')
const overlay = document.querySelector('.modalOverlay')

btn.addEventListener('click', _=>{
    overlay.classList.toggle('showModal')
})
closeBtn.addEventListener('click', _=>{
    overlay.classList.remove('showModal')
})