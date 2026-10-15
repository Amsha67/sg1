<script setup>

import dialogues from '../components/LogicDialog.vue'
import { joueurService } from '../services/joueur.js';

const joueur = joueurService.charger()
console.log(joueur)
</script>

<template>

    <dialogues> </dialogues>

</template>