"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[6114],{76114:(t,e,n)=>{n.r(e),n.d(e,{executeTopFeaturesQuery:()=>l});var r=n(78239),o=n(19990),u=n(45674),s=n(9038);async function l(t,e,n,l){const i=(0,r.Dl)(t),y={...l},{data:d}=await(0,o.Yb)(i,s.A.from(e),n,y);return u.A.fromJSON(d)}},19990:(t,e,n)=>{n.d(e,{$K:()=>m,KW:()=>p,Yb:()=>c,xs:()=>F});var r=n(28454),o=n(31145),u=n(10359),s=n(10119),l=n(8298),i=n(54503),y=n(46640);const d="Layer does not support extent calculation.";function a(t,e){const n=t.geometry,r=t.toJSON(),o=r;if(null!=n&&(o.geometry=JSON.stringify(n),o.geometryType=(0,u.$B)(n),o.inSR=(0,l.YX)(n.spatialReference)),r.topFilter?.groupByFields&&(o.topFilter.groupByFields=r.topFilter.groupByFields.join(",")),r.topFilter?.orderByFields&&(o.topFilter.orderByFields=r.topFilter.orderByFields.join(",")),r.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),r.objectIds&&(o.objectIds=r.objectIds.join(",")),r.orderByFields&&(o.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?r.outFields.includes("*")?o.outFields="*":o.outFields=r.outFields.join(","):delete o.outFields,r.outSR?o.outSR=(0,l.YX)(r.outSR):n&&r.returnGeometry&&(o.outSR=o.inSR),r.returnGeometry&&delete r.returnGeometry,r.timeExtent){const t=r.timeExtent,{start:e,end:n}=t;null==e&&null==n||(o.time=e===n?e:`${e??"null"},${n??"null"}`),delete r.timeExtent}return o}async function c(t,e,n,r){const o=await f(t,e,"json",r);return(0,y.q)(e,n,o.data),o}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:f(t,e,"json",n,{returnIdsOnly:!0})}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:f(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(d);if(e.hasOwnProperty("count"))throw new Error(d);return t}))}function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):f(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function f(t,e,n,u={},l={}){const y="string"==typeof t?(0,o.An)(t):t,d=e.geometry?[e.geometry]:[];return u.responseType="pbf"===n?"array-buffer":"json",(0,s.el)(d,null,u).then((t=>{const s=t?.[0];null!=s&&((e=e.clone()).geometry=s);const d=(0,i.z)({...y.query,f:n,...l,...a(e,l)});return(0,r.A)((0,o.fj)(y.path,"queryTopFeatures"),{...u,query:{...d,...u.query}})}))}}}]);