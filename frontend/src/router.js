import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Template from './views/Template.vue'
import First from './components/templates/First.vue'
// import Second from './components/templates/Second.vue'
// import Third from './components/templates/Third.vue'

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
      component: About
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('./views/Login.vue')
    // },
    {
      path: '/template',
      name: 'template',
      component: Template,
      children: [
        {
          path: '1',
          name:'first',
          component: First
        },
        // {
        //   path: '2',
        //   name:'Second',
        //   component: Second
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
