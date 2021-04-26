import { createRouter, createWebHashHistory } from 'vue-router'

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/Login.vue')
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
            path: '/color-hunt',
            name: 'colorhunt',
            component: () => import('@/components/ColorHunt.vue')
        },
        {
            path: '/animation',
            name: 'animation',
            component: () => import('@/components/Animation.vue')
        },
        {
            path: '/illustration',
            name: 'illustration',
            component: () => import('@/components/Illustration.vue')
        },
        {
            path: '/music',
            name: 'music',
            component: () => import('@/components/Music.vue')
        },
    ]
})

export default Router