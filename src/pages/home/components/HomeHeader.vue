
<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe616;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe624;</span>
      输入城市/景点/游玩/主题</div>
    <router-link to='/city'>
      <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed:{
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.header
  display: flex;
  background:$bgColor
  line-height:$headerHeight
  color: #fff
  .header-left
    width: .64 rem
    float: left
    .back-icon
      text-align: center
      font-size: 0.4 rem
  .header-input
    flex: 1
    background: #fff
    color: #dcdcdc
    height: 0.64 rem
    line-height: 0.64 rem
    border-radius: 0.1 rem
    padding-left: 0.2 rem
    margin-top: 0.12 rem
    margin-left: 0.2 rem
    height: 0.64 rem
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    color: #fff
    text-align: center
    .arrow-icon
      font-size: .2 rem
</style>
