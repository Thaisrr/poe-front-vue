<template>
  <div class="card">
    <h4>{{book.title}}</h4>
    <p><i>{{book.author}}</i></p>
    <p>
      <button @click="deleteBook()">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "BookComponent",
  props: {
    book: Object
  },
  methods: {
    deleteBook: function () {
        this.$emit('delete', this.book)
    }
  }
}
</script>

<style scoped>
  .card {
    padding: 20px;
    border: solid gray;
    box-shadow: 2px 2px darkgray;
    border-radius: 5px;
  }
</style>