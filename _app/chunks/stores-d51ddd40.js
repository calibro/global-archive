var f=Object.defineProperty;var i=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var u=(t,e,o)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,c=(t,e)=>{for(var o in e||(e={}))g.call(e,o)&&u(t,o,e[o]);if(i)for(var o of i(e))m.call(e,o)&&u(t,o,e[o]);return t};import{R as p,T as d,U as y,V as k,D as a}from"./vendor-df57af0d.js";const b=[{key:"Keywords",multiple:!0,group:!0,table_name:"Keywords"},{key:"Main language of collection",multiple:!0,group:!0,table_name:"Language"},{key:"Region concerned",multiple:!0,group:!0,table_name:"Region concerned"},{key:"State/Nation",multiple:!0,group:!0,table_name:"State/Nation"},{key:"Type of sources",multiple:!0,group:!0,table_name:"Type of sources"},{key:"Host institution",multiple:!0,group:!0,table_name:"Host institution"},{key:"Brief description of collection",multiple:!1,group:!1},{key:"Start year",multiple:!1,group:!1},{key:"End year",multiple:!1,group:!1}],_=["Host institution","Keywords","Main language of collection","Type of sources","State/Nation"],H=[{label:"Name of collection",multiple:!1},{label:"Host institution",multiple:!0}],R=(t,e=[])=>{if(!e||!t)return;const o=e.findIndex(n=>n.id===t.id);return o===-1?e.push(t):e.splice(o,1),e};async function v(t){return t?(console.log(p),(await new p(t).getPalette()).Vibrant.getHex()):void 0}const w=a([]),A=a({}),M=a({}),E=a("grid"),x=a(!1),D=d("gao_bookmarks",[]),N=y(w,(t,e)=>{const o=t.map(s=>c({id:s.id},s.fields)),n=k(o);n.dims=new Map,n.groups=new Map;for(let s of b){const l=n.dimension(function(r){return r[s.key]?r[s.key]:s.multiple?[]:null},s.multiple||!1);n.dims.set(s.key,l),s.group&&n.groups.set(s.key,l.group())}return e(n)});export{b as A,H,_ as M,v as a,D as b,N as c,M as d,A as g,w as r,x as s,R as t,E as v};
