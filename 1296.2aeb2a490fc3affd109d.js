(self.webpackChunkmyMatrimony=self.webpackChunkmyMatrimony||[]).push([[1296],{1296:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>D,keyboardDidClose:()=>c,keyboardDidOpen:()=>g,keyboardDidResize:()=>w,resetKeyboardAssist:()=>n,setKeyboardClose:()=>b,setKeyboardOpen:()=>y,startKeyboardAssist:()=>h,trackViewportChanges:()=>u});const o="ionKeyboardDidShow",s="ionKeyboardDidHide";let a={},d={},r=!1;const n=()=>{a={},d={},r=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),g()||w(e)?y(e):c(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>y(e,t)),e.addEventListener("keyboardDidHide",()=>b(e))},y=(e,t)=>{f(e,t),r=!0},b=e=>{l(e),r=!1},g=()=>!r&&a.width===d.width&&(a.height-d.height)*d.scale>150,w=e=>r&&!c(e),c=e=>r&&d.height===e.innerHeight,f=(e,t)=>{const i=new CustomEvent(o,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},l=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},u=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);