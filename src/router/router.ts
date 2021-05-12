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
            redirect: '/papercss/diary', // 带子路由的话必填
            component: () => import('@/components/Papercss.vue'),
            children: [
                {
                    path: 'article',
                    name: 'article',
                    component: () => import('@/components/Papercss/Article.vue')
                },
                {
                    path: 'diary',
                    name: 'diary',
                    component: () => import('@/components/Papercss/Diary.vue')
                },
                {
                    path: 'one',
                    name: 'one',
                    component: () => import('@/components/Papercss/One.vue')
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