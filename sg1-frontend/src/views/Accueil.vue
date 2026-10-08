<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()

let sauvegarde = ref(0);
console.log("test sauvegarde = ", sauvegarde.value);

function play() {
    sauvegarde.value = 1;

    // Logique de redirection : on pousse le joueur vers la route nommée 'Jeu'
    router.push({ name: 'Jeu' })
}

function options() {
    // Logique pour ouvrir les options plus tard
}

function load() {
    console.log("Chargement de la partie...");

    router.push({ name: 'Jeu' })
}

const boutonBloque = computed(() => {
    if (sauvegarde.value === 0) {
        return true
    }

    else return false
})



</script>

<template>

    <h1 id="titreacceuil">Acceuil test</h1>



    <section id="menu1" v-if="sauvegarde == 0">
        <h1>SMECTA</h1>
        <button class="jouer" @click="play">Commencer le jeu</button>
        <button class="options" @click="options">Options</button>
    </section>

    <section id="menusave" v-else>
        <button :disabled="boutonBloque" class="continuer" @click="load">Continuer</button>
        <button class="newgame" @click="play">Nouvelle partie</button>

    </section>
</template>
