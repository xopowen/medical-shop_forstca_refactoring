import Swiper from "swiper";
import { Navigation } from 'swiper/modules';
// swiper element
const swiper = new Swiper('#slider-product', {
    modules: [ Navigation ],
    slidesPerView:'auto',
    speed: 400,
    updateOnWindowResize:true,
    spaceBetween:10,
    setWrapperSize:true,
    navigation: {
        nextEl: '.slider__navigation_next',
        prevEl: '.slider__navigation_last',
    },
});
console.log(swiper)