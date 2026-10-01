<script>
let sauvegarde = 0;
</script>
<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/jeu">Jeu</router-link>

    </nav>
    <Accueil />

    <router-view />

  </div>

  <section>
  </section>



</template>
