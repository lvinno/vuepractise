<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <router-link to="/List">list</router-link>
  </div>
</template>
<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
export default {
  name: 'Home',
  components: {
     HomeHeader, 
     HomeSwiper
     },
  data: function () {
    return {}
  }
}
</script>
<style>
</style>
