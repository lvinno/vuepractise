<template>
  <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
             <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl" alt="">
                <p class="icon-desc">{{item.desc}}</p> 
              </div>
          </div>
          <!-- <div class="icon">        
              <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
                <p class="icon-desc">热门景点</p> 
              </div>
          </div> -->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data: function(){
    return {
      swiperOption:{
        autoplay: false
      }
    }
  },
  computed:{
    pages: function () {
      const pages = [];
      this.iconList.forEach((item,index)=>{
        const page = Math.floor(index/8);
        if(!pages[page]){
          pages[page] = [];
        }
        pages[page].push(item);
      })
      return pages;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  overflow: hidden
  height: 0
  padding-bottom: 50%
  margin-top: .1 rem
.icon
  position: relative
  overflow: hidden
  float: left
  width: 25%
  height: 0
  padding-bottom: 25%
  .icon-img
    position: absolute
    top:0
    right: 0
    left: 0
    bottom: 0.44 rem
    box-sizing: border-box
    padding: .1 rem
    .icon-img-content
      display: block
      margin: 0 auto
      height: 100%
  .icon-desc
    postition: absolute
    bottom: 0
    left: 0
    right: 0
    height: .44 rem
    line-height: .44 rem
    color: $darkTextColor
    text-align: center
    ellipsis()
</style>
