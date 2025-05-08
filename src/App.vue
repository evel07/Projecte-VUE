<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Estils globals */
/* App.vue o styles.css */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: black; /* o el color principal */
}
</style>
