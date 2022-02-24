export class Validators { // 72
    static required(value = '') { // 73
        return value && value.trim() // 74
    }

    static minLength(length) { // 89
        return value => { // 90
            return value.length >= length // 91
        }
    } 
}