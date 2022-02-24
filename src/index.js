import { HeaderComponent } from './components/header.component'
import { NavigationComponent } from './components/navigation.component'
import { CreateComponent } from './components/create.component'
import { PostsComponent } from './components/posts.component'
import { FavoriteComponent } from './components/favorite.component'
import { LoaderComponent } from './components/loader.component'

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader') // 167 

const posts = new PostsComponent('posts', { loader }) // 168 добавим объект loader -> 169 posts.component.js
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite', { loader })

navigation.registerTabs([ // 43
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])