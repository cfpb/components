const t="cfpb-components";let n;let e;let s=false;const o=(t,n="")=>{{return()=>{}}};const l=(t,n)=>{{return()=>{}}};const c="{visibility:hidden}.hydrated{visibility:inherit}";const i=t=>t!=null;const f=t=>{t=typeof t;return t==="object"||t==="function"};function r(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const u=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!f(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?a(null,s):s)}l=o}}};i(e);const r=a(t,null);r.o=n;if(c.length>0){r.l=c}return r};const a=(t,n)=>{const e={i:0,u:t,t:n,p:null,l:null};return e};const d={};const p=t=>t&&t.u===d;const h=(t,n)=>{if(t!=null&&!f(t)){if(n&1){return String(t)}return t}return t};const y=(t,n,e)=>{const s=ot.ce(n,e);t.dispatchEvent(s);return s};const $=new WeakMap;const m=(t,n,e)=>{let s=nt.get(t);if(ct&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}nt.set(t,s)};const v=(t,n,e)=>{var s;const o=w(n);const l=nt.get(o);t=t.nodeType===11?t:st;if(l){if(typeof l==="string"){t=t.head||t;let n=$.get(t);let e;if(!n){$.set(t,n=new Set)}if(!n.has(o)){{e=st.createElement("style");e.innerHTML=l;const n=(s=ot.h)!==null&&s!==void 0?s:r(st);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const b=t=>{const n=t.$;const e=t.m;const s=n.i;const l=o("attachStyles",n.v);const c=v(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=c;e.classList.add(c+"-h")}l()};const w=(t,n)=>"sc-"+t.v;const S=(t,e,s,o)=>{const l=e.l[s];let c=0;let f;let r;if(l.t!==null){f=l.p=st.createTextNode(l.t)}else{f=l.p=st.createElement(l.u);if(i(n)&&f["s-si"]!==n){f.classList.add(f["s-si"]=n)}if(l.l){for(c=0;c<l.l.length;++c){r=S(t,l,c);if(r){f.appendChild(r)}}}}return f};const g=(t,n,s,o,l,c)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;l<=c;++l){if(o[l]){f=S(null,s,l);if(f){o[l].p=f;i.insertBefore(f,n)}}}};const j=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.p;if(t){t.remove()}}}};const k=(t,n,e,s)=>{let o=0;let l=0;let c=n.length-1;let i=n[0];let f=n[c];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=c&&l<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--c]}else if(u==null){u=s[++l]}else if(a==null){a=s[--r]}else if(M(i,u)){C(i,u);i=n[++o];u=s[++l]}else if(M(f,a)){C(f,a);f=n[--c];a=s[--r]}else if(M(i,a)){C(i,a);t.insertBefore(i.p,f.p.nextSibling);i=n[++o];a=s[--r]}else if(M(f,u)){C(f,u);t.insertBefore(f.p,i.p);f=n[--c];u=s[++l]}else{{d=S(n&&n[l],e,l);u=s[++l]}if(d){{i.p.parentNode.insertBefore(d,i.p)}}}}if(o>c){g(t,s[r+1]==null?null:s[r+1].p,e,s,l,r)}else if(l>r){j(n,o,c)}};const M=(t,n)=>{if(t.u===n.u){return true}return false};const C=(t,n)=>{const e=n.p=t.p;const s=t.l;const o=n.l;const l=n.t;if(l===null){if(s!==null&&o!==null){k(e,s,n,o)}else if(o!==null){if(t.t!==null){e.textContent=""}g(e,null,n,o,0,o.length-1)}else if(s!==null){j(s,0,s.length-1)}}else if(t.t!==l){e.data=l}};const O=(t,s,o=false)=>{const l=t.m;const c=t.S||a(null,null);const i=p(s)?s:u(null,null,s);e=l.tagName;if(o&&i.o){for(const t of Object.keys(i.o)){if(l.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){i.o[t]=l[t]}}}i.u=null;i.i|=4;t.S=i;i.p=c.p=l.shadowRoot||l;{n=l["s-sc"]}C(c,i)};const P=(t,n)=>{if(n&&!t.g&&n["s-p"]){n["s-p"].push(new Promise((n=>t.g=n)))}};const U=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}P(t,t.j);const e=()=>x(t,n);return pt(e)};const x=(t,n)=>{const e=o("scheduleUpdate",t.$.v);const s=t.k;let l;e();return E(l,(()=>T(t,s,n)))};const E=(t,n)=>N(t)?t.then(n):n();const N=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const T=async(t,n,e)=>{var s;const l=t.m;const c=o("update",t.$.v);const i=l["s-rc"];if(e){b(t)}const f=o("render",t.$.v);{A(t,n,l,e)}if(i){i.map((t=>t()));l["s-rc"]=undefined}f();c();{const n=(s=l["s-p"])!==null&&s!==void 0?s:[];const e=()=>L(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const A=(t,n,e,s)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{O(t,n,s)}}}}catch(n){Y(n,t.m)}return null};const L=t=>{const n=t.$.v;const e=t.m;const s=o("postUpdate",n);const l=t.j;if(!(t.i&64)){t.i|=64;{W(e)}s();{t.M(e);if(!l){R()}}}else{s()}{if(t.g){t.g();t.g=undefined}if(t.i&512){dt((()=>U(t,false)))}t.i&=~(4|512)}};const R=n=>{{W(st.documentElement)}dt((()=>y(et,"appload",{detail:{namespace:t}})))};const W=t=>t.classList.add("hydrated");const q=(t,n)=>K(t).C.get(n);const F=(t,n,e,s)=>{const o=K(t);const l=o.C.get(n);const c=o.i;const i=o.k;e=h(e,s.O[n][0]);const f=Number.isNaN(l)&&Number.isNaN(e);const r=e!==l&&!f;if((!(c&8)||l===undefined)&&r){o.C.set(n,e);if(i){if((c&(2|16))===2){U(o,false)}}}};const H=(t,n,e)=>{if(n.O){const s=Object.entries(n.O);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return q(this,t)},set(e){F(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const n=new Map;o.attributeChangedCallback=function(t,e,s){ot.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(o.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,e])=>{const s=e[1]||t;n.set(s,t);return s}))}}return t};const I=async(t,n,e,s,c)=>{if((n.i&32)===0){n.i|=32;{c=tt(e);if(c.then){const t=l();c=await c;t()}if(!c.isProxied){H(c,e,2);c.isProxied=true}const t=o("createInstance",e.v);{n.i|=8}try{new c(n)}catch(t){Y(t)}{n.i&=~8}t()}if(c.style){let t=c.style;const n=w(e);if(!nt.has(n)){const s=o("registerStyles",e.v);m(n,t,!!(e.i&1));s()}}}const i=n.j;const f=()=>U(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const V=t=>{};const _=t=>{if((ot.i&1)===0){const n=K(t);const e=n.$;const s=o("connectedCallback",e.v);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){P(n,n.j=e);break}}}if(e.O){Object.entries(e.O).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{I(t,n,e)}}else{if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.P){n.P.then((()=>V()))}}s()}};const z=t=>{};const B=async t=>{if((ot.i&1)===0){const n=K(t);if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.P){n.P.then((()=>z()))}}};const D=(t,n={})=>{var e;const s=o();const l=[];const i=n.exclude||[];const f=et.customElements;const u=st.head;const a=u.querySelector("meta[charset]");const d=st.createElement("style");const p=[];let h;let y=true;Object.assign(ot,n);ot.U=new URL(n.resourcesUrl||"./",st.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],v:n[1],O:n[2],N:n[3]};{e.O=n[2]}const s=e.v;const o=class extends HTMLElement{constructor(t){super(t);t=this;X(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(h){clearTimeout(h);h=null}if(y){p.push(this)}else{ot.jmp((()=>_(this)))}}disconnectedCallback(){ot.jmp((()=>B(this)))}componentOnReady(){return K(this).P}};e.T=t[0];if(!i.includes(s)&&!f.get(s)){l.push(s);f.define(s,H(o,e,1))}}))}));{d.innerHTML=l+c;d.setAttribute("data-styles","");const t=(e=ot.h)!==null&&e!==void 0?e:r(st);if(t!=null){d.setAttribute("nonce",t)}u.insertBefore(d,a?a.nextSibling:u.firstChild)}y=false;if(p.length){p.map((t=>t.connectedCallback()))}else{{ot.jmp((()=>h=setTimeout(R,30)))}}s()};const G=t=>ot.h=t;const J=new WeakMap;const K=t=>J.get(t);const Q=(t,n)=>J.set(n.k=t,n);const X=(t,n)=>{const e={i:0,m:t,$:n,C:new Map};{e.P=new Promise((t=>e.M=t));t["s-p"]=[];t["s-rc"]=[]}return J.set(t,e)};const Y=(t,n)=>(0,console.error)(t,n);const Z=new Map;const tt=(t,n,e)=>{const s=t.v.replace(/-/g,"_");const o=t.T;const l=Z.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{Z.set(o,t)}return t[s]}),Y)};const nt=new Map;const et=typeof window!=="undefined"?window:{};const st=et.document||{head:{}};const ot={i:0,U:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const lt=t=>Promise.resolve(t);const ct=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const it=[];const ft=[];const rt=(t,n)=>e=>{t.push(e);if(!s){s=true;if(n&&ot.i&4){dt(at)}else{ot.raf(at)}}};const ut=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){Y(t)}}t.length=0};const at=()=>{ut(it);{ut(ft);if(s=it.length>0){ot.raf(at)}}};const dt=t=>lt().then(t);const pt=rt(ft,true);export{D as b,u as h,lt as p,Q as r,G as s};
//# sourceMappingURL=p-08a7269f.js.map