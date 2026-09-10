// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './views/Accueil.vue'
import Jeu from './views/Jeu.vue'

const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/jeu',
        name: 'Jeu',
        component: Jeu
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router