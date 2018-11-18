import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  // linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'goods',
    component: () => import(/* webpackChunkName: "about" */ './components/goods/goods')
  }, {
    path: '/goods',
    name: 'goodsIndex',
    component: () => import(/* webpackChunkName: "about" */ './components/goods/goods')
  }, {
    path: '/ratings',
    name: 'ratings',
    component: () => import(/* webpackChunkName: "about" */ './components/ratings/ratings')
  }, {
    path: '/seller',
    name: 'seller',
    component: () => import(/* webpackChunkName: "about" */ './components/seller/seller')
  }, {
    path: '/payment',
    name: 'payment',
    component: () => import(/* webpackChunkName: "about" */ './components/payment/index')
  }, {
    path: '/order',
    name: 'orderList',
    component: () => import(/* webpackChunkName: "about" */ './components/order/list')
  }, {
    path: '/order/:orderId',
    name: 'orderDetail',
    component: () => import(/* webpackChunkName: "about" */ './components/order/detail')
  }]
})
