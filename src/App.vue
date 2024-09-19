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
  background-color: #f7f7f7; /* ここに希望する背景色を設定 */
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "Arial", sans-serif;
  color: #1a1a1a;
}
</style>
