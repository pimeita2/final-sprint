import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import templateTwo from './components/template-two.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
<<<<<<< HEAD
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/second',
      name: 'second-template',
       component: () => import('./views/second-template.vue')
    },
    {
      path: '/third',
      name: 'third-template',
       component: () => import('./views/third-template.vue')
=======
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('./views/Template.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( './views/Contact.vue')
    },

    {
      path: '/templateTwo',
      name: 'templateTwo',
      component: templateTwo
    },
    { 
      path: '/second',
      name: 'second-template',
      component: () => import('./views/second-template.vue')
>>>>>>> master
    }

  ]
})
