<template>
  <h1>Librairie</h1>

  <div class="grid">
    <BookComponent v-for="b in books" :key="b.id" :book="b" @delete="deleteBook" />
  </div>
</template>

<script>
import BookComponent from "@/components/Book";
export default {
  name: "LibraryComponent",
  components: {BookComponent},
  data: function () {
    return {
      books: [
        {id: 0, title: 'Frankenstein', author: 'Mary Shelley'},
        {id: 2, title: `L'Assassin Royal`, author: 'Robin Hobb'},
        {id: 3, title: `La passe Miroir`, author: 'Christelle Dabos'},
        {id: 4, title: 'Vernom Subutex', author: 'Virginie Despente'},
        {id: 5, title: 'Le Passeur', author: 'Loïs Lauwrence'},
      ]
    }
  },
  methods: {
    deleteBook(book) {
        const index = this.books.indexOf(book);
        this.books.splice(index, 1);
    }
  }
}
</script>

<style scoped>
  .grid {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: 50px auto;
    flex-wrap: wrap;
  }
</style>