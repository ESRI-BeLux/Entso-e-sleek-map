"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[5925],{35925:(e,l,t)=>{t.d(l,{O:()=>y,getRampStops:()=>g,m:()=>m});var n=t(79552),o=t(54084),i=t(92150),s=t(97521),a=t(69300),r=t(47906),u=(t(79804),t(41277)),c=t(62685),f=t(7584);const m=30,y=12,p=[255,255,255],h=[200,200,200],b=[128,128,128],d=20,w=5;async function g(e,l,n,o,s,u,c){const f=l.legendOptions,m=f?.customValues,y=c||await k(e,n),p=l.stops,h=!!y,b=!!m,d=null!=l.minSize&&null!=l.maxSize,w=p&&p.length>1,g=!!l.target;if(!h||!b&&!(d||w&&!g))return;const z=(0,a.$d)(y);let L=!1,C=null,D=null;C=z&&!w?(0,i.LI)([l.minDataValue,l.maxDataValue]):m??await async function(e,l,n,o){const s=(await Promise.resolve().then(t.bind(t,57435))).getSizeRangeAtScale(e,n,o),a=s&&x(s);if(!s||!a)return;let r=a.map((l=>function(e,l,t){const n=t.minSize,o=t.maxSize,i=l.minDataValue,s=l.maxDataValue;let a;return a=e<=n?i:e>=o?s:(e-n)/(o-n)*(s-i)+i,a}(l,e,s)));r=(0,i.LI)(r);for(let t=1;t<r.length-1;t++){const i=await I(e,l,r[t],r[t-1],n,o);i&&(r[t]=i[0],a[t]=i[1])}return r}(l,y,o,s?.type);const A=e?.authoringInfo,M="univariate-color-size"===A?.type,P=M&&"above-and-below"===A?.univariateTheme;if(!C&&w&&(C=p.map((e=>e.value)),L=p.some((e=>!!e.label)),"flow"===e.type&&(C=(0,i.LI)(C)),L&&(D=p.map((e=>e.label)))),z&&null!=C&&C?.length>2&&!P&&(C=[C[0],C[C.length-1]]),!C)return null;M&&5!==C?.length&&(C=x({minSize:C[0],maxSize:C[C.length-1]}));const E=z?v(e,C):null,T=(0,a.k_)(y),q=L?null:function(e,l){const t=e.length-1;return e.map(((e,n)=>(0,r.Dd)(e,n,t,l)))}(C,u);return(await Promise.all(C.map((async(t,n)=>{const i=z?E[n]:await _(l,y,t,o,s?.type);return{value:t,symbol:V(P&&"class-breaks"===e.type?S(e,n):y,i),label:L?D[n]:q[n],size:i,outlineSize:T}})))).reverse()}function v(e,l){const t=e?.authoringInfo,n="univariate-color-size"===t?.type;let o=[y,m];if(n){const e=l[0],t=l[l.length-1],n=y,i=m;o=l.map((l=>n+(l-e)/(t-e)*(i-n)))}return n&&"below"===t?.univariateTheme&&o.reverse(),o}function S(e,l){const t=e.classBreakInfos,n=t.length,o=n<2||!(l>=2)?t[0].symbol.clone():t[n-1].symbol.clone();return e.visualVariables.some((e=>"color"===e.type))&&(o.type.includes("3d")?z(o):L(o)),o}async function k(e,l){if("flow"===e.type)return(0,r.Zo)(e,l);if("pie-chart"===e.type)return new c.A({color:null,outline:e.outline?.width?e.outline:new f.A});let t=null,n=null;if("simple"===e.type)t=e.symbol;else if("class-breaks"===e.type){const l=e.classBreakInfos;t=l&&l[0]&&l[0].symbol,n=l.length>1}else if("unique-value"===e.type){const l=e.uniqueValueInfos;t=l?.[0]?.symbol,n=null!=l&&l.length>1}return!t||function(e){return!!e&&((0,o.wk)(e)?!!e.symbolLayers&&e.symbolLayers.some((e=>e&&"fill"===e.type)):e.type.includes("fill"))}(t)?null:(t=t.clone(),(l||n)&&(t.type.includes("3d")?z(t):L(t)),t)}function z(e){"line-3d"===e.type?e.symbolLayers.forEach((e=>{e.material={color:b}})):e.symbolLayers.forEach((e=>{"icon"!==e.type||e.resource?.href?e.material={color:h}:(e.material={color:p},e.outline={color:b,size:1.5})}))}function L(e){const l=(0,u.g4)();if("cim"===e.type)(0,s.Fe)(e,new n.A(h));else if(e.type.includes("line"))e.color=b;else if(e.color=l?b:p,"simple-marker"===e.type)if(e.outline){const l=e.outline?.color?.toHex();"#ffffff"===l&&(e.outline.color=b)}else e.outline={color:b,width:1.5}}function x(e){const l=e.minSize,t=e.maxSize,n=w,o=(t-l)/(n-1),i=[];for(let e=0;e<n;e++)i.push(l+o*e);return i}async function I(e,l,t,n,o,s){const a=await _(e,l,t,o,s),r=await _(e,l,n,o,s),u=(0,i.lc)(t),c=u.fractional,f=d;let m=u.integer,y=null,p=null;t>0&&t<1&&(y=10**c,m=(0,i.lc)(t*=y).integer);for(let n=m-1;n>=0;n--){const u=10**n;let c=Math.floor(t/u)*u,m=Math.ceil(t/u)*u;null!=y&&(c/=y,m/=y);let h=(c+m)/2;[,h]=(0,i.LI)([c,h,m],{indexes:[1]});const b=await _(e,l,c,o,s),d=await _(e,l,m,o,s),w=await _(e,l,h,o,s),g=(0,i.u5)(a,b,r,null),v=(0,i.u5)(a,d,r,null),S=(0,i.u5)(a,w,r,null);let k=g.previous<=f,z=v.previous<=f;if(k&&z&&(g.previous<=v.previous?(k=!0,z=!1):(z=!0,k=!1)),k?p=[c,b]:z?p=[m,d]:S.previous<=f&&(p=[h,w]),p)break}return p}async function _(e,l,n,o,i){const{getSize:s}=await Promise.resolve().then(t.bind(t,57435));return s(e,n,{scale:o,view:i,shape:"simple-marker"===l.type?l.style:null})}function V(e,l){const t=e.clone();if((0,o.wk)(t))(0,a.$d)(t)||t.symbolLayers.forEach((e=>{"fill"!==e.type&&(e.size=l)}));else if(function(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}(t))t.size=l;else if(function(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}(t)){const e=t.width,n=t.height;t.height=l,t.width=l*(e/n)}else!function(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}(t)?function(e){return"esri.symbols.TextSymbol"===e.declaredClass}(t)&&t.font&&(t.font.size=l):t.width=l;return t}}}]);