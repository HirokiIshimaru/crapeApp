(function(t){function a(a){for(var e,r,l=a[0],n=a[1],o=a[2],v=0,m=[];v<l.length;v++)r=l[v],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);d&&d(a);while(m.length)m.shift()();return c.push.apply(c,o||[]),s()}function s(){for(var t,a=0;a<c.length;a++){for(var s=c[a],e=!0,l=1;l<s.length;l++){var n=s[l];0!==i[n]&&(e=!1)}e&&(c.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},c=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var d=n;c.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"04b6":function(t,a,s){"use strict";var e=s("75bb"),i=s.n(e);i.a},"0ae2":function(t,a,s){"use strict";var e=s("74ce"),i=s.n(e);i.a},1932:function(t,a,s){t.exports=s.p+"img/ar.856e6353.svg"},"1f29":function(t,a,s){t.exports=s.p+"img/menu-chocolate-bananas-3.04a1cc0e.png"},2004:function(t,a,s){t.exports=s.p+"img/img-stroke.749b1eb1.png"},"252e":function(t,a,s){t.exports=s.p+"img/img-banner-kodawari-crepe.760323bb.jpg"},2846:function(t,a,s){t.exports=s.p+"img/img-banner-instagram.f65deae1.jpg"},"35bc":function(t,a,s){"use strict";var e=s("d3e2"),i=s.n(e);i.a},"36be":function(t,a,s){t.exports=s.p+"img/menu.ad839f8c.svg"},"4fe1":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAYAAACUY/8YAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAABAAAAABk7S0UAAAAQ0lEQVQYGWP4//9/ABCfB+L7IDYDDgCSA2LS1QE1PQBiGDiPw3wGoAKy1DGhGciIxsfFJV4d0GUgr1+AupBQEJGsDgBbNoR7ksMEhAAAAABJRU5ErkJggg=="},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("header",[e("div",{staticClass:"header-box"},[e("h1",[t._v(t._s(t.headerTitle))])]),e("router-link",{staticClass:"setting",attrs:{to:"/Setting"}},[e("img",{attrs:{src:s("4fe1"),alt:""}})])],1),e("main",[e("router-view")],1),e("nav",[e("router-link",{staticClass:"nav-child",attrs:{to:"/",exact:""},nativeOn:{click:function(a){return t.title("HOME")}}},[e("img",{attrs:{src:s("86e6"),alt:"home-icon"}}),e("span",{staticClass:"nav-name"},[t._v("HOME")])]),e("router-link",{staticClass:"nav-child",attrs:{to:"/OpenStore",exact:""},nativeOn:{click:function(a){return t.title("SHOP")}}},[e("img",{attrs:{src:s("5cb7"),alt:"shop-icon"}}),e("span",{staticClass:"nav-name"},[t._v("SHOP")])]),e("router-link",{staticClass:"nav-child",attrs:{to:"/Menu",exact:""},nativeOn:{click:function(a){return t.title("MENU")}}},[e("img",{attrs:{src:s("36be"),alt:"menu-icon"}}),e("span",{staticClass:"nav-menu"},[t._v("MENU")])]),e("router-link",{staticClass:"nav-child",attrs:{to:"/AR",exact:""},nativeOn:{click:function(a){return t.title("AR")}}},[e("img",{attrs:{src:s("1932"),alt:"ar-icon"}}),e("span",{staticClass:"nav-name"},[t._v("AR")])])],1)])},c=[],r={data:function(){return{headerTitle:"HOME"}},methods:{title:function(t){this.headerTitle=t}}},l=r,n=(s("bb0d"),s("2877")),o=Object(n["a"])(l,i,c,!1,null,"cc040de8",null),d=o.exports,v=s("8c4f"),m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"home container-fluild"},[e("div",{staticClass:"card text-white",staticStyle:{background:"#6C4E44",padding:"5px"}},[e("img",{staticClass:"card-img",attrs:{src:s("eb02"),alt:"..."}}),e("div",{staticClass:"card-img-overlay"},[e("h5",{staticClass:"card-title",staticStyle:{"font-size":"12px"}},[t._v("コロナ感染予防のための取り組み")]),e("ul",{staticClass:"corona"},[e("li",[e("div",{staticClass:"bg"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"31.703",height:"22.934",viewBox:"0 0 31.703 22.934"}},[e("g",{attrs:{id:"グループ_83","data-name":"グループ 83",transform:"translate(-36.965 -68.23)"}},[e("path",{attrs:{id:"パス_68","data-name":"パス 68",d:"M196,98.923a3.914,3.914,0,0,0-4.686-3.222l-5.993,1.282-.2.9,6.369-1.363a3.073,3.073,0,0,1,2.28,5.605l-8.107,5.1.251.836,8.3-5.228A3.911,3.911,0,0,0,196,98.923Z",transform:"translate(-127.379 -23.542)",fill:"#6c4e44"}}),e("path",{attrs:{id:"パス_69","data-name":"パス 69",d:"M51.463,70.174a1.36,1.36,0,0,1,2.7.258v.794l.841.106v-.9a2.2,2.2,0,0,0-4.363-.418L50.061,73l.966-.563Z",transform:"translate(-11.259)",fill:"#6c4e44"}}),e("path",{attrs:{id:"パス_70","data-name":"パス 70",d:"M54.441,125.332l-.363-6.939,11.22.561.042-.84-11.224-.561.421-2.916-.833-.12-.445,3.081-2.637.551.172.824,2.445-.511.35,6.694-1.738-.835-.364.758,2.2,1.055.514,2.474.823-.173-.474-2.262,10.875-2.716-.2-.816Z",transform:"translate(-11.742 -39.795)",fill:"#6c4e44"}}),e("path",{attrs:{id:"パス_71","data-name":"パス 71",d:"M56.99,96.878l-14.783-1.86L38.119,97.4l-1.154,4.771,1.689,8.776,4.072,3.249,7.545-2.241,7.563-3.8-1.924-6.4Zm-.164,10.841L50,111.159l-7.088,2.105-3.486-2.782-1.6-8.292,1.026-4.244,3.532-2.058L55.969,97.6l-.927,4.188Z",transform:"translate(0 -23.031)",fill:"#6c4e44"}})])])]),e("div",{staticClass:"card-text"},[t._v("マスク着用")])]),e("li",[e("div",{staticClass:"bg"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25.061",height:"29.934",viewBox:"0 0 25.061 29.934"}},[e("g",{attrs:{id:"グループ_85","data-name":"グループ 85",transform:"translate(-38.715 -64.739)"}},[e("path",{attrs:{id:"パス_73","data-name":"パス 73",d:"M53.285,75.256l-3.307-2.607v-2a1.323,1.323,0,0,0-1.322-1.321H47.543v-1.9h1.345a1.091,1.091,0,0,0,1.08-.95h7.388a1.177,1.177,0,0,1,1.176,1.176v.319h.79v-.319a1.968,1.968,0,0,0-1.966-1.966H49.968a1.091,1.091,0,0,0-1.08-.95H43.924a1.091,1.091,0,0,0-1.09,1.09v.51a1.091,1.091,0,0,0,1.09,1.09h1.345v1.9H44.156a1.323,1.323,0,0,0-1.322,1.321v2l-3.307,2.607a2.12,2.12,0,0,0-.812,1.675V93.12a1.555,1.555,0,0,0,1.553,1.553H52.544A1.555,1.555,0,0,0,54.1,93.12V76.931A2.12,2.12,0,0,0,53.285,75.256Zm-9.361-8.617a.3.3,0,0,1-.3-.3v-.51a.3.3,0,0,1,.3-.3h4.965a.3.3,0,0,1,.3.3v.51a.3.3,0,0,1-.3.3Zm2.829.79v1.9h-.694v-1.9Zm-3.129,3.222a.532.532,0,0,1,.532-.532h4.5a.532.532,0,0,1,.532.532v1.8H43.624ZM53.308,93.12a.764.764,0,0,1-.763.763H40.268a.764.764,0,0,1-.763-.763V87.208h13.8Zm0-13.708H39.5V76.931a1.335,1.335,0,0,1,.511-1.054l3.35-2.64h6.081l3.35,2.64a1.335,1.335,0,0,1,.511,1.054Z",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_110","data-name":"長方形 110",width:"0.79",height:"1.027",transform:"translate(58.533 73.504)",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_111","data-name":"長方形 111",width:"0.79",height:"1.274",transform:"translate(58.533 71.419)",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_112","data-name":"長方形 112",width:"1.274",height:"0.79",transform:"matrix(0.342, -0.94, 0.94, 0.342, 56.766, 72.242)",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_113","data-name":"長方形 113",width:"1.027",height:"0.79",transform:"translate(56.138 73.969) rotate(-70)",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_114","data-name":"長方形 114",width:"1.027",height:"0.79",transform:"matrix(0.643, -0.766, 0.766, 0.643, 54.079, 72.623)",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_115","data-name":"長方形 115",width:"1.274",height:"0.79",transform:"translate(55.261 71.215) rotate(-49.999)",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_116","data-name":"長方形 116",width:"0.79",height:"1.274",transform:"translate(61.17 70.746) rotate(-40.001)",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_117","data-name":"長方形 117",width:"0.79",height:"1.027",transform:"translate(62.511 72.343) rotate(-40)",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_118","data-name":"長方形 118",width:"0.79",height:"1.027",transform:"translate(60.624 73.274) rotate(-20.002)",fill:"#6c4e44"}}),e("path",{attrs:{id:"パス_74","data-name":"パス 74",d:"M142.6,87.661l-.621-.226-.556-.466-.819.976.605.508.584-.7-.311.854.742.27.311-.854v.909h.79v-.909l.311.854.742-.27-.311-.854.584.7.605-.508-.819-.976-.556.466-.621.226Z",transform:"translate(-84.003 -18.328)",fill:"#6c4e44"}}),e("rect",{attrs:{id:"長方形_119","data-name":"長方形 119",width:"0.79",height:"1.274",transform:"translate(59.911 71.315) rotate(-20)",fill:"#6c4e44"}})])])]),e("div",{staticClass:"card-text"},[t._v("アルコール")])]),e("li",[e("div",{staticClass:"bg"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"21.796",height:"32.161",viewBox:"0 0 21.796 32.161"}},[e("g",{attrs:{id:"グループ_84","data-name":"グループ 84",transform:"translate(-265 -160)"}},[e("path",{attrs:{id:"パス_72","data-name":"パス 72",d:"M96.138,52.534V46.26a2.095,2.095,0,0,0-3.257-1.745V42.6a2.37,2.37,0,0,0-2.264-2.458,2.148,2.148,0,0,0-1.436.56,2.257,2.257,0,1,0-4.512-.08,2.133,2.133,0,0,0-1.337-.479A2.37,2.37,0,0,0,81.068,42.6v9.542l-.011,2.579L79.7,52.87c-.171-.224-.345-.479-.53-.75A10.267,10.267,0,0,0,78.079,50.7a2.161,2.161,0,0,0-3.7,1.911,15.286,15.286,0,0,0,1.57,3.479c.3.565.612,1.149.865,1.663,1.255,2.54,4.269,7.349,5.507,9.3a2.6,2.6,0,0,1,.406,1.4v2.083h.936V68.452a3.535,3.535,0,0,0-.551-1.9c-1.23-1.937-4.223-6.713-5.458-9.212-.26-.527-.575-1.117-.879-1.688a16.466,16.466,0,0,1-1.469-3.17,1.228,1.228,0,0,1,2.108-1.122,9.649,9.649,0,0,1,.979,1.286c.183.269.373.547.554.784l2.2,2.991a.468.468,0,0,0,.845-.275l.017-4V42.6a1.34,1.34,0,1,1,2.655,0v9.93H85.6v-11.7a1.34,1.34,0,1,1,2.655,0v11.7H89.29V42.6a1.34,1.34,0,1,1,2.655,0V52.867h.936V46.26a1.16,1.16,0,1,1,2.321,0v6.281c.035,2.312-.03,8.672-.743,10.312a22.89,22.89,0,0,0-1.615,5.313l0,2.369h.936l0-2.369a22.34,22.34,0,0,1,1.537-4.94C96.256,61.066,96.143,52.874,96.138,52.534Z",transform:"translate(190.651 121.626)",fill:"#6c4e44"}}),e("line",{attrs:{id:"線_28","data-name":"線 28",x2:"10.05",transform:"translate(273.876 190.824)",fill:"none",stroke:"#6c4e44","stroke-miterlimit":"10","stroke-width":"1"}})])])]),e("div",{staticClass:"card-text"},[t._v("手袋着用")])])])])]),t._m(0),t._m(1),t._m(2)])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card bg-dark text-white"},[e("img",{staticClass:"card-img",attrs:{src:s("d627"),alt:"..."}}),e("div",{staticClass:"card-img-overlay"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card bg-dark text-white"},[e("img",{staticClass:"card-img",attrs:{src:s("252e"),alt:""}}),e("div",{staticClass:"card-img-overlay",staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[e("div",{staticClass:"card-title",staticStyle:{height:"45px",width:"250px","background-color":"rgba(7,2,3,0.5)",display:"flex","align-items":"center","justify-content":"center","letter-spacing":"8px"}},[t._v("当店のこだわり")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card bg-dark text-white"},[e("img",{staticClass:"card-img",attrs:{src:s("2846"),alt:"..."}}),e("div",{staticClass:"card-img-overlay p-20"},[e("div",{staticClass:"p-20",staticStyle:{border:"2px solid #fff",height:"100%",padding:"20px"}},[e("h5",{staticClass:"card-title"},[t._v("Instagram challenge!")]),e("p",{staticClass:"card-text",staticStyle:{"font-size":"12px"}},[t._v("参加するとトッピング無料！")])])])])}],f=(s("04b6"),{}),u=Object(n["a"])(f,m,p,!1,null,"124c2aa1",null),h=u.exports,g=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("ARカメラ")])])}],C=(s("9865"),{}),b=Object(n["a"])(C,g,_,!1,null,null,null),x=b.exports,A=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"nav"},[s("button",{staticClass:"nav-child",attrs:{id:"campaign"},on:{click:function(a){return t.view1()}}},[s("span",[t._v("campaign")]),s("br"),t._v("menu"),s("br"),t._v("キャンペーンメニュー")]),s("button",{staticClass:"nav-child",attrs:{id:"crape"},on:{click:function(a){return t.view2()}}},[s("span",[t._v("crape")]),s("br"),t._v("menu"),s("br"),t._v("クレープメニュー")]),s("button",{staticClass:"nav-child",attrs:{id:"drink"},on:{click:function(a){return t.view3()}}},[s("span",[t._v("drink")]),s("br"),t._v("menu"),s("br"),t._v("ドリンクメニュー")])]),s(t.currentView,{tag:"component",attrs:{id:"menu-comoponent"}})],1)},y=[],w=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"menu"},[e("div",{staticClass:"title text-left text-danger"},[e("p",[t._v("SEASON MENU")]),e("span",[t._v("シーズンメニュー")])]),e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"card col ml-2 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("de37"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])]),e("div",{staticClass:"card col ml-1 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("cdd8"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])])]),e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"card col ml-2 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("8505"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])]),e("div",{staticClass:"card col ml-1 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("1f29"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"card col ml-2 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("8505"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])]),e("div",{staticClass:"card col ml-1 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("1f29"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])])])])])}],O={},E=Object(n["a"])(O,w,S,!1,null,null,null),k=E.exports,M=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"menu"},[e("div",{staticClass:"title text-left text-danger"},[e("p",[t._v("SEASON MENU")]),e("span",[t._v("シーズンメニュー")])]),e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"card col ml-2 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("de37"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])]),e("div",{staticClass:"card col ml-1 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("cdd8"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])])]),e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"card col ml-2 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("8505"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])]),e("div",{staticClass:"card col ml-1 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("1f29"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"card col ml-2 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("8505"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])]),e("div",{staticClass:"card col ml-1 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("1f29"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])])])])])}],$={},B=Object(n["a"])($,M,j,!1,null,null,null),V=B.exports,N=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"menu"},[e("div",{staticClass:"title text-left text-danger"},[e("p",[t._v("SEASON MENU")]),e("span",[t._v("シーズンメニュー")])]),e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"card col ml-2 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("de37"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])]),e("div",{staticClass:"card col ml-1 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("cdd8"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])])]),e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"card col ml-2 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("8505"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])]),e("div",{staticClass:"card col ml-1 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("1f29"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"card col ml-2 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("8505"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])]),e("div",{staticClass:"card col ml-1 mr-3"},[e("img",{staticClass:"card-img-top",attrs:{src:s("1f29"),alt:"..."}}),e("hr"),e("div",{staticClass:"card-body text-left"},[e("h5",{staticClass:"card-title"},[t._v("chocolate bananas crepe")]),e("p",{staticClass:"card-text"},[t._v("チョコバナナ")]),e("p",{staticClass:"text-right",staticStyle:{color:"red"}},[t._v("¥"),e("span",[t._v("560")])])])])])])])}],Z={},P=Object(n["a"])(Z,N,H,!1,null,null,null),D=P.exports,R={components:{campaign:k,crape:V,drink:D},data:function(){return{currentView:"campaign"}},methods:{view1:function(){this.currentView="campaign";var t=document.getElementById("campaign");t.style.backgroundColor="#D14220"},view2:function(){this.currentView="crape";var t=document.getElementById("crape");t.style.backgroundColor="#D14220"},view3:function(){this.currentView="drink";var t=document.getElementById("drink");t.style.backgroundColor="#D14220"}}},U=R,L=(s("eee8"),Object(n["a"])(U,A,y,!1,null,null,null)),T=L.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"map"},[t._m(0),e("div",{staticClass:"banner"},[e("div",{staticClass:"card text-white"},[e("img",{staticClass:"card-img",attrs:{src:s("2004"),alt:"..."}}),e("div",{staticClass:"card-img-overlay text-center"},[t._m(1),e("div",{staticClass:"today",staticStyle:{"font-size":"12px"}},[e("p",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"17",viewBox:"0 0 18 17"}},[e("g",{attrs:{id:"旗のフリーアイコンその3",transform:"translate(-0.001 -25.726)"}},[e("path",{attrs:{id:"パス_41","data-name":"パス 41",d:"M144.673,83.775c2.383.378,7.865,3.216,7.132,5.289l-.21.9a4.583,4.583,0,0,0,4.659,2.606c-.733,2.168-2.745,2.823-5.209,2.954-3.721-.2-3.217-1.17-3.217-1.17s3.07-1.492-6.455-2.473Z",transform:"translate(-138.253 -55.719)",fill:"#fff"}}),e("path",{attrs:{id:"パス_42","data-name":"パス 42",d:"M.966,42.726a1.036,1.036,0,0,1-.337-.056.868.868,0,0,1-.567-1.14L6.23,26.3a.992.992,0,0,1,1.24-.521.867.867,0,0,1,.567,1.14L1.869,42.148A.965.965,0,0,1,.966,42.726Z",transform:"translate(0 0)",fill:"#fff"}})])]),e("br"),t._v(" TODAY ")]),e("p",[t._v("LOFT梅田店前")]),e("img",{staticClass:"img-fluid",attrs:{src:s("9393"),alt:"map today"}})]),t._m(2)])])])])},Q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner"},[e("div",{staticClass:"card text-white"},[e("img",{staticClass:"card-img",attrs:{src:s("eb02"),height:"120",alt:"..."}}),e("div",{staticClass:"card-img-overlay text-center"},[e("div",{staticClass:"card-title",staticStyle:{"font-size":"16px"}},[t._v("business hours"),e("p",{staticStyle:{"font-size":"12px"}},[t._v("営業時間")]),t._v("11:00 - 18:00")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-title",staticStyle:{"font-size":"16px"}},[t._v("Shop MAP"),s("p",{staticStyle:{"font-size":"12px"}},[t._v("お店の場所")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tomorrow",staticStyle:{"font-size":"12px"}},[e("p",[t._v("TOMORROW")]),e("p",[t._v("LOFT梅田店前")]),e("img",{staticClass:"img-fluid",attrs:{src:s("9393"),alt:"map today"}})])}],z=(s("35bc"),{}),I=Object(n["a"])(z,G,Q,!1,null,"0321b20f",null),Y=I.exports,J=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("設定")]),s("router-link",{attrs:{to:"/Notice"}},[t._v("通知設定")])],1)},F=[],K=(s("0ae2"),{}),W=Object(n["a"])(K,J,F,!1,null,null,null),q=W.exports,X=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("通知設定")]),s("label",[s("input",{attrs:{type:"checkbox"},on:{click:function(a){return t.notice()}}}),t._v(" 通知 ")])])},tt=[],at=s("79b9"),st=s.n(at);e["default"].use(st.a);var et={data:function(){return{flag:!1}},methods:{notice:function(){var t,a=function(){var a=new Date,s=a.getMinutes();t!==s&&s%1===0&&(t=s,new Notification("新商品が完成しました!!"))};this.flag=!this.flag,this.flag?(Notification.requestPermission(),setInterval(a,1e3),console.log("通知ON")):this.flag||console.log("通知OFF")}}},it=et,ct=Object(n["a"])(it,X,tt,!1,null,null,null),rt=ct.exports;e["default"].use(v["a"]);var lt=[{path:"/",name:"Home",component:h},{path:"/AR",name:"AR",component:x},{path:"/Menu",name:"Menu",component:T},{path:"/OpenStore",name:"OpenStore",component:Y},{path:"/Setting",name:"Setting",component:q},{path:"/Notice",name:"Notice",component:rt}],nt=new v["a"]({mode:"history",base:"",routes:lt}),ot=nt,dt=s("2f62");e["default"].use(dt["a"]);var vt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),mt=s("5f5b");s("f9e3"),s("2dd8");e["default"].use(mt["a"]),e["default"].config.productionTip=!1,new e["default"]({router:ot,store:vt,render:function(t){return t(d)}}).$mount("#app")},"5a6a":function(t,a,s){},"5c63":function(t,a,s){},"5cb7":function(t,a,s){t.exports=s.p+"img/shop.ca6e5ecf.svg"},"74ce":function(t,a,s){},"75bb":function(t,a,s){},8505:function(t,a,s){t.exports=s.p+"img/menu-chocolate-bananas-2.cd5bb580.png"},"86e6":function(t,a,s){t.exports=s.p+"img/home.0e404fb1.svg"},9393:function(t,a,s){t.exports=s.p+"img/img-map-today.04e5fa2e.png"},9865:function(t,a,s){"use strict";var e=s("5c63"),i=s.n(e);i.a},b854:function(t,a,s){},bb0d:function(t,a,s){"use strict";var e=s("5a6a"),i=s.n(e);i.a},cdd8:function(t,a,s){t.exports=s.p+"img/menu-chocolate-bananas-1.73280851.png"},d3e2:function(t,a,s){},d627:function(t,a,s){t.exports=s.p+"img/img-banner-helloween.2205431f.jpg"},de37:function(t,a,s){t.exports=s.p+"img/menu-chocolate-bananas.52d3e10f.png"},eb02:function(t,a,s){t.exports=s.p+"img/img-banner-corona.88695012.png"},eee8:function(t,a,s){"use strict";var e=s("b854"),i=s.n(e);i.a}});
//# sourceMappingURL=app.69ec4f0c.js.map