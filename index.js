const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector('.links')

toggleBtn.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
})