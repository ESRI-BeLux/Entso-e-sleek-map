"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[7965],{84341:(t,e,E)=>{E.d(e,{AK:()=>A,Wz:()=>T,oe:()=>n});var _=E(75170);function n(t,e=!1){return t<=_.y9?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function T(t){return((0,_.cy)(t)?t.length:t.byteLength/8)<=_.y9?Array.from(t):new Float32Array(t)}function A(t,e,E){return Array.isArray(t)?t.slice(e,e+E):t.subarray(e,e+E)}},91546:(t,e,E)=>{function _(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}E.d(e,{GJ:()=>_})},73909:(t,e,E)=>{E.d(e,{b:()=>T});var _=E(68668),n=E(33609);function T(t,e,E){const T=Array.isArray(t),i=T?t.length/e:t.byteLength/(4*e),s=T?t:new Uint32Array(t,0,i*e),o=E?.minReduction??0,O=E?.originalIndices||null,S=O?O.length:0,I=E?.componentOffsets||null;let C=0;if(I)for(let t=0;t<I.length-1;t++){const e=I[t+1]-I[t];e>C&&(C=e)}else C=i;const c=Math.floor(1.1*C)+1;(null==N||N.length<2*c)&&(N=new Uint32Array((0,_.cU)(2*c)));for(let t=0;t<2*c;t++)N[t]=0;let a=0;const f=!!I&&!!O,L=f?S:i;let u=(0,n.my)(i);const M=new Uint32Array(S),D=1.96;let l=0!==o?Math.ceil(4*D*D/(o*o)*o*(1-o)):L,P=1,U=I?I[1]:L;for(let t=0;t<L;t++){if(t===l){const e=1-a/t;if(e+D*Math.sqrt(e*(1-e)/t)<o)return null;l*=2}if(t===U){for(let t=0;t<2*c;t++)N[t]=0;if(O)for(let t=I[P-1];t<I[P];t++)M[t]=u[O[t]];U=I[++P]}const E=f?O[t]:t,_=E*e,n=R(s,_,e);let T=n%c,r=a;for(;0!==N[2*T+1];){if(N[2*T]===n){const t=N[2*T+1]-1;if(A(s,_,t*e,e)){r=u[t];break}}T++,T>=c&&(T-=c)}r===a&&(N[2*T]=n,N[2*T+1]=E+1,a++),u[E]=r}if(0!==o&&1-a/i<o)return null;if(f){for(let t=I[P-1];t<M.length;t++)M[t]=u[O[t]];u=(0,n.Dg)(M)}const F=T?new Array(a):new Uint32Array(a*e);a=0;for(let t=0;t<L;t++)u[t]===a&&(r(s,(f?O[t]:t)*e,F,a*e,e),a++);if(O&&!f){const t=new Uint32Array(S);for(let e=0;e<t.length;e++)t[e]=u[O[e]];u=(0,n.Dg)(t)}return{buffer:Array.isArray(F)?F:F.buffer,indices:u,uniqueCount:a}}function A(t,e,E,_){for(let n=0;n<_;n++)if(t[e+n]!==t[E+n])return!1;return!0}function r(t,e,E,_,n){for(let T=0;T<n;T++)E[_+T]=t[e+T]}function R(t,e,E){let _=0;for(let n=0;n<E;n++)_=t[e+n]+_|0,_=_+(_<<11)+(_>>>2)|0;return _>>>0}let N=null},17434:(t,e,E)=>{E.d(e,{BP:()=>R,l5:()=>N});var _=E(47443),n=E(91546),T=E(70199);class A{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const e of t.fields.keys()){const E=t.fields.get(e);this[e]=new E.constructor(this.buffer,E.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const E=this[t];return E&&E.elementCount===e.ElementCount&&E.elementType===e.ElementType?E:null}slice(t,e){return new A(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e=0,E=0,_=t.count){const n=this.stride;if(n%4==0){const T=new Uint32Array(t.buffer,e*n,_*n/4);new Uint32Array(this.buffer,E*n,_*n/4).set(T)}else{const T=new Uint8Array(t.buffer,e*n,_*n);new Uint8Array(this.buffer,E*n,_*n).set(T)}return this}get usedMemory(){return this.byteLength}dispose(){}}class r{constructor(t=null){this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach((t=>this._fields.set(t[0],{...t[1],constructor:o(t[1].constructor)}))))}vec2f(t,e){return this._appendField(t,_.gH,e),this}vec2f64(t,e){return this._appendField(t,_.si,e),this}vec3f(t,e){return this._appendField(t,_.xs,e),this}vec3f64(t,e){return this._appendField(t,_.Xm,e),this}vec4f(t,e){return this._appendField(t,_.Eq,e),this}vec4f64(t,e){return this._appendField(t,_.Aj,e),this}mat3f(t,e){return this._appendField(t,_.jZ,e),this}mat3f64(t,e){return this._appendField(t,_.j0,e),this}mat4f(t,e){return this._appendField(t,_.Sx,e),this}mat4f64(t,e){return this._appendField(t,_.E$,e),this}vec4u8(t,e){return this._appendField(t,_.XP,e),this}f32(t,e){return this._appendField(t,_.Y$,e),this}f64(t,e){return this._appendField(t,_.qB,e),this}u8(t,e){return this._appendField(t,_.SL,e),this}u16(t,e){return this._appendField(t,_.h,e),this}i8(t,e){return this._appendField(t,_.bf,e),this}vec2i8(t,e){return this._appendField(t,_.D6,e),this}vec2i16(t,e){return this._appendField(t,_.mJ,e),this}vec2u8(t,e){return this._appendField(t,_.LC,e),this}vec4u16(t,e){return this._appendField(t,_.Uz,e),this}u32(t,e){return this._appendField(t,_.P,e),this}_appendField(t,e,E){if(this._fields.has(t))return void(0,T.vA)(!1,`${t} already added to vertex buffer layout`);const _=e.ElementCount*(0,n.GJ)(e.ElementType),A=this._stride;this._stride+=_,this._fields.set(t,{size:_,constructor:e,offset:A,optional:E})}createBuffer(t){return new A(this,t)}createView(t){return new A(this,t)}clone(){const t=new r;return t._stride=this._stride,t._fields=new Map,this._fields.forEach(((e,E)=>t._fields.set(E,e))),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach((e=>t=Math.max(t,(0,n.GJ)(e.constructor.ElementType)))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function R(){return new r}class N{constructor(t){this.fields=new Array,t.fields.forEach(((t,e)=>{const E={...t,constructor:s(t.constructor)};this.fields.push([e,E])})),this.stride=t.stride}}const i=[_.Y$,_.gH,_.xs,_.Eq,_.jZ,_.Sx,_.qB,_.si,_.Xm,_.Aj,_.j0,_.E$,_.SL,_.LC,_.eI,_.XP,_.h,_.Yi,_.nS,_.Uz,_.P,_.An,_.H$,_.ml,_.bf,_.D6,_.m8,_.TX,_.Qt,_.mJ,_.Vp,_.E7,_.My,_.UL,_.zD,_.Y4];function s(t){return`${t.ElementType}_${t.ElementCount}`}function o(t){return O.get(t)}const O=new Map;i.forEach((t=>O.set(s(t),t)))},9888:(t,e,E)=>{E.d(e,{U:()=>T});var _=E(65414),n=E(50751);function T(t,e=0){const E=t.stride;return Array.from(t.fields.keys()).map((_=>{const T=t.fields.get(_),r=T.constructor.ElementCount,R=A(T.constructor.ElementType),N=T.offset,i=!(!T.optional||!T.optional.glNormalized);return new n._(_,r,R,N,E,i,e)}))}function A(t){const e=r[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const r={u8:_.pe.UNSIGNED_BYTE,u16:_.pe.UNSIGNED_SHORT,u32:_.pe.UNSIGNED_INT,i8:_.pe.BYTE,i16:_.pe.SHORT,i32:_.pe.INT,f32:_.pe.FLOAT}},1795:(t,e,E)=>{E.d(e,{aT:()=>n,fA:()=>T});var _=E(68668);function n(t,e,E,_,n,T=2){const r=1/(Math.abs(E)+Math.abs(_)+Math.abs(n)),R=E*r,N=_*r,i=n<=0?(R>=0?1:-1)*(1-Math.abs(N)):R,s=n<=0?(N>=0?1:-1)*(1-Math.abs(R)):N,o=e*T;t[o]=A(i),t[o+1]=A(s)}function T(t){const e=t.length/3,E=new Int16Array(2*e);let _=0;for(let T=0;T<e;++T)n(E,T,t[_++],t[_++],t[_++]);return E}function A(t){return(0,_.qE)(Math.round(32767*t),-32767,32767)}E(55525),E(88435),E(84341)},3809:(t,e,E)=>{var _;function n(t){return t===_.POSITION}E.d(e,{b:()=>n,r:()=>_}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(_||(_={}))},51022:(t,e,E)=>{E.d(e,{I$:()=>A,In:()=>N,gr:()=>R});var _=E(9888),n=E(17434),T=E(3809);const A=(0,n.BP)().vec3f(T.r.POSITION).u16(T.r.COMPONENTINDEX),r=(0,n.BP)().vec2u8(T.r.SIDENESS),R=((0,_.U)(r),(0,n.BP)().vec3f(T.r.POSITION0).vec3f(T.r.POSITION1).vec2i16(T.r.NORMALCOMPRESSED).u16(T.r.COMPONENTINDEX).u8(T.r.VARIANTOFFSET,{glNormalized:!0}).u8(T.r.VARIANTSTROKE).u8(T.r.VARIANTEXTENSION,{glNormalized:!0})),N=(0,n.BP)().vec3f(T.r.POSITION0).vec3f(T.r.POSITION1).vec2i16(T.r.NORMALCOMPRESSED).vec2i16(T.r.NORMAL2COMPRESSED).u16(T.r.COMPONENTINDEX).u8(T.r.VARIANTOFFSET,{glNormalized:!0}).u8(T.r.VARIANTSTROKE).u8(T.r.VARIANTEXTENSION,{glNormalized:!0});new Map([[T.r.POSITION0,0],[T.r.POSITION1,1],[T.r.COMPONENTINDEX,2],[T.r.VARIANTOFFSET,3],[T.r.VARIANTSTROKE,4],[T.r.VARIANTEXTENSION,5],[T.r.NORMALCOMPRESSED,6],[T.r.NORMAL2COMPRESSED,7],[T.r.SIDENESS,8]])},41454:(t,e,E)=>{E.d(e,{K:()=>i});var _=E(22157),n=E(68668),T=E(55525),A=E(88435);const r=-1;var R,N;function i(t,e,E,A=c){const R=t.vertices.position,N=t.vertices.componentIndex,i=(0,n.kU)(A.anglePlanar),C=(0,n.kU)(A.angleSignificantEdge),a=Math.cos(C),f=Math.cos(i),L=I.edge,u=L.position0,M=L.position1,D=L.faceNormal0,l=L.faceNormal1,P=S(t),U=function(t){const e=t.faces.length/3,E=t.faces,_=t.neighbors;let n=0;for(let t=0;t<e;t++){const e=_[3*t],T=_[3*t+1],A=_[3*t+2],R=E[3*t],N=E[3*t+1],i=E[3*t+2];n+=e===r||R<N?1:0,n+=T===r||N<i?1:0,n+=A===r||i<R?1:0}const T=new Int32Array(4*n);let A=0;for(let t=0;t<e;t++){const e=_[3*t],n=_[3*t+1],R=_[3*t+2],N=E[3*t],i=E[3*t+1],s=E[3*t+2];(e===r||N<i)&&(T[A++]=N,T[A++]=i,T[A++]=t,T[A++]=e),(n===r||i<s)&&(T[A++]=i,T[A++]=s,T[A++]=t,T[A++]=n),(R===r||s<N)&&(T[A++]=s,T[A++]=N,T[A++]=t,T[A++]=R)}return T}(t),F=U.length/4,G=e.allocate(F);let B=0;const d=F,h=E.allocate(d);let p=0,H=0,g=0;const m=(0,_.y1)(0,F),y=new Float32Array(F);y.forEach(((t,e,E)=>{R.getVec(U[4*e],u),R.getVec(U[4*e+1],M),E[e]=(0,T.p)(u,M)})),m.sort(((t,e)=>y[e]-y[t]));const V=new Array,v=new Array;for(let t=0;t<F;t++){const _=m[t],n=y[_],A=U[4*_],S=U[4*_+1],I=U[4*_+2],C=U[4*_+3],c=C===r;if(R.getVec(A,u),R.getVec(S,M),c)(0,T.s)(D,P[3*I],P[3*I+1],P[3*I+2]),(0,T.c)(l,D),L.componentIndex=N.get(A),L.cosAngle=(0,T.j)(D,l);else{if((0,T.s)(D,P[3*I],P[3*I+1],P[3*I+2]),(0,T.s)(l,P[3*C],P[3*C+1],P[3*C+2]),L.componentIndex=N.get(A),L.cosAngle=(0,T.j)(D,l),o(L,f))continue;L.cosAngle<-.9999&&(0,T.c)(l,D)}H+=n,g++,c||s(L,a)?(e.write(G,B++,L),V.push(n)):O(L,i)&&(E.write(h,p++,L),v.push(n))}const X=new Float32Array(V.reverse()),b=new Float32Array(v.reverse());return{regular:{instancesData:e.trim(G,B),lodInfo:{lengths:X}},silhouette:{instancesData:E.trim(h,p),lodInfo:{lengths:b}},averageEdgeLength:H/g}}function s(t,e){return t.cosAngle<e}function o(t,e){return t.cosAngle>e}function O(t,e){const E=(0,n.XM)(t.cosAngle),_=I.fwd,A=I.ortho;return(0,T.D)(_,t.position1,t.position0),E*((0,T.j)((0,T.b)(A,t.faceNormal0,t.faceNormal1),_)>0?-1:1)>e}function S(t){const e=t.faces.length/3,E=t.vertices.position,_=t.faces,n=C.v0,A=C.v1,r=C.v2,R=new Float32Array(3*e);for(let t=0;t<e;t++){const e=_[3*t],N=_[3*t+1],i=_[3*t+2];E.getVec(e,n),E.getVec(N,A),E.getVec(i,r),(0,T.f)(A,A,n),(0,T.f)(r,r,n),(0,T.b)(n,A,r),(0,T.n)(n,n),R[3*t]=n[0],R[3*t+1]=n[1],R[3*t+2]=n[2]}return R}(N=R||(R={}))[N.SOLID=0]="SOLID",N[N.SKETCH=1]="SKETCH";const I={edge:{position0:(0,A.vt)(),position1:(0,A.vt)(),faceNormal0:(0,A.vt)(),faceNormal1:(0,A.vt)(),componentIndex:0,cosAngle:0},ortho:(0,A.vt)(),fwd:(0,A.vt)()},C={v0:(0,A.vt)(),v1:(0,A.vt)(),v2:(0,A.vt)()},c={anglePlanar:4,angleSignificantEdge:35}},7965:(t,e,E)=>{E.d(e,{o6:()=>U,HY:()=>p,hx:()=>F,Jb:()=>h});var _=E(73909);function n(t,e,E){const _=e/3,n=new Uint32Array(E+1),T=new Uint32Array(E+1),A=(t,e)=>{t<e?n[t+1]++:T[e+1]++};for(let e=0;e<_;e++){const E=t[3*e],_=t[3*e+1],n=t[3*e+2];A(E,_),A(_,n),A(n,E)}let r=0,R=0;for(let t=0;t<E;t++){const e=n[t+1],E=T[t+1];n[t+1]=r,T[t+1]=R,r+=e,R+=E}const N=new Uint32Array(6*_),i=n[E],s=(t,e,E)=>{if(t<e){const _=n[t+1]++;N[2*_]=e,N[2*_+1]=E}else{const _=T[e+1]++;N[2*i+2*_]=t,N[2*i+2*_+1]=E}};for(let e=0;e<_;e++){const E=t[3*e],_=t[3*e+1],n=t[3*e+2];s(E,_,e),s(_,n,e),s(n,E,e)}const o=(t,e)=>{const E=2*t,_=e-t;for(let t=1;t<_;t++){const e=N[E+2*t],_=N[E+2*t+1];let n=t-1;for(;n>=0&&N[E+2*n]>e;n--)N[E+2*n+2]=N[E+2*n],N[E+2*n+3]=N[E+2*n+1];N[E+2*n+2]=e,N[E+2*n+3]=_}};for(let t=0;t<E;t++)o(n[t],n[t+1]),o(i+T[t],i+T[t+1]);const O=new Int32Array(3*_),S=(e,E)=>e===t[3*E]?0:e===t[3*E+1]?1:e===t[3*E+2]?2:-1,I=(t,e)=>{const E=S(t,e);O[3*e+E]=-1},C=(t,e,E,_)=>{const n=S(t,e);O[3*e+n]=_;const T=S(E,_);O[3*_+T]=e};for(let t=0;t<E;t++){let e=n[t];const E=n[t+1];let _=T[t];const A=T[t+1];for(;e<E&&_<A;){const E=N[2*e],n=N[2*i+2*_];E===n?(C(t,N[2*e+1],n,N[2*i+2*_+1]),e++,_++):E<n?(I(t,N[2*e+1]),e++):(I(n,N[2*i+2*_+1]),_++)}for(;e<E;)I(t,N[2*e+1]),e++;for(;_<A;)I(N[2*i+2*_],N[2*i+2*_+1]),_++}return O}var T=E(17434),A=E(3809),r=E(51022),R=E(356),N=E(55525),i=E(88435),s=E(9888),o=E(1795);class O{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?a:c}write(t,e,E){const _=this._edgeHashFunction(E);l.seed=_;const n=l.getIntRange(0,255),T=l.getIntRange(0,this.settings.variants-1),A=l.getFloat(),r=255*(.5*function(t){const e=t<0?-1:1;return Math.abs(t)**1.2*e}(-(1-Math.min(A/.7,1))+Math.max(0,A-.7)/(1-.7))+.5);t.position0.setVec(e,E.position0),t.position1.setVec(e,E.position1),t.componentIndex.set(e,E.componentIndex),t.variantOffset.set(e,n),t.variantStroke.set(e,T),t.variantExtension.set(e,r)}trim(t,e){return t.slice(0,e)}}const S=new Float32Array(6),I=new Uint32Array(S.buffer),C=new Uint32Array(1);function c(t){const e=S;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],C[0]=5381;for(let t=0;t<I.length;t++)C[0]=31*C[0]+I[t];return C[0]}function a(t){const e=S;e[0]=L(t.position0[0]),e[1]=L(t.position0[1]),e[2]=L(t.position0[2]),e[3]=L(t.position1[0]),e[4]=L(t.position1[1]),e[5]=L(t.position1[2]),C[0]=5381;for(let t=0;t<I.length;t++)C[0]=31*C[0]+I[t];return C[0]}const f=1e4;function L(t){return Math.round(t*f)/f}class u{constructor(){this._commonWriter=new O}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return r.gr.createBuffer(t)}write(t,e,E){this._commonWriter.write(t,e,E),(0,N.g)(D,E.faceNormal0,E.faceNormal1),(0,N.n)(D,D);const{typedBuffer:_,typedBufferStride:n}=t.normalCompressed;(0,o.aT)(_,e,D[0],D[1],D[2],n)}trim(t,e){return this._commonWriter.trim(t,e)}}u.Layout=r.gr,u.glLayout=(0,s.U)(r.gr,1);class M{constructor(){this._commonWriter=new O}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return r.In.createBuffer(t)}write(t,e,E){this._commonWriter.write(t,e,E);{const{typedBuffer:_,typedBufferStride:n}=t.normalCompressed;(0,o.aT)(_,e,E.faceNormal0[0],E.faceNormal0[1],E.faceNormal0[2],n)}{const{typedBuffer:_,typedBufferStride:n}=t.normal2Compressed;(0,o.aT)(_,e,E.faceNormal1[0],E.faceNormal1[1],E.faceNormal1[2],n)}}trim(t,e){return this._commonWriter.trim(t,e)}}M.Layout=r.In,M.glLayout=(0,s.U)(r.In,1);const D=(0,i.vt)(),l=new R.A;var P=E(41454);function U(t){const e=F(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return B.updateSettings(t.writerSettings),d.updateSettings(t.writerSettings),(0,P.K)(e,B,d)}function F(t,e,E,T){if(e){const e=n(E,T,t.count);return new G(E,T,e,t)}const A=(0,_.b)(t.buffer,t.stride/4,{originalIndices:E,originalIndicesLength:T}),R=n(A.indices,T,A.uniqueCount);return{faces:A.indices,facesLength:A.indices.length,neighbors:R,vertices:r.I$.createView(A.buffer)}}class G{constructor(t,e,E,_){this.faces=t,this.facesLength=e,this.neighbors=E,this.vertices=_}}const B=new u,d=new M,h=(0,T.BP)().vec3f(A.r.POSITION0).vec3f(A.r.POSITION1),p=(0,T.BP)().vec3f(A.r.POSITION0).vec3f(A.r.POSITION1).u16(A.r.COMPONENTINDEX)},50751:(t,e,E)=>{E.d(e,{_:()=>_});class _{constructor(t,e,E,_,n,T=!1,A=0){this.name=t,this.count=e,this.type=E,this.offset=_,this.stride=n,this.normalized=T,this.divisor=A}}},65414:(t,e,E)=>{var _,n,T,A,r,R,N,i,s,o,O,S,I,C,c,a,f,L,u,M;E.d(e,{Ab:()=>C,Ac:()=>N,Ap:()=>I,CQ:()=>G,Cj:()=>O,Co:()=>u,H0:()=>c,Hr:()=>U,MT:()=>s,NZ:()=>r,Nm:()=>P,R:()=>M,Tb:()=>A,WR:()=>n,Y7:()=>R,_U:()=>L,dn:()=>T,eA:()=>o,hn:()=>_,ld:()=>a,nI:()=>F,pF:()=>S,pe:()=>i,sS:()=>p,tx:()=>H,vt:()=>l,xM:()=>D,xV:()=>B,yQ:()=>f}),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(_||(_={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(n||(n={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(t){t[t.ADD=32774]="ADD",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(A||(A={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",t[t.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(r||(r={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(R||(R={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(N||(N={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(i||(i={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(s||(s={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(o||(o={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(O||(O={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(S||(S={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(I||(I={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(C||(C={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(c||(c={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(a||(a={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(f||(f={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(L||(L={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(u||(u={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(M||(M={}));const D=33984;var l,P,U;!function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.TransformFeedback=7]="TransformFeedback",t[t.Sync=8]="Sync",t[t.UNCOUNTED=9]="UNCOUNTED",t[t.LinesOfCode=9]="LinesOfCode",t[t.Uniform=10]="Uniform",t[t.COUNT=11]="COUNT"}(l||(l={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(P||(P={})),function(t){t[t.NONE=0]="NONE",t[t.BACK=1029]="BACK"}(U||(U={}));const F=33306;var G,B,d,h,p,H,g;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(G||(G={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(B||(B={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(d||(d={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(h||(h={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(p||(p={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(g||(g={}))}}]);