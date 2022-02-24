import { Component } from '../core/component';

export class HeaderComponent extends Component { // 5
    constructor(id) { // 6
        super(id) // 7 
    }

    init() { // 8
        // console.log(this.$el);
        if (localStorage.getItem('visited')) {
            this.hide();
        } // 20
        const btn = this.$el.querySelector('.js-header-start'); // 9
        btn.addEventListener('click', buttonHandler.bind(this)); // 10
    }
}

function buttonHandler() { // 11
    // console.log(this.$el); // 12
    // this.$el.classList.add('hide'); // 13
    localStorage.setItem('visited', JSON.stringify(true)) // 19
    this.hide(); // 18
}