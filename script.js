const burgerBtnOpen = document.querySelector('div.burger');
const burgerBtnClose = document.querySelector('div.close-burger');
const nav = document.querySelector('nav.nav-up')
const navA = document.querySelectorAll('.nav-up a');
const logoText = document.querySelector('.logo-wrap h2');
const logo = document.querySelector('.logo-wrap img');

burgerBtnOpen.addEventListener('click', () => {
    nav.classList.add('move');
})

burgerBtnClose.addEventListener('click', () => {
    nav.classList.remove('move');
})

navA.forEach(element => {
    element.addEventListener('click', () => {
        nav.classList.remove('move');
    })
});

const swiperCourses = new Swiper('.swiper-container.courses-slider', {
    pagination: {
        el: '.swiper-pagination.pagination-courses',
        clickable: true,
    },
});

const swiperTeachers = new Swiper('.swiper-container.teacher-slider', {
    slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination.pagination-teachers',
        clickable: true,
    },
});

document.addEventListener('scroll', () => {
    if ($(window).scrollTop() > innerHeight) {
        burgerBtnOpen.style.color = 'black';
    } else {
        burgerBtnOpen.style.color = 'white';
    }
})

let prevScrollPos = $(window).scrollTop();

document.addEventListener('scroll', () => {
    if (innerWidth >= 1380){
        let currentScrollPos = $(window).scrollTop();
        if (prevScrollPos > currentScrollPos) {
            nav.style.top = '0';
            logo.style.transform = 'translateY(-50%)';
            logoText.style.transform = 'translateY(-50%)';
        } else {
            nav.style.top = '-15%';
            logo.style.transform = 'translateY(-350%)';
            logoText.style.transform = 'translateY(-350%)';
        }
        prevScrollPos = currentScrollPos;
    }
})

