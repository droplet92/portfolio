(function(t){function e(e){for(var r,i,o=e[0],s=e[1],c=e[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(v.length)v.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],r=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(r=!1)}r&&(l.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},l=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=s;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06ea":function(t,e,a){"use strict";a("7278")},"3a19":function(t,e,a){t.exports=a.p+"img/profile.074c3f51.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-responsive",{staticClass:"text-center pa-2",attrs:{height:"800vh"}},[a("v-sheet",{staticClass:"d-flex",attrs:{color:"grey lighten-4",height:"800",rounded:"md"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v(" HCI와 UX 평가 ")])])],1)],1),t._l(t.components,(function(e,r){return a("div",{key:r},[a("progress-navigator",{staticClass:"navigator",attrs:{currentStep:r+1}}),a("v-lazy",{attrs:{options:{threshold:.75},"min-height":"200",transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a(e,{tag:"component"})],1)],1)})),a("youtube",{staticClass:"youtube-player",attrs:{"video-id":"86nRW5NOb_c","player-width":"1600","player-height":"900"}})],2)],1)],1)},l=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-stepper",{staticClass:"size"},[a("v-stepper-header",[a("v-stepper-step",{attrs:{step:"1",complete:t.isComplete(1)(t.currentStep)}},[t._v(" 자기소개 ")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"2",complete:t.isComplete(2)(t.currentStep)}},[t._v(" 강의를 신청한 이유 ")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"3",complete:t.isComplete(3)(t.currentStep)}},[t._v(" 목표 ")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"4",complete:t.isComplete(4)(t.currentStep)}},[t._v(" 강점 ")])],1)],1)],1)],1)},o=[],s={name:"ProgressNavigator",props:{currentStep:Number},methods:{isComplete(t){return function(e){return e>=t}}}},c=s,p=(a("06ea"),a("2877")),u=a("6544"),v=a.n(u),d=a("a523"),f=a("ce7e"),h=a("0fd9"),m=a("7e85"),g=a("9c54"),C=a("56a4"),b=Object(p["a"])(c,i,o,!1,null,"669c6446",null),y=b.exports;v()(b,{VContainer:d["a"],VDivider:f["a"],VRow:h["a"],VStepper:m["a"],VStepperHeader:g["a"],VStepperStep:C["a"]});var w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1600"}},[r("v-row",[r("v-col",{attrs:{sm:"4"}},[r("v-img",{staticStyle:{"margin-left":"1rem"},attrs:{src:a("3a19")}})],1),r("v-col",[r("v-card-text",[r("h1",{staticClass:"font-weight-bold ml-8 mb-4"},[t._v(" 이한수 ")]),r("v-timeline",{attrs:{"align-top":""}},t._l(t.nodes,(function(e,a){return r("v-timeline-item",{key:a,attrs:{color:e.color,small:""},scopedSlots:t._u([e.year?{key:"opposite",fn:function(){return[r("span",{class:"headline font-weight-bold "+e.color+"--text",domProps:{textContent:t._s(e.year)}})]},proxy:!0}:null],null,!0)},[r("v-card",{staticClass:"elevation-2"},[r("v-card-title",[t._v(" "+t._s(e.title)+" ")])],1)],1)})),1)],1)],1)],1)],1)],1)},x=[],_={name:"Introduction",data:()=>({isActive:!1,nodes:[{year:2017,title:"광운대학교 컴퓨터정보공학부 입학",color:"yellow"},{title:"국민대 x 광운대 SW Challenge 3등",color:"yellow"},{title:"광운대 IoT 스마트 SW 경진대회 우수상(2등)",color:"yellow"},{title:"컴퓨터정보공학부 1학년 수석",color:"amber"},{year:2019,title:"KISA(한국인터넷진흥원) 개발/구축 용역",color:"amber"},{year:2020,title:"컴퓨터정보공학부 3-1 차석",color:"orange"},{title:"TOPCIT 수준 3 (503/1000)",color:"orange"},{title:'컴퓨터 동아리 COMs 학술지 작성 "MPU6050 센서를 이용한 모션 캡처"',color:"deep-orange"},{year:2021,title:"산학연계 SW 프로젝트 (학습을 통한 PC 데이터 로깅 및 관리 솔루션 개발)",color:"deep-orange"}]})},V=_,S=a("b0af"),j=a("99d9"),O=a("62ad"),T=a("adda"),P=a("8414"),I=a("1e06"),A=Object(p["a"])(V,w,x,!1,null,null,null),k=A.exports;v()(A,{VCard:S["a"],VCardText:j["a"],VCardTitle:j["b"],VCol:O["a"],VImg:T["a"],VRow:h["a"],VTimeline:P["a"],VTimelineItem:I["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("v-card",{attrs:{color:"lime lighten-2","max-width":"400"}},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("HCI와 UX")])]),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" 애플리케이션의 기술적인 면 보다 애플리케이션이 제공하는 기능을 효과적으로 전달하는 것이 더 중요하다고 판단 ")])],1)],1),a("v-col",{attrs:{cols:"3"}},[a("v-card",{attrs:{color:"lime lighten-2","max-width":"400"}},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("팀 프로젝트")])]),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" 복학을 했지만 오히려 집에 있는 시간이 더 많아져, 사람들과 같이 무언가를 해 보고 싶다고 생각 ")])],1)],1)],1)},M=[],$={name:"Background"},E=$,L=Object(p["a"])(E,R,M,!1,null,null,null),N=L.exports;v()(L,{VCard:S["a"],VCardText:j["a"],VCardTitle:j["b"],VCol:O["a"],VRow:h["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("v-card",{attrs:{color:"deep-purple lighten-3","max-width":"400"}},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("완성된 결과물")])]),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" 어떤 형태의 결과물이든 관계없이 잘 마무리지어 결과를 내는 것 ")])],1)],1),a("v-col",{attrs:{cols:"3"}},[a("v-card",{attrs:{color:"deep-purple lighten-3","max-width":"400"}},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("협업")])]),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" 팀원들과 잘 협업하는 것 ")])],1)],1)],1)},W=[],z={name:"Goals"},G=z,H=Object(p["a"])(G,U,W,!1,null,null,null),J=H.exports;v()(H,{VCard:S["a"],VCardText:j["a"],VCardTitle:j["b"],VCol:O["a"],VRow:h["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-list",{attrs:{disabled:""}},[a("v-list-item-group",t._l(t.items,(function(e,r){return a("v-list-item",{key:r},[a("v-list-item-content",[a("v-card",{attrs:{color:"grey lighten-4"}},[a("v-card-title",[a("span",{staticClass:"headline font-weight-bold"},[t._v(t._s(e.title))])]),a("v-card-text",{staticClass:"title font-weight-light"},[t._v(" "+t._s(e.text)+" ")])],1)],1)],1)})),1)],1)],1)},K=[],X={name:"StrongPoint",data:()=>({items:[{title:"애플리케이션 구현",text:"설계 → 개발 → 배포 전부"},{title:"다양한 개발 경험",text:"웹, 데스크탑, 게임, 보안, 네트워크 등"},{title:"다양한 프로그래밍 언어 사용 가능",text:"C, C++, C#, JAVA, javascript, python, go, lua 등"},{title:"협업 경험",text:"KISA 용역, 동아리 홈페이지 개발, 팀 프로젝트 등"},{title:"3D 프로그래밍 경험",text:"OpenGL, 언리얼엔진"},{title:"학점",text:"6학기 평균 4.2"},{title:"기타",text:"유니티 설치해봤다도르, 포브스 선정 가장 일 잘하는 CU 알바생 등등..."}]})},B=X,q=a("8860"),F=a("da13"),Q=a("5d23"),Y=a("1baa"),Z=Object(p["a"])(B,D,K,!1,null,null,null),tt=Z.exports;v()(Z,{VCard:S["a"],VCardText:j["a"],VCardTitle:j["b"],VList:q["a"],VListItem:F["a"],VListItemContent:Q["a"],VListItemGroup:Y["a"],VRow:h["a"]});var et={name:"App",components:{ProgressNavigator:y},data:()=>({components:[k,N,J,tt],isActive:!1})},at=et,rt=(a("a091"),a("7496")),nt=a("b687"),lt=a("f6c4"),it=a("6b53"),ot=a("8dd9"),st=Object(p["a"])(at,n,l,!1,null,"6fc61f86",null),ct=st.exports;v()(st,{VApp:rt["a"],VCol:O["a"],VLazy:nt["a"],VMain:lt["a"],VResponsive:it["a"],VRow:h["a"],VSheet:ot["a"]});var pt=a("f309");r["a"].use(pt["a"]);var ut=new pt["a"]({}),vt=a("f6dd");r["a"].config.productionTip=!1,r["a"].use(vt["a"]),new r["a"]({vuetify:ut,render:t=>t(ct)}).$mount("#app")},"5c76":function(t,e,a){},7278:function(t,e,a){},a091:function(t,e,a){"use strict";a("5c76")}});
//# sourceMappingURL=app.9a90c26b.js.map