import { createRouter, createWebHistory   } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('pages/DataCenter/layout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/DataCenter/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router