export class Form { // 54
    constructor(form, controls) { // 61
        this.form = form; // 62
        this.controls = controls; // 63
    }

    value() { // 66
        const value = {} // 67

        Object.keys(this.controls).forEach(control => { // 68
            value[control] = this.form[control].value // 69
        })

        return value // 70
    }

    clear() { // 108
        Object.keys(this.controls).forEach(control => { // 109
            this.form[control].value = '' // 110
        })
    }

    isValid() { // 79
        let isFormValid = true; // 80

        Object.keys(this.controls).forEach(control => { // 81
            const validators = this.controls[control] // 82

            let isValid = true // 83
            validators.forEach(validator => { // 84
                isValid = validator(this.form[control].value) && isValid // 85
            })

            // if (!isValid) { // 93
            //     setError(this.form[control]) // 94
            // } else { // 104
            //     clearError(this.form[control]) // 105
            // }

            isValid ? clearError(this.form[control]) : setError(this.form[control]) // 106

            isFormValid = isFormValid && isValid; // 86
        })

        return isFormValid // 81
    }
}

function setError($control) { // 95
    // console.log($control); // 96
    clearError($control); // 101
    const error = '<p class="validation-error">Введите корректное значение</p>'; // 97
    $control.classList.add('invalid'); // 98
    $control.insertAdjacentHTML('afterend', error) // 99
}

function clearError($control) { // 100
    $control.classList.remove('invalid'); // 102

    if ($control.nextSibling) { // 107
        $control.closest('.form-control').removeChild($control.nextSibling); // 103
    }
    
}