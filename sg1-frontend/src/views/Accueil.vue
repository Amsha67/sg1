<script>
let sauvegarde = "0";
console.log("test", sauvegarde);
export default {
    name: 'Accueil'
}
</script>

<template>
    <div>
        <h1>TEST</h1>
        <p>Le monde du jeu s'affichera ici</p>
    </div>

    <section id="menu1" v-if="sauvegarde == '0'">
        <h1>SMECTA</h1>
        <!-- <button class="jouer" @click="play" ()>Commencer le jeu</button>
        <button class="options" @click="options" ()>Options</button> -->
    </section>
</template>



<!-- <template>




    <section id="menusave" v-if="sauvegarde > 0">
        <button class="continuer" @click="load" ()>Continuer</button>
        <button class="newgame" @click="play" ()>Nouvelle partie</button>

    </section>


</template>



<script>
export default {
    name: 'Accueil'
}



function play() {

    sauvegarde = 1;

}


</script> -->
