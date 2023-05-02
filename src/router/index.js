import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Formulario from '../components/Formulario.vue';
import Comentarios from '../views/Comentarios.vue';
import Catalogo from '../views/Catalogo.vue';
import Galeria from '../views/Galeria.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Catalogo
    },
    {
      path: '/galeria',
      name: 'imagenes',
      component: Galeria
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/formulario',
      name:'enviar',
      component: Formulario
    },
    {
      path:'/comentarios',
      name:'opiniones',
      component:Comentarios
    }
  ]
})

export default router
