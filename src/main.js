// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store/index.js'
import VueTippy from 'vue-tippy'
import VueDraggable from 'vue-draggable'
import VueDragAndDropList from 'vue-drag-and-drop-list'
import VModal from 'vue-js-modal'
import draggable from 'vuedraggable'
import Sortable from 'vue-sortable'
import { Drag, Drop } from 'vue-drag-drop'
Vue.component('drag', Drag)
Vue.component('drop', Drop)
Vue.use(Sortable)
Vue.use(draggable)
Vue.use(VueDragAndDropList)
Vue.use(VModal, { dialog: true })
Vue.use(VueDraggable)
Vue.use(VueTippy)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
