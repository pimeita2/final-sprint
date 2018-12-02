import Vue from 'vue'
import Vuex from 'vuex'
import templateListStore from '@/store/templateListStore.js'
import newCmpsModule from '@/store/newCmpsModule.js'
import editorModule from '@/store/editorModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    templateListStore,
    newCmpsModule,
    editorModule
  }
})
