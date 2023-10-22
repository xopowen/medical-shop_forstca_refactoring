import TelNumberMask from "./components/TelNumberMask";
import GlobalAnimation from "./components/GlobalAnimation";
import {CLASS_NAME, EFFECT_CLASS} from "./components/constants";
import   "./components/slider-poduct";
import initShowCatalogFilter from "./components/showCatalogFilter";
let globalAnimation = new GlobalAnimation()
document.querySelectorAll('.opacity').forEach(el=>{
    globalAnimation.observe(el)
})
document.querySelectorAll('.appear').forEach(el=>{
    globalAnimation.observe(el)
})


document.querySelectorAll('.card-product__footer .blow-button').forEach(el=>{
    el.addEventListener('click',evt => {
        let productAddedFrame =  document.querySelector('#product-added')
        productAddedFrame.classList.toggle(CLASS_NAME.OVER_PAGE+EFFECT_CLASS.active)
    })
})

const telList = document.querySelectorAll('input[type=tel]')
new TelNumberMask(telList)
initShowCatalogFilter()

