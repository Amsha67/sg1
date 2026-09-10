<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/jeu">Jeu</router-link>

    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

router-link {
  cursor: pointer;
  text-decoration: none;
  color: blue;
}

router-link.router-link-active {
  font-weight: bold;
  color: red;
}
</style>