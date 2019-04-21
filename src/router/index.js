import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import PassWord from '@/pages/PassWord'
import Layout from '@/pages/Layout'
import ListGroup from '@/pages/ListGroup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/password',
      name:'PassWord',
      component:PassWord
    },
    {
      path:'/layout',
      name:'Layout',
      component:Layout,
      children:[{
        path:'login',
        component:Login
      },{
        path:'listgroup',
        component:ListGroup
      }]
    }
  ]
})
