<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>  
  </div>
    
</template>

<script>
export default {
name: 'HomeSwiper',
props:{
  swiperList: Array
},
data: function(){
  return {
    swiperOption:{
      pagination: ".swiper-pagination",
      loop: true,
    }
  }
},
computed:{
  showSwiper:function(){
    return this.swiperList.length
  }
}

}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  width: 100%
  height: 0 
  padding-bottom: 31.25%
  background:#eee
  overflow: hidden
  .swiper-img
    width: 100%
</style>
