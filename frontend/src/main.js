import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAlsKfJhXRve0NoxT2s6Haaul2o2jZFcCo",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
