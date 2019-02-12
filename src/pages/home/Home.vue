<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
    <router-link to="/List">list</router-link>
  </div>
</template>
<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
import axios from 'axios'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
     HomeHeader, 
     HomeSwiper,
     HomeIcons,
     HomeRecommend,
     HomeWeekend
     },
  data: function () {
    return {
      lastCity:'',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed:{
    ...mapState(['city'])
  },
  mounted:function () {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city;
      this.getHomeInfo()
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('./static/mock/index.json?city='+this.city)
        .then((res)=>this.getHomeInfoSucc(res));
    },
    getHomeInfoSucc(res){
      res = res.data;
      if(res.ret && res.data){
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>
<style>
</style>
