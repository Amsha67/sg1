<script>
import { ref, computed } from 'vue'


const nomPerso = ref("")
const regexInterdit = /[^A-Za-zÀ-ÿ\s\-]/ //si ce ne sont pas des lettres, espace ou tiret , c'est interdit
const nomVide = ""
var deguisement = ref(0)
const listeCostumes = ['Standard', 'Ninja', 'Magicien', 'Chevalier']

function suivant() {
    deguisement.value += 1
    if (deguisement.value === listeCostumes.length)
        deguisement.value = 0
}

function precedent() {
    deguisement.value - 1
    if (deguisement.value === listeCostumes.length - 1)
        deguisement.value = listeCostumes.length
}

// nom invalide si > à 15 caractères ou contient des caractères spéciaux
const nomInvalide = computed(() => {
    if (nomPerso.value.length > 15 || regexInterdit.test(nomPerso.value)) { return true }

    return false
})

// bloque le bouton si vide ou nom invalide
const boutonBloque = computed(() => {
    if (nomInvalide.value || nomPerso.value.length === 0) { return true }


    return false

})


</script>

<template>

    <h1 id="titreperso">Création du personnage</h1>

    <h2>Nom :</h2>
    <input class="choixnom" type="text" placeholder="Quel est ton nom  ?" v-model="nomPerso">
    <p v-if="nomInvalide">Le nom doit faire 15 caractères max et contenir uniquement des lettres</p>



    <h2>Déguissement</h2>

    <button class="precedent" @click="precedent">Précédent</button>
    <p></p>
    <button class="suivant" @click="suivant">Suivant</button>
    <br>
    <button clas="creeperso" :disabled="boutonBloque">Créer le personnage</button>



</template>
