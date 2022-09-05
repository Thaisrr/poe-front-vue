<template>
  <div class="card">
    <p>{{name}}</p>
    <p>-- {{price}}€ HT</p>
    <p>-- {{ taxe_price }}€ TTC</p>
    <button @click="createPromo()">Créer une Promo</button>
  </div>
</template>

<script>
export default {
  name: "EnfantComponent",
  //props: ['name', 'price'],
  props: { // String, Number, Boolean, Undefined, Array, Object, Function, Promise
    name: String,
    price: {
      type: Number,
      default: 0,
      required: false,
      //validator: (value) => value >= 0
      validator(value) {
        return value >= 0
      }
    },
    info: {
      type: Object,
      default: () => ({toto: 'objet par défaut'})
    }
  },
  methods: {
    createPromo() {
        const promo = this.price * 0.8;
        this.$emit('add-promo', promo);
        // 1er param : nom de l'événement créé
      // 0 à N paramétres suivant : valeurs au choix
    }
  },
  computed: {
    taxe_price() {
      return Math.round(this.price * 1.2);
    }
  }
}
</script>

<style scoped>
.card {
  padding: 20px;
  border: solid gray;
}
</style>