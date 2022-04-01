import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const slider = () => {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiperProcess = new Swiper(".mySwiperProcess", {
        /*         direction: "horizontal", */
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
}

export default slider;