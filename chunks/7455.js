"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[7455,491],{92105:(e,t,r)=>{r.d(t,{v:()=>o});var a=r(5162);function o(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,a.H)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},5162:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},27455:(e,t,r)=>{r.d(t,{save:()=>w,saveAs:()=>y});var a=r(86875),o=r(97435),s=r(93880),n=r(88309);const i="Group Layer",c="group-layer-save",u="group-layer-save-as",l=s.mm.GROUP_LAYER_MAP;function p(e){return{isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function d(e){return{isValid:(0,s.Y)(e,l),errorMessage:`Layer.portalItem.typeKeywords should have '${l}'`}}function f(e,t){return{...(0,o.m)(e,"web-map",!0),initiator:t}}function m(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function h(e,t){t.title||=e.title,(0,s.OM)(t,s.mm.METADATA),(0,s.LG)(t,l)}async function w(e,t){return(0,a.UN)({layer:e,itemType:i,validateLayer:p,validateItem:d,createJSONContext:t=>f(t,e),createItemData:m,errorNamePrefix:c,saveResources:async(t,r)=>(e.sourceIsPortalItem||await t.removeAllResources().catch((()=>{})),(0,n.r)(e.resourceReferences,r))},t)}async function y(e,t,r){return(0,a.Uh)({layer:e,itemType:i,validateLayer:p,createJSONContext:t=>f(t,e),createItemData:m,errorNamePrefix:u,newItem:t,setItemProperties:h,saveResources:(t,r)=>(0,n.r)(e.resourceReferences,r)},r)}},86875:(e,t,r)=>{r.d(t,{UN:()=>g,Uh:()=>I});var a=r(86173),o=r(92105),s=r(2344),n=r(42251),i=r(97435),c=r(93880),u=r(52619),l=r(2690);async function p(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),function(e,t,r){const o=r(e);if(!o.isValid)throw new a.A(`${t}:invalid-parameters`,o.errorMessage,{layer:e})}(t,r,o)}function d(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function f(e){const{item:t,errorNamePrefix:r,layer:o,validateItem:s}=e;if((0,u.X)(t),function(e){const{item:t,itemType:r,additionalItemType:o,errorNamePrefix:s,layer:n}=e,i=[r];if(o&&i.push(o),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new a.A(`${s}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:n})}}(e),s){const e=s(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:o})}}function m(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new a.A(`${r}:portal-item-not-set`,d(t,"requires the portalItem property to be set"));if(!o.loaded)throw new a.A(`${r}:portal-item-not-loaded`,d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:o})}function h(e){const{newItem:t,itemType:r}=e;let a=n.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=s.A.getDefault(),f({...e,item:a}),a}function w(e){return(0,i.m)(e,"portal-item")}async function y(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,l.c)(t,{errorName:"layer-write:unsupported"},r),a}function v(e){(0,c.LG)(e,c.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function g(e,t){const{layer:r,createItemData:a,createJSONContext:s,saveResources:n,supplementalUnsupportedErrors:i}=e;await p(e),m(e);const c=r.portalItem,u=s?s(c):w(c),l=await y(r,u,{...t,supplementalUnsupportedErrors:i}),d=await a({layer:r,layerJSON:l},c);return v(c),await c.update({data:d}),(0,o.v)(u),await(n?.(c,u)),c}async function I(e,t){const{layer:r,createItemData:a,createJSONContext:s,setItemProperties:n,saveResources:i,supplementalUnsupportedErrors:c}=e;await p(e);const u=h(e),l=s?s(u):w(u),d=await y(r,l,{...t,supplementalUnsupportedErrors:c}),f=await a({layer:r,layerJSON:d},u);return await n(r,u),v(u),await async function(e,t,r){const a=e.portal;await a.signIn(),await(a.user?.addItem({item:e,data:t,folder:r?.folder}))}(u,f,t),r.portalItem=u,(0,o.v)(l),await(i?.(u,l)),u}},97435:(e,t,r)=>{r.d(t,{m:()=>n,v:()=>s});var a=r(31145),o=r(2344);function s(e,t){return{...i(e,t),readResourcePaths:[]}}function n(e,t,r){const o=(0,a.An)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||o.A.getDefault(),portalItem:e}}},50491:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>i,bg:()=>d,cL:()=>p,fetchResources:()=>n,removeAllResources:()=>u,removeResource:()=>c});var a=r(28454),o=r(86173),s=r(31145);async function n(e,t={},r){await e.load(r);const a=(0,s.fj)(e.itemUrl,"resources"),{start:o=1,num:n=10,sortOrder:i="asc",sortField:c="resource"}=t,u={query:{start:o,num:n,sortOrder:i,sortField:c,token:e.apiKey},signal:r?.signal},l=await e.portal.request(a,u);return{total:l.total,nextStart:l.nextStart,resources:l.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function i(e,t,r,a){const n=new Map;for(const{resource:e,content:a,compress:s,access:i}of t){if(!e.hasPath())throw new o.A(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[t,c]=l(e.path),u=`${t}/${s??""}/${i??""}`;n.has(u)||n.set(u,{prefix:t,compress:s,access:i,files:[]}),n.get(u).files.push({fileName:c,content:a})}await e.load(a);const i=(0,s.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:t,compress:r,access:o,files:s}of n.values()){const n=25;for(let c=0;c<s.length;c+=n){const u=s.slice(c,c+n),l=new FormData;t&&"."!==t&&l.append("resourcesPrefix",t),r&&l.append("compress","true"),o&&l.append("access",o);let p=0;for(const{fileName:e,content:t}of u)l.append("file"+ ++p,t,e);l.append("f","json"),await e.portal.request(i,{method:"post",body:l,signal:a?.signal})}}}async function c(e,t,r){if(!t.hasPath())throw new o.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=(0,s.fj)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function u(e,t){await e.load(t);const r=(0,s.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function l(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}async function p(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,a.A)(e.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[r,,a]=function(e){const[t,r]=function(e){const t=(0,s.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,o]=l(t);return[a,o,r]}(e.path);return e.portalItem.resourceFromPath((0,s.fj)(r,t+a))}},88309:(e,t,r)=>{r.d(t,{S:()=>c,r:()=>i});var a=r(86173),o=r(99601),s=r(5588),n=r(50491);async function i(e,t,r){const a=await u(e,t,r);await l(a,t,r)}async function c(e,t,r,a,o){const s=await u(r,a,o);await e.update({data:t}),await l(s,a,o)}async function u(e,t,i){if(!t?.resources)return;const c=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const u=new Set(t.resources.toKeep.map((e=>e.resource.path))),l=new Set,p=[];u.forEach((t=>{c.delete(t),e.paths.push(t)}));const d=[],f=[],m=[];for(const r of t.resources.toUpdate)if(c.delete(r.resource.path),u.has(r.resource.path)||l.has(r.resource.path)){const{resource:t,content:a,finish:o}=r,i=(0,n.bg)(t,(0,s.lk)());e.paths.push(i.path),d.push({resource:i,content:await(0,n.cL)(a),compress:r.compress}),o&&m.push((()=>o(i)))}else{e.paths.push(r.resource.path),f.push({resource:r.resource,content:await(0,n.cL)(r.content),compress:r.compress});const t=r.finish;t&&m.push((()=>t(r.resource))),l.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),c.has(r.resource.path))c.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,n.cL)(r.content),compress:r.compress});const e=r.finish;e&&m.push((()=>e(r.resource)))}if(d.length||f.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,50491));await e(t.portalItem,d,"add",i),await e(t.portalItem,f,"update",i)}if(m.forEach((e=>e())),0===p.length)return c;const h=await(0,o.Ol)(p);if((0,o.Te)(i),h.length>0)throw new a.A("save:resources","Failed to save one or more resources",{errors:h});return c}async function l(e,t,r){if(!e||!t.portalItem)return;const a=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);a.push(e.portalItem.removeResource(e,r))}await(0,o.Lx)(a)}},52619:(e,t,r)=>{r.d(t,{X:()=>n});var a=r(80613),o=r(86173),s=r(45307);function n(e){if(a.A.apiKey&&(0,s.Q)(e.portal.url))throw new o.A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}}}]);