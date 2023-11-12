import {EFFECT_CLASS} from "./constants";

let buttonShowBurgerMenu = document.querySelector('#show-burger-menu')

if(buttonShowBurgerMenu){
    buttonShowBurgerMenu.addEventListener('click',()=>{
        let burgerMenu = document.querySelector('.burger-menu')
        if(burgerMenu){
            burgerMenu.classList.toggle('burger-menu'+EFFECT_CLASS.active)
        }
    })
}