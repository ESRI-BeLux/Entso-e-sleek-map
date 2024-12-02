"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[6899,2103],{7953:(e,t,r)=>{r.d(t,{N3:()=>o,Om:()=>n});class n{constructor(e=null,t={},r,n){this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=n,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new n(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}clone(){const e=this.geometry?.clone(),t=new n(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function o(e){return!!e.geometry?.coords?.length}},72225:(e,t,r)=>{r.d(t,{A:()=>n});class n{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new n;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},77559:(e,t,r)=>{r.d(t,{A:()=>n});class n{constructor(e=[],t=[],r=!1){this.lengths=e??[],this.coords=t??[],this.hasIndeterminateRingOrder=r}static fromRect(e){const[t,r,o,s]=e,i=o-t,l=s-r;return new n([5],[t,r,i,0,0,l,-i,0,0,-l])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const n=this.lengths[r];for(let r=0;r<n;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=n}}deltaDecode(){const e=this.clone(),{coords:t,lengths:r}=e;let n=0;for(const e of r){for(let r=1;r<e;r++)t[2*(n+r)]+=t[2*(n+r)-2],t[2*(n+r)+1]+=t[2*(n+r)-1];n+=e}return e}clone(e){if(0===this.lengths.length)return new n([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),r=this.coords.slice(0,t);return e?(e.set(r),new n(this.lengths,e,this.hasIndeterminateRingOrder)):new n(Array.from(this.lengths),Array.from(r),this.hasIndeterminateRingOrder)}}},91463:(e,t,r)=>{r.d(t,{BW:()=>L,Ch:()=>oe,DF:()=>G,Di:()=>D,E2:()=>Y,Nl:()=>W,Q4:()=>se,Rk:()=>le,Ux:()=>V,Ye:()=>O,ZF:()=>$,eU:()=>E,eY:()=>H,jH:()=>K,jQ:()=>ne,kz:()=>ee,oN:()=>U,q3:()=>J,qK:()=>R,qN:()=>k,z5:()=>z,zv:()=>X});var n=r(86173),o=r(29287),s=r(58407),i=r(97671),l=r(41074),a=r(10359),u=r(7953),c=r(72225),h=r(77559);function d(e,t){return e?t?4:3:t?3:2}const f=()=>o.A.getLogger("esri.layers.graphics.featureConversionUtils"),m={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},y=(e,t,r,n,o,s)=>{e[r]=o,e[r+1]=s},g=(e,t,r,n,o,s)=>{e[r]=o,e[r+1]=s,e[r+2]=t[n+2]},p=(e,t,r,n,o,s)=>{e[r]=o,e[r+1]=s,e[r+2]=t[n+3]},_=(e,t,r,n,o,s)=>{e[r]=o,e[r+1]=s,e[r+2]=t[n+2],e[r+3]=t[n+3]};function b(e,t,r,n){if(e){if(r)return t&&n?_:g;if(t&&n)return p}else if(t&&n)return g;return y}function w({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function I({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}function P({scale:e,translate:t},r,n){return r*e[n]+t[n]}function G(e,t,r){return e?t?r?v(e):A(e):r?N(e):M(e):null}function M(e){const t=e.coords;return{x:t[0],y:t[1]}}function T(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function A(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function N(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function C(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function v(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function x(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function Z(e,t){return e&&t?x:e?F:t?C:T}function k(e,t,r=Z(null!=t.z,null!=t.m)){return r(e,t)}function R(e,t,r){if(null==e)return null;const n=d(t,r),o=[];for(let t=0;t<e.coords.length;t+=n){const r=[];for(let o=0;o<n;o++)r.push(e.coords[t+o]);o.push(r)}return t?r?{points:o,hasZ:t,hasM:r}:{points:o,hasZ:t}:r?{points:o,hasM:r}:{points:o}}function q(e,t,r=d(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const n=e.coords;let o=0;for(const e of t.points)for(let t=0;t<r;t++)n[o++]=e[t];return e}function L(e,t,r){if(!e)return null;const n=d(t,r),{coords:o,lengths:s}=e,i=[];let l=0;for(const e of s){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<n;t++)e.push(o[l++]);t.push(e)}i.push(t)}return t?r?{paths:i,hasZ:t,hasM:r}:{paths:i,hasZ:t}:r?{paths:i,hasM:r}:{paths:i}}function j(e,t,r=d(t.hasZ,t.hasM)){const{lengths:n,coords:o}=e;let s=0;for(const e of t.paths){for(const t of e)for(let e=0;e<r;e++)o[s++]=t[e];n.push(e.length)}return e}function z(e,t,r){if(!e)return null;const n=d(t,r),{coords:o,lengths:s}=e,i=[];let l=0;for(const e of s){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<n;t++)e.push(o[l++]);t.push(e)}i.push(t)}return t?r?{rings:i,hasZ:t,hasM:r}:{rings:i,hasZ:t}:r?{rings:i,hasM:r}:{rings:i}}function O(e,t,r=t.hasZ,n=t.hasM){return E(e,t.rings,r,n)}function E(e,t,r,n){const o=d(r,n),{lengths:s,coords:i}=e;let l=0;ae(e);for(const e of t){for(const t of e)for(let e=0;e<o;e++)i[l++]=t[e];s.push(e.length)}return e}const B=[],S=[];function Y(e,t,r,n,o){B[0]=e;const[s]=D(S,B,t,r,n,o);return ue(B),ue(S),s}function D(e,t,r,o,s,i){if(ue(e),!r){for(const r of t){const t=i?r.attributes[i]:void 0;e.push(new u.Om(null,r.attributes,null,t))}return e}switch(r){case"esriGeometryPoint":return function(e,t,r,n,o){const s=Z(r,n);for(const{geometry:r,attributes:n}of t){const t=null!=r?s(new h.A,r):null;e.push(new u.Om(t,n,null,o?n[o]:void 0))}return e}(e,t,o,s,i);case"esriGeometryMultipoint":return function(e,t,r,n,o){const s=d(r,n);for(const{geometry:r,attributes:n}of t){const t=null!=r?q(new h.A,r,s):null;e.push(new u.Om(t,n,null,o?n[o]:void 0))}return e}(e,t,o,s,i);case"esriGeometryPolyline":return function(e,t,r,n,o){const s=d(r,n);for(const{geometry:r,attributes:n,centroid:i}of t){const t=null!=r?j(new h.A,r,s):null,l=null!=i?k(new h.A,i):null;e.push(new u.Om(t,n,l,o?n[o]:void 0))}return e}(e,t,o,s,i);case"esriGeometryPolygon":return function(e,t,r,n,o){for(const{geometry:s,centroid:i,attributes:l}of t){const t=null!=s?O(new h.A,s,r,n):null,a=o?l[o]:void 0;null!=i?e.push(new u.Om(t,l,T(new h.A,i),a)):e.push(new u.Om(t,l,null,a))}return e}(e,t,o,s,i);default:f().error("convertToFeatureSet:unknown-geometry",new n.A(`Unable to parse unknown geometry type '${r}'`)),ue(e)}return e}function U(e,t,r,n){S[0]=e,Q(B,S,t,r,n);const o=B[0];return ue(B),ue(S),o}function V(e,t,r){if(null==e)return null;const o=new h.A;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==r&&(r=e.hasM),(0,a.fT)(e)?Z(null!=t?t:null!=e.z,null!=r?r:null!=e.m)(o,e):(0,a.Bi)(e)?O(o,e,t,r):(0,a.Rg)(e)?j(o,e,d(t,r)):(0,a.U9)(e)?q(o,e,d(t,r)):void f().error("convertFromGeometry:unknown-geometry",new n.A(`Unable to parse unknown geometry type '${e}'`))}function X(e,t,r,o){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(t){case"esriGeometryPoint":{let e=M;return r&&o?e=v:r?e=A:o&&(e=N),e(s)}case"esriGeometryMultipoint":return R(s,r,o);case"esriGeometryPolyline":return L(s,r,o);case"esriGeometryPolygon":return z(s,r,o);default:return f().error("convertToGeometry:unknown-geometry",new n.A(`Unable to parse unknown geometry type '${t}'`)),null}}function Q(e,t,r,o,s){if(ue(e),null==r)return function(e,t){for(const r of t)e.push({attributes:r.attributes});return e}(e,t);switch(r){case"esriGeometryPoint":return function(e,t,r,n){let o=M;r&&n?o=v:r?o=A:n&&(o=N);for(const r of t){const{geometry:t,attributes:n}=r,s=null!=t?o(t):null;e.push({attributes:n,geometry:s})}return e}(e,t,o,s);case"esriGeometryMultipoint":return function(e,t,r,n){for(const{geometry:o,attributes:s}of t)e.push({attributes:s,geometry:null!=o?R(o,r,n):null});return e}(e,t,o,s);case"esriGeometryPolyline":return function(e,t,r,n){for(const{geometry:o,attributes:s}of t)e.push({attributes:s,geometry:null!=o?L(o,r,n):null});return e}(e,t,o,s);case"esriGeometryPolygon":return function(e,t,r,n){for(const{geometry:o,attributes:s,centroid:i}of t){const t=null!=o?z(o,r,n):null;if(null!=i){const r=M(i);e.push({attributes:s,centroid:r,geometry:t})}else e.push({attributes:s,geometry:t})}return e}(e,t,o,s);default:f().error("convertToFeatureSet:unknown-geometry",new n.A(`Unable to parse unknown geometry type '${r}'`))}return e}function $(e){const{objectIdFieldName:t,spatialReference:r,transform:n,fields:o,hasM:s,hasZ:i,features:l,geometryType:a,exceededTransferLimit:u,uniqueIdField:c,queryGeometry:h,queryGeometryType:d}=e,f={features:Q([],l,a,i,s),fields:o,geometryType:a,objectIdFieldName:t,spatialReference:r,uniqueIdField:c,queryGeometry:X(h,d,!1,!1)};return n&&(f.transform=n),u&&(f.exceededTransferLimit=u),s&&(f.hasM=s),i&&(f.hasZ=i),f}function J(e,t){const r=new c.A,{hasM:o,hasZ:s,features:i,objectIdFieldName:l,spatialReference:a,geometryType:u,exceededTransferLimit:h,transform:d,fields:m}=e;return m&&(r.fields=m),r.geometryType=u??null,r.objectIdFieldName=l??t??null,r.spatialReference=a??null,r.objectIdFieldName?(i&&D(r.features,i,u,s,o,r.objectIdFieldName),h&&(r.exceededTransferLimit=h),o&&(r.hasM=o),s&&(r.hasZ=s),d&&(r.transform=d),r):(f().error(new n.A("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),r)}function H(e){const{transform:t,features:r,hasM:n,hasZ:o}=e;if(!t)return e;for(const e of r)null!=e.geometry&&oe(e.geometry,e.geometry,n,o,t),null!=e.centroid&&oe(e.centroid,e.centroid,n,o,t);return e.transform=null,e}function K(e,t){const{geometryType:r,features:n,hasM:o,hasZ:s}=t;if(!e)return t;for(let t=0;t<n.length;t++){const i=n[t],l=i.weakClone();l.geometry=new h.A,W(l.geometry,i.geometry,o,s,r,e),i.centroid&&(l.centroid=new h.A,W(l.centroid,i.centroid,o,s,"esriGeometryPoint",e)),n[t]=l}return t.transform=e,t}function W(e,t,r,n,o,s,i=r,l=n){if(ae(e),!t?.coords.length)return null;const a=m[o],{coords:u,lengths:c}=t,h=d(r,n),f=d(r&&i,n&&l),y=b(r,n,i,l);if(!c.length)return y(e.coords,u,0,0,w(s,u[0]),I(s,u[1])),ae(e,h,0),e;let g,p,_,P,G=0,M=0,T=M;for(const t of c){if(t<a)continue;let r=0;M=T,_=g=w(s,u[G]),P=p=I(s,u[G+1]),y(e.coords,u,M,G,_,P),r++,G+=h,M+=f;for(let n=1;n<t;n++,G+=h)_=w(s,u[G]),P=I(s,u[G+1]),_===g&&P===p||(y(e.coords,u,M,G,_-g,P-p),M+=f,r++,g=_,p=P);r>=a&&(e.lengths.push(r),T=M)}return ue(e.coords,T),e.coords.length?e:null}function ee(e,t,r,n,o,s,i=r,l=n){if(ae(e),!t?.coords.length)return null;const a=m[o],{coords:u,lengths:c}=t,h=d(r,n),f=d(r&&i,n&&l),y=b(r,n,i,l);if(!c.length)return y(e.coords,u,0,0,u[0],u[1]),ae(e,h,0),e;let g=0;const p=s*s;for(const t of c){if(t<a){g+=t*h;continue}const r=e.coords.length/f,n=g,o=g+(t-1)*h;y(e.coords,u,e.coords.length,n,u[n],u[n+1]),re(e.coords,u,h,p,y,n,o),y(e.coords,u,e.coords.length,o,u[o],u[o+1]);const s=e.coords.length/f-r;s>=a?e.lengths.push(s):ue(e.coords,r*f),g+=t*h}return e.coords.length?e:null}function te(e,t,r,n){const o=e[t],s=e[t+1],i=e[r],l=e[r+1],a=e[n],u=e[n+1];let c=i,h=l,d=a-c,f=u-h;if(0!==d||0!==f){const e=((o-c)*d+(s-h)*f)/(d*d+f*f);e>1?(c=a,h=u):e>0&&(c+=d*e,h+=f*e)}return d=o-c,f=s-h,d*d+f*f}function re(e,t,r,n,o,s,i){let l,a=n,u=0;for(let e=s+r;e<i;e+=r)l=te(t,e,s,i),l>a&&(u=e,a=l);a>n&&(u-s>r&&re(e,t,r,n,o,s,u),o(e,t,e.length,u,t[u],t[u+1]),i-u>r&&re(e,t,r,n,o,u,i))}function ne(e,t,r,n){if(!t?.coords?.length)return null;const o=d(r,n);let s=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=o){const r=e[t],n=e[t+1];s=Math.min(s,r),u=Math.max(u,r),a=Math.min(a,n),c=Math.max(c,n)}}return(0,i.is)(e)?(0,i.BI)(e,s,a,u,c):(0,l.fA)(s,a,u,c,e),e}function oe(e,t,r,n,o){const{coords:i,lengths:l}=t,a=d(r,n);if(!i.length)return e!==t&&ae(e),e;(0,s.Lw)(o);const{originPosition:u,scale:c,translate:h}=o,f=ce;f.originPosition=u;const m=f.scale;m[0]=c[0]??1,m[1]=-(c[1]??1),m[2]=c[2]??1,m[3]=c[3]??1;const y=f.translate;if(y[0]=h[0]??0,y[1]=h[1]??0,y[2]=h[2]??0,y[3]=h[3]??0,!l.length){for(let t=0;t<a;++t)e.coords[t]=P(f,i[t],t);return e!==t&&ae(e,a,0),e}let g=0;for(let t=0;t<l.length;t++){const r=l[t];e.lengths[t]=r;for(let t=0;t<a;++t)e.coords[g+t]=P(f,i[g+t],t);let n=e.coords[g],o=e.coords[g+1];g+=a;for(let t=1;t<r;t++,g+=a){n+=i[g]*m[0],o+=i[g+1]*m[1],e.coords[g]=n,e.coords[g+1]=o;for(let t=2;t<a;++t)e.coords[g+t]=P(f,i[g+t],t)}}return e!==t&&ae(e,i.length,l.length),e}function se(e,t,r,n,o,s){if(ae(e),e.lengths.push(...t.lengths),r===o&&n===s)for(let r=0;r<t.coords.length;r++)e.coords.push(t.coords[r]);else{const i=d(r,n),l=b(r,n,o,s),a=t.coords;for(let t=0;t<a.length;t+=i)l(e.coords,a,e.coords.length,t,a[t],a[t+1])}return e}function ie(e,t,r,n){let o=0,s=e[n*t],i=e[n*(t+1)];for(let l=1;l<r;l++){const r=s+e[n*(t+l)],a=i+e[n*(t+l)+1],u=(r-s)*(a+i);s=r,i=a,o+=u}return.5*o}function le(e,t){const{coords:r,lengths:n}=e;let o=0,s=0;for(let e=0;e<n.length;e++){const i=n[e];s+=ie(r,o,i,t),o+=i}return Math.abs(s)}function ae(e,t=0,r=0){ue(e.lengths,r),ue(e.coords,t)}function ue(e,t=0){e.length!==t&&(e.length=t)}const ce={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}},56899:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(9813),o=r(13393),s=r(2747),i=r(53126),l=r(42961),a=r(91463),u=r(92862);function c(e,t){return t}function h(e,t,r,n){switch(r){case 0:return y(e,t+n,0);case 1:return"lowerLeft"===e.originPosition?y(e,t+n,1):function({translate:e,scale:t},r,n){return e[n]-r*t[n]}(e,t+n,1)}}function d(e,t,r,n){return 2===r?y(e,t,2):h(e,t,r,n)}function f(e,t,r,n){return 2===r?y(e,t,3):h(e,t,r,n)}function m(e,t,r,n){return 3===r?y(e,t,3):d(e,t,r,n)}function y({translate:e,scale:t},r,n){return e[n]+r*t[n]}class g{constructor(e){this._options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=c,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new l.jy}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const t=(0,i.N)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return new s.A}addField(e,t){e.fields.push(u.A.fromJSON(t));const r=e.fields.map((e=>e.name));this._attributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){const r=this._options.maxStringAttributeLength,n=this._options.maxStringAttributeFields;(0,l.Uz)(t.attributes,n,r,(r=>{const n=t.attributes[e.objectIdFieldName];null!=n&&this._missingAttributes.push({objectId:n,attribute:r})})),e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:n}=t,o=(0,a.Ch)(r.clone(),r,!1,!1,this._transform),s=(0,a.zv)(o,n,!1,!1);let i=null;switch(n){case"esriGeometryPoint":i="point";break;case"esriGeometryPolygon":i="polygon";break;case"esriGeometryPolyline":i="polyline";break;case"esriGeometryMultipoint":i="multipoint"}s.type=i,e.queryGeometryType=n,e.queryGeometry=s}prepareFeatures(e){switch(this._transform=e.transform??null,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"point":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:(0,n.Xb)(e.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new l.HP((0,o.c)(),null,new this._attributesConstructor)}allocateCoordinates(){const e=this._lengths.reduce(((e,t)=>e+t),0);this._coordinateBuffer=new Float64Array(e*this._vertexDimension),this._coordinateBufferPtr=0}addLength(e,t){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const n=this._transform?this._applyTransform(this._transform,t,r,0):t;if(null!=n)switch(r){case 0:e.x=n;break;case 1:e.y=n;break;case 2:e.hasZ?e.z=n:e.m=n;break;case 3:e.m=n}}_transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e),this._transform?this._applyTransform(this._transform,e,t,r):e}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const n=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)}_createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const n=this._transformPathLikeValue(t,r),o=e[e.length-1],s=this._coordinateBuffer;if(s){if(0===r){const e=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;o.push(new Float64Array(s.buffer,e,this._vertexDimension))}s[this._coordinateBufferPtr++]=n}}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?m:t?d:r?f:h}}var p=r(1989);class _{_parseFeatureQuery(e){const t=new g(e.options),r=(0,p.m)(e.buffer,t),n={...r,spatialReference:r.spatialReference?.toJSON(),fields:r.fields?r.fields.map((e=>e.toJSON())):void 0,missingAttributes:t.missingAttributes};return Promise.resolve(n)}}function b(){return new _}}}]);