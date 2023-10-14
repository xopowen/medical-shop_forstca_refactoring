import {CLASS_ANIM} from "./constants";


export default class GlobalAnimation {
    static classAnim = CLASS_ANIM
    static defaultOptions = {
        // без отступов
        rootMargin: '0px',
        // процент пересечения
        threshold: 0
    }

    constructor(options = GlobalAnimation.defaultOptions) {
        /*
        клас используется на установки анимации которые отслеживаются с использованием IntersectionObserver
        */

        this.options = options
        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    GlobalAnimation.addAnimation(entry.target)
                    observer.unobserve(entry.target)
                }

            })
        },options)
    }

    observe(el){
        this.observer.observe(el)
    }

    static addAnimation(element){
        element.classList.forEach(v=>{
            if(v in GlobalAnimation.classAnim){
                element.classList.add(GlobalAnimation.classAnim[v])
            }
        })
    }
}
