const n="https://api.airtable.com/v0",s="appH8M1k9MeD4OVtz";async function f(e,a={},t){if(!e)return;t&&(a.offset=t);const r=`${n}/${s}/${encodeURIComponent(e)}?`+new URLSearchParams(a),c=await fetch(r,{method:"get",headers:{Authorization:"Bearer patFkEJUlsk61PC99.eda42c71e2d23ec308694cc875fdece3a68c03c6ff14394afeeda364d7d490a3"}}),o=await c.json();if(c.ok)return o.offset?[...o.records,...await f(e,a,o.offset)]:o.records;throw new Error(o)}async function d(e){if(!e)return;const a=`${n}/${s}/${encodeURIComponent("GAO final")}/${e}`,t=await fetch(a,{method:"get",headers:{Authorization:"Bearer patFkEJUlsk61PC99.eda42c71e2d23ec308694cc875fdece3a68c03c6ff14394afeeda364d7d490a3"}}),r=await t.json();if(t.ok)return r;throw new Error(t.statusText)}export{d as a,f};