import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  // linkActiveClass: 'active',
  routes: [{
    path: '/',
    component:() => import(/* webpackChunkName: "about" */ './components/goods/goods')
  }, {
    path: '/goods',
    component:() => import(/* webpackChunkName: "about" */ './components/goods/goods')
  }, {
    path: '/ratings',
    component:() => import(/* webpackChunkName: "about" */ './components/ratings/ratings')
  }, {
    path: '/seller',
    component:() => import(/* webpackChunkName: "about" */ './components/seller/seller')
  }, {
    path: '/payment',
    component:() => import(/* webpackChunkName: "about" */ './components/payment/index')
  }, {
    path: '/order',
    component:() => import(/* webpackChunkName: "about" */ './components/order/list')
  }, {
    path: '/order/:orderId',
    component:() => import(/* webpackChunkName: "about" */ './components/order/detail')
  }]
})
