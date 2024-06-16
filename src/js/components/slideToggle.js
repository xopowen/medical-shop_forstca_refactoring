/**
 * @description раскрывает элемент на всю высоту.
 * @description изначально элемент должен быть скрыт (высота 0)
 * @param {HTMLElement} el
 * @param {Event} event
 */
export default function slideToggle  (el,event) {
    event.preventDefault();

    if (!el.classList.contains('show')) {
        el.classList.add('show');
        el.style.height = 'auto';

        let height = el.getBoundingClientRect().height + 'px';

        el.style.height = '0px';

        setTimeout(function () {
            el.style.height = height;
        }, 0);
    } else {
        el.style.height = '0px';

        el.addEventListener('transitionend',
            function () {
                el.classList.remove('show');
            }, {
                once: true
            });
    }
}
