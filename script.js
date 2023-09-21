let searchbtn=document.querySelector('#search');
let searchbar=document.querySelector('.search');
let formbtn=document.querySelector('#login');
let loginform=document.querySelector('.form-container');
let formclose=document.querySelector('#form-close');
let menu=document.querySelector('#menubar');
let navbar=document.querySelector('.navbar');
let videobtn=document.querySelectorAll('.vid-btn');


window.onscroll=()=>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    loginform.classList.remove('active');
}

searchbtn.addEventListener('click',()=>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
})

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

formbtn.addEventListener('click',()=>{
    loginform.classList.add('active');
})

formclose.addEventListener('click',()=>{
    loginform.classList.remove('active');
});

videobtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        home-btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#slider').src=src;
    });
});

var swiper=new Swiper(".review-slider",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        desableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});