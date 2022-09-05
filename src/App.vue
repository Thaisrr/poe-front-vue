<template>
  
  <Navigation/>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    Dawan - Vue Initiation - 2022
  </footer>
</template>


<script>
import Navigation from './components/Navigation.vue';

export default {
    name: "App",
    components: { Navigation }
}
</script>





<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat+Alternates&display=swap');
:root {
  --dark: #011627ff;
  --main-lighter: #41ead4ff;
  --main: #1d6a61;
  --light: #fdfffcff;
  --secondary: #ef233cff;
  --tertiary: #ff9f1cff;
  --main-font: 'Montserrat', sans-serif;
  --title-font: 'Montserrat Alternates', sans-serif;
}
  #app {
    font-family: Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--main-font);
    color: var(--dark);
  }

  main {
    width: 80%;
    margin: 50px auto;
  }

  h1, h2, h3 {
    font-family: var(--title-font);
  }

  h1 {color: var(--main)}

  h2 {color: var(--secondary)}

  h3 { color: var(--tertiary)}



</style>
