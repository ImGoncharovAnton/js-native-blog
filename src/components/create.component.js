import { Component } from "../core/component";
import { Form } from "../core/form"; // 55
import { Validators } from "../core/validators"; // 75
import { apiService } from "../services/api.service"; // 124

export class CreateComponent extends Component { // 38
    constructor(id) { // 39
        super(id);

        // this.form = null; // 56
    }

    init() { // 49
        this.$el.addEventListener('submit', submitHandler.bind(this)); // 50

        this.form = new Form(this.$el, { // 58
            // title: [], // 59
            title: [Validators.required], // 76
            // fulltext: [], // 60
            // fulltext: [Validators.required], // 77
            fulltext: [Validators.required, Validators.minLength(10)], // 92
        }); // 57
    }
}

async function submitHandler(e) { // 51 // 125 добавил async
    e.preventDefault(); // 52

    if (this.form.isValid()) { // 78
        const formData = { // 64
            type: this.$el.type.value, // 65,
            date: new Date().toLocaleDateString(), // 112
            ...this.form.value() // 71
        } 

        await apiService.createPost(formData); // 126

        this.form.clear(); // 111 -> 112 api.service.js

        alert ('Запись создана в базе данных')// 127 -> 128 posts.component.js

        // console.log('Submit', formData) // 53
    } 
    // else { // 87
    //     console.warn('Form is invalid') // 88
    // }

    
}