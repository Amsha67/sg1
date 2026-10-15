// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './views/Accueil.vue'
import CreationPerso from './views/CreationPerso.vue'
import Prologue from './views/Prologue.vue'

const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/creation',
        name: 'Creation',
        component: CreationPerso
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