import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import MainPage from '@/components/MainPage'
import Mainhome from '@/components/Mainhome'
import Mainprofile from '@/components/Mainprofile'
import info from '@/components/info'
import Wechat from '@/components/Wechat'
import Praccss from '@/components/Praccss'
import Badge from '@/components/Badge'

console.log(Praccss)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/info',
      name: 'Info',
      component: info
    },
    {
      path: '/praccss',
      name: 'Praccss',
      component: Praccss
    },
    {
      path: '/badge',
      name: 'Badge',
      component: Badge
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage,
      children:[
        {
          path:'home',component:Mainhome
        },
        {
          path:'profile',component:Mainprofile
        },
        {
          path:'wechat',component:Wechat
        },
      ]
    }
  ]
})
