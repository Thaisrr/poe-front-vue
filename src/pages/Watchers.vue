<template>
  <h1>Surveiller les données</h1>

  <h2>Modifier les données</h2>

  <p>V-model : pour lier la valeur d'un champs de formulaire avec celle d'une data.</p>
  <p>
    <label for="msg">Message</label>
    <input id="msg" v-model="message"/>
  </p>
  <p>{{message}}</p>

  <p>
    <label for="msg">Message</label>
    <input id="msg" v-model="message2"/>
  </p>
  <p>{{message2}}</p>

  <h2>Computed : propriétés calculées</h2>

  <p>{{ getTitledMessage() }}</p>

  <p>{{titled}}</p>

  <p>Les computed sont des fonctions qui retournent une valeur calculée à partir d'une autre autre valeur
  du composant ( data ).
  </p>
  <p>
    Les fonctions computed ne peuvent pas avoir de paramétres, elles se basent uniquement sur la data surveillée.
  </p>
  <p>
    Les fonctions computed doivent obligatoirement retournée (return) quelque chose.
  </p>
  <p>
    Dans le template, on l'utilise comme une data, sans les parenthèses.
  </p>


  <p>Nom :</p>
  <p>{{name}}</p>

  <p>
    Il ne faut pas modifier les computed !
    Ce sont des données en lecture seule, sauf si on passe par des getters et des setters.
  </p>

  <p>Restos ouverts : </p>
  <ul>
    <li v-for="resto of opened_resto" :key="resto.name">{{resto.name}}</li>
  </ul>

  <h2>Watchers</h2>

  <p>Attribut watch</p>
  <p>Les watchers permettent d'agir, de jouer une fonction lorsqu'une valeur surveillée est modifiée.</p>
  <p>Ils se jouent à chaque modifications.</p>
  <p>Ce sont des méthodes / fonctions dont le nom doit correspondre lettre pour lettre à celui de la valeur
  ( de data ) qu'on surveille.</p>
  <p>Cette fonction peut prendre en premier paramétre la nouvelle valeur, et en second, l'ancienne valeur,
  avant modification.</p>
  <p>Les fonctions des watchers ne retournent rien ( pas de "return" )</p>
  <p><b>Attention, il vaut mieux garder ( pour l'instant ) les watchers pour des valeurs primitives
  (booleans, string, numbers, undefined, ... ), mais pas les tableaux, ni les objets.
  </b></p>
  <p>D'autres options plus poussées sont dispos dans la doc.</p>


</template>

<script>
export default {
  name: "WatchersComponent",
  data: function () {
    return {
      message: 'BoNjour le MOnde',
      message2: 'Message 2',
      firstname: 'Jean Michel',
      lastname: 'LaTourte',
      foods: [
        {name: 'Pitaya', open: true},
        {name: 'Subway', open: false},
        {name: 'Big Fernand', open: true},
        {name: "P'tite Poutine", open: false},
      ]
    }
  },
  methods: {
    getTitledMessage() {
      console.log('------Coucou from methode getTitleMessage');
      return this.message.trim().charAt(0).toUpperCase() + this.message.trim().slice(1).toLowerCase();
    }
  },
  computed: {
    titled() {
      console.log('------Coucou from computed message');
      return this.message.trim().charAt(0).toUpperCase() + this.message.trim().slice(1).toLowerCase();
    },
    name: function() {
      return this.firstname + ' ' + this.lastname.toUpperCase();
    },
    opened_resto() {
      return this.foods.filter(resto => resto.open)
    }
  },
  watch: {
      message2() {
        console.log('Message 2 à été modifié');
      },
      message(new_value, old_value) {
        // Premier paramétre des watch, c'est la nouvelle valeur de la donnée surveillée,
        // Deuxième paramétre: ancienne valeur
        console.log(`${new_value}  => ${old_value}`)
      }
  }

}
</script>

<style scoped>

</style>