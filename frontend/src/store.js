import Vue from 'vue'
import Vuex from 'vuex'
import templateStore from '../store/template-store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    templateStore,

  }
})
