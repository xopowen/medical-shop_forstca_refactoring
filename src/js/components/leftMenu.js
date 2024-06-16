import slideToggle from './slideToggle'
document.getElementById('button-show-left-menu')
    .addEventListener('click',(e)=>{
        slideToggle( document.getElementById('sub-menu-left'),e)
    }

//         ()=>{
//     let left_menu = document.getElementById('sub-menu-left')
//
//
//     let had =  left_menu.classList.toggle('sub-menu__left_active')
//     if (had){
//         let h= 0
//         for (const menuItem of left_menu.children) {
//             h+= menuItem.clientHeight
//         }
//         left_menu.setAttribute('style',`max-height:${h+100}px;`)
//     }else {
//         left_menu.setAttribute('style',``)
//     }
// }
    )

window.addEventListener('resize',()=>{
    if(document.body.getBoundingClientRect().width > 767){
        let leftMenu = document.getElementById('sub-menu-left')
        if(leftMenu.classList.contains('show')){

            leftMenu.classList.remove('show')
        }else {
            leftMenu.setAttribute('style','')
        }
    }
})