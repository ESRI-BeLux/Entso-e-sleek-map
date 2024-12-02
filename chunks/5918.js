"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[5918],{5918:(e,n,t)=>{t.r(n),t.d(n,{buffer:()=>E,changeDefaultSpatialReferenceTolerance:()=>Y,clearDefaultSpatialReferenceTolerance:()=>Z,clip:()=>w,contains:()=>m,convexHull:()=>_,crosses:()=>h,cut:()=>d,densify:()=>W,difference:()=>b,disjoint:()=>O,distance:()=>g,equals:()=>S,extendedSpatialReferenceInfo:()=>y,flipHorizontal:()=>q,flipVertical:()=>B,generalize:()=>G,geodesicArea:()=>Q,geodesicBuffer:()=>z,geodesicDensify:()=>F,geodesicLength:()=>U,intersect:()=>L,intersectLinesToPoints:()=>X,intersects:()=>A,isSimple:()=>J,nearestCoordinate:()=>C,nearestVertex:()=>H,nearestVertices:()=>I,offset:()=>V,overlaps:()=>k,planarArea:()=>K,planarLength:()=>M,relate:()=>D,rotate:()=>j,simplify:()=>N,symmetricDifference:()=>v,touches:()=>R,union:()=>T,within:()=>x}),t(22955);var r=t(73788),a=t(46803),i=t(10359);function c(e){return Array.isArray(e)?e[0]?.spatialReference:e?.spatialReference}function o(e){return e?Array.isArray(e)?e.map(o):e.toJSON?e.toJSON():e:e}function s(e){return Array.isArray(e)?e.map((e=>(0,i.rS)(e))):(0,i.rS)(e)}let u;async function f(){return u||(u=(0,r.ho)("geometryEngineWorker",{strategy:"distributed"})),u}async function l(e,n){return(await f()).invoke("executeGEOperation",{operation:e,parameters:o(n)})}async function p(e,n){const t=await f();return Promise.all(t.broadcast("executeGEOperation",{operation:e,parameters:o(n)}))}function y(e){return l("extendedSpatialReferenceInfo",[e])}async function w(e,n){return s(await l("clip",[c(e),e,n]))}async function d(e,n){return s(await l("cut",[c(e),e,n]))}function m(e,n){return l("contains",[c(e),e,n])}function h(e,n){return l("crosses",[c(e),e,n])}function g(e,n,t){return l("distance",[c(e),e,n,t])}function S(e,n){return l("equals",[c(e),e,n])}function A(e,n){return l("intersects",[c(e),e,n])}function R(e,n){return l("touches",[c(e),e,n])}function x(e,n){return l("within",[c(e),e,n])}function O(e,n){return l("disjoint",[c(e),e,n])}function k(e,n){return l("overlaps",[c(e),e,n])}function D(e,n,t){return l("relate",[c(e),e,n,t])}function J(e){return l("isSimple",[c(e),e])}async function N(e){return s(await l("simplify",[c(e),e]))}async function _(e,n=!1){return s(await l("convexHull",[c(e),e,n]))}async function b(e,n){return s(await l("difference",[c(e),e,n]))}async function v(e,n){return s(await l("symmetricDifference",[c(e),e,n]))}async function L(e,n){return s(await l("intersect",[c(e),e,n]))}async function T(e,n=null){const t=function(e,n){let t;return Array.isArray(e)?t=e:(t=[],t.push(e),null!=n&&t.push(n)),t}(e,n);return s(await l("union",[c(t),t]))}async function V(e,n,t,r,a,i){return s(await l("offset",[c(e),e,n,t,r,a,i]))}async function E(e,n,t,r=!1){const a=[c(e),e,n,t,r];return s(await l("buffer",a))}async function z(e,n,t,r,a,i){const o=[c(e),e,n,t,r,a,i];return s(await l("geodesicBuffer",o))}async function C(e,n,t=!0){const r=await l("nearestCoordinate",[c(e),e,n,t]);return{...r,coordinate:a.A.fromJSON(r.coordinate)}}async function H(e,n){const t=await l("nearestVertex",[c(e),e,n]);return{...t,coordinate:a.A.fromJSON(t.coordinate)}}async function I(e,n,t,r){return(await l("nearestVertices",[c(e),e,n,t,r])).map((e=>({...e,coordinate:a.A.fromJSON(e.coordinate)})))}function P(e){return"xmin"in e?e.center:"x"in e?e:e.extent?.center}async function j(e,n,t){if(null==e)throw new $;const r=e.spatialReference;if(null==(t=t??P(e)))throw new $;const a=e.constructor.fromJSON(await l("rotate",[r,e,n,t]));return a.spatialReference=r,a}async function q(e,n){if(null==e)throw new $;const t=e.spatialReference;if(null==(n=n??P(e)))throw new $;const r=e.constructor.fromJSON(await l("flipHorizontal",[t,e,n]));return r.spatialReference=t,r}async function B(e,n){if(null==e)throw new $;const t=e.spatialReference;if(null==(n=n??P(e)))throw new $;const r=e.constructor.fromJSON(await l("flipVertical",[t,e,n]));return r.spatialReference=t,r}async function G(e,n,t,r){return s(await l("generalize",[c(e),e,n,t,r]))}async function W(e,n,t){return s(await l("densify",[c(e),e,n,t]))}async function F(e,n,t,r=0){return s(await l("geodesicDensify",[c(e),e,n,t,r]))}function K(e,n){return l("planarArea",[c(e),e,n])}function M(e,n){return l("planarLength",[c(e),e,n])}function Q(e,n,t){return l("geodesicArea",[c(e),e,n,t])}function U(e,n,t){return l("geodesicLength",[c(e),e,n,t])}async function X(e,n){return s(await l("intersectLinesToPoints",[c(e),e,n]))}async function Y(e,n){await p("changeDefaultSpatialReferenceTolerance",[e,n])}async function Z(e){await p("clearDefaultSpatialReferenceTolerance",[e])}class $ extends Error{constructor(){super("Illegal Argument Exception")}}}}]);