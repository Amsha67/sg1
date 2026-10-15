<script setup>

</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/creation">Creation personnage</router-link>
    </nav>

    <!-- Gère l'affichage des pages -->
    <router-view />
  </div>
</template>