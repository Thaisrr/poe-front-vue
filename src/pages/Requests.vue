<template>
  <h1>Requêtes HTTP</h1>

  <p>Installer Axios : <code>npm i axios</code></p>

  <h2>Personnages</h2>

  <p>
    <input v-model="id" type="number" min="1">
    <button @click="getCharacter()">Load Character</button>
  </p>

  <div v-if="perso">
    <h3>{{perso.name}}</h3>
    <ul>
      <li>Taille : {{perso.height}}</li>
      <li>Cheveux : {{perso.hair_color}}</li>
    </ul>
  </div>
  <p v-else-if="error">{{error}}</p>
  <p v-else>Appuyez pour charger un personnage</p>

  <h2>Users</h2>

  <ul>
    <li v-for="u of users" :key="u.id">{{u.name}}</li>
  </ul>

  <p>
    <input v-model.trim="new_user"/>
    <button @click="createUser()">Créer un user</button>
  </p>
</template>

<script>
import axios from 'axios';
export default {
  name: "RequestsComponent",
  data: () => ({
    perso: undefined,
    api: 'https://swapi.dev/api/people',
    id: 1,
    error: '',
    users: [],
    new_user: ''
  }),
  methods: {
    getCharacter() {
      this.error = '';
      axios.get(`${this.api}/${this.id}`)
          .then(response => this.perso = response.data )
          .catch(err => {
            this.perso = undefined;
            this.error = `😢 ${err.response.status} : ${err.message}`
          })
    },
    getUsers() {
      axios.get('http://localhost:3000/users')
          .then(response => this.users = response.data)
    },
    createUser() {
      // Utilisateur à créer via un formulaire,
      const user = {name: this.new_user};
      axios.post('http://localhost:3000/users', user)
          .then(response => {
            console.log("Utilisateur.trice créé.e : ", response.data);
            this.getUsers(); // pour recharger les données
          })
          .catch(err => console.log(`Oups, quelque chose s'est mal passé : ${err.message}`))
    }

  },
  mounted() {
    this.getUsers();
  }

}
</script>

<style scoped>

</style>