"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[1211],{59929:(t,e,n)=>{n.d(e,{N:()=>g,a:()=>R,b:()=>A,c:()=>p,d:()=>m,f:()=>v,g:()=>E,i:()=>S,n:()=>q,u:()=>w,w:()=>b}),n(56531);var r=n(29287),o=n(68668),i=n(84538),s=n(55525),c=n(88435),u=n(56218),a=n(44284),h=n(42437),d=n(53903),l=n(28912),_=n(18921),f=n(20933);const g=m();function m(){return(0,a.vt)()}const T=u.e,O=u.e;function p(t,e){return(0,u.c)(e,t)}function A(t,e){return(0,a.fA)(t[0],t[1],t[2],e)}function b(t){return t}function R(t){return t[3]}function E(t){return t}function v(t,e,n,r){return(0,a.fA)(t,e,n,r)}function M(t,e,n){if(null==e)return!1;if(!F(t,e,N))return!1;let{t0:r,t1:o}=N;if((r<0||o<r&&o>0)&&(r=o),r<0)return!1;if(n){const{origin:t,direction:o}=e;n[0]=t[0]+o[0]*r,n[1]=t[1]+o[1]*r,n[2]=t[2]+o[2]*r}return!0}const N={t0:0,t1:0};function F(t,e,n){const{origin:r,direction:o}=e,i=I;i[0]=r[0]-t[0],i[1]=r[1]-t[1],i[2]=r[2]-t[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===s)return!1;const c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*s*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const a=Math.sqrt(u);return n.t0=(-c-a)/(2*s),n.t1=(-c+a)/(2*s),!0}const I=(0,c.vt)();function S(t,e){return M(t,e,null)}function j(t,e,n){const r=f.rq.get(),o=f.Rc.get();(0,s.b)(r,e.origin,e.direction);const c=R(t);(0,s.b)(n,r,e.origin),(0,s.h)(n,n,1/(0,s.l)(n)*c);const u=x(t,e.origin),a=(0,_.g7)(e.origin,n);return(0,i.$0)(o,a+u,r),(0,s.e)(n,n,o),n}function P(t,e,n){const r=(0,s.f)(f.rq.get(),e,t),o=(0,s.h)(f.rq.get(),r,t[3]/(0,s.l)(r));return(0,s.g)(n,o,t)}function x(t,e){const n=(0,s.f)(f.rq.get(),e,t),r=(0,s.l)(n),i=R(t),c=i+Math.abs(i-r);return(0,o.XM)(i/c)}const B=(0,c.vt)();function L(t,e,n,r){const i=(0,s.f)(B,e,t);switch(n){case d._.X:{const t=(0,o.jU)(i,B)[2];return(0,s.s)(r,-Math.sin(t),Math.cos(t),0)}case d._.Y:{const t=(0,o.jU)(i,B),e=t[1],n=t[2],c=Math.sin(e);return(0,s.s)(r,-c*Math.cos(n),-c*Math.sin(n),Math.cos(e))}case d._.Z:return(0,s.n)(r,i);default:return}}function C(t,e){const n=(0,s.f)(z,e,t);return(0,s.l)(n)-t[3]}function q(t,e){const n=(0,s.a)(t,e),r=R(t);return n<=r*r}function w(t,e,n=(0,a.vt)()){const r=(0,s.p)(t,e),o=t[3],i=e[3];return r+i<o?((0,u.c)(n,t),n):r+o<i?((0,u.c)(n,e),n):((0,s.k)(n,t,e,(r+i-o)/(2*r)),n[3]=(r+o+i)/2,n)}const z=(0,c.vt)(),y=m();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:g,altitudeAt:C,angleToSilhouette:x,axisAt:L,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,n){return M(t,e,n)?n:((0,l.oC)(e,t,n),P(t,n,n))},closestPointOnSilhouette:j,containsPoint:q,copy:p,create:m,distanceToSilhouette:function(t,e){const n=(0,s.f)(f.rq.get(),e,t),r=(0,s.o)(n),o=t[3]*t[3];return Math.sqrt(Math.abs(r-o))},elevate:function(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n},equals:O,exactEquals:T,fromCenterAndRadius:A,fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:v,getCenter:E,getRadius:R,intersectLine:function(t,e,n){const r=(0,l.Cr)(e,n);if(!F(t,r,N))return[];const{origin:o,direction:i}=r,{t0:u,t1:a}=N,d=e=>{const n=(0,c.vt)();return(0,s.q)(n,o,i,e),P(t,n,n)};return Math.abs(u-a)<(0,h.FD)()?[d(u)]:[d(u),d(a)]},intersectRay:M,intersectRayClosestSilhouette:function(t,e,n){if(M(t,e,n))return n;const r=j(t,e,f.rq.get());return(0,s.g)(n,e.origin,(0,s.h)(f.rq.get(),e.direction,(0,s.p)(e.origin,r)/(0,s.l)(e.direction))),n},intersectsRay:S,projectPoint:P,setAltitudeAt:function(t,e,n,r){const o=C(t,e),i=L(t,e,d._.Z,z),c=(0,s.h)(z,i,n-o);return(0,s.g)(r,e,c)},setExtent:function(t,e,n){return r.A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==n&&p(t,n),n},tmpSphere:y,union:w,wrap:b},Symbol.toStringTag,{value:"Module"}))},38766:(t,e,n)=>{n.d(e,{I:()=>o});var r=n(36227);class o{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024},91915:(t,e,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function o(t,e,n,r,o,i,s,c,u){return[t,e,n,r,o,i,s,c,u]}n.d(e,{fA:()=>o,vt:()=>r,zK:()=>i});const i=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:function(t,e){return new Float64Array(t,e,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},46548:(t,e,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}n.d(e,{o8:()=>o,vt:()=>r,zK:()=>i});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:o,create:r,createView:function(t,e){return new Float64Array(t,e,16)},fromValues:function(t,e,n,r,o,i,s,c,u,a,h,d,l,_,f,g){return[t,e,n,r,o,i,s,c,u,a,h,d,l,_,f,g]}},Symbol.toStringTag,{value:"Module"}))},4107:(t,e,n)=>{function r(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}n.d(e,{o8:()=>o,vt:()=>r,zK:()=>i});const i=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:o,create:r,createView:function(t,e){return new Float64Array(t,e,4)},fromValues:function(t,e,n,r){return[t,e,n,r]}},Symbol.toStringTag,{value:"Module"}))},11714:(t,e,n)=>{n.d(e,{FB:()=>d,C:()=>O,vt:()=>m,Qy:()=>T,ui:()=>p,m7:()=>A});var r=n(38766),o=n(84538),i=n(55525),s=n(88435),c=n(56218),u=n(44284),a=n(28912);function h(t){return t?{ray:(0,a.vt)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,a.vt)(),c0:0,c1:Number.MAX_VALUE}}new r.I((()=>h()));var d,l,_,f=n(83002),g=n(20933);function m(t){return t?[(0,f.vt)(t[0]),(0,f.vt)(t[1]),(0,f.vt)(t[2]),(0,f.vt)(t[3]),(0,f.vt)(t[4]),(0,f.vt)(t[5])]:[(0,f.vt)(),(0,f.vt)(),(0,f.vt)(),(0,f.vt)(),(0,f.vt)(),(0,f.vt)()]}function T(){return[(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)()]}function O(t,e){for(let n=0;n<b;n++)(0,f.C)(t[n],e[n]);return t}function p(t,e,n,r=v){const s=(0,o.lw)(g.Rc.get(),e,t);(0,o.B8)(s,s);for(let t=0;t<R;++t){const e=(0,c.t)(g.Km.get(),E[t],s);(0,i.s)(r[t],e[0]/e[3],e[1]/e[3],e[2]/e[3])}!function(t,e){(0,f.Cr)(e[l.FAR_BOTTOM_LEFT],e[l.NEAR_BOTTOM_LEFT],e[l.NEAR_TOP_LEFT],t[d.LEFT]),(0,f.Cr)(e[l.NEAR_BOTTOM_RIGHT],e[l.FAR_BOTTOM_RIGHT],e[l.FAR_TOP_RIGHT],t[d.RIGHT]),(0,f.Cr)(e[l.FAR_BOTTOM_LEFT],e[l.FAR_BOTTOM_RIGHT],e[l.NEAR_BOTTOM_RIGHT],t[d.BOTTOM]),(0,f.Cr)(e[l.NEAR_TOP_LEFT],e[l.NEAR_TOP_RIGHT],e[l.FAR_TOP_RIGHT],t[d.TOP]),(0,f.Cr)(e[l.NEAR_BOTTOM_LEFT],e[l.NEAR_BOTTOM_RIGHT],e[l.NEAR_TOP_RIGHT],t[d.NEAR]),(0,f.Cr)(e[l.FAR_BOTTOM_RIGHT],e[l.FAR_BOTTOM_LEFT],e[l.FAR_TOP_LEFT],t[d.FAR])}(n,r)}function A(t,e){for(let n=0;n<b;n++){const r=t[n];if(r[0]*e[0]+r[1]*e[1]+r[2]*e[2]+r[3]>=e[3])return!1}return!0}(_=d||(d={}))[_.LEFT=0]="LEFT",_[_.RIGHT=1]="RIGHT",_[_.BOTTOM=2]="BOTTOM",_[_.TOP=3]="TOP",_[_.NEAR=4]="NEAR",_[_.FAR=5]="FAR",function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(l||(l={})),l.FAR_BOTTOM_RIGHT,l.NEAR_BOTTOM_RIGHT,l.NEAR_BOTTOM_LEFT,l.FAR_BOTTOM_LEFT,l.NEAR_BOTTOM_LEFT,l.NEAR_BOTTOM_RIGHT,l.NEAR_TOP_RIGHT,l.NEAR_TOP_LEFT,l.FAR_BOTTOM_RIGHT,l.FAR_BOTTOM_LEFT,l.FAR_TOP_LEFT,l.FAR_TOP_RIGHT,l.NEAR_BOTTOM_RIGHT,l.FAR_BOTTOM_RIGHT,l.FAR_TOP_RIGHT,l.NEAR_TOP_RIGHT,l.FAR_BOTTOM_LEFT,l.NEAR_BOTTOM_LEFT,l.NEAR_TOP_LEFT,l.FAR_TOP_LEFT,l.FAR_TOP_LEFT,l.NEAR_TOP_LEFT,l.NEAR_TOP_RIGHT,l.FAR_TOP_RIGHT;const b=6,R=8,E=[(0,u.fA)(-1,-1,-1,1),(0,u.fA)(1,-1,-1,1),(0,u.fA)(1,1,-1,1),(0,u.fA)(-1,1,-1,1),(0,u.fA)(-1,-1,1,1),(0,u.fA)(1,-1,1,1),(0,u.fA)(1,1,1,1),(0,u.fA)(-1,1,1,1)],v=(new r.I(h),T())},61499:(t,e,n)=>{n.d(e,{Cr:()=>a,H6:()=>l,_I:()=>d,kb:()=>h,ld:()=>_,vt:()=>u});var r=n(68668),o=n(38766),i=n(55525),s=n(88435),c=n(20933);function u(t){return t?{origin:(0,s.o8)(t.origin),vector:(0,s.o8)(t.vector)}:{origin:(0,s.vt)(),vector:(0,s.vt)()}}function a(t,e,n=u()){return(0,i.c)(n.origin,t),(0,i.f)(n.vector,e,t),n}function h(t,e){const n=(0,i.f)(c.rq.get(),e,t.origin),o=(0,i.j)(t.vector,n),s=(0,i.j)(t.vector,t.vector),u=(0,r.qE)(o/s,0,1),a=(0,i.f)(c.rq.get(),(0,i.h)(c.rq.get(),t.vector,u),n);return(0,i.j)(a,a)}function d(t,e,n){return l(t,e,0,1,n)}function l(t,e,n,o,s){const{vector:u,origin:a}=t,h=(0,i.f)(c.rq.get(),e,a),d=(0,i.j)(u,h)/(0,i.o)(u);return(0,i.h)(s,u,(0,r.qE)(d,n,o)),(0,i.g)(s,s,t.origin)}function _(t,e,n){return!!function(t,e,n,o){const s=1e-6,u=t.origin,a=(0,i.g)(c.rq.get(),u,t.vector),h=e.origin,d=(0,i.g)(c.rq.get(),h,e.vector),l=c.rq.get(),_=c.rq.get();if(l[0]=u[0]-h[0],l[1]=u[1]-h[1],l[2]=u[2]-h[2],_[0]=d[0]-h[0],_[1]=d[1]-h[1],_[2]=d[2]-h[2],Math.abs(_[0])<s&&Math.abs(_[1])<s&&Math.abs(_[2])<s)return!1;const f=c.rq.get();if(f[0]=a[0]-u[0],f[1]=a[1]-u[1],f[2]=a[2]-u[2],Math.abs(f[0])<s&&Math.abs(f[1])<s&&Math.abs(f[2])<s)return!1;const g=l[0]*_[0]+l[1]*_[1]+l[2]*_[2],m=_[0]*f[0]+_[1]*f[1]+_[2]*f[2],T=l[0]*f[0]+l[1]*f[1]+l[2]*f[2],O=_[0]*_[0]+_[1]*_[1]+_[2]*_[2],p=(f[0]*f[0]+f[1]*f[1]+f[2]*f[2])*O-m*m;if(Math.abs(p)<s)return!1;let A=(g*m-T*O)/p,b=(g+m*A)/O;n&&(A=(0,r.qE)(A,0,1),b=(0,r.qE)(b,0,1));const R=c.rq.get(),E=c.rq.get();return R[0]=u[0]+A*f[0],R[1]=u[1]+A*f[1],R[2]=u[2]+A*f[2],E[0]=h[0]+b*_[0],E[1]=h[1]+b*_[1],E[2]=h[2]+b*_[2],o.tA=A,o.tB=b,o.pA=R,o.pB=E,o.distance2=(0,i.a)(R,E),!0}(t,e,!0,f)&&((0,i.c)(n,f.pA),!0)}const f={tA:0,tB:0,pA:(0,s.vt)(),pB:(0,s.vt)(),distance2:0};new o.I((()=>u()))},83002:(t,e,n)=>{n.d(e,{C:()=>a,Cr:()=>_,LV:()=>u,O_:()=>l,Qj:()=>h,T7:()=>N,Tj:()=>I,Ui:()=>M,_I:()=>S,ci:()=>g,fA:()=>d,gv:()=>F,lU:()=>f,mN:()=>j,mP:()=>R,mR:()=>v,vt:()=>c,ze:()=>E});var r=n(68668),o=n(55525),i=n(88435),s=(n(56218),n(18921),n(20933));function c(t=x){return[t[0],t[1],t[2],t[3]]}function u(t=x[0],e=x[1],n=x[2],r=x[3]){return d(t,e,n,r,s.Km.get())}function a(t,e){return d(e[0],e[1],e[2],e[3],t)}function h(t){return t}function d(t,e,n,r,o=c()){return o[0]=t,o[1]=e,o[2]=n,o[3]=r,o}function l(t,e,n){const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=Math.abs(r-1)>1e-5&&r>1e-12?1/Math.sqrt(r):1;return n[0]=e[0]*o,n[1]=e[1]*o,n[2]=e[2]*o,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]),n}function _(t,e,n,r=c()){const o=n[0]-e[0],i=n[1]-e[1],s=n[2]-e[2],u=t[0]-e[0],a=t[1]-e[1],h=t[2]-e[2],d=i*h-s*a,l=s*u-o*h,_=o*a-i*u,f=d*d+l*l+_*_,g=Math.abs(f-1)>1e-5&&f>1e-12?1/Math.sqrt(f):1;return r[0]=d*g,r[1]=l*g,r[2]=_*g,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function f(t,e,n,r=0,i=Math.floor(n*(1/3)),s=Math.floor(n*(2/3))){if(n<3)return!1;e(T,r);let c=i,u=!1;for(;c<n-1&&!u;)e(O,c),c++,u=!(0,o.i)(T,O);if(!u)return!1;for(c=Math.max(c,s),u=!1;c<n&&!u;)e(p,c),c++,(0,o.f)(A,T,O),(0,o.n)(A,A),(0,o.f)(b,O,p),(0,o.n)(b,b),u=!(0,o.i)(T,p)&&!(0,o.i)(O,p)&&Math.abs((0,o.j)(A,b))<m;return u?(_(T,O,p,t),!0):(0!==r||1!==i||2!==s)&&f(t,e,n,0,1,2)}function g(t,e,n=!0){const r=e.length/3;return f(t,((t,n)=>(0,o.s)(t,e[3*n+0],e[3*n+1],e[3*n+2])),n?r-1:r)}n(50599);const m=.99619469809,T=(0,i.vt)(),O=(0,i.vt)(),p=(0,i.vt)(),A=(0,i.vt)(),b=(0,i.vt)();function R(t,e,n){return e!==t&&a(t,e),t[3]=-(0,o.j)(t,n),t}function E(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function v(t,e,n,r){return(0,o.b)(p,e,t),l(n,p,r)}function M(t,e,n){return null!=e&&P(t,e.origin,e.direction,C,n)}function N(t,e,n){return P(t,e.origin,e.vector,B.NONE,n)}function F(t,e,n){return P(t,e.origin,e.vector,B.CLAMP,n)}function I(t,e){return j(t,e)>=0}function S(t,e,n){const r=(0,o.h)(s.rq.get(),t,-t[3]),i=function(t,e,n){const r=(0,o.h)(s.rq.get(),t,(0,o.j)(t,e));return(0,o.f)(n,e,r),n}(t,(0,o.f)(s.rq.get(),e,r),s.rq.get());return(0,o.g)(n,i,r),n}function j(t,e){return(0,o.j)(t,e)+t[3]}function P(t,e,n,i,s){const c=(0,o.j)(t,n);if(0===c)return!1;let u=-((0,o.j)(t,e)+t[3])/c;return i&B.CLAMP&&(u=(0,r.qE)(u,0,1)),!(!(i&B.INFINITE_MIN)&&u<0||!(i&B.INFINITE_MAX)&&u>1||((0,o.g)(s,e,(0,o.h)(s,n,u)),0))}const x=[0,0,1,0];var B,L;(L=B||(B={}))[L.NONE=0]="NONE",L[L.CLAMP=1]="CLAMP",L[L.INFINITE_MIN=4]="INFINITE_MIN",L[L.INFINITE_MAX=8]="INFINITE_MAX",B.INFINITE_MIN,B.INFINITE_MAX;const C=B.INFINITE_MAX},28912:(t,e,n)=>{n.d(e,{C:()=>h,Cr:()=>d,LV:()=>a,kb:()=>l,oC:()=>_,vt:()=>c}),n(22157);var r=n(38766),o=n(55525),i=n(88435),s=n(20933);function c(t){return t?u((0,i.o8)(t.origin),(0,i.o8)(t.direction)):u((0,i.vt)(),(0,i.vt)())}function u(t,e){return{origin:t,direction:e}}function a(t,e){const n=f.get();return n.origin=t,n.direction=e,n}function h(t,e=c()){return function(t,e,n=c()){return(0,o.c)(n.origin,t),(0,o.c)(n.direction,e),n}(t.origin,t.direction,e)}function d(t,e,n=c()){return(0,o.c)(n.origin,t),(0,o.f)(n.direction,e,t),n}function l(t,e){const n=(0,o.b)(s.rq.get(),(0,o.n)(s.rq.get(),t.direction),(0,o.f)(s.rq.get(),e,t.origin));return(0,o.j)(n,n)}function _(t,e,n){const r=(0,o.j)(t.direction,(0,o.f)(n,e,t.origin));return(0,o.g)(n,t.origin,(0,o.h)(n,t.direction,r)),n}const f=new r.I((()=>c()))},18921:(t,e,n)=>{n.d(e,{g7:()=>c,gr:()=>s});var r=n(68668),o=n(55525),i=n(88435);function s(t,e){return(0,o.j)(t,e)/(0,o.l)(t)}function c(t,e){const n=(0,o.j)(t,e)/((0,o.l)(t)*(0,o.l)(e));return-(0,r.XM)(n)}(0,i.vt)(),(0,i.vt)()},20933:(t,e,n)=>{n.d(e,{Rc:()=>_,J8:()=>f,rq:()=>d,Km:()=>l});var r=n(36227),o=n(91915),i=n(46548),s=n(4107),c=n(77818),u=n(88435),a=n(44284);class h{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new h(c.vt)}static createVec3f64(){return new h(u.vt)}static createVec4f64(){return new h(a.vt)}static createMat3f64(){return new h(o.vt)}static createMat4f64(){return new h(i.vt)}static createQuatf64(){return new h(s.vt)}get test(){return{length:this._items.length}}}h.createVec2f64();const d=h.createVec3f64(),l=h.createVec4f64(),_=(h.createMat3f64(),h.createMat4f64()),f=h.createQuatf64()},50599:(t,e,n)=>{n.d(e,{hG:()=>i,wp:()=>s}),n(68668);var r=n(55525),o=n(88435);function i(t){const e=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],n=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],r=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}function s(t,e){const n=Math.sqrt(e[0]*e[0]+e[4]*e[4]+e[8]*e[8]),o=Math.sqrt(e[1]*e[1]+e[5]*e[5]+e[9]*e[9]),i=Math.sqrt(e[2]*e[2]+e[6]*e[6]+e[10]*e[10]);return(0,r.s)(t,n,o,i),t}(0,o.vt)(),(0,o.vt)(),(0,o.vt)(),(0,o.vt)(),(0,o.vt)()},89541:(t,e,n)=>{n.d(e,{A:()=>z});var r,o,i=n(81546),s=n(45595),c=n(55525),u=n(88435),a=n(11714),h=n(28912),d=n(59929),l=n(70199);class _{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new f,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),f.clearPool(),M[0]=null,j.prune(),q.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=f.acquire();for(let r=0;r<e;r++){const e=t[r];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}f.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=f.acquire();for(const r of t){const t=e??(0,d.c)(this.objectToBoundingSphere(r),P);b(t[3])?(n.init(this._root),this._remove(r,t,n)):this._degenerateObjects.delete(r)}f.release(n),this._shrink()}update(t,e){if(!b(e[3])&&this._isDegenerate(t))return;const n=function(t){return M[0]=t,M}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const r=(0,h.LV)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNode(r,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(r,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(r,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,r){const o=(0,h.LV)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNodeWithOffset(o,t,r))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(o,t,r)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(o,t,r)&&n(t)})),!0}))}forEach(t){this._forEachNode(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,r=()=>!0,o=1/0){let i=1/0,s=1/0,u=null;const h=p(t,e),l=c=>{if(--o,!r(c))return;const h=this.objectToBoundingSphere(c);if(!(0,a.m7)(n,h))return;const l=A(t,e,(0,d.g)(h)),_=l-h[3],f=l+h[3];_<i&&(i=_,s=f,u=c)};return this._forEachNodeDepthOrdered(this._root,(r=>{if(o<=0||!(0,a.m7)(n,r.bounds))return!1;if((0,c.h)(F,h,r.halfSize),(0,c.g)(F,F,(0,d.g)(r.bounds)),A(t,e,F)>s)return!1;const i=r.node;return i.terminals.forAll((t=>l(t))),null!==i.residents&&i.residents.forAll((t=>l(t))),!0}),t,e),u}forEachInDepthRange(t,e,n,r,o,i,s){let u=-1/0,h=1/0;const l={setRange:t=>{n===_.DepthOrder.FRONT_TO_BACK?(u=Math.max(u,t.near),h=Math.min(h,t.far)):(u=Math.max(u,-t.far),h=Math.min(h,-t.near))}};l.setRange(r);const f=A(e,n,t),g=p(e,n),m=p(e,-n),T=t=>{if(!s(t))return;const r=this.objectToBoundingSphere(t),c=(0,d.g)(r),_=A(e,n,c)-f,g=_-r[3],m=_+r[3];g>h||m<u||!(0,a.m7)(i,r)||o(t,l)};this._forEachNodeDepthOrdered(this._root,(t=>{if(!(0,a.m7)(i,t.bounds))return!1;if((0,c.h)(F,g,t.halfSize),(0,c.g)(F,F,(0,d.g)(t.bounds)),A(e,n,F)-f>h)return!1;if((0,c.h)(F,m,t.halfSize),(0,c.g)(F,F,(0,d.g)(t.bounds)),A(e,n,F)-f<u)return!1;const r=t.node;return r.terminals.forAll((t=>T(t))),null!==r.residents&&r.residents.forAll((t=>T(t))),!0}),e,n)}forEachNode(t){this._forEachNode(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,d.a)(e),r=(0,d.g)(e),o=e=>{const o=this.objectToBoundingSphere(e),i=(0,d.a)(o),s=n+i;return!((0,c.a)((0,d.g)(o),r)-s*s<=0)||t(e)};let i=!0;const s=t=>{i&&(i=o(t))};this._forEachNode(this._root,(t=>{const e=(0,d.a)(t.bounds),o=n+e;if((0,c.a)((0,d.g)(t.bounds),r)-o*o>0)return!1;const u=t.node;return u.terminals.forAll(s),i&&null!==u.residents&&u.residents.forAll(s),i})),i&&this.forEachDegenerateObject(s)}_intersectsNode(t,e){return T((0,d.g)(e.bounds),2*-e.halfSize,I),T((0,d.g)(e.bounds),2*e.halfSize,S),(0,l.O_)(t.origin,t.direction,I,S)}_intersectsNodeWithOffset(t,e,n){return T((0,d.g)(e.bounds),2*-e.halfSize,I),T((0,d.g)(e.bounds),2*e.halfSize,S),n.applyToMinMax(I,S),(0,l.O_)(t.origin,t.direction,I,S)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,d.i)(n,t)}_intersectsObjectWithOffset(t,e,n){const r=this.objectToBoundingSphere(e);return!(r[3]>0)||(0,d.i)(n.applyToBoundingSphere(r),t)}_forEachNode(t,e){let n=f.acquire().init(t);const r=[n];for(;0!==r.length;){if(n=r.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&r.push(f.acquire().init(n).advance(t));f.release(n)}}_forEachNodeDepthOrdered(t,e,n,r=_.DepthOrder.FRONT_TO_BACK){let o=f.acquire().init(t);const i=[o];for(function(t,e,n){if(!q.length)for(let t=0;t<8;++t)q.push({index:0,distance:0});for(let n=0;n<8;++n){const r=R[n];q.data[n].index=n,q.data[n].distance=A(t,e,r)}q.sort(((t,e)=>t.distance-e.distance));for(let t=0;t<8;++t)n[t]=q.data[t].index}(n,r,w);0!==i.length;){if(o=i.pop(),e(o)&&!o.isLeaf())for(let t=7;t>=0;--t){const e=w[t];o.node.children[e]&&i.push(f.acquire().init(o).advance(e))}f.release(o)}}_remove(t,e,n){j.clear();const r=n.advanceTo(e,((t,e)=>{j.push(t.node),j.push(e)}))?n.node.terminals:n.node.residents;if(r.removeUnordered(t),0===r.length)for(let t=j.length-2;t>=0;t-=2){const e=j.data[t],n=j.data[t+1];if(!this._purge(e,n))break}}_nodeIsEmpty(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(null===t.residents&&(t.residents=new s.A({shrink:!0})),!0)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const r=f.acquire().init(t);this._add(e.at(n),r),f.release(r)}}_grow(t,e){if(0!==e&&(O(t,e,(t=>this.objectToBoundingSphere(t)),x),b(x[3])&&!this._fitsInsideTree(x)))if(this._nodeIsEmpty(this._root.node))(0,d.c)(x,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(x);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(x,t):this._growRootAsSubNode(t),f.release(t)}}_rebuildTree(t,e){(0,c.c)((0,d.g)(B),(0,d.g)(e.bounds)),B[3]=e.halfSize,O([t,B],2,(t=>t),L);const n=f.acquire().init(this._root);this._root.initFrom(null,L,L[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),f.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let r=-1/0;const o=this._root.bounds,i=this._root.halfSize;for(let t=0;t<3;t++){const s=o[t]-i-(n[t]-e),c=n[t]+e-(o[t]+i),u=Math.max(0,Math.ceil(s/(2*i))),a=Math.max(0,Math.ceil(c/(2*i)))+1,h=2**Math.ceil(Math.log(u+a)*Math.LOG2E);r=Math.max(r,h),C[t].min=u,C[t].max=a}for(let t=0;t<3;t++){let e=C[t].min,n=C[t].max;const s=(r-(e+n))/2;e+=Math.ceil(s),n+=Math.floor(s);const c=o[t]-i-e*i*2;N[t]=c+(n+e)*i}const s=r*i;return N[3]=s*v,f.acquire().initFrom(null,N,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,c.c)((0,d.g)(x),(0,d.g)(this._root.bounds)),x[3]=this._root.halfSize,this._root.init(t),t.advanceTo(x,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,r=0;for(;r<e.length&&null==t;)n=r++,t=e[n];for(;r<e.length;)if(e[r++])return-1;return n}_isDegenerate(t){return!b(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,r=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:r}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),r=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:r}}static fromJSON(t){const e=new _((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class f{constructor(){this.bounds=(0,d.d)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,r=this.depth){return this.node=null!=t?t:f.createEmptyNode(),e&&(0,d.c)(e,this.bounds),this.halfSize=n,this.depth=r,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*v}advance(t){let e=this.node.children[t];e||(e=f.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=R[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const r=this._childIndex(t);e&&e(this,r),this.advance(r)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new s.A({shrink:!0}),residents:new s.A({shrink:!0})}}static acquire(){return f._pool.acquire()}static release(t){f._pool.release(t)}static clearPool(){f._pool.prune()}}function g(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function m(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function T(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function O(t,e,n,r){if(1===e){const e=n(t[0]);(0,d.c)(e,r)}else{I[0]=1/0,I[1]=1/0,I[2]=1/0,S[0]=-1/0,S[1]=-1/0,S[2]=-1/0;for(let r=0;r<e;r++){const e=n(t[r]);b(e[3])&&(g(I,e),m(S,e))}(0,c.k)((0,d.g)(r),I,S,.5),r[3]=Math.max(S[0]-I[0],S[1]-I[1],S[2]-I[2])/2}}function p(t,e){let n,r=1/0;for(let o=0;o<8;++o){const i=A(t,e,E[o]);i<r&&(r=i,n=E[o])}return n}function A(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function b(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}f._pool=new i.A(f),r=_||(_={}),(o=r.DepthOrder||(r.DepthOrder={}))[o.FRONT_TO_BACK=1]="FRONT_TO_BACK",o[o.BACK_TO_FRONT=-1]="BACK_TO_FRONT";const R=[(0,u.fA)(-1,-1,-1),(0,u.fA)(1,-1,-1),(0,u.fA)(-1,1,-1),(0,u.fA)(1,1,-1),(0,u.fA)(-1,-1,1),(0,u.fA)(1,-1,1),(0,u.fA)(-1,1,1),(0,u.fA)(1,1,1)],E=[(0,u.fA)(-1,-1,-1),(0,u.fA)(-1,-1,1),(0,u.fA)(-1,1,-1),(0,u.fA)(-1,1,1),(0,u.fA)(1,-1,-1),(0,u.fA)(1,-1,1),(0,u.fA)(1,1,-1),(0,u.fA)(1,1,1)],v=Math.sqrt(3),M=[null],N=(0,d.d)(),F=(0,u.vt)(),I=(0,u.vt)(),S=(0,u.vt)(),j=new s.A,P=(0,d.d)(),x=(0,d.d)(),B=(0,d.d)(),L=(0,d.d)(),C=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],q=new s.A,w=[0,0,0,0,0,0,0,0],z=_},41211:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var r=n(61126),o=n(99601),i=(n(29287),n(56531),n(356),n(86173),n(74579)),s=n(55525),c=n(88435),u=n(61499),a=n(59929),h=n(89541),d=n(7965);function l(t,e,n){const r=(0,a.d)(),o=(0,a.g)(r);return(0,s.q)(o,o,t,.5),(0,s.q)(o,o,e,.5),r[3]=(0,s.p)(o,t),(0,s.g)(o,o,n),r}let _=class{constructor(){this._idToComponent=new Map,this._components=new h.A((t=>t.bounds)),this._edges=new h.A((t=>t.bounds)),this._tmpLineSegment=(0,u.vt)(),this._tmpP1=(0,c.vt)(),this._tmpP2=(0,c.vt)(),this._tmpP3=(0,c.vt)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,o.Te)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:r}=t;n.push({id:e,uid:r})}return!0}),t.bounds),!n.length)return;const r={components:n},o=await this.remoteClient.invoke("fetchAllEdgeLocations",r,e??{});for(const t of o.components)this._setFetchEdgeLocations(t)}async add(t){const e=new g(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=d.HY.createView(t.locations),r=new Array(n.count),o=(0,c.vt)(),i=(0,c.vt)();for(let s=0;s<n.count;s++){n.position0.getVec(s,o),n.position1.getVec(s,i);const c=l(o,i,t.origin),u=new m(e,s,c);r[s]=u}this._edges.add(r);const{objectIds:s,origin:u}=t;e.info={locations:n,objectIds:s,origin:u}}_addCandidates(t,e,n){const{info:r}=e.component,{origin:o,objectIds:i}=r,c=r.locations,u=c.position0.getVec(e.index,this._tmpP1),a=c.position1.getVec(e.index,this._tmpP2);(0,s.g)(u,u,o),(0,s.g)(a,a,o);const h=i[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,h,u,a,n),this._addVertexCandidate(t,h,u,n),this._addVertexCandidate(t,h,a,n)}_addEdgeCandidate(t,e,n,r,o){if(!t.returnEdge)return;const i=(0,a.g)(t.bounds),h=(0,u.Cr)(n,r,this._tmpLineSegment),d=(0,u._I)(h,i,this._tmpP3);(0,a.n)(t.bounds,d)&&o.push({type:"edge",objectId:e,target:(0,c.o8)(d),distance:(0,s.p)(i,d),start:(0,c.o8)(n),end:(0,c.o8)(r)})}_addVertexCandidate(t,e,n,r){if(!t.returnVertex||!(0,a.n)(t.bounds,n))return;const o=(0,a.g)(t.bounds);r.push({type:"vertex",objectId:e,target:(0,c.o8)(n),distance:(0,s.p)(o,n)})}};_=(0,r._)([(0,i.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],_);const f=_;class g{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++g.uid}}g.uid=0;class m{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);