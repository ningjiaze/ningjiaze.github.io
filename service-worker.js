if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"blog-dev"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.b569755f.css",revision:null},{url:"/img/bg1.c1028ee1.jpg",revision:null},{url:"/index.html",revision:"6623cf9716a4b8c851b1ff519f0c8991"},{url:"/js/358.99f011a6.js",revision:null},{url:"/js/78.ca2d41d0.js",revision:null},{url:"/js/app.6a303aa9.js",revision:null},{url:"/js/chunk-vendors.a6009deb.js",revision:null},{url:"/manifest.json",revision:"3052859f036e3b41cdd80ddb88bf5055"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
