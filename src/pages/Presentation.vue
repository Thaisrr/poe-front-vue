<template>
    <h1>Présentation</h1>

    <section>
        <h2>Les composants</h2>
        <p>Les composants se crééent dans un fichier .vue, on les appelle des <strong>Single File Components</strong></p>
        <p>Les composants sont divisés en trois parties : </p>
        <ul>
            <li>Le template: qui accepte la syntaxe HTML5,</li>
            <li>Le script : un objet qui décrit le composant, et qui est exporté,</li>
            <li>Le style, qui peut prendre un attribut "scoped", qui permet de cloisonné le style dans le composant.</li>
        </ul>


        <p>On peut imbriquer des composants les uns dans les autres, le composant parent doit intégrer : </p>
        <ul>
            <li>L'import, en haut du script, pour récupérer le composant enfant, et l'enregistrer dans une variable</li>
            <li>La déclaration, dans l'objet parent, dans un attribut <i>components</i></li>
            <li>L'utilisation, dans le template, de la balise du composant.</li>
        </ul>
    </section>

    <section>
        <h2>Interpolation</h2>

        <p>1 + 1 = {{ 1 + 1 }}</p>
        
        <p>{{ message }}</p>
        <p>{{ message.toUpperCase()  }}</p>
        <p>{{ span }}</p>

    </section>

    <section>
        <h2>Attribute Binding</h2>

        <!-- Chaîne de caractère "toto"-->
        <p class="toto">{{ma_classe}}</p>

        <!-- Valeur de la variable "ma_classe" -->
        <p v-bind:class="ma_classe">J'ai la classe "toto"</p>

        <p>Tous les attributs HTML existants peuvent être préfixés par v-bind:, ce qui leur permet
        d'interpréter du JS.      
        </p>

        <p  :class="ma_classe">On peut le raccourcir en <b>:</b>   -> :class au lieu de v-bind:class</p>

        <button :disabled="is_disabled">Ne cliquez pas ici !</button>

    </section>

    <section>
        <h2>Les styles</h2>

        <p :style="{background: 'aliceblue', fontSize: '20px' }">On peut passer du style de manière dynamique avec le v-bind.</p>
        <p :style="{fontSize: size + 'px'}">Les propriétés CSS en 2 mots s'écrivent en cameCase ( et plus en kebab-case comme en CSS) : font-style => fontStyle.</p>
        <p :style="style">L'objet style se compose du nom de la propriété : valeur en string.</p>
        <p class="colored">On peut également binder des propriétés vers le css</p>

    </section>

    <section>
        <h2>Les classes</h2>

        <p :class="ma_classe">Une seule classe dynamique</p>
        
        <p>On peut passer par un ternaire pour passer une classe ou une autre en fonction d'une condition : </p>
        <p>(Si le boolean 'has_error' est true, l'input à la classe 'error', sinon, il aura la classe 'valid')</p>
        <input :class="(has_error)? 'error' : 'valid'"/>
        <!-- (condition)? 'valeur si condition vrai'  : 'valeur si condition fausse' -->

        <p>La classe "error" ne sera mise sur l'input que si le boolean / la condition "has_error" est vrai</p>
        <input class="static fsjqkljfdsklfjdslfjdsl" :class="{error: has_error, active: true}"/>

        <p v-bind:class="['classe1', ma_classe, {error: has_error}, 'classe3']">Les classes bindées peuvent aussi être un tableau : </p>
    </section>
    
    <section>
        <h2>Les évenements</h2>

        <p>
            <button v-on:click="sayHello()">Être poli(e)</button>
            <button @click="sayHello">Être poli(e)</button>
        </p>

        <p @dblclick="clickParent()">
            Les évenements sont les mêmes qu'on HTML5 : on enlève juste le "on" qui préfixe leur nom.
            <button @dblclick.stop="clickEnfant()">Click Click</button>
        </p>

        <form @submit.prevent="handleSubmit()">
            <p>
                <label for="mail">Email</label>
                <input @keyup.up="handleKeyUp()" @keypress.ctrl.enter.once="handleCtrlEnter()" id="mail" type="email"/>
            </p>
            <button>Save</button>
        </form>

        <p>
            <button @click="toggleError()">
                {{ (has_error)? 'Marquer comme valide' : 'Mettre en erreur' }}
            </button>
        </p>

    </section>





    <!--
        Normes d'écriture : 

        kebab-case
        camelCase
        PascalCase
        snake_case
    -->


    <section>
        <h2>Directives Vue</h2>
        
        <p v-html="span"></p>
    </section>


</template>

<script>

   export default {
    name: 'PresentationComponent',
    data: function() {
        return {
            message: `Vue c'est trop génial !`,
            span: `<span class='coucou'>Hello World</span>`,
            ma_classe: 'toto',
            is_disabled: true,
            size: 20,
            style: {color: 'rebeccapurple', fontSize: `20px`},
            my_color: 'blue',
            has_error: true
        }
    },
    methods: {
        sayHello: function() {
            console.log('Hello !')
        },
        clickParent: function() {
            console.log('Double click dans le parent (p)')
        },
        clickEnfant: function() {
            console.log('Double click dans l\'enfant (button)')
        },
        handleSubmit: function() {
            console.info('Sauvegarde du form')
        },
        handleKeyUp: function() {
            console.warn('UP !')
        },
        handleCtrlEnter: function() {
            console.warn('Ctrl + Entrée')
        },
        toggleError: function() {
            this.has_error = !this.has_error;
         /*   if(this.has_error) {
                this.has_error = false
            } else {
                this.has_error = true
            }
            */
        }
    }
   }   
</script>

<style scoped>
    .colored, .toto {
        color: v-bind(my_color);
    }

    .error {
        border: solid red 1px;
    }

</style>