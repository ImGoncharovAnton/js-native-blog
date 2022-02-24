import { Component } from "../core/component";
import { apiService } from "../services/api.service"; // 145
import { TransformService } from "../services/transform.service"; // 150
import { renderPost } from "../templates/post.template"; // 220

export class PostsComponent extends Component { // 36
    constructor(id, { loader }) { // 37 // 169 добавляем loader
        super(id);
        this.loader = loader; // 170
    }

    init() { // 173
        this.$el.addEventListener('click', buttonHandler.bind(this)); // 174
    }

    // init() { // 128 - > 130 core/component.js
    //     console.log('posts init'); // 129
    // }
    async onShow() { // 134 -> 135 api.service.js
        this.loader.show(); // 171
        // console.log('onShow');
        // const data = await apiService.fetchPosts() // 146 -> 147 transform.service.js
        // console.log('Data', data); 
        const fbData = await apiService.fetchPosts() // 151
        const posts = TransformService.fbObjectToArray(fbData) // 152 -> 153 transform.service.js
        // console.log(posts);
        const html = posts.map(post => renderPost(post, { withButton: true })); // 158 // 224 добавили withButton -> 225 favorite.component
        this.loader.hide(); // 172
        this.$el.insertAdjacentHTML('afterbegin', html.join(' ')) // 159
    }
    onHide() {// 162
        this.$el.innerHTML = ''; // 163 -> 164 loader.component.js
    } 
}

// выносим функцию в отдельный файл
// function renderPost(post) { // 156
//     const tag = post.type === 'news'
//         ? '<li class="tag tag-blue tag-rounded">Новость</li>'
//         : '<li class="tag tag-rounded">Заметка</li>'; // 160

//     const button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id) // 189
//         ? `<button data-id="${post.id}" class="button-round button-small button-danger">Удалить</button>` // 161 и добавляем ее в разметку ниже
//         : `<button data-id="${post.id}" class="button-round button-small button-primary">Сохранить</button>` // 190 -> 191 favorite.component.js
//     return ` 
//     <div class="panel">
//         <div class="panel-head">
//             <p class="panel-title">${post.title}</p>
//             <ul class="tags">
//                 ${tag}
//             </ul>
//         </div>
//         <div class="panel-body">
//             <p class="multi-line">${post.fulltext}</p>
//         </div>
//         <div class="panel-footer w-panel-footer">
//             <small>${post.date}</small>
//             ${button}
//         </div>
//     </div>` // 157
// }

function buttonHandler(e) { // 175
    // console.log(e);
    const $el = e.target; // 176
    const id = $el.dataset.id // 177

    if (id) { // 178
        // console.log(id);
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // 179
        // console.log(favorites);
        if (favorites.includes(id)) { // 180
            // удалить элемент
            $el.textContent = 'Сохранить'; // 184
            $el.classList.add('button-primary'); // 185
            $el.classList.remove('button-danger'); // 186
            favorites = favorites.filter(fId => fId !== id) // 182
        } else {
            // добавить элемент
            $el.classList.remove('button-primary'); // 187
            $el.classList.add('button-danger'); // 188
            $el.textContent = 'Удалить';
            favorites.push(id); // 181
        }

        localStorage.setItem('favorites', JSON.stringify(favorites)); // 183
    }
}