<template>
  <div>
    <div class="recommend-title">热销推荐</div>
      <ul>
        <router-link :to="'/detail/'+item.id" tag="li"  
          class="item border-bottom"
          v-for="item in recommendList"
          :key="item.id">
            <div class="item-img-wrapper">
              <img :src="item.imgUrl" class="item-img" alt="">
            </div>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.recommend-title
  line-height: .4 rem
  background: #eee
  text-indent: .2 rem 
.item
  overflow: hidden
  display: flex
  height: 1.9 rem
  .item-img
    width: 1.7 rem
    height: 1.7 rem
    padding: .1 rem
  .item-info
    flex: 1 
    padding: .1 rem
    min-width: 0
    .item-title
      line-height: .5 rem
      font-size: .32 rem
      ellipsis()
    .item-desc
      line-height: .4 rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44 rem
      margin-top: .16 rem
      background: #ff9300
      padding: 0 .2 rem
      border-radius: .06 rem
      color: #fff

</style>
