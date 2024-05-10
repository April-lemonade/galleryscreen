import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/hotartwork',
        name: 'hot_artwork',
        component: () => import('../HotArtwork.vue')
    },
    {
        path: '/main',
        name: 'mainPage',
        component: () => import('../main.vue')
    },
    {
        path: '/popularroute',
        name: 'popularRoute',
        component: () => import('../PopularRoute.vue')
    }, {
        path: '/testView',
        name: 'testView',
        component: () => import('../testView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router