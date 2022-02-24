export function renderPost(post, options = {}) { // 219 -> 220 posts.component экспортируем, экспортируем 221 favorite.component
    const tag = post.type === 'news'
        ? '<li class="tag tag-blue tag-rounded">Новость</li>'
        : '<li class="tag tag-rounded">Заметка</li>'; 

    const button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id) // 189
        ? `<button data-id="${post.id}" class="button-round button-small button-danger">Удалить</button>` // 161 и добавляем ее в разметку ниже
        : `<button data-id="${post.id}" class="button-round button-small button-primary">Сохранить</button>` // 190 -> 191 favorite.component.js
    return ` 
    <div class="panel">
        <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
                ${tag}
            </ul>
        </div>
        <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
        </div>
        <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
            ${options.withButton ? button : ''} 
        </div>
    </div>` 
    // 222 добавляем ? и : в button -> 223 добавляем в favorite.component
}