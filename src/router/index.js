import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/know',
    component: () => import('../views/Know.vue')
  },
  {
    path: '/aboutus',
    component: () => import('../views/Aboutus.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Dashorders.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/Userboard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/Usercart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/Userproduct.vue')
      }
    ]
  },
  {
    path: '/checkout',
    component: () => import('../views/Checkout.vue'),
    children: [
      {
        path: 'form',
        component: () => import('../views/Checkoutform.vue')
      },
      {
        path: 'order/:orderId',
        component: () => import('../views/Order.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition)
    if (to.fullPath.match('/user/cart')) {
      return {
        top: 500
      }
    }
    if (to.fullPath.match('/checkout/form')) {
      return {
        top: 100
      }
    }
    if (from.fullPath.match('/checkout/form')) {
      return {
        top: 100
      }
    }
    // 這邊可以設定使用者到特定頁面的起始位置
    // `to` 和 `from` 都是路由地址
    // `savedPosition` 可以为空，如果没有的话。
  }
})

export default router
