import Vue from 'vue'
import Vuex from 'vuex'
import templateListStore from '../store/templateListStore.js'
import templateCmpStore from '../store/templateCmpStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    templateListStore,
    templateCmpStore
  }
})
