import{r as e,o as t,c as o,a as n,w as r,d as s,b as i,e as l,f as a,l as c}from"./vendor.b864fe80.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const i=new URL(e,n);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const l=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),a=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),r(a)},onload(){o(self[t].moduleMap[i]),r(a)}});document.head.appendChild(a)})),self[t].moduleMap={}}}("static/");const d={},u={class:"cover"},p=n("div",{class:"paint"},[n("div",{class:"sun"}),n("div",{class:"mountain"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])],-1),m={class:"contain-box"},f={class:"login-box"},v=n("div",{class:"title"},"登录",-1),_=n("button",{class:"input-style login-button"},"登录",-1);d.render=function(s,i){const l=e("el-input"),a=e("router-link");return t(),o("div",u,[p,n("div",m,[n("div",f,[v,n(l,{class:"input-style",placeholder:"请输入名称"}),n(l,{class:"input-style",placeholder:"请输入密码","show-password":""}),n(a,{to:"/home"},{default:r((()=>[_])),_:1})])])])};var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:d}),b=s({name:"App",components:{Login:d}});let L;b.render=function(n,r,s,i,l,a){const c=e("router-view");return t(),o(c)};const E={},w=function(e,t){if(!t)return e();if(void 0===L){const e=document.createElement("link").relList;L=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in E)return;E[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":L,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},y=i({history:l(),routes:[{path:"/",redirect:"/login"},{path:"/index",component:()=>w((()=>__import__("./HelloWorld.a1f74968.js")),["./static/HelloWorld.a1f74968.js","./static/HelloWorld.d1794bb7.css","./static/vendor.b864fe80.js"])},{path:"/home",name:"home",component:()=>w((()=>__import__("./Home.6c7b109d.js")),["./static/Home.6c7b109d.js","./static/vendor.b864fe80.js"])},{path:"/login",name:"login",component:()=>w((()=>Promise.resolve().then((function(){return h}))),void 0)}]});a(b).use(y).use(c).mount("#app");