import Vue from 'vue'
import App from './App.vue'

import 'picnic/picnic.min.css'
import ParagraphItem from './components/ParagraphItem.vue'

Vue.component('paragraph-item', ParagraphItem)

new Vue({
  el: '#app',
  render: h => h(App)
})
