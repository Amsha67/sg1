<script setup>
import { ref } from 'vue'

let sauvegarde = ref(0);
console.log("test", sauvegarde.value);

function play() {
    sauvegarde.value = 1;
}


</script>

<template>

    <h1 id="titreacceuil">Acceuil test</h1>



    <section id="menu1" v-if="sauvegarde == 0">
        <h1>SMECTA</h1>
        <button class="jouer" @click="play">Commencer le jeu</button>
        <button class="options" @click="options">Options</button>
    </section>

    <section id="menusave" v-else>
        <button class="continuer" @click="load">Continuer</button>
        <button class="newgame" @click="play">Nouvelle partie</button>

    </section>
</template>
