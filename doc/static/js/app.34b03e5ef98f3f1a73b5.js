webpackJsonp([1],{"0H/p":function(t,e){},"3S+F":function(t,e){},"7AqW":function(t,e){},"9n10":function(t,e){},G5Lx:function(t,e){},M3m5:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},n,!1,function(t){i("o8nZ")},null,null).exports,a=i("/ocq"),o={name:"HomeHeader",props:{city:String}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n    "+this._s(this.city)+"\n    "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩/主题")])}]};var l=i("VU/8")(o,c,!1,function(t){i("M3m5")},"data-v-3e7c0b48",null).exports,u={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.swiperList.length}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),this._v(" "),e("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],2):this._e()],1)},staticRenderFns:[]};var p=i("VU/8")(u,d,!1,function(t){i("7AqW")},"data-v-41e34532",null).exports,h={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])])}),0)}),1)],1)},staticRenderFns:[]};var v=i("VU/8")(h,f,!1,function(t){i("qyzo")},"data-v-202fc07b",null).exports,m={name:"HomeRecommend",props:{recommendList:Array}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),0)])},staticRenderFns:[]};var C=i("VU/8")(m,_,!1,function(t){i("VJKp")},"data-v-385c7d84",null).exports,w={name:"HomeWeekend",props:{weekendList:Array}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var L=i("VU/8")(w,y,!1,function(t){i("G5Lx")},"data-v-4c9fcc07",null).exports,g=i("mtWM"),b=i.n(g),k={name:"Home",components:{HomeHeader:l,HomeSwiper:p,HomeIcons:v,HomeRecommend:C,HomeWeekend:L},data:function(){return{city:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},mounted:function(){this.getHomeInfo()},methods:{getHomeInfo:function(){var t=this;b.a.get("/static/mock/index.json").then(function(e){return t.getHomeInfoSucc(e)})},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.city=e.city,this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header",{attrs:{city:t.city}}),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}}),t._v(" "),i("router-link",{attrs:{to:"/List"}},[t._v("list")])],1)},staticRenderFns:[]};var x=i("VU/8")(k,$,!1,function(t){i("0H/p")},null,null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择 \n  "),e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var H=i("VU/8")({name:"CityHeader"},S,!1,function(t){i("tncB")},"data-v-21e82350",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search"},[e("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"}})])}]};var U=i("VU/8")({name:"CitySearch"},E,!1,function(t){i("zUL9")},"data-v-9052cab2",null).exports,F=i("GQaK"),T={name:"CityList",props:{hot:Array,cities:Object,letter:String},mounted:function(){this.scroll=new F.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[t._m(0),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom"},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"area"},[e("div",{staticClass:"title border-topbottom"},[this._v("当前城市")]),this._v(" "),e("div",{staticClass:"button-list"},[e("div",{staticClass:"button-wrapper"},[e("div",{staticClass:"button"},[this._v("深圳")])])])])}]};var V={name:"CityAlphabet",props:{cities:{}},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){if(!0===e.touchStatus){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])}},16)},handleTouchEnd:function(){this.touchStatus=!1}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n  "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var I={name:"City",data:function(){return{cities:{},hotCities:[],letter:""}},components:{CityHeader:H,CitySearch:U,CityList:i("VU/8")(T,R,!1,function(t){i("3S+F")},"data-v-23512ae0",null).exports,CityAlphabet:i("VU/8")(V,A,!1,function(t){i("O0P9")},"data-v-5f9c4337",null).exports},mounted:function(){this.getCityInfo()},methods:{getCityInfo:function(){b.a.get("/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("city-header"),this._v(" "),e("city-search"),this._v(" "),e("city-list",{attrs:{letter:this.letter,cities:this.cities,hot:this.hotCities}}),this._v(" "),e("city-alphabet",{attrs:{cities:this.cities},on:{change:this.handleLetterChange}})],1)},staticRenderFns:[]};var O=i("VU/8")(I,M,!1,function(t){i("Wzxj")},"data-v-4b66136a",null).exports,z={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("List")])},staticRenderFns:[]};var j=i("VU/8")({name:"List",data:function(){return{}}},z,!1,function(t){i("rHd3")},null,null).exports;s.a.use(a.a);var W=new a.a({routes:[{path:"/",name:"Home",component:x},{path:"/List",name:"List",component:j},{path:"/City",name:"City",component:O}]}),N=i("v5o6"),q=i.n(N),P=i("F3EI"),G=i.n(P);i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,q.a.attach(document.body),s.a.use(G.a),new s.a({el:"#app",router:W,components:{App:r},template:"<App/>"})},O0P9:function(t,e){},TzC8:function(t,e){},VJKp:function(t,e){},Wzxj:function(t,e){},o8nZ:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},a=i("VU/8")(n,r,!1,null,null,null);e.default=a.exports},qyzo:function(t,e){},rHd3:function(t,e){},tncB:function(t,e){},v2ns:function(t,e){},zUL9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.34b03e5ef98f3f1a73b5.js.map