import{Q as c}from"./vendor-df57af0d.js";const u=()=>{const e=c("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},p={subscribe(e){return u().page.subscribe(e)}},a="https://api.airtable.com/v0",i="appH8M1k9MeD4OVtz";async function f(e,s={},t){if(!e)return;t&&(s.offset=t);const o=`${a}/${i}/${encodeURIComponent(e)}?`+new URLSearchParams(s),n=await fetch(o,{method:"get",headers:{Authorization:`Bearer ${{}.VITE_AIRTABLE_API_KEY}`}}),r=await n.json();if(n.ok)return r.offset?[...r.records,...await f(e,s,r.offset)]:r.records;throw new Error(r)}async function b(e){if(!e)return;const s=`${a}/${i}/${encodeURIComponent("GAO final")}/${e}`,t=await fetch(s,{method:"get",headers:{Authorization:`Bearer ${{}.VITE_AIRTABLE_API_KEY}`}}),o=await t.json();if(t.ok)return o;throw new Error(t.statusText)}export{b as a,f,p};
