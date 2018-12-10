import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Template from './views/Template.vue'
import First from './components/templates/First.vue'
import Second from './components/templates/Second.vue'
import FirstPreview from './components/templates/FirstPreview.vue'
import Third from './components/templates/Third.vue'
import GeneralTemplate from './components/templates/GeneralTemplate.vue'
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
      component: About
    },
    {
      path: '/invite/:id',
      name: 'template',
      component: Template,// it is the editor+invite page
    },
  
    {
      path: '/contact',
      name: 'contact',
      component: () => import( './views/Contact.vue')
    },

  

  ]
})
