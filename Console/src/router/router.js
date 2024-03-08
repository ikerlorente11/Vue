import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import Characters from '../pages/Characters.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/users',
            name: 'Users',
            component: Users
        },
        {
            path: '/characters',
            name: 'Characters',
            component: Characters
        },
    ]
})

export default router