export class TransformService { // 147
    static fbObjectToArray(fbData) { // 148
        return Object.keys(fbData).map(key => { // 149 -> 150 posts.component.js
            // console.log(key);
            const item = fbData[key]; // 153
            // console.log(item);
            item.id = key; // 154
            // console.log(item);
            return item // 155 -> 156 posts.component.js
        })
    }
} 