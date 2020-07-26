import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import OurServices from '@/components/OurServices'
import OurProjects from '@/components/OurProjects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/OurServices',
      name: 'OurServices',
      component: OurServices,
    },
    {
      path: '/OurProjects',
      name: 'OurProjects',
      component: OurProjects,
    }
  ]
})
