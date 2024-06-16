import {CLASS_NAME, EFFECT_CLASS} from "./constants";

let prodBody = document.querySelector('.' + CLASS_NAME.productCatalog.body)
let productButtonShow = document.querySelector('.' + CLASS_NAME.productCatalog.buttonShow)

if (productButtonShow) {
    productButtonShow.addEventListener('click',() => {
        if (prodBody) {

            productButtonShow.classList.toggle(CLASS_NAME.productCatalog.buttonShow + EFFECT_CLASS.active)
            let isActive =  prodBody.classList.toggle( CLASS_NAME.productCatalog.body + EFFECT_CLASS.active)
            if(!isActive){
                prodBody.classList.add(CLASS_NAME.productCatalog.body+EFFECT_CLASS.close)
                prodBody.addEventListener('transitionend',()=>{
                    prodBody.classList.remove(CLASS_NAME.productCatalog.body+EFFECT_CLASS.close)
                })
            }
        }
    })
}


