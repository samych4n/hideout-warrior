"use strict";(self.webpackChunkpoe_hideout_warrior=self.webpackChunkpoe_hideout_warrior||[]).push([[691,908,987],{7200:function(e,t,a){a.r(t),a.d(t,{Head:function(){return r}});var l=a(7294),n=a(4213);t.default=()=>l.createElement(n.default,null);const r=()=>l.createElement("title",null,"Home Page")},4213:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var l=a(7294),n=a(8670);function r(){const{0:e,1:t}=(0,l.useState)(""),a=[];return e.split("\n").forEach((e=>{const t=RegExp(/[0-9]*x ([0-9a-zA-Z ]*?) ([0-9]*)c/).exec(e);console.log(t),t&&a.push({name:t[1],price:parseFloat(t[2])})})),console.log(a),l.createElement("div",{className:"flex flex-row gap-4 bg-black text-white min-h-screen min-w-fit"},l.createElement("div",null,a.map((e=>l.createElement(n.default,{key:null==e?void 0:e.name,price:null==e?void 0:e.price,name:null==e?void 0:e.name,divineValue:230})))),l.createElement("div",null,l.createElement("textarea",{className:"text-black w-[500px] h-[312px]",value:e,onChange:e=>t(e.target.value)})))}},8670:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var l=a(7294);function n(e){let{name:t,price:a,divineValue:n=232}=e;const{0:r,1:c}=(0,l.useState)(0),{0:o,1:u}=(0,l.useState)(""),{0:i,1:s}=(0,l.useState)(0),{0:m,1:d}=(0,l.useState)(0),{0:f,1:p}=(0,l.useState)(0);return(0,l.useEffect)((()=>{const e=r*a,t=Math.floor(e/n),l=e-t*n;s(t),d(l),p(e),u(t+" divines "+l+" chaos \n or \n "+e+" chaos")}),[r]),l.createElement("div",{className:"flex flex-row gap-3 w-[900px] p-4 border border-white items-center "+(r&&"bg-red-400")},t,l.createElement("div",null," ",a," chaos "),l.createElement("input",{className:"text-black",type:"text",placeholder:"quantity",value:r||"",onChange:e=>c(parseFloat(e.target.value)||0)}),l.createElement("div",{className:"flex flex-row ml-auto gap-4 items-center"},l.createElement("div",{className:"flex flex-col text-center"},l.createElement("div",null,i," divines ",m," chaos "),l.createElement("div",null," or ")," ",l.createElement("div",null," ",f," chaos")),l.createElement("div",null,"troco ",n-m," chaos")))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-75cc7d26488df736aeda.js.map