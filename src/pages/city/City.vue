<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :cities="cities" :hot='hotCities'></city-list>
    <city-alphabet :cities="cities" @change="this.handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'
import axios from 'axios'
export default {
name:'City',
data(){
  return {
    cities:{},
    hotCities:[],
    letter:''
  }
}
,
components:{
  CityHeader,
  CitySearch,
  CityList,
  CityAlphabet
} ,
mounted: function(){
  this.getCityInfo()
},
methods: {
  getCityInfo(){
    axios.get('./static/mock/city.json')
    .then(this.handleGetCityInfoSucc)
  },
  handleGetCityInfoSucc(res){
    res = res.data;
    if(res.ret && res.data){
      const data = res.data;
      this.cities = data.cities;
      this.hotCities = data.hotCities;
    }
  },
  handleLetterChange(letter){
    this.letter = letter
  }
}
}
</script>

<style lang="stylus" scoped>

</style>
