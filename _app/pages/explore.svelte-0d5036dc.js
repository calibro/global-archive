import{S as he,i as me,s as ve,ak as xe,af as Be,al as Me,e as E,c as y,a as w,d as m,b as k,g as F,G as h,H as _e,I as ue,t as P,k as A,w as Q,h as j,m as R,x as U,y as W,am as Pe,q as C,o as N,B as Z,J as X,an as je,ao as Ee,F as J,j as x,a6 as Le,ap as Yt,aq as At,ar as He,a2 as Ie,ai as ye,as as Se,n as le,p as re,L as Rt,a5 as we,l as ae,at as Ft,K as et,a7 as qt,au as Bt,av as tt,aw as Mt,ax as Pt,ay as jt,aj as Lt}from"../chunks/vendor-2cff0f1a.js";import{B as Ht,b as Ot}from"../chunks/Bookmark-2ab6e2a9.js";import{e as ne,g as Ne,c as Ye,a as Gt,v as zt}from"../chunks/stores-8ae64da1.js";import{S as Tt}from"../chunks/SwitchView-91fb2ae2.js";import{I as Xt,R as Jt}from"../chunks/Resource-3d7a1b1e.js";import{b as lt}from"../chunks/paths-396f020f.js";import{L as Kt}from"../chunks/ListView-839cc6e7.js";import{p as Qt}from"../chunks/stores-7df3bd1f.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/api-9a9cc6fb.js";import"../chunks/Responsive-e5fadcb5.js";function rt(i){let e,t,l,r;return{c(){e=E("div"),t=E("i"),this.h()},l(s){e=y(s,"DIV",{class:!0});var n=w(e);t=y(n,"I",{class:!0}),w(t).forEach(m),n.forEach(m),this.h()},h(){k(t,"class","bi bi-eraser"),k(e,"class","ms-2 cursor-pointer")},m(s,n){F(s,e,n),h(e,t),l||(r=_e(e,"click",i[7]),l=!0)},p:ue,d(s){s&&m(e),l=!1,r()}}}function Ut(i){let e,t,l,r,s,n,a,o,_,g,I,$,D,v,u,d,f;function p(Y){i[10](Y)}function c(Y){i[11](Y)}let b={placeholder:"From",isClearable:!1,noOptionsMessage:"Year out of range"};i[2]!==void 0&&(b.items=i[2]),i[0]!==void 0&&(b.value=i[0]),n=new xe({props:b}),Be.push(()=>Me(n,"items",p)),Be.push(()=>Me(n,"value",c)),n.$on("select",i[5]);function q(Y){i[12](Y)}let B={placeholder:"to",items:i[3],isClearable:!1,noOptionsMessage:"Year out of range"};i[1]!==void 0&&(B.value=i[1]),v=new xe({props:B}),Be.push(()=>Me(v,"value",q)),v.$on("select",i[6]);let V=i[4].years&&rt(i);return{c(){e=E("div"),t=E("div"),l=P("Period:"),r=A(),s=E("div"),Q(n.$$.fragment),_=A(),g=E("div"),I=P("-"),$=A(),D=E("div"),Q(v.$$.fragment),d=A(),V&&V.c(),this.h()},l(Y){e=y(Y,"DIV",{class:!0});var M=w(e);t=y(M,"DIV",{class:!0});var K=w(t);l=j(K,"Period:"),K.forEach(m),r=R(M),s=y(M,"DIV",{class:!0});var se=w(s);U(n.$$.fragment,se),se.forEach(m),_=R(M),g=y(M,"DIV",{class:!0});var oe=w(g);I=j(oe,"-"),oe.forEach(m),$=R(M),D=y(M,"DIV",{class:!0});var ce=w(D);U(v.$$.fragment,ce),ce.forEach(m),d=R(M),V&&V.l(M),M.forEach(m),this.h()},h(){k(t,"class","me-2"),k(s,"class","select svelte-15cl60y"),k(g,"class","mx-2"),k(D,"class","select svelte-15cl60y"),k(e,"class","d-flex align-items-center themed svelte-15cl60y")},m(Y,M){F(Y,e,M),h(e,t),h(t,l),h(e,r),h(e,s),W(n,s,null),h(e,_),h(e,g),h(g,I),h(e,$),h(e,D),W(v,D,null),h(e,d),V&&V.m(e,null),f=!0},p(Y,[M]){const K={};!a&&M&4&&(a=!0,K.items=Y[2],Pe(()=>a=!1)),!o&&M&1&&(o=!0,K.value=Y[0],Pe(()=>o=!1)),n.$set(K);const se={};M&8&&(se.items=Y[3]),!u&&M&2&&(u=!0,se.value=Y[1],Pe(()=>u=!1)),v.$set(se),Y[4].years?V?V.p(Y,M):(V=rt(Y),V.c(),V.m(e,null)):V&&(V.d(1),V=null)},i(Y){f||(C(n.$$.fragment,Y),C(v.$$.fragment,Y),f=!0)},o(Y){N(n.$$.fragment,Y),N(v.$$.fragment,Y),f=!1},d(Y){Y&&m(e),Z(n),Z(v),V&&V.d()}}}function Wt(i,e,t){let l;X(i,ne,c=>t(4,l=c));let{startYear:r,endYear:s}=e;const n=je();let a={value:r,label:r.toString()},o={value:s,label:s.toString()},_=Ee(r,s).map(c=>({value:c,label:c.toString()})),g=Ee(r+1,s+1).map(c=>({value:c,label:c.toString()}));function I(c){t(3,g=Ee(c.detail.value+1,s+1).map(b=>({value:b,label:b.toString()}))),!(a.value===r&&o.value===s)&&v(a.value,o.value)}function $(c){t(2,_=Ee(r,c.detail.value).map(b=>({value:b,label:b.toString()}))),!(a.value===r&&o.value===s)&&v(a.value,o.value)}function D(){t(2,_=Ee(r,s).map(c=>({value:c,label:c.toString()}))),t(3,g=Ee(r+1,s+1).map(c=>({value:c,label:c.toString()}))),t(0,a={value:r,label:r.toString()}),t(1,o={value:s,label:s.toString()}),u()}function v(c,b){n("updateCf",{start:c,end:b})}function u(){n("resetCf")}function d(c){_=c,t(2,_)}function f(c){a=c,t(0,a)}function p(c){o=c,t(1,o)}return i.$$set=c=>{"startYear"in c&&t(8,r=c.startYear),"endYear"in c&&t(9,s=c.endYear)},[a,o,_,g,l,I,$,D,r,s,d,f,p]}class Zt extends he{constructor(e){super();me(this,e,Wt,Ut,ve,{startYear:8,endYear:9})}}function st(i,e,t){const l=i.slice();l[11]=e[t];const r=l[1][l[0][0]].find(s=>s.id===l[11].key);return l[12]=r,l}function it(i){let e;return{c(){e=E("i"),this.h()},l(t){e=y(t,"I",{class:!0}),w(e).forEach(m),this.h()},h(){k(e,"class","bi bi-eraser")},m(t,l){F(t,e,l)},d(t){t&&m(e)}}}function nt(i,e){let t,l,r=e[12].fields.Name+"",s,n,a,o=e[11].value+"",_,g,I,$,D;function v(){return e[9](e[11])}return{key:i,first:null,c(){t=E("div"),l=E("div"),s=P(r),n=A(),a=E("div"),_=P(o),g=A(),this.h()},l(u){t=y(u,"DIV",{class:!0,style:!0});var d=w(t);l=y(d,"DIV",{});var f=w(l);s=j(f,r),f.forEach(m),n=R(d),a=y(d,"DIV",{});var p=w(a);_=j(p,o),p.forEach(m),g=R(d),d.forEach(m),this.h()},h(){k(t,"class","facet d-flex justify-content-between px-2 pt-1 mb-1 rounded cursor-pointer svelte-6tbqyh"),k(t,"style",I=`padding-bottom:${e[5](e[11].value)}px`),J(t,"active",e[4][e[0][0]]&&e[4][e[0][0]].includes(e[11].key)),J(t,"disabled",e[11].value===0),this.first=t},m(u,d){F(u,t,d),h(t,l),h(l,s),h(t,n),h(t,a),h(a,_),h(t,g),$||(D=_e(t,"click",v),$=!0)},p(u,d){e=u,d&7&&r!==(r=e[12].fields.Name+"")&&x(s,r),d&4&&o!==(o=e[11].value+"")&&x(_,o),d&4&&I!==(I=`padding-bottom:${e[5](e[11].value)}px`)&&k(t,"style",I),d&21&&J(t,"active",e[4][e[0][0]]&&e[4][e[0][0]].includes(e[11].key)),d&4&&J(t,"disabled",e[11].value===0)},d(u){u&&m(t),$=!1,D()}}}function xt(i){let e,t,l=i[0][0]+"",r,s,n,a,o,_=[],g=new Map,I,$,D=i[4][i[0][0]]&&it(),v=i[2];const u=d=>d[11].key;for(let d=0;d<v.length;d+=1){let f=st(i,v,d),p=u(f);g.set(p,_[d]=nt(p,f))}return{c(){e=E("div"),t=E("div"),r=P(l),s=A(),n=E("div"),D&&D.c(),a=A(),o=E("div");for(let d=0;d<_.length;d+=1)_[d].c();this.h()},l(d){e=y(d,"DIV",{class:!0});var f=w(e);t=y(f,"DIV",{class:!0});var p=w(t);r=j(p,l),s=R(p),n=y(p,"DIV",{class:!0});var c=w(n);D&&D.l(c),c.forEach(m),p.forEach(m),a=R(f),o=y(f,"DIV",{class:!0});var b=w(o);for(let q=0;q<_.length;q+=1)_[q].l(b);b.forEach(m),f.forEach(m),this.h()},h(){k(n,"class","cursor-pointer ms-auto"),k(t,"class","title d-flex mb-2 bg-white position-sticky top-0 svelte-6tbqyh"),k(o,"class","d-flex flex-column"),k(e,"class","groupContainer svelte-6tbqyh")},m(d,f){F(d,e,f),h(e,t),h(t,r),h(t,s),h(t,n),D&&D.m(n,null),h(e,a),h(e,o);for(let p=0;p<_.length;p+=1)_[p].m(o,null);I||($=_e(n,"click",i[8]),I=!0)},p(d,[f]){f&1&&l!==(l=d[0][0]+"")&&x(r,l),d[4][d[0][0]]?D||(D=it(),D.c(),D.m(n,null)):D&&(D.d(1),D=null),f&127&&(v=d[2],_=Le(_,f,u,1,d,v,g,o,Yt,nt,null,st))},i:ue,o:ue,d(d){d&&m(e),D&&D.d();for(let f=0;f<_.length;f+=1)_[f].d();I=!1,$()}}}function el(i,e,t){let l,r,s,n;X(i,Ne,v=>t(1,r=v)),X(i,Ye,v=>t(3,s=v)),X(i,ne,v=>t(4,n=v));let{group:a}=e;const o=je(),_=At().domain([1,a[1].top(1)[0].value]).range([4,60]).clamp(!0);function g(v,u,d){o("filterCf",{key:v,dim:u,value:d})}function I(v,u){o("resetCf",{key:v,dim:u})}const $=()=>I(a[0],s.dims.get(a[0])),D=v=>{g(a[0],s.dims.get(a[0]),v.key)};return i.$$set=v=>{"group"in v&&t(0,a=v.group)},i.$$.update=()=>{i.$$.dirty&3&&t(2,l=[...a[1].all()].sort((v,u)=>He(r[a[0]].find(d=>d.id===v.key).fields.Name,r[a[0]].find(d=>d.id===u.key).fields.Name)))},[a,r,l,s,n,_,g,I,$,D]}class tl extends he{constructor(e){super();me(this,e,el,xt,ve,{group:0})}}function at(i,e,t){const l=i.slice();l[13]=e[t];const r=l[1][l[0][0]].find(s=>s.id===l[13].key);return l[14]=r,l}function ot(i){let e;return{c(){e=E("i"),this.h()},l(t){e=y(t,"I",{class:!0}),w(e).forEach(m),this.h()},h(){k(e,"class","bi bi-eraser ms-2")},m(t,l){F(t,e,l)},d(t){t&&m(e)}}}function ct(i){let e,t=[],l=new Map,r,s,n=i[3];const a=o=>o[13].key;for(let o=0;o<n.length;o+=1){let _=at(i,n,o),g=a(_);l.set(g,t[o]=ft(g,_))}return{c(){e=E("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=y(o,"DIV",{class:!0});var _=w(e);for(let g=0;g<t.length;g+=1)t[g].l(_);_.forEach(m),this.h()},h(){k(e,"class","d-flex flex-column")},m(o,_){F(o,e,_);for(let g=0;g<t.length;g+=1)t[g].m(e,null);s=!0},p(o,_){_&187&&(n=o[3],t=Le(t,_,a,1,o,n,l,e,Yt,ft,null,at))},i(o){s||(Ie(()=>{r||(r=ye(e,Se,{duration:300},!0)),r.run(1)}),s=!0)},o(o){r||(r=ye(e,Se,{duration:300},!1)),r.run(0),s=!1},d(o){o&&m(e);for(let _=0;_<t.length;_+=1)t[_].d();o&&r&&r.end()}}}function ft(i,e){let t,l,r=e[14].fields.Name+"",s,n,a,o=e[13].value+"",_,g,I,$;function D(){return e[10](e[13])}return{key:i,first:null,c(){t=E("div"),l=E("div"),s=P(r),n=A(),a=E("div"),_=P(o),g=A(),this.h()},l(v){t=y(v,"DIV",{class:!0});var u=w(t);l=y(u,"DIV",{});var d=w(l);s=j(d,r),d.forEach(m),n=R(u),a=y(u,"DIV",{});var f=w(a);_=j(f,o),f.forEach(m),g=R(u),u.forEach(m),this.h()},h(){k(t,"class","facet d-flex justify-content-between px-2 pt-1 mb-1 rounded cursor-pointer svelte-lapn92"),J(t,"active",e[5][e[0][0]]&&e[5][e[0][0]].includes(e[13].key)),J(t,"disabled",e[13].value===0),this.first=t},m(v,u){F(v,t,u),h(t,l),h(l,s),h(t,n),h(t,a),h(a,_),h(t,g),I||($=_e(t,"click",D),I=!0)},p(v,u){e=v,u&11&&r!==(r=e[14].fields.Name+"")&&x(s,r),u&8&&o!==(o=e[13].value+"")&&x(_,o),u&41&&J(t,"active",e[5][e[0][0]]&&e[5][e[0][0]].includes(e[13].key)),u&8&&J(t,"disabled",e[13].value===0)},d(v){v&&m(t),I=!1,$()}}}function ll(i){let e,t,l=i[0][0]+"",r,s,n,a,o,_,g,I,$,D,v=i[5][i[0][0]]&&ot(),u=i[2]&&ct(i);return{c(){e=E("div"),t=E("div"),r=P(l),s=A(),n=E("div"),v&&v.c(),a=A(),o=E("div"),_=E("i"),g=A(),u&&u.c(),this.h()},l(d){e=y(d,"DIV",{});var f=w(e);t=y(f,"DIV",{class:!0});var p=w(t);r=j(p,l),s=R(p),n=y(p,"DIV",{});var c=w(n);v&&v.l(c),c.forEach(m),a=R(p),o=y(p,"DIV",{class:!0});var b=w(o);_=y(b,"I",{class:!0}),w(_).forEach(m),b.forEach(m),p.forEach(m),g=R(f),u&&u.l(f),f.forEach(m),this.h()},h(){k(_,"class","bi"),J(_,"bi-chevron-down",!i[2]),J(_,"bi-chevron-up",i[2]),k(o,"class","ms-auto"),k(t,"class","title d-flex rounded bg-dark text-white mb-1 p-2")},m(d,f){F(d,e,f),h(e,t),h(t,r),h(t,s),h(t,n),v&&v.m(n,null),h(t,a),h(t,o),h(o,_),h(e,g),u&&u.m(e,null),I=!0,$||(D=[_e(n,"click",i[9]),_e(o,"click",i[6])],$=!0)},p(d,[f]){(!I||f&1)&&l!==(l=d[0][0]+"")&&x(r,l),d[5][d[0][0]]?v||(v=ot(),v.c(),v.m(n,null)):v&&(v.d(1),v=null),f&4&&J(_,"bi-chevron-down",!d[2]),f&4&&J(_,"bi-chevron-up",d[2]),d[2]?u?(u.p(d,f),f&4&&C(u,1)):(u=ct(d),u.c(),C(u,1),u.m(e,null)):u&&(le(),N(u,1,1,()=>{u=null}),re())},i(d){I||(C(u),I=!0)},o(d){N(u),I=!1},d(d){d&&m(e),v&&v.d(),u&&u.d(),$=!1,Rt(D)}}}function rl(i,e,t){let l,r,s,n;X(i,Ne,u=>t(1,r=u)),X(i,Ye,u=>t(4,s=u)),X(i,ne,u=>t(5,n=u));let{group:a}=e,o=!1;const _=()=>t(2,o=!o),g=je();At().domain([1,a[1].top(1)[0].value]).range([4,60]).clamp(!0);function I(u,d,f){g("filterCf",{key:u,dim:d,value:f})}function $(u,d){g("resetCf",{key:u,dim:d})}const D=()=>$(a[0],s.dims.get(a[0])),v=u=>{I(a[0],s.dims.get(a[0]),u.key)};return i.$$set=u=>{"group"in u&&t(0,a=u.group)},i.$$.update=()=>{i.$$.dirty&3&&t(3,l=[...a[1].all()].sort((u,d)=>He(r[a[0]].find(f=>f.id===u.key).fields.Name,r[a[0]].find(f=>f.id===d.key).fields.Name)))},[a,r,o,l,s,n,_,I,$,D,v]}class sl extends he{constructor(e){super();me(this,e,rl,ll,ve,{group:0})}}function ut(i,e,t){const l=i.slice();return l[16]=e[t],l}function dt(i,e,t){const l=i.slice();return l[16]=e[t],l}function _t(i){let e,t;return e=new Zt({props:{startYear:i[2],endYear:i[1]}}),e.$on("resetCf",i[8]),e.$on("updateCf",i[9]),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){W(e,l,r),t=!0},p(l,r){const s={};r&4&&(s.startYear=l[2]),r&2&&(s.endYear=l[1]),e.$set(s)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function ht(i){let e,t;return e=new tl({props:{group:i[16]}}),e.$on("filterCf",i[10]),e.$on("resetCf",i[11]),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){W(e,l,r),t=!0},p(l,r){const s={};r&1&&(s.group=l[16]),e.$set(s)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function mt(i){let e,t;return e=new sl({props:{group:i[16]}}),e.$on("filterCf",i[12]),e.$on("resetCf",i[13]),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){W(e,l,r),t=!0},p(l,r){const s={};r&1&&(s.group=l[16]),e.$set(s)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function il(i){let e,t,l,r,s,n,a,o,_,g=i[2]&&i[1]&&_t(i),I=i[0],$=[];for(let f=0;f<I.length;f+=1)$[f]=ht(dt(i,I,f));const D=f=>N($[f],1,1,()=>{$[f]=null});let v=i[0],u=[];for(let f=0;f<v.length;f+=1)u[f]=mt(ut(i,v,f));const d=f=>N(u[f],1,1,()=>{u[f]=null});return{c(){e=E("div"),t=E("div"),g&&g.c(),l=A(),r=E("div"),s=E("div");for(let f=0;f<$.length;f+=1)$[f].c();n=A(),a=E("div");for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){e=y(f,"DIV",{class:!0});var p=w(e);t=y(p,"DIV",{class:!0});var c=w(t);g&&g.l(c),l=R(c),r=y(c,"DIV",{class:!0});var b=w(r);s=y(b,"DIV",{class:!0});var q=w(s);for(let V=0;V<$.length;V+=1)$[V].l(q);q.forEach(m),b.forEach(m),n=R(c),a=y(c,"DIV",{class:!0});var B=w(a);for(let V=0;V<u.length;V+=1)u[V].l(B);B.forEach(m),c.forEach(m),p.forEach(m),this.h()},h(){k(s,"class","groupsContainer mt-3 d-flex flex-nowrap svelte-1sb5udh"),k(r,"class","overflow-hidden position-relative d-none d-md-flex"),k(a,"class","groupsContainerMobile my-3 d-block d-md-none"),k(t,"class","px-3 px-md-4 pt-4"),k(e,"class","filtersContainer border border-dark rounded my-2 svelte-1sb5udh")},m(f,p){F(f,e,p),h(e,t),g&&g.m(t,null),h(t,l),h(t,r),h(r,s);for(let c=0;c<$.length;c+=1)$[c].m(s,null);h(t,n),h(t,a);for(let c=0;c<u.length;c+=1)u[c].m(a,null);_=!0},p(f,[p]){if(f[2]&&f[1]?g?(g.p(f,p),p&6&&C(g,1)):(g=_t(f),g.c(),C(g,1),g.m(t,l)):g&&(le(),N(g,1,1,()=>{g=null}),re()),p&73){I=f[0];let c;for(c=0;c<I.length;c+=1){const b=dt(f,I,c);$[c]?($[c].p(b,p),C($[c],1)):($[c]=ht(b),$[c].c(),C($[c],1),$[c].m(s,null))}for(le(),c=I.length;c<$.length;c+=1)D(c);re()}if(p&73){v=f[0];let c;for(c=0;c<v.length;c+=1){const b=ut(f,v,c);u[c]?(u[c].p(b,p),C(u[c],1)):(u[c]=mt(b),u[c].c(),C(u[c],1),u[c].m(a,null))}for(le(),c=v.length;c<u.length;c+=1)d(c);re()}},i(f){if(!_){C(g);for(let p=0;p<I.length;p+=1)C($[p]);for(let p=0;p<v.length;p+=1)C(u[p]);Ie(()=>{o||(o=ye(e,Se,{},!0)),o.run(1)}),_=!0}},o(f){N(g),$=$.filter(Boolean);for(let p=0;p<$.length;p+=1)N($[p]);u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)N(u[p]);o||(o=ye(e,Se,{},!1)),o.run(0),_=!1},d(f){f&&m(e),g&&g.d(),we($,f),we(u,f),f&&o&&o.end()}}}function nl(i,e,t){let l,r,s,n,a;X(i,Ye,c=>t(7,n=c)),X(i,ne,c=>t(14,a=c));function o(){t(0,l=[...Array.from(n.groups)])}function _(c,b,q){if(!a[c])ne.update(B=>(B[c]=[q],B));else{const B=a[c].findIndex(V=>V===q);ne.update(V=>(B===-1?V[c].push(q):V[c].splice(B,1),V[c].length||delete V[c],V))}a[c]&&a[c].length?b.filterFunction(B=>a[c].includes(B)):b.filterAll(),o()}function g(c){ne.update(b=>(b.years=c.detail,b)),n.dims.get("Start year").filterFunction(b=>b>=c.detail.start),n.dims.get("End year").filterFunction(b=>b<=c.detail.end),o()}function I(){n.dims.get("Start year").filterAll(),n.dims.get("End year").filterAll(),ne.update(c=>(delete c.years,c)),o()}function $(c,b){b.filterAll(),ne.update(q=>(delete q[c],q)),o()}const D=()=>I(),v=c=>g(c),u=c=>_(c.detail.key,c.detail.dim,c.detail.value),d=c=>$(c.detail.key,c.detail.dim),f=c=>_(c.detail.key,c.detail.dim,c.detail.value),p=c=>$(c.detail.key,c.detail.dim);return i.$$.update=()=>{i.$$.dirty&128&&t(0,l=[...Array.from(n.groups)]),i.$$.dirty&128&&t(2,r=n.dims.get("Start year").bottom(1)[0]?n.dims.get("Start year").bottom(1)[0]["Start year"]:null),i.$$.dirty&128&&t(1,s=n.dims.get("End year").top(1)[0]?n.dims.get("End year").top(1)[0]["End year"]:null)},[l,s,r,_,g,I,$,n,D,v,u,d,f,p]}class al extends he{constructor(e){super();me(this,e,nl,il,ve,{})}}function vt(i,e,t){const l=i.slice();return l[4]=e[t][0],l[5]=e[t][1],l}function pt(i,e,t){const l=i.slice();return l[8]=e[t],l}function ol(i){let e,t=i[5].start+"",l,r,s=i[5].end+"",n;return{c(){e=E("span"),l=P(t),r=P(" - "),n=P(s),this.h()},l(a){e=y(a,"SPAN",{class:!0});var o=w(e);l=j(o,t),r=j(o," - "),n=j(o,s),o.forEach(m),this.h()},h(){k(e,"class","badge rounded-pill bg-dark")},m(a,o){F(a,e,o),h(e,l),h(e,r),h(e,n)},p(a,o){o&1&&t!==(t=a[5].start+"")&&x(l,t),o&1&&s!==(s=a[5].end+"")&&x(n,s)},d(a){a&&m(e)}}}function cl(i){let e,t=i[5],l=[];for(let r=0;r<t.length;r+=1)l[r]=bt(pt(i,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ae()},l(r){for(let s=0;s<l.length;s+=1)l[s].l(r);e=ae()},m(r,s){for(let n=0;n<l.length;n+=1)l[n].m(r,s);F(r,e,s)},p(r,s){if(s&3){t=r[5];let n;for(n=0;n<t.length;n+=1){const a=pt(r,t,n);l[n]?l[n].p(a,s):(l[n]=bt(a),l[n].c(),l[n].m(e.parentNode,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},d(r){we(l,r),r&&m(e)}}}function gt(i){let e,t=(i[1][i[4]]&&i[1][i[4]].find(r).fields.Name)+"",l;function r(...s){return i[3](i[8],...s)}return{c(){e=E("span"),l=P(t),this.h()},l(s){e=y(s,"SPAN",{class:!0});var n=w(e);l=j(n,t),n.forEach(m),this.h()},h(){k(e,"class","badge rounded-pill bg-dark me-1")},m(s,n){F(s,e,n),h(e,l)},p(s,n){i=s,n&3&&t!==(t=(i[1][i[4]]&&i[1][i[4]].find(r).fields.Name)+"")&&x(l,t)},d(s){s&&m(e)}}}function bt(i){let e,t=i[8]&&gt(i);return{c(){t&&t.c(),e=ae()},l(l){t&&t.l(l),e=ae()},m(l,r){t&&t.m(l,r),F(l,e,r)},p(l,r){l[8]?t?t.p(l,r):(t=gt(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&m(e)}}}function kt(i){let e;function t(s,n){if(s[5]&&s[5].length>0)return cl;if(s[5])return ol}let l=t(i),r=l&&l(i);return{c(){r&&r.c(),e=ae()},l(s){r&&r.l(s),e=ae()},m(s,n){r&&r.m(s,n),F(s,e,n)},p(s,n){l===(l=t(s))&&r?r.p(s,n):(r&&r.d(1),r=l&&l(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){r&&r.d(s),s&&m(e)}}}function fl(i){let e,t=i[0],l=[];for(let r=0;r<t.length;r+=1)l[r]=kt(vt(i,t,r));return{c(){e=E("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=y(r,"DIV",{class:!0});var s=w(e);for(let n=0;n<l.length;n+=1)l[n].l(s);s.forEach(m),this.h()},h(){k(e,"class","mt-3 mt-md-0")},m(r,s){F(r,e,s);for(let n=0;n<l.length;n+=1)l[n].m(e,null)},p(r,[s]){if(s&3){t=r[0];let n;for(n=0;n<t.length;n+=1){const a=vt(r,t,n);l[n]?l[n].p(a,s):(l[n]=kt(a),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},i:ue,o:ue,d(r){r&&m(e),we(l,r)}}}function ul(i,e,t){let l,r,s;X(i,ne,a=>t(2,r=a)),X(i,Ne,a=>t(1,s=a));const n=(a,o)=>o.id===a;return i.$$.update=()=>{i.$$.dirty&4&&t(0,l=[...Object.entries(r)])},[l,s,r,n]}class dl extends he{constructor(e){super();me(this,e,ul,fl,ve,{})}}function _l(i){let e,t;return{c(){e=E("span"),t=P("New"),this.h()},l(l){e=y(l,"SPAN",{class:!0});var r=w(e);t=j(r,"New"),r.forEach(m),this.h()},h(){k(e,"class","new badge bg-light svelte-9qoxcf")},m(l,r){F(l,e,r),h(e,t)},d(l){l&&m(e)}}}function $t(i){let e,t;return e=new Xt({props:{url:i[1],$$slots:{default:[hl]},$$scope:{ctx:i}}}),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){W(e,l,r),t=!0},p(l,r){const s={};r&2&&(s.url=l[1]),r&35&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function hl(i){let e,t,l;return{c(){e=E("img"),this.h()},l(r){e=y(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){k(e,"class","img-fluid shadow thumb svelte-9qoxcf"),et(e.src,t=i[1])||k(e,"src",t),k(e,"alt",l=i[0]["Name of collection"])},m(r,s){F(r,e,s)},p(r,s){s&2&&!et(e.src,t=r[1])&&k(e,"src",t),s&1&&l!==(l=r[0]["Name of collection"])&&k(e,"alt",l)},d(r){r&&m(e)}}}function Et(i){let e,t=i[2].fields.Name+"",l;return{c(){e=E("h6"),l=P(t),this.h()},l(r){e=y(r,"H6",{class:!0});var s=w(e);l=j(s,t),s.forEach(m),this.h()},h(){k(e,"class","fst-italic host svelte-9qoxcf")},m(r,s){F(r,e,s),h(e,l)},p(r,s){s&4&&t!==(t=r[2].fields.Name+"")&&x(l,t)},d(r){r&&m(e)}}}function ml(i){let e,t,l,r,s,n,a,o=i[0]["Name of collection"]+"",_,g,I,$,D,v,u,d=i[3]&&_l(),f=i[1]&&$t(i),p=i[2]&&Et(i);return v=new Ht({props:{record:i[0]}}),{c(){e=E("div"),d&&d.c(),t=A(),f&&f.c(),l=A(),r=E("div"),s=E("div"),n=E("h5"),a=E("a"),_=P(o),I=A(),p&&p.c(),$=A(),D=E("div"),Q(v.$$.fragment),this.h()},l(c){e=y(c,"DIV",{class:!0});var b=w(e);d&&d.l(b),t=R(b),f&&f.l(b),l=R(b),r=y(b,"DIV",{class:!0});var q=w(r);s=y(q,"DIV",{class:!0});var B=w(s);n=y(B,"H5",{class:!0});var V=w(n);a=y(V,"A",{class:!0,href:!0});var Y=w(a);_=j(Y,o),Y.forEach(m),V.forEach(m),I=R(B),p&&p.l(B),B.forEach(m),$=R(q),D=y(q,"DIV",{class:!0});var M=w(D);U(v.$$.fragment,M),M.forEach(m),q.forEach(m),b.forEach(m),this.h()},h(){k(a,"class","text-decoration-none text-body"),k(a,"href",g=`${lt}/resource/${i[0].id}`),k(n,"class","title svelte-9qoxcf"),k(s,"class","me-1"),k(D,"class","ms-auto"),k(r,"class","d-flex my-2 w-100"),k(e,"class","h-100 position-relative")},m(c,b){F(c,e,b),d&&d.m(e,null),h(e,t),f&&f.m(e,null),h(e,l),h(e,r),h(r,s),h(s,n),h(n,a),h(a,_),h(s,I),p&&p.m(s,null),h(r,$),h(r,D),W(v,D,null),u=!0},p(c,[b]){c[1]?f?(f.p(c,b),b&2&&C(f,1)):(f=$t(c),f.c(),C(f,1),f.m(e,l)):f&&(le(),N(f,1,1,()=>{f=null}),re()),(!u||b&1)&&o!==(o=c[0]["Name of collection"]+"")&&x(_,o),(!u||b&1&&g!==(g=`${lt}/resource/${c[0].id}`))&&k(a,"href",g),c[2]?p?p.p(c,b):(p=Et(c),p.c(),p.m(s,null)):p&&(p.d(1),p=null);const q={};b&1&&(q.record=c[0]),v.$set(q)},i(c){u||(C(f),C(v.$$.fragment,c),u=!0)},o(c){N(f),N(v.$$.fragment,c),u=!1},d(c){c&&m(e),d&&d.d(),f&&f.d(),p&&p.d(),Z(v)}}}function vl(i,e,t){let l,r;X(i,Ne,o=>t(4,r=o));let{record:s}=e;const n=Ft.count(new Date(s.Created),new Date)<=14;let a;return s.Image&&s.Image.length>0&&(a=s.Image[0].thumbnails.large.url),i.$$set=o=>{"record"in o&&t(0,s=o.record)},i.$$.update=()=>{i.$$.dirty&17&&t(2,l=r["Host institution"]&&r["Host institution"].find(o=>o.id===s["Host institution"][0]))},[s,a,l,n,r]}class pl extends he{constructor(e){super();me(this,e,vl,ml,ve,{record:0})}}function yt(i,e,t){const l=i.slice();return l[1]=e[t],l}function wt(i,e){let t,l,r,s;return l=new pl({props:{record:e[1]}}),{key:i,first:null,c(){t=E("div"),Q(l.$$.fragment),r=A(),this.h()},l(n){t=y(n,"DIV",{class:!0});var a=w(t);U(l.$$.fragment,a),r=R(a),a.forEach(m),this.h()},h(){k(t,"class","col-12 col-md-3 my-2"),this.first=t},m(n,a){F(n,t,a),W(l,t,null),h(t,r),s=!0},p(n,a){e=n;const o={};a&1&&(o.record=e[1]),l.$set(o)},i(n){s||(C(l.$$.fragment,n),s=!0)},o(n){N(l.$$.fragment,n),s=!1},d(n){n&&m(t),Z(l)}}}function gl(i){let e=[],t=new Map,l,r,s=i[0];const n=a=>a[1].id;for(let a=0;a<s.length;a+=1){let o=yt(i,s,a),_=n(o);t.set(_,e[a]=wt(_,o))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=ae()},l(a){for(let o=0;o<e.length;o+=1)e[o].l(a);l=ae()},m(a,o){for(let _=0;_<e.length;_+=1)e[_].m(a,o);F(a,l,o),r=!0},p(a,[o]){o&1&&(s=a[0],le(),e=Le(e,o,n,1,a,s,t,l.parentNode,qt,wt,l,yt),re())},i(a){if(!r){for(let o=0;o<s.length;o+=1)C(e[o]);r=!0}},o(a){for(let o=0;o<e.length;o+=1)N(e[o]);r=!1},d(a){for(let o=0;o<e.length;o+=1)e[o].d(a);a&&m(l)}}}function bl(i,e,t){let{records:l=[]}=e;return i.$$set=r=>{"records"in r&&t(0,l=r.records)},[l]}class kl extends he{constructor(e){super();me(this,e,bl,gl,ve,{records:0})}}function It(i,e,t){const l=i.slice();return l[13]=e[t],l}function Dt(i){let e,t;return e=new al({}),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){W(e,l,r),t=!0},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function Vt(i){let e,t=i[13].label+"",l,r,s;return{c(){e=E("option"),l=P(t),r=A(),this.h()},l(n){e=y(n,"OPTION",{});var a=w(e);l=j(a,t),r=R(a),a.forEach(m),this.h()},h(){e.__value=s=i[13].value,e.value=e.__value},m(n,a){F(n,e,a),h(e,l),h(e,r)},p:ue,d(n){n&&m(e)}}}function $l(i){let e,t,l;return{c(){e=E("div"),t=E("h6"),l=P("No results! Remove some filters"),this.h()},l(r){e=y(r,"DIV",{class:!0});var s=w(e);t=y(s,"H6",{class:!0});var n=w(t);l=j(n,"No results! Remove some filters"),n.forEach(m),s.forEach(m),this.h()},h(){k(t,"class","text-center"),k(e,"class","col-12")},m(r,s){F(r,e,s),h(e,t),h(t,l)},p:ue,i:ue,o:ue,d(r){r&&m(e)}}}function El(i){let e,t,l,r;const s=[wl,yl],n=[];function a(o,_){return o[6]==="grid"?0:1}return e=a(i),t=n[e]=s[e](i),{c(){t.c(),l=ae()},l(o){t.l(o),l=ae()},m(o,_){n[e].m(o,_),F(o,l,_),r=!0},p(o,_){let g=e;e=a(o),e===g?n[e].p(o,_):(le(),N(n[g],1,1,()=>{n[g]=null}),re(),t=n[e],t?t.p(o,_):(t=n[e]=s[e](o),t.c()),C(t,1),t.m(l.parentNode,l))},i(o){r||(C(t),r=!0)},o(o){N(t),r=!1},d(o){n[e].d(o),o&&m(l)}}}function yl(i){let e,t;return e=new Kt({props:{records:i[2]}}),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){W(e,l,r),t=!0},p(l,r){const s={};r&4&&(s.records=l[2]),e.$set(s)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function wl(i){let e,t;return e=new kl({props:{records:i[2]}}),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){W(e,l,r),t=!0},p(l,r){const s={};r&4&&(s.records=l[2]),e.$set(s)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function Ct(i){let e,t,l,r,s,n;return{c(){e=E("div"),this.h()},l(a){e=y(a,"DIV",{class:!0}),w(e).forEach(m),this.h()},h(){k(e,"class","overlay position-absolute top-0 left-0 h-100 w-100 bg-dark bg-opacity-50 cursor-pointer svelte-14mg9jm"),J(e,"resourceActive",i[3])},m(a,o){F(a,e,o),r=!0,s||(n=_e(e,"click",i[10]),s=!0)},p(a,o){o&8&&J(e,"resourceActive",a[3])},i(a){r||(Ie(()=>{l&&l.end(1),t=Mt(e,Lt,{delay:300}),t.start()}),r=!0)},o(a){t&&t.invalidate(),l=Bt(e,Dl,{duration:300}),r=!1},d(a){a&&m(e),a&&l&&l.end(),s=!1,n()}}}function St(i){let e,t,l,r;return t=new Jt({props:{id:i[3],fromExplore:!0}}),{c(){e=E("div"),Q(t.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var n=w(e);U(t.$$.fragment,n),n.forEach(m),this.h()},h(){k(e,"class","wrapperResource flex-shrink-0 flex-grow-0 w-100 border-start border-dark svelte-14mg9jm")},m(s,n){F(s,e,n),W(t,e,null),r=!0},p(s,n){const a={};n&8&&(a.id=s[3]),t.$set(a)},i(s){r||(C(t.$$.fragment,s),Ie(()=>{l||(l=ye(e,Nt,{duration:300},!0)),l.run(1)}),r=!0)},o(s){N(t.$$.fragment,s),l||(l=ye(e,Nt,{duration:300},!1)),l.run(0),r=!1},d(s){s&&m(e),Z(t),s&&l&&l.end()}}}function Il(i){let e,t,l,r,s,n,a,o,_,g,I=i[1].size()+"",$,D,v,u,d,f,p,c,b,q,B,V,Y,M,K,se,oe,ce,pe,Ae,ge,ee,te,Re,De,be,Fe,Oe,z=i[5]&&Dt(),ke=i[7],T=[];for(let S=0;S<ke.length;S+=1)T[S]=Vt(It(i,ke,S));K=new Tt({}),pe=new dl({});const Ge=[El,$l],de=[];function ze(S,L){return S[2].length?0:1}ee=ze(i),te=de[ee]=Ge[ee](i);let O=i[3]&&Ct(i),G=i[3]&&St(i);return{c(){e=E("div"),t=E("div"),l=E("div"),z&&z.c(),r=A(),s=E("div"),n=E("div"),a=E("p"),o=P("Displaying: "),_=P(i[4]),g=P(" / "),$=P(I),D=P(" collections"),v=A(),u=E("div"),d=E("label"),f=P("Sort by:"),p=A(),c=E("div"),b=E("select");for(let S=0;S<T.length;S+=1)T[S].c();q=A(),B=E("div"),V=E("label"),Y=P("View:"),M=A(),Q(K.$$.fragment),se=A(),oe=E("div"),ce=E("div"),Q(pe.$$.fragment),Ae=A(),ge=E("div"),te.c(),Re=A(),O&&O.c(),De=A(),G&&G.c(),this.h()},l(S){e=y(S,"DIV",{class:!0});var L=w(e);t=y(L,"DIV",{class:!0});var ie=w(t);l=y(ie,"DIV",{class:!0});var H=w(l);z&&z.l(H),r=R(H),s=y(H,"DIV",{class:!0});var fe=w(s);n=y(fe,"DIV",{class:!0});var Te=w(n);a=y(Te,"P",{class:!0});var $e=w(a);o=j($e,"Displaying: "),_=j($e,i[4]),g=j($e," / "),$=j($e,I),D=j($e," collections"),$e.forEach(m),Te.forEach(m),v=R(fe),u=y(fe,"DIV",{class:!0});var Ve=w(u);d=y(Ve,"LABEL",{class:!0,for:!0});var Xe=w(d);f=j(Xe,"Sort by:"),Xe.forEach(m),p=R(Ve),c=y(Ve,"DIV",{class:!0});var Je=w(c);b=y(Je,"SELECT",{id:!0,class:!0});var Ke=w(b);for(let qe=0;qe<T.length;qe+=1)T[qe].l(Ke);Ke.forEach(m),Je.forEach(m),Ve.forEach(m),q=R(fe),B=y(fe,"DIV",{class:!0});var Ce=w(B);V=y(Ce,"LABEL",{class:!0,for:!0});var Qe=w(V);Y=j(Qe,"View:"),Qe.forEach(m),M=R(Ce),U(K.$$.fragment,Ce),Ce.forEach(m),fe.forEach(m),se=R(H),oe=y(H,"DIV",{class:!0});var Ue=w(oe);ce=y(Ue,"DIV",{class:!0});var We=w(ce);U(pe.$$.fragment,We),We.forEach(m),Ue.forEach(m),Ae=R(H),ge=y(H,"DIV",{class:!0});var Ze=w(ge);te.l(Ze),Ze.forEach(m),H.forEach(m),ie.forEach(m),Re=R(L),O&&O.l(L),De=R(L),G&&G.l(L),L.forEach(m),this.h()},h(){k(a,"class","my-2 my-md-0 BespokeSerif me-2"),k(n,"class","col-12 col-md-auto"),k(d,"class","col-auto me-2 BespokeSerif"),k(d,"for","sort-select"),k(b,"id","sort-select"),k(b,"class","form-select rounded-pill border-dark"),i[0]===void 0&&Ie(()=>i[9].call(b)),k(c,"class","col-auto"),k(u,"class","col-6 col-md-auto ms-auto d-flex align-items-md-center flex-column flex-md-row"),k(V,"class","col-auto me-2 BespokeSerif"),k(V,"for",""),k(B,"class","d-flex d-md-none col-6 col-md-auto ms-auto d-flex align-items-md-center align-items-end flex-column flex-md-row"),k(s,"class","row align-items-center mt-3"),k(ce,"class","col-12"),k(oe,"class","row"),k(ge,"class","row mt-2"),k(l,"class","container"),k(t,"class","wrapperChild flex-shrink-0 flex-grow-0 w-100 h-100 position-relative svelte-14mg9jm"),J(t,"resourceActive",i[3]),k(e,"class","wrapper vw-100 d-flex svelte-14mg9jm")},m(S,L){F(S,e,L),h(e,t),h(t,l),z&&z.m(l,null),h(l,r),h(l,s),h(s,n),h(n,a),h(a,o),h(a,_),h(a,g),h(a,$),h(a,D),h(s,v),h(s,u),h(u,d),h(d,f),h(u,p),h(u,c),h(c,b);for(let ie=0;ie<T.length;ie+=1)T[ie].m(b,null);tt(b,i[0]),h(s,q),h(s,B),h(B,V),h(V,Y),h(B,M),W(K,B,null),h(l,se),h(l,oe),h(oe,ce),W(pe,ce,null),h(l,Ae),h(l,ge),de[ee].m(ge,null),h(e,Re),O&&O.m(e,null),h(e,De),G&&G.m(e,null),be=!0,Fe||(Oe=_e(b,"change",i[9]),Fe=!0)},p(S,[L]){if(S[5]?z?L&32&&C(z,1):(z=Dt(),z.c(),C(z,1),z.m(l,r)):z&&(le(),N(z,1,1,()=>{z=null}),re()),(!be||L&16)&&x(_,S[4]),(!be||L&2)&&I!==(I=S[1].size()+"")&&x($,I),L&128){ke=S[7];let H;for(H=0;H<ke.length;H+=1){const fe=It(S,ke,H);T[H]?T[H].p(fe,L):(T[H]=Vt(fe),T[H].c(),T[H].m(b,null))}for(;H<T.length;H+=1)T[H].d(1);T.length=ke.length}L&129&&tt(b,S[0]);let ie=ee;ee=ze(S),ee===ie?de[ee].p(S,L):(le(),N(de[ie],1,1,()=>{de[ie]=null}),re(),te=de[ee],te?te.p(S,L):(te=de[ee]=Ge[ee](S),te.c()),C(te,1),te.m(ge,null)),L&8&&J(t,"resourceActive",S[3]),S[3]?O?(O.p(S,L),L&8&&C(O,1)):(O=Ct(S),O.c(),C(O,1),O.m(e,De)):O&&(le(),N(O,1,1,()=>{O=null}),re()),S[3]?G?(G.p(S,L),L&8&&C(G,1)):(G=St(S),G.c(),C(G,1),G.m(e,null)):G&&(le(),N(G,1,1,()=>{G=null}),re())},i(S){be||(C(z),C(K.$$.fragment,S),C(pe.$$.fragment,S),C(te),C(O),C(G),be=!0)},o(S){N(z),N(K.$$.fragment,S),N(pe.$$.fragment,S),N(te),N(O),N(G),be=!1},d(S){S&&m(e),z&&z.d(),we(T,S),Z(K),Z(pe),de[ee].d(),O&&O.d(),G&&G.d(),Fe=!1,Oe()}}}function Nt(i,{duration:e}){const t=getComputedStyle(i),l=/-?\d+\.?\d*/g,r=t.transform.match(l),n=+r[r.length-2]*-1>=768?70:90;return{duration:e,css:a=>`
					transform: translateX(-${a*n}%);`}}function Dl(i,{duration:e}){const t=getComputedStyle(i),l=/-?\d+\.?\d*/g,r=t.transform.match(l),n=+r[r.length-2]*-1>=768?70:90;return{duration:e,css:a=>`
					transform: translateX(-${a*n}%);opacity: ${a*1};`}}function Vl(i,e,t){let l,r,s,n,a;X(i,Qt,d=>t(11,r=d)),X(i,Ye,d=>t(1,s=d)),X(i,Gt,d=>t(5,n=d)),X(i,zt,d=>t(6,a=d));const o=[{value:"Created",label:"Most recent"},{value:"Name of collection",label:"Alphabetically"}];let _,g=[];function I(d,f){const p=f.allFiltered()||[];p.sort((c,b)=>d?d==="Created"?Pt(c[d],b[d]):He(c[d],b[d]):1),t(2,g=[...p])}let $;Ot(async({to:d,cancel:f})=>{if($)return;const p=d.pathname.split("/");if(p[p.length-2]==="resource"){f();const c=p[p.length-1];t(3,$=c),history.pushState({},"",`${r.url.origin}/resource/${c}`)}});function D(){t(3,$=null),r.url.origin,history.pushState({},"",`${r.url.origin}/explore`)}function v(){_=jt(this),t(0,_),t(7,o)}const u=()=>D();return i.$$.update=()=>{i.$$.dirty&2&&t(4,l=s.size()),i.$$.dirty&3&&I(_,s),i.$$.dirty&3&&s.onChange(d=>{I(_,s),t(4,l=s.allFiltered().length)})},[_,s,g,$,l,n,a,o,D,v,u]}class jl extends he{constructor(e){super();me(this,e,Vl,Il,ve,{})}}export{jl as default};