(self.webpackChunkreact_starter=self.webpackChunkreact_starter||[]).push([[571],{6479:(e,t,n)=>{var r=n(7316);e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},7316:e=>{e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},3571:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var r=n(5977),o=n(2631),i=n(8926),c=n.n(i),a=n(7757),l=n.n(a),s=n(8134),u=n(8117),p=n(2127),f=n(8892),h=n(1303),d=n(1343),b=n(5893),m=u.ZP.div.withConfig({displayName:"Login__StyledLogin"})(["display:flex;"]);function y(){var e=(0,s.$)().t,t=(0,d.X)().loginUser,n=(0,h.r)(),r=n.isLoading,o=n.error,i=n.run;return o?(0,b.jsx)(f.F,{children:(0,b.jsx)("h1",{children:o})}):r?(0,b.jsx)(f.F,{children:(0,b.jsx)("h1",{children:e("global.loading")})}):(0,b.jsx)(f.F,{children:(0,b.jsxs)(m,{children:[(0,b.jsx)("h1",{children:e("login.title")}),(0,b.jsx)(p.z,{type:"submit",variant:p.i.PRIMARY,onClick:function(){return a.apply(this,arguments)},children:e("login.buttonText")})]})});function a(){return(a=c()(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(t());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}function O(){return(0,b.jsxs)(r.rs,{children:[(0,b.jsx)(r.AW,{exact:!0,path:o._.LOGIN,component:y}),(0,b.jsx)(r.l_,{to:o._.LOGIN})]})}},2127:(e,t,n)=>{"use strict";n.d(t,{i:()=>y,z:()=>P});var r,o,i,c,a,l,s=n(9713),u=n.n(s),p=n(6479),f=n.n(p),h=(n(5697),n(8117)),d=n(8634),b=n.n(d),m=n(4472),y={PRIMARY:"primary",SECONDARY:"secondary"},O=b().variants("theme","variant",(i={},u()(i,y.PRIMARY,(r={},u()(r,m.y.LIGHT,(function(e){return e.theme.palette.common.black})),u()(r,m.y.DARK,(function(e){return e.theme.palette.common.white})),r)),u()(i,y.SECONDARY,(o={},u()(o,m.y.LIGHT,(function(e){return e.theme.palette.common.black})),u()(o,m.y.DARK,(function(e){return e.theme.palette.common.white})),o)),i)),j=b().variants("theme","variant",(l={},u()(l,y.PRIMARY,(c={},u()(c,m.y.LIGHT,(function(e){return e.theme.palette.common.white})),u()(c,m.y.DARK,(function(e){return e.theme.palette.common.black})),c)),u()(l,y.SECONDARY,(a={},u()(a,m.y.LIGHT,(function(e){return e.theme.palette.common.white})),u()(a,m.y.DARK,(function(e){return e.theme.palette.common.black})),a)),l)),g=h.ZP.button.withConfig({displayName:"StyledButton"})(["min-width:100px;color:",";font-weight:bold;font-size:14px;background:",";border:none;border-radius:3px;outline:none;cursor:pointer;"],O,j),v=n(5893);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=e.variant,n=e.disabled,r=e.children,o=e.onClick,i=f()(e,["variant","disabled","children","onClick"]);return(0,v.jsx)(g,w(w({},i),{},{onClick:o,disabled:n,variant:t,children:r}))}P.defaultProps={disabled:!1,variant:y.PRIMARY}},2631:(e,t,n)=>{"use strict";n.d(t,{_:()=>r});var r={LOGIN:"/login",MAIN:"/"}}}]);