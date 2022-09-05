<template>
  <h1>Les directives</h1>

  <p>Les directives sont des attributs HTML propres à VueJS. Elles sont préfixées par v-</p>
  <p>Le but est d'ajouter un comportement à la balise pour simplifier le code.</p>

  <h2>Affichage Conditionnel</h2>

  <h3>Dans le texte : le ternaire</h3>
  <button @click="login()">
    {{ (is_logged)? 'Déconnexion' : 'Connexion' }}
  </button>

  <p>
    On peut utiliser du ternaire si on veut simplement afficher un texte ou un autre dans une balise,
    à la condition que ce texte soit court.
  </p>

  <h3>V-show</h3>

  <div v-show="is_logged">
    <p>Bienvenue Jean Michel</p>
    <p>Vous êtes connecté depuis 356 secondes</p>
    <p><small>Du bla bla....</small></p>
  </div>

  <h3>V-if</h3>

  <p>Comme en Algo, lorsqu'on fait un if : </p>
  <ul>
    <li>Le if est obligatoire, et se met en premier</li>
    <li>On peut mettre entre 0 et N else-if, à la suite du if, tout de suite après</li>
    <li>On peut mettre 0 ou 1 else, à la toute fin</li>
  </ul>
  <p>On entrera uniquement dans la première condition qui est vrai, et pas dans les autres.</p>

  <p>
    <button @click="changeRole('ADMIN')">ADMIN</button>
    <button @click="changeRole('MODO')">Modo</button>
    <button @click="changeRole('Toto')">Toto</button>
    <button @click="changeRole('Nope')">Nope</button>
  </p>

  <div v-if="is_logged && role === 'ADMIN'">
      <p>Dashboard Admin</p>
  </div>

  <div v-else-if="is_logged && role === 'MODO'">
      <p>Dashboard Modérateur.trice</p>
  </div>

  <div v-else-if="is_logged">
    <p>Dashboard User</p>
  </div>

  <div v-else>
    <p>Vous n'êtes pas connecté.e :(</p>
  </div>


  <h3>V-show vs v-if</h3>

  <p>Le v-if est plus complet que le v-show, puisqu'il propose des conditions alternatives avec les
  v-else-if, et une solution par défaut avec v-else.
  </p>
  <p>
    Le v-show est plus performant : il va simplement changer le display de l'élément.
  </p>
  <p>Le v-if, et tous ses elses vont créer et détruire les éléments en fonction des conditions,
  il est donc plus gourmand.
  </p>
  <p>Pour les conditions simples, ou si la condition est amenée à beaucoup changer, il vaut
  mieux utiliser le v-show.
  </p>
  <p>Pour des conditions plus complexes, ou si les changements sont rare ( 1 fois au chargement de la page ),
  on peut utiliser le v-if.
  </p>


<h2>Rendu de listes</h2>

<ul>
  <li v-for="plat in food" :key="plat">{{plat}}</li>
</ul>

  <div class="grid">
    <div v-for="(b, index) in boissons" :key="b.id + 'b'">
      <h4>{{ b.name }}  {{ b.gout }}</h4>
      <p>Index dans la liste : {{index}}</p>
    </div>
  </div>

  <div v-for="i in 10" :key="i + 'c' " >Faîtes {{i}} pompe(s) !</div>

  <div>
    <h4>User : </h4>
    <ul>
      <li v-for="(value, prop) in user" :key="prop">{{prop}} : {{value}}</li>
    </ul>
  </div>

  <h2>Autres directives</h2>

  <h3>V-text </h3>
  <p v-text="role"></p>
  <!-- equivalent de <p>{{role}}</p> -->

  <p v-pre>V-pre : equivalent de la balise "pre" en HTML, qui permet d'afficher du texte preformaté.
  ça permet notamment d'afficher des {{ balises moustaches }} en dur
  </p>

  <p>{{span}}</p>
  <p v-html="span"></p>
  <p><span>Un span dans le template</span></p>

  <p v-once>{{ is_logged? 'Vous êtes connecté.e' : 'Connectez-vous !' }}</p>


  <p>On ne peut pas utiliser 2 directives sur une même balise</p>


  <template v-if="is_logged">
    <p v-for="i in 10" :key="i">Paragraphe numéro {{i}}</p>
  </template>

  <template v-if="is_logged">
    <template v-for="i in 10" :key="i">
      <p v-if="i % 2 === 0">Paragraphe numéro {{i}}</p>
    </template>
  </template>

</template>

<script>
  export default {
    name: 'DirectivesComponent',
    data: function () {
      return {
        span: '<span style="color: forestgreen">Raw HTML</span>',
        is_logged: true,
        role: 'ADMIN',
        food: ['Bagels', 'Pizza', 'Pâtes', 'Burger', 'Salade'],
        boissons: [
          {id: 0, name: 'Maytea', gout: 'Framboise'},
          {id: 1, name: 'Maytea', gout: 'Menthe'},
          {id: 2, name: 'Schewppes', gout: 'Agrume'},
          {id: 3, name: 'Coca', gout: 'Cherry'},
        ],
        user: { name: 'Jean Michel', age: 136, job: 'Mage Noir' }
      }
    },
    methods: {
      login() { this.is_logged = !this.is_logged},
      changeRole(new_role) {
        this.role = new_role;
      }
    }
  }

</script>

<style scoped>

/* Ne s'applique sur le span affiché en v-html que si le style n'est pas scoped */
span {
  background: orange;
}

</style>