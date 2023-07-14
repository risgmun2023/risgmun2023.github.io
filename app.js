mobileNav = document.querySelector('#mobile-nav');
hamBurger = document.querySelector('#ham-burger');
navLink = document.querySelectorAll('.nav-link');

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