"use strict";(self.webpackChunkpoe_hideout_warrior=self.webpackChunkpoe_hideout_warrior||[]).push([[691,908,987],{7200:function(e,t,a){a.r(t),a.d(t,{Head:function(){return r}});var l=a(7294),n=a(4213);t.default=()=>l.createElement(n.default,null);const r=()=>l.createElement("title",null,"Home Page")},4213:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var l=a(7294),n=a(8670);function r(){const{0:e,1:t}=(0,l.useState)(230),{0:a,1:r}=(0,l.useState)(""),c=[];return a.split("\n").forEach((e=>{const t=RegExp(/[0-9]*x ([0-9a-zA-Z ]*?) ([0-9.]*)c/).exec(e);console.log(t),t&&c.push({name:t[1],price:parseFloat(t[2])})})),console.log(c),l.createElement("div",{className:"bg-black text-white min-h-screen min-w-fit flex flex-col gap-4"},l.createElement("div",null,"divine value: ",l.createElement("input",{className:"text-black w-14 pl-1",type:"text",value:e.toString(),onChange:e=>t(parseFloat(e.target.value)||0)})),l.createElement("div",{className:"flex flex-row gap-4"},l.createElement("div",null,c.map((t=>l.createElement(n.default,{key:null==t?void 0:t.name,price:null==t?void 0:t.price,name:null==t?void 0:t.name,divineValue:e})))),l.createElement("div",null,l.createElement("textarea",{className:"text-black w-[500px] h-[312px]",value:a,onChange:e=>r(e.target.value)}))))}},8670:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var l=a(7294);function n(e){let{name:t,price:a,divineValue:n=232}=e;const{0:r,1:c}=(0,l.useState)(0),{0:u,1:o}=(0,l.useState)(""),{0:i,1:s}=(0,l.useState)(0),{0:d,1:m}=(0,l.useState)(0),{0:v,1:f}=(0,l.useState)(0);return(0,l.useEffect)((()=>{const e=r*a,t=Math.floor(e/n),l=e-t*n;s(t),m(l),f(e),o(t+" divines "+l+" chaos \n or \n "+e+" chaos")}),[r]),l.createElement("div",{className:"flex flex-row gap-3 w-[900px] p-4 border border-white items-center "+(r&&"bg-red-400")},t,l.createElement("div",null," ",a," chaos "),l.createElement("input",{className:"text-black",type:"text",placeholder:"quantity",value:r||"",onChange:e=>c(parseFloat(e.target.value)||0)}),l.createElement("div",{className:"flex flex-row ml-auto gap-4 items-center"},l.createElement("div",{className:"flex flex-col text-center"},l.createElement("div",null,i," divines ",Math.round(d)," chaos "),l.createElement("div",null," or ")," ",l.createElement("div",null," ",Math.round(v)," chaos")),l.createElement("div",null,"troco ",Math.round(n-d)," chaos")))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-166bdf0e195d98ea1ce3.js.map