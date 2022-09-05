<template>
  <h1>Les Formulaires</h1>

  <form @submit.prevent="handleSubmit()">
    <div>
      <label for="name">Titre</label>
      <input id="name" v-model.trim="book.name" @input="name_dirty = true"/>
      <small v-show="nameError" class="error">Veuillez entrer un titre à votre livre</small>
    </div>
    <div>
      <label for="author">Auteur.trice</label>
      <input id="author" v-model.trim="book.author" @input="author_dirty = true"/>
      <small class="error" v-show="authorError">Veuillez renseigner l'auteur.trice</small>
    </div>
    <p>
      <button :disabled="formError">Enregistrer</button>
    </p>
  </form>

</template>

<script>
export default {
  name: "FormulairesComponent",
  data: function () {
    return {
      book: {name: '', author: ''},
      name_dirty: false,
      author_dirty: false
    }
  },
  methods: {
    handleSubmit() {
      console.log(`name : "${this.book.name}", auteur.trice : "${this.book.author}"`);
    }
  },
  computed: {
    nameError: function () {
      return !this.book.name && this.name_dirty;
    },
    authorError: function () {
      return !this.book.author && this.author_dirty;
    },
    formError: function () {
      return !this.name_dirty || !this.author_dirty ||  this.nameError || this.authorError;
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>