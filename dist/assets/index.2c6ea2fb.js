var x=Object.defineProperty,A=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var v=(t,e,o)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,u=(t,e)=>{for(var o in e||(e={}))C.call(e,o)&&v(t,o,e[o]);if(b)for(var o of b(e))S.call(e,o)&&v(t,o,e[o]);return t},h=(t,e)=>A(t,R(e));import{j as y,R as f,a as F}from"./vendor.e31b46aa.js";const $=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}};$();const n=y.exports.jsx,s=y.exports.jsxs,N=({children:t,rest:e})=>n("div",h(u({className:"box"},e),{children:t}));const d=({fieldName:t,label:e,type:o="text",value:i="",onChange:r})=>s("div",{className:"Field",children:[n("label",{className:"FieldLabel",htmlFor:t,children:e}),n("input",{type:o,value:i,className:"FieldInput",onChange:r})]}),L={initialAmount:1e3,months:12,monthly_income:0,interest:1},j=({onSubmitHandler:t})=>{const[e,o]=f.useState(L),i=l=>a=>{const c=a.target;o(h(u({},e),{[l]:parseFloat(c.value)||0}))};return s("form",{onSubmit:l=>{l.preventDefault(),t(e)},className:"Calculator",children:[n(d,{type:"number",fieldName:"initialAmount",label:"Montante inicial",value:e.initialAmount,onChange:i("initialAmount")}),n(d,{type:"number",fieldName:"months",label:"Per\xEDodo (em meses)",value:e.months,onChange:i("months")}),n(d,{type:"number",fieldName:"monthly_income",label:"Aporte mensal",value:e.monthly_income,onChange:i("monthly_income")}),n(d,{type:"number",fieldName:"interest",label:"Rendimento mensal em %",value:e.interest,onChange:i("interest")}),n("button",{type:"submit",className:"Button",children:"Atualizar resultados"})]})};const O=(t,e)=>e.reduce((o,i)=>o+i[t],0),m=Intl.NumberFormat("pt-BR");var B=({results:t})=>n(N,{margin:{bottom:"large"},children:s("table",{className:"Table",children:[n("thead",{children:s("tr",{children:[n("td",{children:n("strong",{children:"M\xEAs"})}),n("td",{children:n("strong",{children:"Rendimento"})}),n("td",{children:n("strong",{children:"Acumulado"})})]})}),n("tbody",{children:t.map((e,o)=>s("tr",{children:[n("td",{children:e.month}),s("td",{children:["R$ ",m.format(e.saving)]}),s("td",{children:["R$ ",m.format(e.amount)]})]},o))}),n("tfoot",{children:s("tr",{children:[n("td",{children:" "}),n("td",{children:s("strong",{children:["R$ ",m.format(O("saving",t))]})}),n("td",{children:s("strong",{children:["R$",m.format(t[t.length-1].amount)]})})]})})]})});const I=t=>{const e=t.initialAmount,o=t.interest/100,i=t.monthly_income,r=t.months,l=[];let a=e;for(let c=1;c<=r;c++){const p=a*o,g=a+p;a=g+i,l.push({month:c,saving:p,amount:g})}return l};function M(){const[t,e]=f.useState({});return n("div",{className:"App",children:s(N,{children:[n("h1",{children:"Calculadora Juros Composto"}),n(j,{onSubmitHandler:i=>e(I(i))}),t.length&&n(B,{results:t})]})})}F.render(n(f.StrictMode,{children:n(M,{})}),document.getElementById("root"));
