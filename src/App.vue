<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  },
}
</script>

<style>
#app {
  background-color: #f5f5f5; /* ここに希望する背景色を設定 */
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "Arial", sans-serif;
  color: #333333;
}
</style>
