const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.BdDTocSi.js","_astro/hoisted.CfuUptTw.js","_astro/_commonjsHelpers.BosuxZz1.js","_astro/transform.CGKONemN.js"])))=>i.map(i=>d[i]);
import{_ as d}from"./hoisted.CfuUptTw.js";import"./hoisted.BkrUAyFq.js";import"./hoisted.BbiZcdTv.js";async function m(t){const{default:n}=await d(async()=>{const{default:e}=await import("./mermaid.core.BdDTocSi.js").then(a=>a.aS);return{default:e}},__vite__mapDeps([0,1,2,3]));n.initialize({fontSize:2,flowchart:{curve:"linear",rankSpacing:0,nodeSpacing:0},startOnLoad:!1,fontFamily:"var(--sans-font)",theme:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"default"});for(const e of t){const a=e.getAttribute("data-content");if(!a)continue;let r=document.createElement("svg");const i=r.id="mermaid-"+Math.round(Math.random()*1e5);e.appendChild(r),n.render(i,a).then(o=>{e.innerHTML=o.svg})}}const s=document.getElementsByClassName("mermaid");document.getElementsByClassName("mermaid").length>0&&m(s);document.getElementById("version")?.addEventListener("change",t=>{t.target&&(window.location.href=t.target.value)});
