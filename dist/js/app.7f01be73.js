(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},i={app:0},n=[];function r(e){return o.p+"js/"+({"client-form~forms":"client-form~forms","client-form":"client-form",forms:"forms",profile:"profile",tables:"tables"}[e]||e)+"."+{"client-form~forms":"418b41fc","client-form":"c310aaa6",forms:"6b792cd5",profile:"d2f19d8c",tables:"149c43e2"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=i[e]=[t,s]}));t.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}i[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1e1d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",e._l(e.titleStack,(function(t,s){return a("li",{key:s},[e._v(e._s(t))])})),0)])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-primary",attrs:{href:"https://admin-one-vue-cli.justboil.me/",target:"_blank"}},[a("b-icon",{attrs:{icon:"credit-card","custom-size":"default"}}),a("span",[e._v("Premium Demo")])],1)])])])])])},i=[],n={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},r=n,o=a("2877"),l=Object(o["a"])(r,s,i,!1,null,null,null);t["a"]=l.exports},"226e":function(e,t,a){e.exports=a.p+"img/justboil-logo.7298fabb.svg"},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=n,e.exports=i,i.id="4678"},"503b":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title"},[e._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[e._t("right")],2)])])])])},i=[],n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},r=n,o=a("2877"),l=Object(o["a"])(r,s,i,!1,null,null,null);t["a"]=l.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("99af"),a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b107"),a("5363");var s=a("2b0e"),i=a("289d"),n=(a("d3b7"),a("8c4f")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-bar",{attrs:{"title-stack":e.titleStack}}),a("hero-bar",{attrs:{"has-right-visible":!1}},[e._v(" Dashboard ")]),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-primary",icon:"account-multiple",number:512,label:"Clients"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-info",icon:"cart-outline",number:7770,prefix:"$",label:"Sales"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-success",icon:"chart-timeline-variant",number:256,suffix:"%",label:"Performance"}})],1),a("card-component",{attrs:{title:"Performance",icon:"finance","header-icon":"reload"},on:{"header-icon-click":e.fillChartData}},[e.defaultChart.chartData?a("div",{staticClass:"chart-area"},[a("line-chart",{ref:"bigChart",staticStyle:{height:"100%"},attrs:{"chart-id":"big-line-chart","chart-data":e.defaultChart.chartData,"extra-options":e.defaultChart.extraOptions}})],1):e._e()]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients"}},[a("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json"}})],1)],1)],1)},o=[],l=a("5530"),c={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},u={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},d=Object(l["a"])({},u,{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),m=a("1e1d"),f=a("503b"),b=a("9e7c"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",[a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"is-widget-label"},[a("h3",{staticClass:"subtitle is-spaced"},[e._v(" "+e._s(e.label)+" ")]),a("h1",{staticClass:"title"},[a("growing-number",{attrs:{value:e.number,prefix:e.prefix,suffix:e.suffix}})],1)])]),e.icon?a("div",{staticClass:"level-item has-widget-icon"},[a("div",{staticClass:"is-widget-icon"},[a("b-icon",{attrs:{icon:e.icon,size:"is-large",type:e.type}})],1)]):e._e()])])},h=[],v=(a("a9e3"),a("6df7")),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" "+e._s(e.prefix)+e._s(e.newValueFormatted)+e._s(e.suffix)+" ")])},j=[],C=a("6612"),w=a.n(C),y={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data:function(){return{newValue:0,step:0}},computed:{newValueFormatted:function(){return this.newValue<1e3?this.newValue:w()(this.newValue).format("0,0")}},mounted:function(){this.growInit()},methods:{growInit:function(){var e=this.value/(this.duration/25);this.grow(e)},grow:function(e){var t=this,a=Math.ceil(this.newValue+e);if(a>this.value)return this.newValue=this.value,!1;this.newValue=a,setTimeout((function(){t.grow(e)}),25)}},watch:{value:function(){this.growInit()}}},_=y,k=a("2877"),x=Object(k["a"])(_,g,j,!1,null,null,null),A=x.exports,O={name:"CardWidget",components:{GrowingNumber:A,CardComponent:v["a"]},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null}}},B=O,D=Object(k["a"])(B,p,h,!1,null,null,null),M=D.exports,z=a("1fca"),S={name:"line-chart",extends:z["a"],mixins:[z["b"].reactiveProp],props:{extraOptions:Object},data:function(){return{ctx:null}},mounted:function(){var e=this;this.$watch("chartData",(function(t,a){a||e.renderChart(e.chartData,e.extraOptions)}),{immediate:!0})}},N=a("7080"),E={name:"home",components:{ClientsTableSample:N["a"],LineChart:S,CardComponent:v["a"],CardWidget:M,Tiles:b["a"],HeroBar:f["a"],TitleBar:m["a"]},data:function(){return{defaultChart:{chartData:null,extraOptions:d}}},computed:{titleStack:function(){return["Admin","Dashboard"]}},mounted:function(){this.fillChartData(),this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{randomChartData:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.round(200*Math.random()));return t},fillChartData:function(){this.defaultChart.chartData={datasets:[{fill:!1,borderColor:c.default.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:c.default.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:c.default.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:c.default.info,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:c.default.info,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:c.default.info,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:c.default.danger,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:c.default.danger,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:c.default.danger,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)}],labels:["01","02","03","04","05","06","07","08","09"]}}}},$=E,P=Object(k["a"])($,r,o,!1,null,null,null),T=P.exports;s["a"].use(n["a"]);var L=[{meta:{title:"Dashboard"},path:"/",name:"home",component:T},{meta:{title:"Tables"},path:"/tables",name:"tables",component:function(){return a.e("tables").then(a.bind(null,"8840d"))}},{meta:{title:"Forms"},path:"/forms",name:"forms",component:function(){return Promise.all([a.e("client-form~forms"),a.e("forms")]).then(a.bind(null,"0894"))}},{meta:{title:"Profile"},path:"/profile",name:"profile",component:function(){return a.e("profile").then(a.bind(null,"c66d"))}},{meta:{title:"New Client"},path:"/client/new",name:"client.new",component:function(){return Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b"))}},{meta:{title:"Edit Client"},path:"/client/:id",name:"client.edit",component:function(){return Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b"))},props:!0}],V=new n["a"]({base:"/",routes:L,scrollBehavior:function(e,t,a){return a||{x:0,y:0}}}),I=V,F=(a("b0c0"),a("2f62"));s["a"].use(F["a"]);var R=new F["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideMobileExpanded:!1},mutations:{basic:function(e,t){e[t.key]=t.value},user:function(e,t){t.name&&(e.userName=t.name),t.email&&(e.userEmail=t.email),t.avatar&&(e.userAvatar=t.avatar)},asideMobileStateToggle:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s="has-aside-mobile-expanded";t=null!==a?a:!e.isAsideMobileExpanded,t?document.documentElement.classList.add(s):document.documentElement.classList.remove(s),e.isAsideMobileExpanded=t}},actions:{}}),H=a("9483");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("aside-menu",{attrs:{menu:e.menu}}),a("router-view"),a("footer-bar")],1)},U=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{directives:[{name:"show",rawName:"v-show",value:e.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuToggleMobile(t)}}},[a("b-icon",{attrs:{icon:e.menuToggleMobileIcon}})],1),e._m(0)]),a("div",{staticClass:"navbar-brand is-right"},[a("a",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuNavBarToggle(t)}}},[a("b-icon",{attrs:{icon:e.menuNavBarToggleIcon,"custom-size":"default"}})],1)]),a("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":e.isMenuNavBarActive}},[a("div",{staticClass:"navbar-end"},[a("nav-bar-menu",{staticClass:"has-divider"},[a("b-icon",{attrs:{icon:"menu","custom-size":"default"}}),a("span",[e._v("Sample Menu")]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[e._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[e._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[e._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log Out")])],1)],1)],1),a("nav-bar-menu",{staticClass:"has-divider has-user-avatar"},[a("user-avatar"),a("div",{staticClass:"is-user-name"},[a("span",[e._v(e._s(e.userName))])]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[e._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[e._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[e._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log Out")])],1)],1)],1),a("a",{staticClass:"navbar-item has-divider is-desktop-icon-only",attrs:{href:"https://justboil.me/bulma-admin-template/one",title:"About"}},[a("b-icon",{attrs:{icon:"help-circle-outline","custom-size":"default"}}),a("span",[e._v("About")])],1),a("a",{staticClass:"navbar-item is-desktop-icon-only",attrs:{title:"Log out"},on:{click:e.logout}},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log out")])],1)],1)])])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{placeholder:"Search everywhere..."}})])])}],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":e.isHoverable,"is-active":e.isDropdownActive},on:{click:e.toggle}},[a("a",{staticClass:"navbar-link is-arrowless"},[e._t("default"),a("b-icon",{attrs:{icon:e.toggleDropdownIcon,"custom-size":"default"}})],2),e._t("dropdown")],2)},K=[],Q={name:"NavBarMenu",props:{isHoverable:{type:Boolean,default:!1}},data:function(){return{isDropdownActive:!1}},computed:{toggleDropdownIcon:function(){return this.isDropdownActive?"chevron-up":"chevron-down"}},created:function(){window.addEventListener("click",this.forceClose)},beforeDestroy:function(){window.removeEventListener("click",this.forceClose)},methods:{toggle:function(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose:function(e){this.$el.contains(e.target)||(this.isDropdownActive=!1)}}},X=Q,Y=Object(k["a"])(X,G,K,!1,null,null,null),Z=Y.exports,ee=a("808f"),te={name:"NavBar",components:{UserAvatar:ee["a"],NavBarMenu:Z},data:function(){return{isMenuNavBarActive:!1}},computed:Object(l["a"])({menuNavBarToggleIcon:function(){return this.isMenuNavBarActive?"close":"dots-vertical"},menuToggleMobileIcon:function(){return this.isAsideMobileExpanded?"backburger":"forwardburger"}},Object(F["b"])(["isNavBarVisible","isAsideMobileExpanded","userName"])),methods:{menuToggleMobile:function(){this.$store.commit("asideMobileStateToggle")},menuNavBarToggle:function(){this.isMenuNavBarActive=!this.isMenuNavBarActive},logout:function(){this.$buefy.snackbar.open({message:"Log out clicked",queue:!1})}}},ae=te,se=Object(k["a"])(ae,q,J,!1,null,null,null),ie=se.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left is-expanded"},[a("aside-tools",{attrs:{"is-main-menu":!0}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("b",[e._v("Admin")]),e._v(" One ")])]),a("div",{staticClass:"menu is-menu-main"},[e._l(e.menu,(function(t,s){return["string"===typeof t?a("p",{key:s,staticClass:"menu-label"},[e._v(e._s(t))]):a("aside-menu-list",{key:s,attrs:{menu:t},on:{"menu-click":e.menuClick}})]}))],2)],1)},re=[],oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-tools"},[a("div",{staticClass:"aside-tools-label"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._t("label")],2)])},le=[],ce={name:"AsideTools",props:{icon:{type:String,default:null},label:{type:String,default:null}}},ue=ce,de=Object(k["a"])(ue,oe,le,!1,null,null,null),me=de.exports,fe=a("9a7b"),be={name:"AsideMenu",components:{AsideTools:me,AsideMenuList:fe["default"]},props:{menu:{type:Array,default:function(){return[]}}},computed:Object(l["a"])({},Object(F["b"])(["isAsideVisible"])),methods:{menuClick:function(e){}}},pe=be,he=Object(k["a"])(pe,ne,re,!1,null,null,null),ve=he.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{directives:[{name:"show",rawName:"v-show",value:e.isFooterBarVisible,expression:"isFooterBarVisible"}],staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"footer-copyright"},[a("b",[e._v("© "+e._s(e.year)+", JustBoil.me")]),e._v(" — Admin One Demo "),a("span",{staticClass:"tag"},[e._v("v1.2.7")])])])]),e._m(0)])])])},je=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"logo"},[s("a",{attrs:{href:"https://justboil.me"}},[s("img",{attrs:{src:a("226e"),alt:"JustBoil.me"}})])])])])}],Ce=a("c1df"),we=a.n(Ce),ye={name:"FooterBar",computed:Object(l["a"])({year:function(){return we()().year()}},Object(F["b"])(["isFooterBarVisible"]))},_e=ye,ke=Object(k["a"])(_e,ge,je,!1,null,null,null),xe=ke.exports,Ae={name:"home",components:{FooterBar:xe,AsideMenu:ve,NavBar:ie},computed:{menu:function(){return["General",[{to:"/",icon:"desktop-mac",label:"Dashboard"}],"Examples",[{to:"/tables",label:"Tables",icon:"table",updateMark:!0},{to:"/forms",label:"Forms",icon:"square-edit-outline"},{to:"/profile",label:"Profile",icon:"account-circle"},{label:"Submenus",subLabel:"Submenus Example",icon:"view-list",menu:[{href:"#void",label:"Sub-item One"},{href:"#void",label:"Sub-item Two"}]}],"About",[{href:"https://admin-one-vue-cli.justboil.me",label:"Premium Demo",icon:"credit-card"},{href:"https://justboil.me/bulma-admin-template/one",label:"About",icon:"help-circle"}]]}},created:function(){this.$store.commit("user",{name:"John Doe",email:"john@example.com",avatar:"https://avatars.dicebear.com/v2/gridy/John-Doe.svg"})}},Oe=Ae,Be=Object(k["a"])(Oe,W,U,!1,null,null,null),De=Be.exports,Me="Admin One Bulma";I.afterEach((function(e){R.commit("asideMobileStateToggle",!1),e.meta.title?document.title="".concat(e.meta.title," — ").concat(Me):document.title=Me})),s["a"].config.productionTip=!1,s["a"].use(i["a"]),new s["a"]({router:I,store:R,render:function(e){return e(De)}}).$mount("#app")},"6df7":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[e.title?a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._v(" "+e._s(e.title)+" ")],1),e.headerIcon?a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick(t)}}},[a("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()]):e._e(),a("div",{staticClass:"card-content"},[e._t("default")],2)])},i=[],n={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null}},methods:{headerIconClick:function(){this.$emit("header-icon-click")}}},r=n,o=a("2877"),l=Object(o["a"])(r,s,i,!1,null,null,null);t["a"]=l.exports},7080:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("modal-box",{attrs:{"is-active":e.isModalActive,"trash-object-name":e.trashObjectName},on:{confirm:e.trashConfirm,cancel:e.trashCancel}}),a("b-table",{attrs:{"checked-rows":e.checkedRows,checkable:e.checkable,loading:e.isLoading,paginated:e.paginated,"per-page":e.perPage,striped:!0,hoverable:!0,"default-sort":"name",data:e.clients},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{staticClass:"has-no-head-mobile is-image-cell"},[a("div",{staticClass:"image"},[a("img",{staticClass:"is-rounded",attrs:{src:t.row.avatar,alt:t.row.name}})])]),a("b-table-column",{attrs:{label:"Name",field:"name",sortable:""}},[e._v(" "+e._s(t.row.name)+" ")]),a("b-table-column",{attrs:{label:"Company",field:"company",sortable:""}},[e._v(" "+e._s(t.row.company)+" ")]),a("b-table-column",{attrs:{label:"City",field:"city",sortable:""}},[e._v(" "+e._s(t.row.city)+" ")]),a("b-table-column",{staticClass:"is-progress-col",attrs:{label:"Progress",field:"progress",sortable:""}},[a("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:t.row.progress}},[e._v(e._s(t.row.progress))])]),a("b-table-column",{attrs:{label:"Created"}},[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:t.row.created}},[e._v(e._s(t.row.created))])]),a("b-table-column",{staticClass:"is-actions-cell",attrs:{"custom-key":"actions"}},[a("div",{staticClass:"buttons is-right"},[a("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:t.row.id}}}},[a("b-icon",{attrs:{icon:"account-edit",size:"is-small"}})],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),e.trashModal(t.row)}}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)])]}}])},[a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[e.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[e._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[e._v("Nothing's here…")])]],2)])])],1)},i=[],n=(a("b0c0"),a("bc3a")),r=a.n(n),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{active:e.isModalActive,"has-modal-card":""},on:{"update:active":function(t){e.isModalActive=t}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[e._v("This will permanently delete "),a("b",[e._v(e._s(e.trashObjectName))])]),a("p",[e._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.cancel}},[e._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:e.confirm}},[e._v("Delete")])])])])},l=[],c={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}},watch:{isActive:function(e){this.isModalActive=e},isModalActive:function(e){e||this.cancel()}}},u=c,d=a("2877"),m=Object(d["a"])(u,o,l,!1,null,null,null),f=m.exports,b={name:"ClientsTableSample",components:{ModalBox:f},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},mounted:function(){var e=this;this.dataUrl&&(this.isLoading=!0,r.a.get(this.dataUrl).then((function(t){e.isLoading=!1,t.data&&t.data.data&&(t.data.data.length>e.perPage&&(e.paginated=!0),e.clients=t.data.data)})).catch((function(t){e.isLoading=!1,e.$buefy.toast.open({message:"Error: ".concat(t.message),type:"is-danger"})})))},methods:{trashModal:function(e){this.trashObject=e,this.isModalActive=!0},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1}}},p=b,h=Object(d["a"])(p,s,i,!1,null,null,null);t["a"]=h.exports},"808f":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"is-user-avatar"},[a("img",{attrs:{src:e.newUserAvatar,alt:e.userName}})])},i=[],n=(a("ac1f"),a("5319"),a("5530")),r=a("2f62"),o={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:Object(n["a"])({newUserAvatar:function(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;var e="somename";return this.userName&&(e=this.userName.replace(/[^a-z0-9]+/i,"")),"https://avatars.dicebear.com/v2/human/".concat(e,".svg?options[mood][]=happy")}},Object(r["b"])(["userAvatar","userName"]))},l=o,c=a("2877"),u=Object(c["a"])(l,s,i,!1,null,null,null);t["a"]=u.exports},"9a7b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{class:{"menu-list":!e.isSubmenuList}},e._l(e.menu,(function(t,s){return a("aside-menu-item",{key:s,attrs:{item:t},on:{"menu-click":e.menuClick}})})),1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{class:{"is-active":e.isDropdownActive}},[a(e.componentIs,{tag:"component",class:{"has-icon":!!e.item.icon,"has-dropdown-icon":e.hasDropdown},attrs:{to:e.itemTo,href:e.itemHref,"exact-active-class":"is-active"},on:{click:e.menuClick}},[e.item.icon?a("b-icon",{class:{"has-update-mark":e.item.updateMark},attrs:{icon:e.item.icon,"custom-size":"default"}}):e._e(),e.item.label?a("span",{class:{"menu-item-label":!!e.item.icon}},[e._v(e._s(e.item.label))]):e._e(),e.hasDropdown?a("div",{staticClass:"dropdown-icon"},[a("b-icon",{attrs:{icon:e.dropdownIcon,"custom-size":"default"}})],1):e._e()],1),e.hasDropdown?a("aside-menu-list",{attrs:{menu:e.item.menu,isSubmenuList:!0}}):e._e()],1)},r=[],o=(a("d3b7"),{name:"AsideMenuItem",components:{AsideMenuList:function(){return Promise.resolve().then(a.bind(null,"9a7b"))}},data:function(){return{isDropdownActive:!1}},props:{item:{type:Object,default:null}},methods:{menuClick:function(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive)}},computed:{componentIs:function(){return this.item.to?"router-link":"a"},hasDropdown:function(){return!!this.item.menu},dropdownIcon:function(){return this.isDropdownActive?"minus":"plus"},itemTo:function(){return this.item.to?this.item.to:null},itemHref:function(){return this.item.href?this.item.href:null}}}),l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null),d=u.exports,m={name:"AsideMenuList",components:{AsideMenuItem:d},props:{isSubmenuList:{type:Boolean,default:!1},menu:{type:Array,default:function(){return[]}}},methods:{menuClick:function(e){this.$emit("menu-click",e)}}},f=m,b=Object(c["a"])(f,s,i,!1,null,null,null);t["default"]=b.exports},"9e7c":function(e,t,a){"use strict";a("d81d"),a("a9e3");var s,i,n=a("91c8"),r=a.n(n),o={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},render:function(e){var t=this;return this.$slots.default.length<=this.maxPerRow?this.renderAncestor(e,this.$slots.default):e("div",{attrs:{class:"is-tiles-wrapper"}},r()(this.$slots.default,this.maxPerRow).map((function(a){return t.renderAncestor(e,a)})))},methods:{renderAncestor:function(e,t){return e("div",{attrs:{class:"tile is-ancestor"}},t.map((function(t){return e("div",{attrs:{class:"tile is-parent"}},[t])})))}}},l=o,c=a("2877"),u=Object(c["a"])(l,s,i,!1,null,null,null);t["a"]=u.exports},b107:function(e,t,a){}});
//# sourceMappingURL=app.7f01be73.js.map