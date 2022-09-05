<template>
  <h1>Communication entre les composants</h1>

  <EnfantComponent name="Charentaises en chanvre" price="cent"/>
  <EnfantComponent name="Charentaises en Lin bio"/>
  <EnfantComponent name="Escarpins en jute" :price="-100"/>
  <EnfantComponent :name="product" :price="product_price" />
  <EnfantComponent :name="article.name" :price="article.price" @add-promo="handlePromo"/>
</template>

<script>
import EnfantComponent from "@/components/Enfant";
export default {
  name: "CommunicationComponent",
  components: {EnfantComponent},
  data: function () {
    return {
      product: 'Mules en Acajou',
      product_price: 96,
      article: {name: 'Crocs Roses fluo', price: 58}
    }
  },
  methods: {
    handlePromo(promo) {
      this.article.price = promo;
    }
  }
}
</script>

<style scoped>

</style>