import VueRouter from 'vue-router'

import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Profile from '../pages/Profile.vue';
import Single from '../pages/Single.vue';
import Payment from '../pages/Payment.vue';
import Register from '../pages/Register.vue';
import NotFound404 from '../pages/NotFound404.vue';
import Subscriptions from '../pages/Subscriptions.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/single/:id',
            name: 'single',
            component: Single,
            meta: { authOnly: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { guestOnly: true }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { guestOnly: true }
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: { authOnly: true }
        },
        {
            path: '/subscriptions',
            name: 'subscriptions',
            component: Subscriptions
        },
        {
            path: '/payment',
            name: 'payment',
            component: Payment,
            meta: { authOnly: true }
        },
        {
            path: '/NotFound404',
            name: 'NotFound404',
            component: NotFound404
        },
        {
            path: '*',
            redirect: '/NotFound404'
        },
    ]
})

function isLoggedIn(){
    return localStorage.getItem('token')
}
function isUserSubscribed(){
  return localStorage.getItem('subscribed')
}
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!isLoggedIn()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        if (isLoggedIn()) {
          next({
            path: '/profile',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
    } else if (to.matched.some(record => record.meta.subscribedUser)) {
      if (isLoggedIn() && isUserSubscribed()) {
        next()
      } else if (isLoggedIn() && !isUserSubscribed()) {
        next({
          path: '/payment',
          query: { redirect: to.fullPath }
        })
      }
  } else {
      next() // make sure to always call next()!
    }
  })

export default router