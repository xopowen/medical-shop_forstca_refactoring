import {EFFECT_CLASS} from "./constants";

export default function initShowCatalogFilter(){
   let btn = document.querySelector('#button-show-filter')
    let catalogFilter=document.querySelector('#catalog-filter')
    if(btn){

        btn.addEventListener('click',(e)=>{
           catalogFilter.classList.toggle(`catalog__filter${EFFECT_CLASS.active}`)
        })
    }
}