import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import signIn from '@/components/SignIn'
import login from '@/components/Login'
import deleteAccount from '@/components/DeleteAccount'
import modifyUserName from '@/components/ModifyUserName'
import modifyPassWord from '@/components/ModifyPassWord'
import events from '@/components/Events'
import eventDetails from '@/components/EventDetails'
import eventAdd from '@/components/EventAdd'
import eventDelete from '@/components/EventDelete'
import eventModify from '@/components/EventModify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: signIn
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
      path: '/events/eventDetails/:eventId',
      name: 'eventDetails',
      component: eventDetails,
      props: true
    },
    {
      path: '/events/eventAdd',
      name: 'eventAdd',
      component: eventAdd
    },
    {
      path: '/events/eventDelete',
      name: 'eventDelete',
      component: eventDelete
    },
    {
      path: '/events/eventModify',
      name: 'eventModify',
      component: eventModify
    }
  ]
})
