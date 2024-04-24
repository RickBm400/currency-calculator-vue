import { createRouter, createWebHistory   } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('pages/Layout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/Landing.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router