import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('pt-time-menu', () => import('./TimeMenu.vue'))
Vue.component('pt-paragraphs', () => import('./Paragraphs.vue'))

new Vue({
  render: h => h(App)
}).$mount('#app')
