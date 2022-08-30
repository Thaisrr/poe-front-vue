<template>
  <h1>Vue JS</h1>

  <Presentation/>

  <footer>
    Dawan - Vue Initiation - 2022
  </footer>
</template>


<script>
import Presentation from './components/Presentation';

 export default {
    name: "App",
    components: { Presentation}
}
</script>


<style>
  #app {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
