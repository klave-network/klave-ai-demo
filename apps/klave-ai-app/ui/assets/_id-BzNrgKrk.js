import{j as e,r,E as q,F as M,C as D,G,x as L,v as b,y as v,H as T}from"./index-BYcoJFgG.js";import{C as U}from"./chat-input-DlPdHYA2.js";import"./button-DaZc31o0.js";import"./index-OICOeeHB.js";import"./index-BfnlZZ3t.js";import"./tooltip-D34qDGRE.js";import"./index-DL_SWt5J.js";import"./tslib.es6-BUas5LQb.js";import"./index-qpBqXqUl.js";import"./createLucideIcon-C-2ZzL6n.js";import"./video-CtCtvaKy.js";import"./square-arrow-out-up-right-dxHGDBvv.js";const $=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("style",{children:`
      .spinner_qM83 {
        animation: spinner_8HQG 1.05s infinite;
      }
      .spinner_oXPr {
        animation-delay: 0.1s;
      }
      .spinner_ZTLf {
        animation-delay: 0.2s;
      }
      @keyframes spinner_8HQG {
        0%, 57.14% {
          animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
          transform: translate(0);
        }
        28.57% {
          animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
          transform: translateY(-6px);
        }
        100% {
          transform: translate(0);
        }
      }
    `}),e.jsx("circle",{className:"spinner_qM83",cx:"4",cy:"12",r:"3"}),e.jsx("circle",{className:"spinner_qM83 spinner_oXPr",cx:"12",cy:"12",r:"3"}),e.jsx("circle",{className:"spinner_qM83 spinner_ZTLf",cx:"20",cy:"12",r:"3"})]}),k=({context_name:g,onComplete:c})=>{const[m,d]=r.useState(""),[u,n]=r.useState(!1),[f,h]=r.useState(null),p=r.useRef(!0),l=r.useRef("");r.useEffect(()=>{p.current=!0,d(""),l.current="",n(!0),h(null),q({context_name:g},t=>{if(!p.current)return!0;const a=String.fromCharCode(...t.piece);return l.current+=a,d(l.current),t.complete===!0&&(n(!1),c(l.current),p.current=!1),t.complete===!0})},[g,c]);const j=m.trim().split(/\s+/).filter(Boolean).length;return e.jsxs("p",{className:"whitespace-pre-wrap",children:[u&&j<5?e.jsxs("div",{className:"flex gap-4",children:[e.jsx($,{}),e.jsx("span",{className:"animate-pulse",children:"Generating..."})]}):m,f&&e.jsxs("span",{className:"text-red-600",children:["Error: ",f]})]})},O=function(){const[c,m]=r.useState(""),[d,u]=r.useState(null),{id:n}=M.useParams(),{firstResponseId:f,challenge:h,currentTime:p,quote:l,verification:j}=M.useLoaderData(),t=localStorage.getItem(D)??"",a=G(t??"",n),C=r.useRef(null),[S,R]=r.useState(f),N=r.useCallback(async()=>{if(!c.trim()){u("Please enter a prompt before sending.");return}u(null);const s=c;m("");try{await L({context_name:`stories_context_${n}`,user_prompt:s});const o=b(),i=b();v.addMessage(t,n,{id:o,content:s,role:"user",timestamp:Date.now()}),v.addMessage(t,n,{id:i,content:"",role:"ai",timestamp:Date.now()}),R(i)}catch(o){console.error("Error: ",o),u("Failed to send message")}},[c,n,t]),I=(s,o)=>{!a||!t||(T.setState(i=>{var E;const _=(((E=i[t])==null?void 0:E.chats)||[]).map(x=>{if(x.id!==n)return x;const P=x.messages.map(w=>w.id===s?{...w,content:o}:w);return{...x,messages:P}});return{...i,[t]:{...i[t],chats:_}}}),S===s&&R(""))};return r.useEffect(()=>{var s;(s=C.current)==null||s.scrollIntoView({behavior:"smooth"})},[a==null?void 0:a.messages]),a?e.jsxs("div",{className:"flex flex-col items-center h-full",children:[e.jsxs("div",{className:"max-w-3xl flex-1 overflow-auto mb-4 w-full",children:[a.messages.map(({id:s,role:o,content:i})=>{const y=S===s&&o==="ai";return e.jsx("div",{className:`w-fit mb-2 px-4 py-2 rounded-xl ${o==="user"?"bg-gray-100 ml-auto":"mr-auto"}`,children:y?e.jsx(k,{context_name:`stories_context_${n}`,onComplete:_=>I(s,_)},`stream-${s}`):i},s)}),e.jsx("div",{ref:C})]}),e.jsx(U,{userPrompt:c,setUserPrompt:m,error:d,onSend:N,isDisabled:S!=="",secureButton:{currentTime:p,challenge:h,quote:l,verification:j}})]}):e.jsx("div",{className:"p-4",children:"Chat not found"})};export{O as component};
