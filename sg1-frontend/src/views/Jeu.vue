<script setup>
import CreationPerso from '../components/CreationPerso.vue'
import Prologue from '../components/Prologue.vue'
import dialogues from '../views/LogicDialog.vue'

console.log(dialogues, "plop")
</script>

<template>
    <div>
        <h1>Jeu</h1>


        <CreationPerso />
        <Prologue />

    </div>


</template>
