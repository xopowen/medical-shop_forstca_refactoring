/**
 * @description класс создающий объект который накладывает на несколько полей шаблон ввода номера телефона.
 * @param {Array<HTMLInputElement> }  fields=[]  - список полей к которым будут прикреплены слушатели событий focus и input.
 * @param {string} pattern - строчка, которая определяет желаемый шаблон который будит в поле набора номера телефона
 * @default "+ 7 (___)-___-__-__"
 * @param replacementChar='_'  - символ, который будит замениться вводимыми числами.
 * @param ignoreChar=')-' - строчка с игнорируемыми символами.
 * При удалении или вводе курсор будит перескакивать эти символы.- ")-"
 * @return Object<TelNumberMask>
 * @example
 * pattern='+ 7 (___)-___-__-__',
 * replacementChar = '_',
 * ignoreChar=')-', -символа "(" нет так как его перескакивать уже не нужно).
 */
class TelNumberMask{

    constructor(
        fields=[],
        pattern='+ 7 (___)-___-__-__',
        replacementChar = '_',
        ignoreChar=')-',
        ) {
        this.pattern = pattern
        this.replacementChar = replacementChar
        this.ignoreChar = ignoreChar
        this.fields = fields

        this.fields.forEach(field => {

            field.addEventListener('focus', () => {
                this.setCursorToChar(field)
            })
            field.addEventListener('input', () => {

                let value = field.value.split('')
                let startLength = value.length
                value.length = pattern.length
                for (let i = 0; i < pattern.length; i++) {
                    if( !Number.isNaN(parseInt(value[i]))){
                        continue
                    }
                    value[i] = pattern[i]
                }
                field.value = value.join('')
                this.setCursorToChar(field)

                if( startLength < pattern.length){

                    if(this.ignoreChar.includes(value[field.selectionStart-1] ) ){
                        while (this.ignoreChar.includes(value[field.selectionStart-1] ) ){
                            field.selectionStart = field.selectionStart-1
                            field.selectionEnd = field.selectionStart
                        }
                    }
                }
            })
        })
    }


    setCursorToChar(field) {
        let indexEmptyEl = field.value.indexOf(this.replacementChar)
        field.selectionStart = indexEmptyEl !== -1 ? indexEmptyEl : field.value.length
        field.selectionEnd = indexEmptyEl !== -1 ? indexEmptyEl : field.value.length
    }
}

export default TelNumberMask;

