import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        redirect: 'demo',
    },{
        path: '/demo',
        name: 'demo',
        component: ()=>import('../views/demo/index.vue')
    }]
})
export default router