import Vue from 'vue'
import App from './App'
import router from './router'
import Button from 'vant/lib/button';

import 'vant/lib/button/style';

Vue.use(Button);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
