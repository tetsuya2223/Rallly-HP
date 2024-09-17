import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import BusinessOverview from './components/BusinessOverview.vue'
import CompanyOverview from './components/CompanyOverview.vue'
import ContactUs from './components/ContactUs.vue'
import SaiyouOverview from './components/SiyouOverview.vue'

const routes = [
  { path: '/', component: MainPage, name: 'MainPage' },
  { path: '/business-overview', component: BusinessOverview, name: 'BusinessOverview' },
  { path: '/company-overview', component: CompanyOverview, name: 'CompanyOverview' },
  { path: '/contact-us', component: ContactUs, name: 'ContactUs' },
  { path: '/saiyou-overview', component: SaiyouOverview, name: 'SaiyouOverview' } 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // スクロール位置をリセットする
    return { top: 0 }
  }
})

export default router
