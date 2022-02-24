import { Component } from "../core/component";
import { apiService } from "../services/api.service";
import { renderPost } from "../templates/post.template"; // 221

export class FavoriteComponent extends Component { // 34
    constructor(id, { loader }) { // 35
        super(id);

        this.loader = loader; // 214
    }

    init() { // 199
        this.$el.addEventListener('click', linkClickHandler.bind(this)); // 200
    }

    onShow() { // 191
        const favorites = JSON.parse(localStorage.getItem('favorites')); // 192
        const html = renderList(favorites); // 193
        this.$el.insertAdjacentHTML('afterbegin', html) // 197
    }

    onHide() { // 225
        this.$el.innerHTML = ''; // 226
    }
}

async function linkClickHandler(e) { // 201
    e.preventDefault(); // 202
    if (e.target.classList.contains('js-link')); // 203 -> 204 api.service.js
    // console.log(e.target.textContent);
    this.$el.innerHTML = '';  // 217
    this.loader.show(); // 213
    const postId = e.target.textContent; // 211

    const post =  await apiService.fetchPostById(postId) // 212
    // console.log(post);
    this.loader.hide(); // 215
    this.$el.insertAdjacentHTML('afterbegin', renderPost(post, { withButton: false })) // 216 // 223 Передаем объект withButton -> 224 передаем объект в posts.component

}

// Импортируем функцию теперь отдельно вынесенную
// function renderPost(post) { // 218 Копируем функцию из posts.component.js и дальше создаем новый шаблон -> 219 post.template.js
//     const tag = post.type === 'news'
//         ? '<li class="tag tag-blue tag-rounded">Новость</li>'
//         : '<li class="tag tag-rounded">Заметка</li>'; 

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
//     </div>` 
// }


function renderList(list = []) { // 194
    if (list && list.length) { // 195
        // 198
        return `
        <ul>
            ${list.map(i => `<li><a href="#" class="js-link">${i}</a></li>`).join(' ')}
        </ul>
        `
    }

    return `<h3 class="center">Вы пока не добавили ничего</h3>` // 196

}