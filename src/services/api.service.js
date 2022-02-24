class ApiService { // 112
    constructor(baseUrl) { // 114
        this.url = baseUrl // 115
    }

    async createPost(post) { // 116
        try { // 121
            const request = new Request(this.url + '/posts.json', { // 118 // Для firebase чтобы формат информации был json, добавляем .json
                method: 'post', // 119
                body: JSON.stringify(post) // 120
            })
            // const response = await fetch(request) // 117
            // return await response.json() // 123
            return useRequest(request) // 145
        } catch (error) { // 122
            console.error(error)
        }
    }
    async fetchPosts() { // 135
        try { // 136
            const request = new Request(`${this.url}/posts.json`, { // 139
                method: 'get' // 140 get идет по умолчанию, но все же укажем
            }) 
            // const response = await fetch(request) // 141
            // return await response.json() // 142
            return useRequest(request) // 144 -> 145 posts.component.js
        } catch (error) { // 137
            console.error(error) // 138
        }
    } 

    async fetchPostById(id) { // 204
        try { // 205
            const request = new Request(`${this.url}/posts/${id}.json`, { // 206
                method: 'get' // 207
            }) 
            return useRequest(request) // 208
        } catch (error) { // 209
            console.error(error) // 210 -> 211 favorite.component.js
        }
    } 
}

async function useRequest (request) { // 143 создаем функцию для requst запросов, потому что повторяется
    const response = await fetch(request) 
    return await response.json() 
}

export const apiService = new ApiService('https://js-native-blog-6218-default-rtdb.europe-west1.firebasedatabase.app'); // 113


