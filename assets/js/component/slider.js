import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const slider = () => {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiperProcess = new Swiper(".mySwiperProcess", {
        pagination: {
            bulletActiveClass: 'process__swiper-bullet-is-active',
            bulletClass: 'process__swiper-bullet',
            el: ".process__swiper-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });

    var techSlider = new Swiper(".technology__slider", {
        slidesPerView: 9,
        spaceBetween: 30,
        loop: "true",
        autoplay: {
            delay: 1000,
        },
    });

    var reverseTechSlider = new Swiper(".technology__slider__reverse", {
        slidesPerView: 7,
        spaceBetween: 30,
        reverseDirection: "true",
        loop: "true",
        autoplay: {
            delay: 1000,
        },
    });

    var expirience__slider = new Swiper(".expirience__slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: "true",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var partners__slider = new Swiper(".partners__slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        reverseDirection: "true",
        loop: "true",
        autoplay: {
            delay: 1000,
        },
    });
}
export default slider;