import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import signUp from '@/components/SignUp'
import login from '@/components/Login'
import deleteAccount from '@/components/DeleteAccount'
import modifyUserName from '@/components/ModifyUserName'
import modifyPassWord from '@/components/ModifyPassWord'
import events from '@/components/Events'
import eventDetails from '@/components/EventDetails'
import eventAdd from '@/components/EventAdd'
import eventModify from '@/components/EventModify'
import axios from 'axios'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/deleteAccount',
      name: 'deleteAccount',
      component: deleteAccount
    },
    {
      path: '/modifyUserName',
      name: 'modifyUserName',
      component: modifyUserName
    },
    {
      path: '/modifyPassWord',
      name: 'modifyPassWord',
      component: modifyPassWord
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/events/:eventId',
      name: 'eventDetails',
      component: eventDetails,
      props: true
    },
    {
      path: '/eventAdd',
      name: 'eventAdd',
      component: eventAdd
    },
    {
      path: '/events/modify/:eventId',
      name: 'eventModify',
      component: eventModify,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/sign-up', '/login']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !localStorage.getItem('token')) {
    return next('/login')
  }
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  next()
})

export default router

Vue.use(Router)
