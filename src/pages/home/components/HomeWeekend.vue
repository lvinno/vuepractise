<template>
  <div>
    <div class="recommend-title">热销推荐</div>
      <ul>
        <li 
        class="item border-bottom"
        v-for="item in weekendList"
        :key="item.id">
          <div class="item-img-wrapper">
            <img :src="item.imgUrl" class="item-img" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.recommend-title
  line-height: .4 rem
  background: #eee
  text-indent: .2 rem 
.item-img-wrapper
  height: 0
  overflow: hidden
  padding-bottom: 37.09%
  .item-img
    width: 100%
.item-info
  padding: .1 rem
  .item-title
    line-height: .5 rem
    font-size: .32 rem
    ellipsis()
  .item-desc
    line-height: .4 rem
    color: #ccc
    ellipsis()

</style>
