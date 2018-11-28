import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('./views/Login.vue')
    // },
    {
      path: '/template',
      name: 'template',
      component: () => import('./views/Template.vue'),
      children: [
        {
          path: '1',
          name:'first',
          component: ()=> import('./components/templates/First.vue')
        },
        // {
        //   path: '2',
        //   name:'Second',
        //   component: ()=> import('./components/templates/Second.vue')
        // },
        // {
        //   path: '3',
        //   name:'third',
        //   component: ()=> import('./components/templates/Third.vue')
        // },

      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( './views/Contact.vue')
    },

  

  ]
})
