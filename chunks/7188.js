"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[7188],{53648:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(51324);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},91294:(e,a,t)=>{t.d(a,{L:()=>o});var r=t(87410),n=t(28454),s=t(86173),i=t(99601),c=t(90247),l=t(2344),u=t(42251);async function o(e,a){const t=(0,c.qg)(e);if(!t)throw new s.A("invalid-url","Invalid scene service url");const o={...a,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(o.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const t=new u.default({id:a,apiKey:e.apiKey}),s=await async function(e){const a=r.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,i.QP)(e)}return null}(e);null!=s&&(t.portal=new l.A({url:s}));try{return t.load({signal:e.signal})}catch(e){return(0,i.QP)(e),null}}(o),null==o.sceneLayerItem)return d(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!t)return null;const r=new u.default({portal:t.portal,id:t.id});return await r.load(),r}catch(e){return(0,i.QP)(e),null}}(o);if(!f?.url)throw new s.A("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=f;const m=await d(f.url,o);return m.portalItem=f,m}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const t=(0,c.qg)(e);if(!t)throw new s.A("invalid-feature-service-url","Invalid feature service url");const r=t.url.path,i=a.layerId;if(null==i)return{serverUrl:r};const l=y(a),u=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,o=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,d=e=>{const t={query:{f:"json",...o},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(r,t)},f=d("anonymous").catch((()=>d("no-prompt"))),[m,w]=await Promise.all([f,l]),p=w?.layers,h=m.data&&m.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(p)){for(let e=0;e<Math.min(p.length,h.length);e++)if(p[e].id===i)return{serverUrl:r,layerId:h[e].id}}else if(null!=i&&i<h.length)return{serverUrl:r,layerId:h[i].id};throw new Error("could not find matching associated sublayer")}},55526:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await t.e(2036).then(t.bind(t,32036))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(2995),t.e(7225),t.e(4784),t.e(3243),t.e(2148)]).then(t.bind(t,79388))).default,CatalogLayer:async()=>(await Promise.all([t.e(9770),t.e(2361),t.e(1772),t.e(5512)]).then(t.bind(t,35512))).default,CSVLayer:async()=>(await t.e(5748).then(t.bind(t,23367))).default,DimensionLayer:async()=>(await t.e(1554).then(t.bind(t,91554))).default,ElevationLayer:async()=>(await t.e(8716).then(t.bind(t,18716))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,61211))).default,GeoJSONLayer:async()=>(await t.e(2838).then(t.bind(t,22838))).default,GeoRSSLayer:async()=>(await t.e(9046).then(t.bind(t,9046))).default,GroupLayer:async()=>(await t.e(9572).then(t.bind(t,99572))).default,ImageryLayer:async()=>(await Promise.all([t.e(9770),t.e(4564),t.e(8027),t.e(1142),t.e(9890)]).then(t.bind(t,17e3))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(4564),t.e(8027),t.e(2464),t.e(1142),t.e(3143)]).then(t.bind(t,23143))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(3243),t.e(5012)]).then(t.bind(t,85012))).default,KMLLayer:async()=>(await t.e(9766).then(t.bind(t,9766))).default,LineOfSightLayer:async()=>(await t.e(7287).then(t.bind(t,17287))).default,LinkChartLayer:async()=>(await Promise.all([t.e(8581),t.e(1338),t.e(5212),t.e(7999),t.e(9576),t.e(1976),t.e(9783)]).then(t.bind(t,74219))).default,MapImageLayer:async()=>(await Promise.all([t.e(9770),t.e(2361),t.e(3646),t.e(3566)]).then(t.bind(t,3566))).default,MapNotesLayer:async()=>(await t.e(5070).then(t.bind(t,15070))).default,MediaLayer:async()=>(await t.e(695).then(t.bind(t,60695))).default,OGCFeatureLayer:async()=>(await t.e(2353).then(t.bind(t,92353))).default,OpenStreetMapLayer:async()=>(await t.e(5768).then(t.bind(t,35768))).default,OrientedImageryLayer:async()=>(await t.e(9241).then(t.bind(t,59241))).default,PointCloudLayer:async()=>(await t.e(355).then(t.bind(t,50355))).default,RouteLayer:async()=>(await Promise.all([t.e(7410),t.e(5243)]).then(t.bind(t,5243))).default,SceneLayer:async()=>(await Promise.all([t.e(2995),t.e(6521),t.e(7225),t.e(2624),t.e(4784),t.e(3243),t.e(3691)]).then(t.bind(t,23691))).default,StreamLayer:async()=>(await t.e(26).then(t.bind(t,30026))).default,SubtypeGroupLayer:async()=>(await t.e(6001).then(t.bind(t,26001))).default,TileLayer:async()=>(await Promise.all([t.e(9770),t.e(2361),t.e(3646),t.e(3663)]).then(t.bind(t,73663))).default,IntegratedMesh3DTilesLayer:async()=>(await t.e(2177).then(t.bind(t,22177))).default,UnknownLayer:async()=>(await t.e(6571).then(t.bind(t,46571))).default,UnsupportedLayer:async()=>(await t.e(1012).then(t.bind(t,61012))).default,VectorTileLayer:async()=>(await Promise.all([t.e(3940),t.e(1057)]).then(t.bind(t,73132))).default,VoxelLayer:async()=>(await t.e(4341).then(t.bind(t,24341))).default,WFSLayer:async()=>(await t.e(8757).then(t.bind(t,48757))).default,WMSLayer:async()=>(await t.e(3449).then(t.bind(t,83449))).default,WMTSLayer:async()=>(await t.e(6364).then(t.bind(t,26364))).default,WebTileLayer:async()=>(await t.e(2623).then(t.bind(t,92623))).default}},75127:(e,a,t)=>{t.d(a,{PC:()=>y,WZ:()=>i,XH:()=>l,_r:()=>n,ay:()=>o,bO:()=>s,nu:()=>d,pJ:()=>c,z8:()=>u});var r=t(91294);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function s(e,a,t){if(null==e?.layers||null==e?.tables){const r=await t.fetchServiceMetadata(a,{customParameters:c(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(n),e.tables=e.tables||r?.tables?.map(n)}return e}function i(e){const{layers:a,tables:t}=e;return a?.length?a[0].id:t?.length?t[0].id:null}function c(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function l(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function u(e){const a=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}function o(e){return e?.layers?.filter((({layerType:e})=>"OrientedImageryLayer"===e)).map((({id:e})=>e))}function y(e){return e?.layers?.filter((({layerType:e})=>"CatalogLayer"===e)).map((({id:e})=>e))}async function d(e,a,t){if(!e?.url)return a??{};if(a??={},!a.layers){const r=await t.fetchServiceMetadata(e.url);a.layers=r.layers?.map(n)}const{serverUrl:s,portalItem:i}=await(0,r.L)(e.url,{sceneLayerItem:e,customParameters:c(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==s)return a.tables=[],a;if(!a.tables&&i){const e=await i.fetchData();if(e?.tables)a.tables=e.tables.map(n);else{const r=await t.fetchServiceMetadata(s,{customParameters:c(e)?.customParameters});a.tables=r?.tables?.map(n)}}if(a.tables)for(const e of a.tables)e.url=`${s}/${e.id}`;return a}},7188:(e,a,t)=>{t.d(a,{fromItem:()=>y,n:()=>d});var r=t(86173),n=t(91294),s=t(53648),i=t(2594),c=t(55526),l=t(42251),u=t(75127),o=t(93880);async function y(e){!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)});const a=await async function(e){await e.load();const a=new s.v;return async function(e){const a=e.className,t=c.S[a];return{constructor:await t(),properties:e.properties}}(await d(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function d(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,o.Y)(e,"Map Notes"),t=(0,o.Y)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,o.Y)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,u.XH)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await f(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const t=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),n=r?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),i=s.cacheType?.toLowerCase(),c=s.capabilities?.toLowerCase().includes("tilesonly");return"map"===i||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await f(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await(0,n.L)(e.url,{sceneLayerItem:e}),r=await a.fetchServiceMetadata(t);return r?.tables??[]}catch{return[]}}));if("object"==typeof t){const r={};let n;if(null!=t.id?(r.layerId=t.id,n=`${e.url}/layers/${t.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(i.XX))if(e.typeKeywords.includes(a))return{className:i.XX[a]};const s=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,u.pJ)(e)?.customParameters))});return{className:i.XX[s?.layerType]||"SceneLayer",properties:r}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===t?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function f(e,a,t){const{url:r,type:n}=e,s="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(s){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>(0,u.pJ)(e)?.customParameters))});if("Oriented Imagery Layer"===t.type)return{id:t.id,className:"OrientedImageryLayer",sourceJSON:t}}return{}}await e.load();let i=await a.fetchItemData(e);if(s){const e=await(0,u.bO)(i,r,a),t=m(e);if("object"==typeof t){const a=(0,u.z8)(e),r=(0,u.ay)(e),n=(0,u.PC)(e);t.className=null!=t.id&&a.includes(t.id)?"SubtypeGroupLayer":null!=t.id&&r?.includes(t.id)?"OrientedImageryLayer":null!=t.id&&n?.includes(t.id)?"CatalogLayer":"FeatureLayer"}return t}if("Scene Service"===n&&(i=await(0,u.nu)(e,i,a)),(0,u.XH)(i)>0)return m(i);const c=await a.fetchServiceMetadata(r);return t&&(c.tables=await t()),m(c)}function m(e){return 1===(0,u.XH)(e)&&{id:(0,u.WZ)(e)}}},51324:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(28454);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}}}]);