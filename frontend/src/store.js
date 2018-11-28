import Vue from 'vue'
import Vuex from 'vuex'
import templateStore from '@/store/templateListStore.js'
import templateCmpStore from '@/store/templateCmpStore.js'
import editorModule from '@/store/editorModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    templateStore,
    templateCmpStore,
    editorModule
  }
})
