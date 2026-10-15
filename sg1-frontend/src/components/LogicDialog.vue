<template>
    <div>
        <h1>Jeu</h1>
        <p>Test de Dialog</p>
    </div>

    <canvas ref="canva" width="1280" height="720" @click="suivant"></canvas>

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { joueurService } from '../services/joueur.js'

const canva = ref(null)
const joueur = joueurService.charger(
    nomPerso,
    deguisement
)

const dialogues = [
    "Bonjour, je suis " + joueurService.nomPerso + "  dialogue dans le jeu !",
    "Ce dialogue est beaucoup plus long que les autres, il ne tient pas dans la boîte alors il est coupé en plusieurs morceaux.",
    "Voilà, un autre dialogue.",
    "Et voici un autre dialogue pour tester le découpage en morceaux. Il est encore plus long que le précédent, et il contient beaucoup de mots pour vérifier que le découpage fonctionne correctement. Nous allons voir si tout s'affiche bien dans la boîte de dialogue."
]



// on coupe les dialogues trop longs en morceaux de 70 caracteres max
const morceaux = []

function couper(texte) {
    const mots = texte.split(' ')
    let morceau = ''

    for (const mot of mots) {
        if ((morceau + ' ' + mot).length > 70) {
            morceaux.push(morceau)
            morceau = mot
        } else {
            morceau = (morceau + ' ' + mot).trim()
        }
    }
    morceaux.push(morceau)

    // nombre impair de lignes : on ajoute une ligne vide
    // pour que le dialogue suivant commence dans une nouvelle boite
    if (morceaux.length % 2 === 1) {
        morceaux.push('')
    }
}

for (const dialogue of dialogues) {
    couper(dialogue)
}

let index = 0 // le morceau affiche

function dessinerDialog(ctx, largeur, hauteur) {
    // Dimensionner dialog
    const marge = largeur * 0.02
    const boiteHauteur = hauteur * 0.15
    const boiteX = marge
    const boiteY = hauteur - boiteHauteur - hauteur * 0.03
    const boiteLargeur = largeur - marge * 2

    // forme de la boite avec des bords arrondis (20 = taille de l'arrondi)
    ctx.beginPath()
    ctx.roundRect(boiteX, boiteY, boiteLargeur, boiteHauteur, 3)

    // fond de la boite
    ctx.fillStyle = 'white'
    ctx.fill()

    // bordure de la boite
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 3
    ctx.stroke()

    // texte dans la boite
    ctx.fillStyle = 'black'
    ctx.font = '28px sans-serif'
    ctx.textBaseline = 'middle'
    ctx.fillText(morceaux[index], boiteX + 40, boiteY + boiteHauteur / 3)
    ctx.fillText(morceaux[index + 1], boiteX + 40, boiteY + boiteHauteur * 2 / 3)

    // "Suivant" s'il reste des lignes
    if (index + 2 < morceaux.length) {
        ctx.font = '20px sans-serif'
        ctx.fillText('Suivant', boiteX + boiteLargeur - 100, boiteY + boiteHauteur - 20)
    }
}

function dessiner() {
    const ctx = canva.value.getContext('2d')
    const largeur = canva.value.width
    const hauteur = canva.value.height

    //fond de l'ecran de jeux
    ctx.fillStyle = 'lightblue'
    ctx.fillRect(0, 0, largeur, hauteur)
    dessinerDialog(ctx, largeur, hauteur)
}

function suivant() {
    if (index + 2 < morceaux.length) {
        index += 2
        dessiner()
    }
}

onMounted(dessiner)
</script>
