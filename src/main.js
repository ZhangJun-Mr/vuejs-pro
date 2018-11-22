import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import './static/css/reset.css'


import './common/stylus/index.styl';
window.localStorage.setItem("openid", "abc123");

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
window.bvue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

