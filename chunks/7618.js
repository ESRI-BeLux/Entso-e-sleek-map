"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[7618],{77618:(e,t,n)=>{n.d(t,{previewWebStyleSymbol:()=>a});var i=n(28454),h=n(52902),s=n(7872),l=n(69300);function a(e,t,n){const a=e.thumbnail&&e.thumbnail.url;return a?(0,i.A)(a,{responseType:"image"}).then((e=>{const t=function(e,t){const n=!/\\.svg$/i.test(e.src)&&t&&t.disableUpsampling,i=Math.max(e.width,e.height);let l=null!=t?.maxSize?(0,h.Lz)(t.maxSize):s.CB.maxSize;n&&(l=Math.min(i,l));const a="number"==typeof t?.size?t?.size:null,u=Math.min(l,null!=a?(0,h.Lz)(a):i);if(u!==i){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=u,e.height=u/t):(e.width=u*t,e.height=u)}return e}(e.data,n);return n?.node?(n.node.appendChild(t),n.node):t})):(0,l.yG)(e).then((e=>e?t(e,n):null))}}}]);