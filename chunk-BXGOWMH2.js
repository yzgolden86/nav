import{_ as gt}from"./chunk-57GYHC7G.js";import{$d as k,Id as C,Ud as G,a as q,ae as z,b as Q,d as pt,f as V,fe as T,ie as X}from"./chunk-PSV2XLP7.js";var K=pt((N,H)=>{"use strict";(function(n,u){typeof N=="object"&&typeof H=="object"?H.exports=u():typeof define=="function"&&define.amd?define([],u):typeof N=="object"?N.ClipboardJS=u():n.ClipboardJS=u()})(N,function(){return function(){var c={686:function(o,i,t){"use strict";t.d(i,{default:function(){return dt}});var s=t(279),e=t.n(s),g=t(370),y=t.n(g),x=t(817),w=t.n(x);function v(p){try{return document.execCommand(p)}catch{return!1}}var f=function(a){var r=w()(a);return v("cut"),r},b=f;function E(p){var a=document.documentElement.getAttribute("dir")==="rtl",r=document.createElement("textarea");r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[a?"right":"left"]="-9999px";var l=window.pageYOffset||document.documentElement.scrollTop;return r.style.top="".concat(l,"px"),r.setAttribute("readonly",""),r.value=p,r}var P=function(a,r){var l=E(a);r.container.appendChild(l);var d=w()(l);return v("copy"),l.remove(),d},O=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";return typeof a=="string"?l=P(a,r):a instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(a?.type)?l=P(a.value,r):(l=w()(a),v("copy")),l},A=O;function I(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(r){return typeof r}:I=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},I(p)}var j=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.action,l=r===void 0?"copy":r,d=a.container,m=a.target,_=a.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(m!==void 0)if(m&&I(m)==="object"&&m.nodeType===1){if(l==="copy"&&m.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(m.hasAttribute("readonly")||m.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return A(_,{container:d});if(m)return l==="cut"?b(m):A(m,{container:d})},F=j;function h(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?h=function(r){return typeof r}:h=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},h(p)}function S(p,a){if(!(p instanceof a))throw new TypeError("Cannot call a class as a function")}function J(p,a){for(var r=0;r<a.length;r++){var l=a[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}function it(p,a,r){return a&&J(p.prototype,a),r&&J(p,r),p}function at(p,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),a&&W(p,a)}function W(p,a){return W=Object.setPrototypeOf||function(l,d){return l.__proto__=d,l},W(p,a)}function ct(p){var a=ft();return function(){var l=L(p),d;if(a){var m=L(this).constructor;d=Reflect.construct(l,arguments,m)}else d=l.apply(this,arguments);return st(this,d)}}function st(p,a){return a&&(h(a)==="object"||typeof a=="function")?a:ut(p)}function ut(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(p){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},L(p)}function Y(p,a){var r="data-clipboard-".concat(p);if(a.hasAttribute(r))return a.getAttribute(r)}var lt=function(p){at(r,p);var a=ct(r);function r(l,d){var m;return S(this,r),m=a.call(this),m.resolveOptions(d),m.listenClick(l),m}return it(r,[{key:"resolveOptions",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof d.action=="function"?d.action:this.defaultAction,this.target=typeof d.target=="function"?d.target:this.defaultTarget,this.text=typeof d.text=="function"?d.text:this.defaultText,this.container=h(d.container)==="object"?d.container:document.body}},{key:"listenClick",value:function(d){var m=this;this.listener=y()(d,"click",function(_){return m.onClick(_)})}},{key:"onClick",value:function(d){var m=d.delegateTarget||d.currentTarget,_=this.action(m)||"copy",D=F({action:_,container:this.container,target:this.target(m),text:this.text(m)});this.emit(D?"success":"error",{action:_,text:D,trigger:m,clearSelection:function(){m&&m.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(d){return Y("action",d)}},{key:"defaultTarget",value:function(d){var m=Y("target",d);if(m)return document.querySelector(m)}},{key:"defaultText",value:function(d){return Y("text",d)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return A(d,m)}},{key:"cut",value:function(d){return b(d)}},{key:"isSupported",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],m=typeof d=="string"?[d]:d,_=!!document.queryCommandSupported;return m.forEach(function(D){_=_&&!!document.queryCommandSupported(D)}),_}}]),r}(e()),dt=lt},828:function(o){var i=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function s(e,g){for(;e&&e.nodeType!==i;){if(typeof e.matches=="function"&&e.matches(g))return e;e=e.parentNode}}o.exports=s},438:function(o,i,t){var s=t(828);function e(x,w,v,f,b){var E=y.apply(this,arguments);return x.addEventListener(v,E,b),{destroy:function(){x.removeEventListener(v,E,b)}}}function g(x,w,v,f,b){return typeof x.addEventListener=="function"?e.apply(null,arguments):typeof v=="function"?e.bind(null,document).apply(null,arguments):(typeof x=="string"&&(x=document.querySelectorAll(x)),Array.prototype.map.call(x,function(E){return e(E,w,v,f,b)}))}function y(x,w,v,f){return function(b){b.delegateTarget=s(b.target,w),b.delegateTarget&&f.call(x,b)}}o.exports=g},879:function(o,i){i.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},i.nodeList=function(t){var s=Object.prototype.toString.call(t);return t!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in t&&(t.length===0||i.node(t[0]))},i.string=function(t){return typeof t=="string"||t instanceof String},i.fn=function(t){var s=Object.prototype.toString.call(t);return s==="[object Function]"}},370:function(o,i,t){var s=t(879),e=t(438);function g(v,f,b){if(!v&&!f&&!b)throw new Error("Missing required arguments");if(!s.string(f))throw new TypeError("Second argument must be a String");if(!s.fn(b))throw new TypeError("Third argument must be a Function");if(s.node(v))return y(v,f,b);if(s.nodeList(v))return x(v,f,b);if(s.string(v))return w(v,f,b);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(v,f,b){return v.addEventListener(f,b),{destroy:function(){v.removeEventListener(f,b)}}}function x(v,f,b){return Array.prototype.forEach.call(v,function(E){E.addEventListener(f,b)}),{destroy:function(){Array.prototype.forEach.call(v,function(E){E.removeEventListener(f,b)})}}}function w(v,f,b){return e(document.body,v,f,b)}o.exports=g},817:function(o){function i(t){var s;if(t.nodeName==="SELECT")t.focus(),s=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var e=t.hasAttribute("readonly");e||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),s=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var g=window.getSelection(),y=document.createRange();y.selectNodeContents(t),g.removeAllRanges(),g.addRange(y),s=g.toString()}return s}o.exports=i},279:function(o){function i(){}i.prototype={on:function(t,s,e){var g=this.e||(this.e={});return(g[t]||(g[t]=[])).push({fn:s,ctx:e}),this},once:function(t,s,e){var g=this;function y(){g.off(t,y),s.apply(e,arguments)}return y._=s,this.on(t,y,e)},emit:function(t){var s=[].slice.call(arguments,1),e=((this.e||(this.e={}))[t]||[]).slice(),g=0,y=e.length;for(g;g<y;g++)e[g].fn.apply(e[g].ctx,s);return this},off:function(t,s){var e=this.e||(this.e={}),g=e[t],y=[];if(g&&s)for(var x=0,w=g.length;x<w;x++)g[x].fn!==s&&g[x].fn._!==s&&y.push(g[x]);return y.length?e[t]=y:delete e[t],this}},o.exports=i,o.exports.TinyEmitter=i}},n={};function u(o){if(n[o])return n[o].exports;var i=n[o]={exports:{}};return c[o](i,i.exports,u),i.exports}return function(){u.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return u.d(i,{a:i}),i}}(),function(){u.d=function(o,i){for(var t in i)u.o(i,t)&&!u.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:i[t]})}}(),function(){u.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)}}(),u(686)}().default})});var nt=V(gt()),rt=V(K());var Z=(e=>(e[e.All=1]="All",e[e.Title=2]="Title",e[e.Desc=3]="Desc",e[e.Url=4]="Url",e[e.Current=5]="Current",e[e.Quick=6]="Quick",e[e.Id=7]="Id",e))(Z||{});function $(c){return Math.floor(Math.random()*c)}function St(c,n){if(!n.trim())return[];n=n.toLowerCase();let{type:u,id:o}=B(),{oneIndex:i,twoIndex:t}=ot(o),s=Number(u)||1,e=[],g=[{nav:e,id:-1,title:""}],y=new Map;function x(w){w=w||c;t:for(let v=0;v<w.length;v++){let f=w[v];if(Array.isArray(f.nav)&&x(f.nav),f.name){f.name=et(f.name),f.desc=et(f.desc);let b=f.name.toLowerCase(),E=f.desc.toLowerCase(),P=f.url.toLowerCase(),O=()=>{if(b.includes(n)){let h=f,S=new RegExp(`(${n})`,"i");if(h.__name__=h.name,h.name=h.name.replace(S,"<b>$1</b>"),!y.has(h.id))return y.set(h.id,!0),e.push(h),!0}return!1},A=()=>{if(P.includes(n)&&!y.has(f.id)||f.tags.some(S=>S.url?.includes(n))&&!y.has(f.id))return y.set(f.id,!0),e.push(f),!0},I=()=>{if(E[0]==="!")return!1;if(E.includes(n)){let h=f,S=new RegExp(`(${n})`,"i");if(h.__desc__=h.desc,h.desc=h.desc.replace(S,"<b>$1</b>"),!y.has(h.id))return y.set(h.id,!0),e.push(h),!0}return!1},j=()=>{if(f.top&&b.includes(n)){let h=f,S=new RegExp(`(${n})`,"i");if(h.__name__=h.name,h.name=h.name.replace(S,"<b>$1</b>"),!y.has(h.id))return y.set(h.id,!0),e.push(h),!0}return!1},F=()=>f.id==n?(e.push(f),!0):!1;try{switch(s){case 4:A();break;case 2:O();break;case 3:I();break;case 6:j();break;case 7:if(F())break t;break;default:O(),I(),A()}}catch(h){console.error(h)}}}}return s===5?x(c[i].nav[t].nav):x(),e.length<=0?[]:g}function M(){let c=$(255),n=$(255),u=$(255);return`#${c.toString(16)}${n.toString(16)}${u.toString(16)}000`.slice(0,7)}var U;function It(){if(tt())return;clearInterval(U);let c="random-light-bg",n=document.getElementById(c)||document.createElement("div"),u=$(360);n.id=c,n.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:-3;transition: 1s linear;",n.style.backgroundImage=`linear-gradient(${u}deg, ${M()} 0%, ${M()} 100%)`,document.body.appendChild(n);function o(){if(tt()){clearInterval(U);return}let i=`linear-gradient(${u}deg, ${M()} 0%, ${M()} 100%)`;n.style.opacity=".3",setTimeout(()=>{n.style.backgroundImage=i,n.style.opacity="1"},1e3)}U=setInterval(o,1e4)}function B(){let{href:c}=window.location,n=c.split("?")[1]||"",u=nt.default.parse(n),o=u.id;if(u.id==null)try{let i=window.localStorage.getItem(C.location);i&&(o=JSON.parse(i).id)}catch{}return Q(q({},u),{type:u.type,q:u.q||"",id:o})}function Tt(){let{id:c}=B();window.localStorage.setItem(C.location,JSON.stringify({id:c}))}function At(){let c=z[0]||{};try{let n=window.localStorage.getItem(C.engine);if(n){let u=JSON.parse(n),o=z.find(i=>i.name===u.name);o&&(c=o)}}catch{}return c}function Ct(c){window.localStorage.setItem(C.engine,JSON.stringify(c))}function tt(){let c=window.localStorage.getItem(C.isDark),n=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!c&&n?n:!!Number(c)}function Nt(c,n){let u=c.target,o=`copy-${Date.now()}`;return u.id=o,u.setAttribute("data-clipboard-text",n),new Promise(i=>{let t=new rt.default(`#${o}`);t.on("success",function(){t.destroy(),i(!0)}),t.on("error",function(){t.destroy(),i(!1)})})}function et(c){return c?c.replace(/<b>|<\/b>/g,""):""}function Pt(){let{id:c}=B(),{oneIndex:n,twoIndex:u}=ot(c),o=[];try{T[n]&&T[n]?.nav?.length>0&&(G||!T[n].nav[u].ownVisible)?o=T[n].nav[u].nav:o=[]}catch{o=[]}return o}function R(c){return String(c).padStart(2,"0")}function Ot(c){let n=document.querySelectorAll(c),u=Number.MAX_SAFE_INTEGER;if(n.length<=0)return u;let i=n[0].parentNode.clientWidth,t=0;for(let s=0;s<n.length;s++){let e=n[s];if(t+=e.clientWidth,t>i){u=s-1;break}}return u}function mt(){return"ontouchstart"in window}function Lt(){let c=new Date,n=new Date(c.getFullYear(),0,0),u=c-n,o=1e3*60*60*24;return Math.floor(u/o)}function Dt(){let c=X("_weeks"),n=new Date,u=n.getFullYear(),o=R(n.getHours()),i=R(n.getMinutes()),t=R(n.getSeconds()),s=n.getMonth()+1,e=n.getDate(),g=n.getDay(),y=R(e);return{year:u,hours:o,minutes:i,seconds:t,month:s,date:e,zeroDate:y,dayText:c[g]}}function kt(){let c=mt()?k.appTheme:k.theme;return c==="Current"?k.theme:c}function ot(c){c=Number(c);let n=0,u=0,o=0;t:for(let i=0;i<T.length;i++){let t=T[i];if(t.title&&t.id===c){n=i;break}if(Array.isArray(t.nav))for(let s=0;s<t.nav.length;s++){let e=t.nav[s];if(e.title&&e.id===c){n=i,u=s;break t}if(Array.isArray(e.nav)){for(let g=0;g<e.nav.length;g++)if(e.nav[g].id===c){n=i,u=s,o=g;break t}}}}return{oneIndex:n,twoIndex:u,threeIndex:o}}export{Z as a,St as b,It as c,B as d,Tt as e,At as f,Ct as g,tt as h,Nt as i,et as j,Pt as k,Ot as l,mt as m,Lt as n,Dt as o,kt as p,ot as q};
