// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './views/Accueil.vue'
import Jeu from './views/Jeu.vue'
import Prologue from './components/Prologue.vue'

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
    {
        path: '/prologue',
        name: 'Prologue',
        component: Prologue
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router