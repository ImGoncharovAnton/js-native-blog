export function renderPost(post, options = {}) { // 219 -> 220 posts.component экспортируем, экспортируем 221 favorite.component
    const tag = post.type === 'news'
        ? '<li class="tag tag-blue tag-rounded">Новость</li>'
        : '<li class="tag tag-rounded">Заметка</li>'; 

        const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Заменяем на переменную
        const candidate = favorites.find(p => p.id === post.id); // добавляем новую переменную для того, чтобы добавить заголовок в избранное

    // const button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id) // 189
    const button = candidate /* заменяем строку выше*/
        ? `<button data-id="${post.id}" data-title="${post.title}" class="button-round button-small button-danger">Удалить</button>` // 161 и добавляем ее в разметку ниже
        : `<button data-id="${post.id}" data-title="${post.title}" class="button-round button-small button-primary">Сохранить</button>` // 190 -> 191 favorite.component.js
    // Добавляем data атрибует title, чтобы забирать из массива post заголовок для вкладки Избранное
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