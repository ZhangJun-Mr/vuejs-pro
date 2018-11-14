import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';


import './common/stylus/index.styl';

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
window.bvue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

