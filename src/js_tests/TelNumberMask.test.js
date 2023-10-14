import TelNumberMask from '../js/components/TelNumberMask'
// import { JSDOM } from 'jsdom';
// const { window } = new JSDOM('<!doctype html><html><body></body></html>');
/**
 * @description проверка работы класса
 *
 */

test('проверка корректности создания',()=>{
    let inputElement = document.createElement('input')
    exports(TelNumberMask([inputElement]), inputElement.onfocus !==null  )
})
