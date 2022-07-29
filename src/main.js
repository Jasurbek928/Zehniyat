import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Carousel3d from 'vue-carousel-3d';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
Vue.config.productionTip = false

new Vue({
  router,
  Carousel3d,
  render: h => h(App)
}).$mount('#app')
