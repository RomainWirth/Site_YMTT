<template>
  <div id="app">
    <div class="image">
      <img src="./assets/Logo_YMTT_round.png" alt="" class="image__logo">
    </div>
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/taiji_quan">Taiji Quan</router-link> |
      <router-link to="/association_ymtt">Association Y.M.T.T.</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
