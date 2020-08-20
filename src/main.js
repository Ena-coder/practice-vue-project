import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

// 手动引入vant-ui
import { 
  Button, 
  Image as VanImage,
  Lazyload ,

 } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/image/style';
import 'vant/lib/lazyload/style';
Vue.use(Button)
    .use(VanImage)
    .use(Lazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
