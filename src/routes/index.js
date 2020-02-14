import Vue from 'vue';
import Router from 'vue-router';
import NovaTarefa from './../pages/novaTarefa';
import Tarefas from './../pages/tarefas';



Vue.use(Router);


const routes = [
    { path:'/', component: Tarefas },
    { path: '/nova-tarefa', component: NovaTarefa }
]


const router = new Router({
	mode: 'history',
	routes
});



export default router;