"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[363],{91915:(e,t,i)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function s(e,t,i,r,s,n,a,o,l){return[e,t,i,r,s,n,a,o,l]}i.d(t,{fA:()=>s,vt:()=>r,zK:()=>n});const n=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:n,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:r,createView:function(e,t){return new Float64Array(e,t,9)},fromValues:s},Symbol.toStringTag,{value:"Module"}))},20240:(e,t,i)=>{i.d(t,{O:()=>d,W:()=>c});var r=i(62051),s=i(91915),n=i(18836),a=i(55525);const o=(0,i(88435).vt)(),l=(0,s.vt)(),h=(0,s.vt)(),u=(0,s.vt)();function c(e,t,i){return(0,a.s)(o,t[0],t[1],1),(0,a.t)(o,o,(0,r.mg)(l,i)),0===o[2]?(0,n.hZ)(e,o[0],o[1]):(0,n.hZ)(e,o[0]/o[2],o[1]/o[2])}function d(e,t,i){return p(h,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),p(u,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]),(0,r.lw)(e,(0,r.KC)(h,h),u),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function p(e,t,i,s,n,h,u,c,d){(0,r.hZ)(e,t,s,h,i,n,u,1,1,1),(0,a.s)(o,c,d,1),(0,r.KC)(l,e);const[p,m,f]=(0,a.t)(o,o,(0,r.mg)(l,l));return(0,r.hZ)(l,p,0,0,0,m,0,0,0,f),(0,r.lw)(e,l,e)}},91556:(e,t,i)=>{i.d(t,{NH:()=>n,ip:()=>a,sU:()=>l,vG:()=>h}),i(56531);var r=i(86173),s=i(31145);function n(e){const t=o(e);return null!=t?t.toDataURL():""}async function a(e){const t=o(e);if(null==t)throw new r.A("imageToArrayBuffer","Unsupported image type");const i=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,s.DB)(t)){const e=(0,s.r$)(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),n=await new Promise((e=>t.toBlob(e,i)));if(!n)throw new r.A("imageToArrayBuffer","Failed to encode image");return{data:await n.arrayBuffer(),type:i}}function o(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");return e instanceof HTMLImageElement?i.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&i.putImageData(e,0,0),t}function l(e){const t=[],i=new Uint8Array(e);for(let e=0;e<i.length;e++)t.push(String.fromCharCode(i[e]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function h(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},23681:(e,t,i)=>{i.d(t,{X_:()=>a,i1:()=>o,zx:()=>l});var r=i(68668),s=i(29964);const n=96;function a(e,t){const i=t||e.extent,r=e.width,a=(0,s.GA)(i?.spatialReference);return i&&r?i.width/r*a*s.dy*n:0}function o(e,t){return e/((0,s.GA)(t)*s.dy*n)}function l(e,t,i){return function(e,t){return 0===t||(0,r.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,r.Sp)(e,t)||e>t}(e,i)}},86341:(e,t,i)=>{i.d(t,{_:()=>c});var r=i(61126),s=i(49689),n=i(95712),a=(i(56531),i(29287),i(356),i(74579)),o=i(55734),l=i(67795),h=i(41074),u=i(92021);let c=class extends s.A{constructor(e){super(e)}get bounds(){const e=this.coords;return null==e?.extent?null:(0,h.VY)(e.extent)}get coords(){const e=this.element.georeference?.coords;return(0,l.projectOrLoad)(e,this.spatialReference).geometry}get normalizedCoords(){return o.A.fromJSON((0,u.jZ)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,h.VY)(e):null}};(0,r._)([(0,n.MZ)()],c.prototype,"spatialReference",void 0),(0,r._)([(0,n.MZ)()],c.prototype,"element",void 0),(0,r._)([(0,n.MZ)()],c.prototype,"bounds",null),(0,r._)([(0,n.MZ)()],c.prototype,"coords",null),(0,r._)([(0,n.MZ)()],c.prototype,"normalizedCoords",null),(0,r._)([(0,n.MZ)()],c.prototype,"normalizedBounds",null),c=(0,r._)([(0,a.$)("esri.layers.support.MediaElementView")],c)},515:(e,t,i)=>{i.d(t,{ZH:()=>h});var r=i(1940),s=i(14942),n=(i(91556),i(66279)),a=i(42237);function o(e,t){const{width:i,height:r,getFrame:n}=e,a=e.frameDurations.slice(),o=a.pop();return a.push((0,s.l5)(o+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:a,getFrame:n,width:i,height:r}}class l{constructor(e,t,i,r){this._animation=e,this._repeatType=i,this._onFrameData=r,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let s=0;for(;t>s;)s+=this.timeToFrame,this.nextFrame();const n=this._animation.getFrame(this._currentFrame);this._onFrameData(n)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case n.fu.None:this._currentFrame-=this._direction;break;case n.fu.Loop:this._currentFrame=0;break;case n.fu.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(-1===this._currentFrame)switch(this._repeatType){case n.fu.None:this._currentFrame-=this._direction;break;case n.fu.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case n.fu.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const e=this._animation.getFrame(this._currentFrame);this._onFrameData(e)}}function h(e,t,i,h){const u=null==t.playAnimation||t.playAnimation,c=function(e,t,i,r){let h,{repeatType:u}=t;if(null==u&&(u=n.fu.Loop),!0===t.reverseAnimation&&(e=function(e){const{width:t,height:i}=e,r=e.frameDurations.reverse();return{frameCount:e.frameCount,duration:e.duration,frameDurations:r,getFrame:t=>{const i=e.frameDurations.length-1-t;return e.getFrame(i)},width:t,height:i}}(e)),null!=t.duration&&(e=function(e,t){const{width:i,height:r,getFrame:n}=e,a=t/e.duration,o=e.frameDurations.map((e=>(0,s.l5)(e*a)));return{frameCount:e.frameCount,duration:e.duration,frameDurations:o,getFrame:n,width:i,height:r}}(e,(0,s.l5)(1e3*t.duration))),null!=t.repeatDelay){const i=1e3*t.repeatDelay;u===n.fu.Loop?e=o(e,(0,s.l5)(i)):u===n.fu.Oscillate&&(e=function(e,t){const{width:i,height:r,getFrame:n}=e,a=e.frameDurations.slice(),o=a.shift();return a.unshift((0,s.l5)(o+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:a,getFrame:n,width:i,height:r}}(o(e,(0,s.l5)(i/2)),(0,s.l5)(i/2)))}if(null!=t.startTimeOffset)h=(0,s.l5)(1e3*t.startTimeOffset);else if(null!=t.randomizeStartTime){const r=82749913,n=null!=t.randomizeStartSeed?t.randomizeStartSeed:r,o=(0,a.J)(i,n);h=(0,s.l5)(o*function(e){return(0,s.l5)(e.frameDurations.reduce(((e,t)=>e+t),0))}(e))}else h=(0,s.l5)(0);return new l(e,h,u,r)}(e,t,i,h);let d,p=c.timeToFrame;return function e(){d=u?setTimeout((()=>{c.nextFrame(),p=c.timeToFrame,e()}),p):void 0}(),(0,r.hA)((()=>u&&clearTimeout(d)))}},43525:(e,t,i)=>{i.d(t,{e:()=>R});var r,s=i(61126),n=i(8559),a=i(57102),o=i(86173),l=i(69767),h=i(95712),u=(i(56531),i(29287),i(356),i(74579)),c=i(23681),d=i(79767),p=i(94895),m=i(52830);let f=r=class extends m.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new r({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],f.prototype,"left",void 0),(0,s._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],f.prototype,"right",void 0),(0,s._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],f.prototype,"top",void 0),(0,s._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],f.prototype,"bottom",void 0),f=r=(0,s._)([(0,u.$)("esri.views.layers.support.ClipRect")],f);const y=f;var g=i(5801);let _=class extends m.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,h.MZ)({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),_=(0,s._)([(0,u.$)("esri.views.layers.support.Path")],_);const v=_,w=n.A.ofType({key:"type",base:null,typeMap:{rect:y,path:v,geometry:g.A}}),R=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new w,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),l.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:r}=t;return(0,c.zx)(e,i,r)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,h.MZ)()],t.prototype,"attached",void 0),(0,s._)([(0,h.MZ)({type:w,set(e){const t=(0,a.V)(e,this._get("clips"),w);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,h.MZ)()],t.prototype,"container",void 0),(0,s._)([(0,h.MZ)()],t.prototype,"moving",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,h.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,h.MZ)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,h.MZ)()],t.prototype,"updateSuspended",null),(0,s._)([(0,h.MZ)()],t.prototype,"updating",null),(0,s._)([(0,h.MZ)()],t.prototype,"view",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,h.MZ)({type:p.A})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,u.$)("esri.views.2d.layers.LayerView2D")],t),t}},363:(e,t,i)=>{i.r(t),i.d(t,{default:()=>te});var r=i(61126),s=(i(22955),i(50031),i(25531),i(82069),i(44500),i(73836),i(15055),i(22297),i(96119),i(89373),i(67451),i(29287)),n=(i(54084),i(8559)),a=(i(56531),i(3300)),o=i(99601),l=i(69767),h=i(95712),u=(i(356),i(74579)),c=i(41074),d=i(35963),p=i(56041),m=i(86341),f=i(86173),y=(i(12189),i(43621),i(91131),i(80613),i(39112),i(81546),i(79238)),g=(i(55150),i(56415),i(46803),i(55734),i(82346),i(53903),i(8298)),_=(i(1941),i(37296),i(87322),i(80541),i(94830),i(56119),i(53543),i(66515),i(21435),i(702),i(6528),i(9273),i(91388),i(27229),i(84242),i(22273),i(6181),i(48641),i(30843),i(30366),i(85007),i(96066),i(66279)),v=(i(68668),i(22336),i(90385)),w=(i(91054),i(18083),i(58505),i(51975),i(99835),i(97965)),R=(i(83336),i(28622),i(10380)),M=(i(2618),i(91623),i(83657),i(65414)),b=(i(2680),i(84768),i(58538),i(97076)),S=(i(95334),i(73558),i(93238),i(57119),i(22033),i(62209),i(4058),i(15809),i(91909),i(4210),i(28454),i(31145),i(28043),i(43758),i(4674),i(97193),i(55891),i(36397),i(12556),i(60231),i(85882),i(3313),i(77511),i(38860),i(97671),i(86692)),A=(i(11443),i(2747),i(65981),i(87410),i(13462),i(91782),i(39842),i(80350),i(68506)),T=i(81377),x=i(14662),C=i(58407),V=i(20240),Z=i(91915),D=i(18836),E=i(77818),F=i(515),O=i(45939),q=i(42682),P=i(52044);const H=(0,Z.vt)(),U={none:_.fu.None,loop:_.fu.Loop,oscillate:_.fu.Oscillate};class I extends w.q{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=(0,E.vt)(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push((0,l.wB)((()=>this.elementView.element.opacity),(e=>this.opacity=e),l.Vh),(0,l.wB)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),l.Vh),(0,l.wB)((()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions]),(()=>{this._playHandle?.remove(),this.texture=(0,C.WD)(this.texture),this.requestRender()}),l.Vh),(0,l.z7)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&this._handles.push((0,x.on)(e.content,"play",(()=>this.requestRender())))}),l.Vh)),e.element.load().catch((t=>{s.A.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new f.A("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._playHandle?.remove(),this._handles.forEach((e=>e.remove())),this.texture=(0,C.WD)(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(null!=i){const e=i instanceof HTMLImageElement,r=i instanceof HTMLVideoElement,s=e?i.naturalWidth:r?i.videoWidth:i.width,n=e?i.naturalHeight:r?i.videoHeight:i.height;if(this._updatePerspectiveTransform(s,n),this.texture)r&&!i.paused&&(this.texture.setData(i),this.requestRender(),this.texture.generateMipmap());else{const e=new q.R;if(e.wrapMode=M.pF.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=s,e.height=n,"getFrame"in i){const r=i=>{this.texture?this.texture.setData(i):this.texture=new b.g(t,e,i),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=(0,F.ZH)(i,function(e){return e?{...e,playAnimation:e.playing,repeatType:e.repeatType?U[e.repeatType]:void 0}:{}}(this.elementView.element.animationOptions),null,r))}else this.texture=new b.g(t,e,i);this.texture.generateMipmap(),r&&!i.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const i=this.elementView.coords;if(null==i)return;const[r,s,n,a]=i.rings[0],o=this._vertices,{x:l,y:h}=e,u=0!==t;u?o.set([s[0]-l,s[1]-h,r[0]-l,r[1]-h,n[0]-l,n[1]-h,a[0]-l,a[1]-h,a[0]-l,a[1]-h,s[0]+t-l,s[1]-h,s[0]+t-l,s[1]-h,r[0]+t-l,r[1]-h,n[0]+t-l,n[1]-h,a[0]+t-l,a[1]-h]):o.set([s[0]-l,s[1]-h,r[0]-l,r[1]-h,n[0]-l,n[1]-h,a[0]-l,a[1]-h]),this.isWrapAround=u}getVAO(e,t,i){if(null==this.elementView.coords)return null;const r=this._vertices;if(this._vao)this._geometryVbo.setData(r);else{this._geometryVbo=O.g.createVertex(e,M._U.DYNAMIC_DRAW,r);const s=O.g.createVertex(e,M._U.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new P.Z(e,i,t,{geometry:this._geometryVbo,tex:s})}return this._vao}_updatePerspectiveTransform(e,t){const i=this._vertices;(0,V.O)(H,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),(0,D.hZ)(this.perspectiveTransform,H[6]/H[8]*e,H[7]/H[8]*t)}}var L=i(52902),z=i(62051),j=i(93276),B=i(10119),G=i(36419),k=i(34312),N=i(78734);class $ extends N.A{constructor(){super(...arguments),this._localOrigin=(0,L.tc)(0,0),this._viewStateId=-1,this._dvsMat3=(0,j.vt)()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[k.d.overlay],target:()=>this.children,drawPhase:R.S5.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:i,size:r,pixelRatio:s,resolution:n,rotation:a,viewpoint:o,displayMat3:l}=t;if(this._viewStateId===i)return;const h=Math.PI/180*a,u=s*r[0],c=s*r[1],{x:d,y:p}=o.targetGeometry,m=(0,B.mT)(d,t.spatialReference);this._localOrigin.x=m,this._localOrigin.y=p;const f=n*u,y=n*c,g=(0,z.D_)(this._dvsMat3);(0,z.lw)(g,g,l),(0,z.Tl)(g,g,(0,v.fA)(u/2,c/2)),(0,z.hs)(g,g,(0,S.fA)(u/f,-c/y,1)),(0,z.e$)(g,g,-h),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:r,spatialReference:s,worldScreenWidth:n,size:a,viewpoint:o}=i,l=this._localOrigin;let h=0;const u=(0,g.Vp)(s);if(u&&s.isWrappable){const e=a[0],c=a[1],d=180/Math.PI*r,p=Math.abs(Math.cos(d)),m=Math.abs(Math.sin(d)),f=Math.round(e*p+c*m),[y,g]=u.valid,_=(0,G.FT)(s),{x:v,y:w}=o.targetGeometry,R=[v,w],M=[0,0];i.toScreen(M,R);const b=[0,0];let S;S=f>n?.5*n:.5*f;const A=Math.floor((v+.5*_)/_),T=y+A*_,x=g+A*_,C=[M[0]+S,0];i.toMap(b,C),b[0]>x&&(h=_),C[0]=M[0]-S,i.toMap(b,C),b[0]<T&&(h=-_);for(const e of t){const t=e.elementView.bounds;if(null==t)continue;const[i,,r]=t;i<y&&r>y?e.updateDrawCoords(l,_):r>g&&i<g?e.updateDrawCoords(l,-_):e.updateDrawCoords(l,h)}}else for(const e of t)e.updateDrawCoords(l,h)}}var W=i(43525),Q=i(95325);let Y=class extends((0,W.e)(Q.A)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new n.A}attach(){this.addAttachHandles([(0,l.on)((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate()})),(0,l.on)((()=>this.layer.effectiveSource),"change",(({element:e})=>this._elementUpdateHandler(e)))]),this._overlayContainer=new $,this.container.addChild(this._overlayContainer),this._fetchQueue=new A.A({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new T.A({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(e){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e)}async hitTest(e,t){const i=[],r=e.normalize(),s=[r.x,r.y];for(const{projectedElement:{normalizedCoords:t,element:r}}of this._elementReferences.values())null!=t&&(0,d.t1)(t.rings,s)&&i.push({type:"media",element:r,layer:this.layer,mapPoint:e,sourcePoint:r.toSource(e)});return i.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)))}_acquireTile(e){const t=new ee(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[i,r]=e.setElements(t);this._referenceElements(e,i),this._dereferenceElements(e,r),this.requestUpdate()}),(e=>{(0,o.zf)(e)||s.A.getLogger(this).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const i=this.layer.effectiveSource;if(null==i)return[];this.view.featuresTilingScheme.getTileBounds(K,e,!0);const r=new y.A({xmin:K[0],ymin:K[1],xmax:K[2],ymax:K[3],spatialReference:this.view.spatialReference});return i.queryElements(r,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const i of t)this._referenceElement(e,i)}_referenceElement(e,t){(0,a.tE)(this._elementReferences,t.uid,(()=>{const e=new m._({element:t,spatialReference:this.view.spatialReference}),i=new I(e);return this._overlayContainer.addChild(i),this.elements.add(t),{tiles:new Set,projectedElement:e,overlay:i,debugGraphic:null}})).tiles.add(e)}_dereferenceElements(e,t){for(const i of t)this._dereferenceElement(e,i)}_dereferenceElement(e,t){const i=this._elementReferences.get(t.uid);i.tiles.delete(e),i.tiles.size||(this._overlayContainer.removeChild(i.overlay),i.overlay.destroy(),i.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(i.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const i=t.projectedElement.normalizedCoords;if(null==i)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const r=[],s=[];for(const e of this._tileStrategy.tiles){const n=X(this.view.featuresTilingScheme,e,i);t.tiles.has(e)?n||s.push(e):n&&r.push(e)}for(const t of r)this._referenceElement(t,e);for(const t of s)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const i=new m._({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=i)for(const t of this._tileStrategy.tiles)X(this.view.featuresTilingScheme,t,i)&&this._referenceElement(t,e)}};(0,r._)([(0,h.MZ)()],Y.prototype,"layer",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],Y.prototype,"elements",void 0),Y=(0,r._)([(0,u.$)("esri.views.2d.layers.MediaLayerView2D")],Y);const K=(0,c.vt)(),J={xmin:0,ymin:0,xmax:0,ymax:0};function X(e,t,i){return e.getTileBounds(K,t.key,!0),J.xmin=K[0],J.ymin=K[1],J.xmax=K[2],J.ymax=K[3],(0,p.fA)(J,i)}class ee{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const r of e)i.has(r)?i.delete(r):t.push(r);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const te=Y},95325:(e,t,i)=>{i.d(t,{A:()=>m});var r=i(61126),s=i(49689),n=i(28622),a=i(7919),o=i(29287),l=i(58407),h=i(73262),u=i(95712),c=(i(56531),i(356),i(74579)),d=i(78610);let p=class extends((0,a.sA)((0,h.g)(n.A.EventedMixin(s.A)))){constructor(e){super(e),this._updatingHandles=new d.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";o.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,r._)([(0,u.MZ)()],p.prototype,"fullOpacity",null),(0,r._)([(0,u.MZ)()],p.prototype,"layer",void 0),(0,r._)([(0,u.MZ)()],p.prototype,"parent",void 0),(0,r._)([(0,u.MZ)({readOnly:!0})],p.prototype,"suspended",null),(0,r._)([(0,u.MZ)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,r._)([(0,u.MZ)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,r._)([(0,u.MZ)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,r._)([(0,u.MZ)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,r._)([(0,u.MZ)()],p.prototype,"visible",null),(0,r._)([(0,u.MZ)()],p.prototype,"view",void 0),p=(0,r._)([(0,c.$)("esri.views.layers.LayerView")],p);const m=p},52830:(e,t,i)=>{i.d(t,{A:()=>l});var r=i(61126),s=i(71979),n=i(95712),a=(i(56531),i(29287),i(356),i(74579));let o=class extends s.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,r._)([(0,n.MZ)({readOnly:!0})],o.prototype,"version",null),o=(0,r._)([(0,a.$)("esri.views.layers.support.ClipArea")],o);const l=o},5801:(e,t,i)=>{i.d(t,{A:()=>m});var r,s=i(61126),n=(i(22955),i(95712)),a=(i(56531),i(29287),i(356),i(74579)),o=i(55150),l=i(10359),h=i(52830),u=i(79238),c=i(55734);const d={base:o.A,key:"type",typeMap:{extent:u.A,polygon:c.A}};let p=r=class extends h.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new r({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,n.MZ)({types:d,json:{read:l.rS,write:!0}})],p.prototype,"geometry",void 0),p=r=(0,s._)([(0,a.$)("esri.views.layers.support.Geometry")],p);const m=p}}]);