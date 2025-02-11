import Vue from 'vue'
import Router from 'vue-router'

import {
  Login,
  Logout,
  People,
  Circles,
  Offers,
  Requests,
  Events,
  Profile
} from '@/views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Login',
      component: Login,
      children: [

      ]
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/circles',
      name: 'Circles',
      component: Circles
    },
    {
      path: '/offers',
      name: 'Offers',
      component: Offers
    },
    {
      path: '/requests',
      name: 'Requests',
      component: Requests
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

  ]
})
