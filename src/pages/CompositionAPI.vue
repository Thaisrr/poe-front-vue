<template>
  <h1>Composition API</h1>

  <h2>Compteur</h2>
  <p>Valeur : {{count}}</p>
  <p>Doublée : {{count_doubled}}</p>
  <button @click="increment()">++</button>
</template>

<script setup>
import {computed, ref, defineProps, reactive} from "vue";

let count = ref(0);
let state = reactive({count: 0, message: 'Coucou'});
//const message = 'Hello World';

const props = defineProps({
  foo: String,
  bar: Number
});


function increment() {
  count.value++;
  console.log('Compteur : ', count.value);
  console.log('Props : ', props)
  console.log('Reactive : ', state.message)
}

const count_doubled = computed(() => count.value * 2);

</script>

<style scoped>

</style>