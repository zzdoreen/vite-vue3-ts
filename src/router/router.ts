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
        // {
        //     path: '/index',
        //     component: () => import('@/components/HelloWorld.vue')
        // },

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
            path: '/papercss',
            name: 'papercss',
            redirect: '/papercss/test-1', // 带子路由的话必填
            component: () => import('@/components/Papercss.vue'),
            children: [
                {
                    path: 'test',
                    name: 'test',
                    component: () => import('@/components/Papercss/Indexs.vue')
                },
                {
                    path: 'test-1',
                    name: 'test-1',
                    component: () => import('@/components/Papercss/Index.vue')
                },
            ]
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