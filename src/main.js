import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYoutubeEmbed from 'vue-youtube-embed'

Vue.config.productionTip = false

Vue.use(VueYoutubeEmbed)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
