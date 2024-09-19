import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './views/MainPage.vue'
import BusinessOverview from './views/BusinessOverview.vue'
import ContactUs from './views/ContactUs.vue'
import SaiyouOverview from './views/SiyouOverview.vue'
import IctService from './views/IctService.vue'
import InboundService from './views/InboundService.vue';
import AboutCompany from './views/AboutCompany.vue';

const routes = [
  { path: '/', component: MainPage, name: 'MainPage' },
  { path: '/business-overview', component: BusinessOverview, name: 'BusinessOverview' },
  { path: '/contact-us', component: ContactUs, name: 'ContactUs' },
  { path: '/saiyou-overview', component: SaiyouOverview, name: 'SaiyouOverview' } ,
  { path: '/ict-service', component: IctService, name: 'IctService' } ,
  { path: '/inbound-service', component: InboundService, name: 'InboundService' } ,
  { path: '/about-company', component: AboutCompany, name: 'AboutCompany' }  // 追加したルート
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
