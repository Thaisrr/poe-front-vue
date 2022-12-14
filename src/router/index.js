import {createRouter, createWebHistory} from "vue-router";
import Presentation from "@/pages/Presentation";
import Directives from "@/pages/Directives";
import Router from "@/pages/Router";
import Watchers from "@/pages/Watchers";
import Communication from "@/pages/Communication";
import Library from "@/pages/Library";
import Formulaires from "@/pages/Formulaires";
import Composition from "@/pages/CompositionAPI";
import Requests from "@/pages/Requests";


const router = createRouter({
    routes: [
        {path: '/presentation', name: 'pres', component: Presentation},
        {path: '/directives', name: 'directives', component: Directives},
        {path: '/router', name: 'router', component: Router},
        {path: '/watch', name: 'watch', component: Watchers},
        {path: '/com', name: 'com', component: Communication},
        {path: '/library', name: 'lib', component: Library},
        {path: '/formulaires', name: 'form', component: Formulaires},
        {path: '/composition', name: 'compo', component: Composition},
        {path: '/requests', name: 'req', component: Requests}
    ],
    history: createWebHistory()
});

export default router;