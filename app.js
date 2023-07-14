let mobileNav = document.querySelector('#mobile-nav');
let hamBurger = document.querySelector('#ham-burger');
let navLink = document.querySelectorAll('.nav-link');

let preLoader = document.querySelector('#preloader');
window.addEventListener('load', ()=>{
    preLoader.classList.add('disabled');
    setTimeout(()=>{
        preLoader.style.display = 'none';
    }, 200)
})

hamBurger.addEventListener('click' , ()=>{
    mobileNav.classList.toggle('enabled');
    if(mobileNav.classList.contains('enabled')){
        hamBurger.innerHTML = `<i class="fas fa-regular fa-xmark"></i>`;
    }
    else{
        hamBurger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
})

navLink.forEach((e)=>{
    e.addEventListener('click',()=>{
        mobileNav.classList.toggle('enabled');
        hamBurger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    })
});