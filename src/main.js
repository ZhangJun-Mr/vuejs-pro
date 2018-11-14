import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
window.bvue = new Vue({
  el: '#app',
  render: h => h(App)
});

