import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueApollo from "vue-apollo"
import { createProvider } from './vue-apollo'

// Custom directive called v-focus
Vue.directive('focus', {
  // When element is bound to the DOM
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
  })

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')

Vue.use(VueApollo)


