var x=Object.defineProperty;var B=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var C=(r,t,l)=>t in r?x(r,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[t]=l,O=(r,t)=>{for(var l in t||(t={}))ee.call(t,l)&&C(r,l,t[l]);if(B)for(var l of B(t))te.call(t,l)&&C(r,l,t[l]);return r};import{S as P,i as R,s as T,l as U,g as v,n as q,o as w,p as M,q as y,d as u,a6 as le,N as F,e as m,c as p,a as h,b,G as k,H as J,O as K,P as Q,Q as z,J as $,t as I,k as W,h as N,m as X,I as L,w as j,x as A,y as G,B as H}from"../../chunks/vendor-9f53d9a8.js";import{b as se}from"../../chunks/paths-396f020f.js";import{g as oe,b as ne}from"../../chunks/stores-38939d6b.js";import{L as ae}from"../../chunks/ListView-81c0c5e4.js";import"../../chunks/Bookmark-02aebb27.js";import"../../chunks/singletons-d1fb5791.js";function re(r){let t,l,o,i,c;const n=r[6].default,a=F(n,r,r[5],null);return{c(){t=m("button"),a&&a.c(),l=m("i"),this.h()},l(e){t=p(e,"BUTTON",{class:!0});var s=h(t);a&&a.l(s),l=p(s,"I",{class:!0}),h(l).forEach(u),s.forEach(u),this.h()},h(){b(l,"class","bi bi-file-earmark-arrow-down ms-2"),b(t,"class","btn btn-sm btn-outline-dark")},m(e,s){v(e,t,s),a&&a.m(t,null),k(t,l),o=!0,i||(c=J(t,"click",r[8]),i=!0)},p(e,s){a&&a.p&&(!o||s&32)&&K(a,n,e,e[5],o?z(n,e[5],s,null):Q(e[5]),null)},i(e){o||(y(a,e),o=!0)},o(e){w(a,e),o=!1},d(e){e&&u(t),a&&a.d(e),i=!1,c()}}}function ie(r){let t,l,o,i,c;const n=r[6].default,a=F(n,r,r[5],null);return{c(){t=m("span"),a&&a.c(),l=m("i"),this.h()},l(e){t=p(e,"SPAN",{class:!0});var s=h(t);a&&a.l(s),l=p(s,"I",{class:!0}),h(l).forEach(u),s.forEach(u),this.h()},h(){b(l,"class","bi bi-file-earmark-arrow-down"),b(t,"class","link svelte-k07o89")},m(e,s){v(e,t,s),a&&a.m(t,null),k(t,l),o=!0,i||(c=J(t,"click",r[7]),i=!0)},p(e,s){a&&a.p&&(!o||s&32)&&K(a,n,e,e[5],o?z(n,e[5],s,null):Q(e[5]),null)},i(e){o||(y(a,e),o=!0)},o(e){w(a,e),o=!1},d(e){e&&u(t),a&&a.d(e),i=!1,c()}}}function ce(r){let t,l,o,i;const c=[ie,re],n=[];function a(e,s){return e[2]==="link"?0:1}return t=a(r),l=n[t]=c[t](r),{c(){l.c(),o=U()},l(e){l.l(e),o=U()},m(e,s){n[t].m(e,s),v(e,o,s),i=!0},p(e,[s]){let f=t;t=a(e),t===f?n[t].p(e,s):(q(),w(n[f],1,1,()=>{n[f]=null}),M(),l=n[t],l?l.p(e,s):(l=n[t]=c[t](e),l.c()),y(l,1),l.m(o.parentNode,o))},i(e){i||(y(l),i=!0)},o(e){w(l),i=!1},d(e){n[t].d(e),e&&u(o)}}}function fe(r,t,l){let{$$slots:o={},$$scope:i}=t,{data:c}=t,{filename:n="filename"}=t,{type:a="link"}=t,{bom:e=2}=t;function s(d,g,V){const E=V?"\uFEFF":"";let D=null;typeof d=="object"?D=le(d):D=d;const Y=new Blob([`${E}${D}`],{type:"text/csv;charset=utf-8;"}),Z=window.URL.createObjectURL(Y),S=document.createElement("a");S.href=Z,S.setAttribute("download",`${g}.csv`),S.click(),S.remove()}const f=()=>s(c,n,e),_=()=>s(c,n,e);return r.$$set=d=>{"data"in d&&l(0,c=d.data),"filename"in d&&l(1,n=d.filename),"type"in d&&l(2,a=d.type),"bom"in d&&l(3,e=d.bom),"$$scope"in d&&l(5,i=d.$$scope)},[c,n,a,e,s,i,o,f,_]}class ue extends P{constructor(t){super();R(this,t,fe,ce,T,{data:0,filename:1,type:2,bom:3})}}function de(r){let t,l,o,i,c,n,a,e,s,f;return{c(){t=m("div"),l=m("div"),o=m("h6"),i=I("No collections bookmarked!"),c=W(),n=m("p"),a=I("Go to "),e=m("a"),s=I("explore"),f=I(" section"),this.h()},l(_){t=p(_,"DIV",{class:!0});var d=h(t);l=p(d,"DIV",{class:!0});var g=h(l);o=p(g,"H6",{class:!0});var V=h(o);i=N(V,"No collections bookmarked!"),V.forEach(u),c=X(g),n=p(g,"P",{class:!0});var E=h(n);a=N(E,"Go to "),e=p(E,"A",{href:!0});var D=h(e);s=N(D,"explore"),D.forEach(u),f=N(E," section"),E.forEach(u),g.forEach(u),d.forEach(u),this.h()},h(){b(o,"class","text-center"),b(e,"href",`${se}/explore`),b(n,"class","text-center"),b(l,"class","col-12"),b(t,"class","row my-5")},m(_,d){v(_,t,d),k(t,l),k(l,o),k(o,i),k(l,c),k(l,n),k(n,a),k(n,e),k(e,s),k(n,f)},p:L,i:L,o:L,d(_){_&&u(t)}}}function _e(r){let t,l,o,i,c,n,a;return l=new ae({props:{records:r[0]}}),n=new ue({props:{type:"button",data:r[1],filename:"global-archive-list.csv",$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){t=m("div"),j(l.$$.fragment),o=W(),i=m("div"),c=m("div"),j(n.$$.fragment),this.h()},l(e){t=p(e,"DIV",{class:!0});var s=h(t);A(l.$$.fragment,s),s.forEach(u),o=X(e),i=p(e,"DIV",{class:!0});var f=h(i);c=p(f,"DIV",{class:!0});var _=h(c);A(n.$$.fragment,_),_.forEach(u),f.forEach(u),this.h()},h(){b(t,"class","row mt-3"),b(c,"class","col-auto ms-auto"),b(i,"class","row")},m(e,s){v(e,t,s),G(l,t,null),v(e,o,s),v(e,i,s),k(i,c),G(n,c,null),a=!0},p(e,s){const f={};s&1&&(f.records=e[0]),l.$set(f);const _={};s&2&&(_.data=e[1]),s&32&&(_.$$scope={dirty:s,ctx:e}),n.$set(_)},i(e){a||(y(l.$$.fragment,e),y(n.$$.fragment,e),a=!0)},o(e){w(l.$$.fragment,e),w(n.$$.fragment,e),a=!1},d(e){e&&u(t),H(l),e&&u(o),e&&u(i),H(n)}}}function me(r){let t;return{c(){t=I("Export list")},l(l){t=N(l,"Export list")},m(l,o){v(l,t,o)},d(l){l&&u(t)}}}function pe(r){let t,l,o,i;const c=[_e,de],n=[];function a(e,s){return e[0].length?0:1}return l=a(r),o=n[l]=c[l](r),{c(){t=m("div"),o.c(),this.h()},l(e){t=p(e,"DIV",{class:!0});var s=h(t);o.l(s),s.forEach(u),this.h()},h(){b(t,"class","container")},m(e,s){v(e,t,s),n[l].m(t,null),i=!0},p(e,[s]){let f=l;l=a(e),l===f?n[l].p(e,s):(q(),w(n[f],1,1,()=>{n[f]=null}),M(),o=n[l],o?o.p(e,s):(o=n[l]=c[l](e),o.c()),y(o,1),o.m(t,null))},i(e){i||(y(o),i=!0)},o(e){w(o),i=!1},d(e){e&&u(t),n[l].d()}}}function he(r,t,l){let o,i,c,n;$(r,oe,e=>l(2,c=e)),$(r,ne,e=>l(3,n=e));const a=["Name of collection","Link to collection","Brief description of collection","End year","Start year","State/Nation","Organisation","Host institution","Keywords","Type of sources","Main language of collection"];return r.$$.update=()=>{r.$$.dirty&8&&l(0,o=n||[]),r.$$.dirty&5&&l(1,i=o.map(e=>{const s=O({},e);for(const f in s)a.includes(f)||delete s[f],c[f]&&s[f]&&(s[f]=c[f].filter(_=>s[f].includes(_.id)).map(_=>_.fields.Name).join(", "));return s}))},[o,i,c,n]}class De extends P{constructor(t){super();R(this,t,he,pe,T,{})}}export{De as default};
