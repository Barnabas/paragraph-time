import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)

Vue.component('pt-time-menu', () => import('./TimeMenu.vue'))
Vue.component('pt-paragraphs', () => import('./Paragraphs.vue'))

new Vue({
  el: '#app',
  render: h => h(App)
})
