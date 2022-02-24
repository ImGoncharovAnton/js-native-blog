import { Component } from "../core/component";

export class NavigationComponent extends Component { // 21
    constructor(id) { // 22
        super(id) // 23

        this.tabs = [] // 40
    }
    init() { // 24
        // console.log(this.$el); // 25
        this.$el.addEventListener("click", tabClickHandler.bind(this)) // 26
    }

    registerTabs(tabs) { // 41
        this.tabs = tabs // 42
    }
}

function tabClickHandler(e) { //27
    e.preventDefault(); // 28
    if (e.target.classList.contains('tab')) { //29
        // console.log(e.target); // 30
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => { // 32
            tab.classList.remove('active'); // 33
        })
        e.target.classList.add('active') // 31
        // console.log(this.tabs); // 44

        const activeTab = this.tabs.find(t => t.name === e.target.dataset.name) // 45
        this.tabs.forEach(t => t.component.hide()); // 48
        // console.log(activeTab); // 46
        activeTab.component.show(); // 47
    }

   
}