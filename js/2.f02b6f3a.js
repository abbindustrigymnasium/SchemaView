(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{3979:function(e,t,a){"use strict";var s=a("70ae"),r=a.n(s);r.a},"70ae":function(e,t,a){},"8b24":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"row justify-center q-col-gutter-md"},[a("div",{staticClass:"col-6"},[a("CarouselComponent")],1),a("div",{staticClass:"col-6"},[a("MarkdownComponent")],1)])])},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row justify-center bg-white",class:e.paddingTop,staticStyle:{height:"40px"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.slide,expression:"slide === 1"}],staticClass:"text-center text-h6"},[e._v("180S")]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.slide,expression:"slide === 2"}],staticClass:"text-center text-h6"},[e._v("190S")]),a("div",{directives:[{name:"show",rawName:"v-show",value:3===e.slide,expression:"slide === 3"}],staticClass:"text-center text-h6"},[e._v("200S")]),a("div",{directives:[{name:"show",rawName:"v-show",value:4===e.slide,expression:"slide === 4"}],staticClass:"text-center text-h6"},[e._v("Städ Schema")])]),a("div",{staticClass:"row justify-center",class:e.marginTop},[a("calendar-component",{directives:[{name:"show",rawName:"v-show",value:1===e.slide,expression:"slide===1"}],attrs:{url:e.url180S,title:"180S"}}),a("calendar-component",{directives:[{name:"show",rawName:"v-show",value:2===e.slide,expression:"slide===2"}],attrs:{url:e.url190S,title:"190S"}}),a("calendar-component",{directives:[{name:"show",rawName:"v-show",value:3===e.slide,expression:"slide===3"}],attrs:{url:e.url200S,title:"200S"}}),a("schedular-component",{directives:[{name:"show",rawName:"v-show",value:4===e.slide,expression:"slide===4"}]})],1),a("q-carousel",{attrs:{animated:!1,navigation:"","keep-alive":"",infinite:"",autoplay:e.autoplay,"transition-prev":"slide-right","transition-next":"slide-left"},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[a("q-carousel-slide",{attrs:{name:1}}),a("q-carousel-slide",{attrs:{name:2}}),a("q-carousel-slide",{attrs:{name:3}}),a("q-carousel-slide",{attrs:{name:4}})],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{position:"relative",height:"800px",width:"100%"}},[a("iframe",{staticStyle:{position:"absolute",top:"-160px","z-index":"-1"},attrs:{scrolling:"no",src:e.url,frameborder:"0",height:"100%",width:"100%",title:e.title}})])},n=[],c={name:"calendar-component",props:{url:{required:!0,type:String},title:{required:!0,type:String}}},d=c,u=a("2877"),v=Object(u["a"])(d,i,n,!1,null,null,null),p=v.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%"}},[a("div",{staticClass:"row justify-start",staticStyle:{width:"100%"}},[a("div",{staticClass:"text-center",staticStyle:{width:"220px"}},[e._v("Vecka")]),a("div",{staticClass:"row col"},e._l(e.weeks,(function(t){return a("div",{key:t,staticClass:"text-center",class:e.bgColorWeek(t),style:e.weekStyle},[e._v("\r\n        "+e._s(t)+"\r\n      ")])})),0)]),a("q-calendar",{staticStyle:{height:"700px",width:"100%"},attrs:{view:"custom-scheduler","hide-header":"","no-scroll":"",resources:e.resources,"resource-width":220,locale:"se-sv"},scopedSlots:e._u([{key:"scheduler-resource",fn:function(t){var s=t.resource,r=t.index;return[a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"fit",attrs:{size:"md",flat:"",icon:e.getResourceImage(s),"text-color":e.textColor(r,s.color),label:s.label}})],1)]}},{key:"scheduler-resource-day",fn:function(t){var s=t.resource,r=t.index;return[a("q-btn",{staticClass:"fit",class:e.bgColor(r,s.color),attrs:{size:"md",flat:"","text-color":"black",label:s.groups[r]}})]}}]),model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)},g=[],h=a("bd4c"),b={created(){this.currentWeek=h["a"].getWeekOfYear(new Date);for(var e=this.currentWeek;e<=this.currentWeek+6;e++)this.weeks.push(e%60);console.log(this.weeks)},data(){return{currentWeek:0,weeks:[],selectedDate:"",resources:[{id:1,label:"3D skrivare",avatar:"icons/3d.svg",groups:[18.5,18.4,18.3,18.2,18.1,19.6,19.5],color:"red"},{id:2,label:"Pingisrummet",avatar:"icons/pingis.svg",groups:[18.6,18.5,18.4,18.3,18.2,18.1,19.6],color:"pink"},{id:3,label:"Klassrum",avatar:"icons/classroom.svg",groups:[20.1,18.6,18.5,18.4,18.3,18.2,18.1],color:"purple"},{id:4,label:"Teknikarbetsplatser",avatar:"icons/teknikarbetsplatser.svg",groups:[20.2,20.1,18.6,18.5,18.4,18.3,18.2],color:"indigo"},{id:5,label:"Hallonrummet",avatar:"icons/hallon.svg",groups:[20.3,20.2,20.1,18.6,18.5,18.4,18.3],color:"blue"},{id:6,label:"Klassrum",avatar:"icons/classroom.svg",groups:[20.4,20.3,20.2,20.1,18.6,18.5,18.4],color:"purple"},{id:7,label:"Växthuset",avatar:"icons/vaxthuset.svg",groups:[20.5,20.4,20.3,20.2,20.1,18.6,18.5],color:"green"},{id:8,label:"Cafeterian",avatar:"icons/cafeterian.svg",groups:[20.6,20.5,20.4,20.3,20.2,20.1,18.6],color:"lime"},{id:9,label:"Klassrum",avatar:"icons/classroom.svg",groups:[19.1,20.6,20.5,20.4,20.3,20.2,20.1],color:"purple"},{id:10,label:"Kapprummet",avatar:"icons/kapprummet.svg",groups:[19.2,19.1,20.6,20.5,20.4,20.3,20.2],color:"amber"},{id:11,label:"Whiteboards",avatar:"icons/whiteboards.svg",groups:[19.3,19.2,19.1,20.6,20.5,20.4,20.3],color:"orange"},{id:12,label:"Klassrum",avatar:"icons/classroom.svg",groups:[19.4,19.3,19.2,19.1,20.6,20.5,20.4],color:"deep-orange"},{id:13,label:"Sopor",avatar:"icons/sopor.svg",groups:[19.5,19.4,19.3,19.2,19.1,20.6,20.5],color:"brown"},{id:14,label:"Bibliotek",avatar:"icons/bibliotek.svg",groups:[19.6,19.5,19.4,19.3,19.2,19.1,20.6],color:"grey"},{id:15,label:"Klassrum",avatar:"icons/classroom.svg",groups:[18.1,19.6,19.5,19.4,19.3,19.2,19.1],color:"purple"},{id:16,label:"Korridor",avatar:"icons/korridor.svg",groups:[18.2,18.1,19.6,19.5,19.4,19.3,19.2],color:"deep-purple"},{id:17,label:"Köket",avatar:"icons/koket.svg",groups:[18.3,18.2,18.1,19.6,19.5,19.4,19.3],color:"cyan"},{id:18,label:"Klassrum",avatar:"icons/classroom.svg",groups:[18.4,18.3,18.2,18.1,19.6,19.5,19.4],color:"purple"}]}},computed:{weekStyle(){return{width:100/this.weeks.length+"%"}}},methods:{getResourceImage(e){return e.icon?e.icon:e.avatar?"img:"+e.avatar:""},textColor(e,t){return t+"-9"},bgColor(e,t){return 0===e?"bg-"+t+"-4":""},bgColorWeek(e){return this.currentWeek===e?"text-bold":""}}},w=b,k=(a("3979"),a("9c40")),f=a("0016"),x=a("eebe"),y=a.n(x),C=Object(u["a"])(w,m,g,!1,null,null,null),S=C.exports;y()(C,"components",{QBtn:k["a"],QIcon:f["a"]});var _={components:{CalendarComponent:p,SchedularComponent:S},created(){},computed:{marginTop(){return 4!==this.slide?"q-mt-lg":""},paddingTop(){return 4!==this.slide?"q-pt-md":""}},data(){return{autoplay:18e3,slide:1,url180S:"https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri1Y7X3QQQfZY6QfZ5079605y7Y7.html",url190S:"https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri1Y7X3QQQfZY6QfZ5079535y7Y7.html",url200S:"https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri1Y7X3QQQfZY6QfZ5076385y7Y7.html"}},methods:{}},Q=_,q=a("880c"),j=a("62cd"),Y=Object(u["a"])(Q,l,o,!1,null,null,null),K=Y.exports;y()(Y,"components",{QCarousel:q["a"],QCarouselSlide:j["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-markdown",{attrs:{src:e.markdown}})],1)},N=[],O="# Covid-19 Info\n## Alla på skolan har ansvar för att:​\n\n* Stanna hemma vid minsta symptom på sjukdom och vara frisk två dagar efter sjukdom innan återkomst​\n\n* Hålla avstånd till andra i den utsträckning det är möjligt.  ​\n\n* Undvika kollektivtrafik om möjligt.​\n\n* Hålla god handhygien. ​\n\n* Om du behöver nysa, gör det i armvecket och gå undan/vänd dig bort från andra\n\n# Generell Info\n## Mycket bättre på städa:\n\n* Vi måste alla bli mycket bättre på att städa och ta undan saker efter oss, det har inte sett snyggt ut i flera rum den här veckan.​",D={data(){return{markdown:O}}},I=D,Z=Object(u["a"])(I,W,N,!1,null,null,null),E=Z.exports,T={name:"PageIndex",components:{CarouselComponent:K,MarkdownComponent:E}},$=T,z=a("9989"),H=Object(u["a"])($,s,r,!1,null,null,null);t["default"]=H.exports;y()(H,"components",{QPage:z["a"]})}}]);