import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import OurServices from '@/components/OurServices'
import Projects from '@/components/Projects'
import ProjectDetails from '@/components/ProjectDetails'
import Awards from '@/components/Awards'
import OurPartners from '@/components/OurPartners'
import ContactUs from '@/components/ContactUs'

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
      path: '/Projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/ProjectDetails',
      name: 'ProjectDetails',
      component: ProjectDetails,
    },
    {
      path: '/Awards',
      name: 'Awards',
      component: Awards,
    },
    {
      path: '/OurPartners',
      name: 'OurPartners',
      component: OurPartners,
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs,
    }
  ]
})
