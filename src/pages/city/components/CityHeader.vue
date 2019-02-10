<template>
  <div class='header'>
    城市选择 
    <router-link to='/'>
      <span class="iconfont header-back">&#xe616;</span>
    </router-link>
  </div>
</template>

<script>
export default {
name:'CityHeader'  
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-back
    position: absolute
    width: .64rem
    text-align: center
    color: #fff
    font-size: .4rem
    top: 0
    left: 0
</style>
