import Vue from 'vue'
import Vuex from 'vuex'
import templateListStore from '@/store/templateListStore.js'
import cmpsModule from '@/store/cmpsModule.js'
import editorModule from '@/store/editorModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    templateListStore,
    cmpsModule,
    editorModule
  }
})
