import{j as e}from"./jsx-runtime.Dd8RM4Z7.js";import{F as t}from"./ChevronDownIcon.DGJafN82.js";import{j as i,C as d,R as c}from"./disclosure.DsPhLwyy.js";import"./index.BJb7hJaF.js";import"./_commonjsHelpers.BosuxZz1.js";const m=({title:s,owners:r,emptyMessage:l})=>e.jsx("div",{children:e.jsx("div",{className:"mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5",children:e.jsxs(i,{as:"div",className:"py-4",defaultOpen:r.length<=5,children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsxs("span",{className:"font-light text-black group-data-[hover]:text-black/80 capitalize",children:[" ",s," "]}),e.jsx(t,{className:"size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180"})]}),e.jsx(c,{className:"mt-2 text-sm/5 text-black/50",children:e.jsxs("ul",{role:"list",className:"divide-y divide-black/5",children:[r.map(a=>e.jsx("li",{className:"py-3",children:e.jsxs("a",{className:"flex items-center gap-x-3 group ",href:a.href,children:[a.type==="users"&&a.avatarUrl&&e.jsx("img",{src:a.avatarUrl,alt:a.label,className:"w-7 h-7 rounded-full border group-hover:border-primary/60"}),(a.type==="teams"||!a.avatarUrl)&&e.jsx("span",{className:"w-6 rounded-full mt-1 bg-red-500 block text-center text-white uppercase group-hover:bg-primary",children:a.label.charAt(0)}),e.jsxs("div",{children:[e.jsx("h3",{className:"flex-auto truncate text-sm font-semibold leading-6 text-black group-hover:underline group-hover:text-primary",children:a.label}),e.jsx("div",{className:"-mt-0.5",children:e.jsx("span",{className:"text-xs font-light bg-gray-100 text-gray-700 rounded-md py-0.5 group-hover:bg-primary/10",children:a.badge})})]})]})},a.href)),r.length===0&&e.jsx("li",{className:"inline mr-2 leading-6 text-sm",children:e.jsx("span",{className:"text-gray-500",children:l})})]})})]})})});export{m as default};
