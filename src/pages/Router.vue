<template>
  <h1>Vue Router</h1>

  <h2>Installation</h2>

  <p>Installer la librairie : <code>npm i vue-router</code></p>

  <p>Configurer le router :</p>
  <ul>
    <li>Créer un dossier "router", dans lequel on met un fichier index.js</li>
    <li>Dans le fichier index, on créé le router avec la fonction <code>createRouter()</code>, qui s'importe de <i>vue-router</i> </li>
    <li>En paramétre de cette fonction, on passe un objet de configurations, qui contient :
      <ul>
        <li>routes : un tableau qui décrit les routes : les chemins, et les composants qu'ils visent.</li>
        <li>history : </li>
      </ul>
    </li>
    <li>On exporte le tout.</li>
    <li>Dans <b>main.js</b>, on à dit vue d'utiliser le router : <code>app.use(router)</code>, router étant importé du fichier créé précédemment.</li>
    <li>Dans <b>App.js</b>, on place la balise {{ "<"}}router-view{{">"}} à l'endroit où on souhaite charger les vues.</li>
  </ul>

  <h2>A savoir :</h2>

  <p>
    Pour plus de clareté dans le projet, on divise les composants en plusieurs dossiers : les pages dans un dossier <b>pages</b> ou <b>views</b>,
  et les autres composants dans le dossier <b>component</b>
  </p>
  <p>
    Les liens se font avec des balises router-link, qui ont un attribut <b>to</b>, dans lequel on passe le chemin / le path.
  </p>

  <h2>Process</h2>

  <p>A la création d'une nouvelle page : </p>
  <ul>
    <li>Dans router/index.js, on déclare la route :
      <ul>
        <li>path : le chemin qui sera utilisé pour y accéder, pour faire un lien, et visible dans l'url.
          C'est une string en minuscules, sans espaces, qui commence par /
        </li>
        <li>
          component: le composant qui doit être chargé quand on va sur le chemin. Attention à bien importer le composant.
        </li>
        <li>
          name: un alias pour accéder à la route plus facilement
        </li>
      </ul>
    </li>
  </ul>

  <p>Dans un import, le from "" fait référence au fichier, donc l'orthographe doit être la même que celle du fichier et de ses dossiers parents.</p>
  <p>La première partie de l'import : <code>import Toto</code> correspond à la variable qui contient la donnée de l'import ( ici, le composant.)
  Comme pour une variable classique, elle peut avoir n'importe quel nom, tant qu'on utiliser bien ce même nom plus tard dans le fichier quand on y
    fait référence.
  </p>
  <p>Par convention, les imports de composant, ou d'objets commencent par une majuscule.</p>

  <h2>La suite au prochain épisode</h2>


</template>

<script>
  export default {
    name: 'RouterComponent'
  }
</script>