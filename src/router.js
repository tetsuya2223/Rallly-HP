import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import BusinessOverview from './components/BusinessOverview.vue'
import CompanyOverview from './components/CompanyOverview.vue'
import ContactUs from './components/ContactUs.vue'

const routes = [
  { path: '/', component: MainPage, name: 'MainPage' },
  { path: '/business-overview', component: BusinessOverview, name: 'BusinessOverview' },
  { path: '/company-overview', component: CompanyOverview, name: 'CompanyOverview' },
  { path: '/contact-us', component: ContactUs, name: 'ContactUs' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
