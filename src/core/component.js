export class Component { // 1
    constructor(id) {
        this.$el = document.getElementById(id); // 2
        this.init() // 4
    }

    init() { // 3

    }

    onShow() { // 130
    
    }

    onHide() { // 131
    
    }

    hide () { // 14
        this.$el.classList.add('hide') // 16
        this.onHide() // 132
    }

    show() { // 15
        this.$el.classList.remove('hide') // 17
        this.onShow() // 133
    }
}