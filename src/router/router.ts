import { createRouter, createWebHistory } from 'vue-router'

const Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/index',
            component: () => import('@/components/HelloWorld.vue')
        },

        {
            path: '/home',
            name: 'home',
            component: () => import('@/components/Home.vue')
        },
        {
            path: '/login',
            name: 'login',

            component: () => import('@/components/Login.vue')
        },
    ]
})

export default Router