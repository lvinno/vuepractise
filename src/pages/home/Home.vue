<template>
  <div>
    <div>Home</div>
    <router-link to="/List">list</router-link>
  </div>
</template>
<script>
import HomeHeader from './components/HomeHeader'
export default {
  name: 'Home',
  components: { HomeHeader },
  data: function () {
    return {}
  }
}
</script>
<style>
</style>
