import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';

import './common/stylus/index.styl';

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
window.bvue = new Vue({
  el: '#app',
  render: h => h(App)
});

