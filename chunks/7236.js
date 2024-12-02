"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[7236],{18392:(e,t,i)=>{i.d(t,{j:()=>x});var s=i(86173),r=i(56531),a=i(29287),n=i(99601),o=i(22336),h=i(52917),l=i(9903),u=i(65414),d=i(2680),c=i(97076),p=i(42682);class g{constructor(e,t,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:a}=e,n=(0,l.Qz)(r);this.blockIndex=i,this.pixelType=r,this.size=t,this.textureOnly=a,a||(this.data=new n(s)),this._resetRange()}destroy(){this._texture?.dispose();for(const e in this._fbos){const t=this._fbos[e];t&&("0"===e&&t.detachColorTexture(),t.dispose()),this._fbos[e]=null}this._texture=null}get _textureDesc(){const e=new p.R;return e.wrapMode=u.pF.CLAMP_TO_EDGE,e.samplingMode=u.Cj.NEAREST,e.dataType=this.pixelType,e.width=this.size,e.height=this.size,e}setData(e,t,i){const s=(0,h.Q4)(e),r=this.data,a=s*this.texelSize+t;!r||a>=r.length||(r[a]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(e,t){if(null==this.data)return null;const i=(0,h.Q4)(e)*this.texelSize+t;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(e){return this._texture??this._initTexture(e)}getFBO(e,t=0){if(!this._fbos[t]){const i=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new d.H(e,i)}return this._fbos[t]}get hasDirty(){const e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){try{const i=this.dirtyStart,n=this.dirtyEnd;if(!this.hasDirty)return;(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${t}] AttributeStoreView.updateTexture`,{start:i,end:n,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();const o=this.data.buffer,h=this.getTexture(e),u=4,d=(i-i%this.size)/this.size,c=(n-n%this.size)/this.size,p=d,g=this.size,_=c,y=d*this.size*u,x=(g+_*this.size)*u-y,m=(0,l.Qz)(this.pixelType),w=new m(o,y*m.BYTES_PER_ELEMENT,x),f=this.size,v=_-p+1;if(v>this.size)return void a.A.getLogger("esri.views.2d.engine.webgl.AttributeStoreView").error(new s.A("mapview-webgl","Out-of-bounds index when updating AttributeData"));h.updateData(0,0,p,f,v,w)}catch(e){}}update(e){const{data:t,start:i,end:s}=e;if(null!=t&&null!=this.data){const s=this.data,r=i*this.texelSize;for(let i=0;i<t.length;i++){const a=1<<i%this.texelSize;e.layout&a&&(s[r+i]=t[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(e,t){const i=this.size;if(this.size=t,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=(0,l.Qz)(this.pixelType);this.destroy(),this.data=new s(e.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new c.g(e,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,n=this.getFBO(e),o=(0,l.AV)(r),h=new((0,l.Qz)(r))(new ArrayBuffer(i*s*o*this.texelSize)),u=e.getBoundFramebufferObject(),{x:d,y:c,width:p,height:g}=e.getViewport();e.bindFramebuffer(n),n.readPixels(0,0,i,s,a,r,h),t.updateData(0,0,0,2*i,s/2,h),e.setViewport(d,c,p,g),e.bindFramebuffer(u)}return this.destroy(),this._texture=t,this._texture}}class _{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(e){if(!e)throw new Error("InternalError: initArgs must be defined");const t=e.blockDescriptors;if(this.size=e.blockSize,(0,r.A)("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:e}),null==this._data)this._data=t.map(((e,t)=>null!=e?new g(e,this.size,t):null));else for(let e=0;e<this._data.length;e++){const i=this._data[e],s=t[e];null!=s&&(null==i?this._data[e]=new g(s,this.size,e):i.resize(s,this.size))}}destroy(){for(const e of this._data??[])e?.destroy();this._defaultTexture?.dispose();for(const{resolver:e}of this._pendingAttributeUpdates)e.reject("AttributeStore destroyed");this._pendingAttributeUpdates=[]}isEmpty(){return null==this._data}getBlock(e){return null==this._data?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,o.dV.VV,0,0)}getData(e,t,i,s){if(!this._data)return 0;const r=this._data[t];if(null==r)return 0;const a=r.getData(e,i);return null!=a?a:s}setData(e,t,i,s){this._data[t].setData(e,i,s)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}async requestUpdate(e){const t=(0,n.Tw)();this._version=e.version,this._pendingAttributeUpdates.push({inner:e,resolver:t}),(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:e})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const e=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const{inner:t,resolver:i}of e){const{blockData:e,initArgs:s,sendUpdateEpoch:a,version:n}=t;(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${a}] AttributeStoreView.applyUpdate`),this._version=n,this._epoch=a,null!=s&&this._initialize(s);const o=this._data;for(let t=0;t<e.length;t++){const i=e[t],s=o[t];null!=s&&null!=i&&((0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${t}] AttributeStoreView.update`,{block:i}),s.update(i))}i.resolve()}}getUniforms(e){return{filterFlags:{texture:this._getTexture(e,o.dV.FilterFlags),unit:o.uM},animation:{texture:this._getTexture(e,o.dV.Animation),unit:o.z2},gpgpu:{texture:this._getTexture(e,o.dV.GPGPU),unit:o.Sr},visualVariableData:{texture:this._getTexture(e,o.dV.VV),unit:o.nM},dataDriven0:{texture:this._getTexture(e,o.dV.DD0),unit:o.lL},dataDriven1:{texture:this._getTexture(e,o.dV.DD1),unit:o.sn},dataDriven2:{texture:this._getTexture(e,o.dV.DD2),unit:o.n9},size:this.size}}_getTexture(e,t){const i=this._data?.[t];return i?(i.updateTexture(e,this._version),i.getTexture(e)):this._getDefaultTexture(e)}_getDefaultTexture(e){if(null==this._defaultTexture){const t=new p.R;t.wrapMode=u.pF.CLAMP_TO_EDGE,t.samplingMode=u.Cj.NEAREST,t.width=1,t.height=1,this._defaultTexture=new c.g(e,t,new Uint8Array(4))}return this._defaultTexture}}var y=i(71377);class x extends y.A{constructor(e){super(e),this._statisticsByLevel=new Map,this.attributeView=new _}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy()}doRender(e){e.context.capabilities.enable("textureFloat"),super.doRender(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.attributeView=this.attributeView,t.instanceStore=this._instanceStore,t.statisticsByLevel=this._statisticsByLevel,t}}},6581:(e,t,i)=>{i.d(t,{O:()=>r});var s=i(39215);class r{constructor(e,t,i,s,r){this._instanceId=e,this.techniqueRef=t,this._meshWriterName=i,this._input=s,this.optionalAttributes=r}get instanceId(){return(0,s.P)(this._instanceId)}createMeshInfo(e){return{id:this._instanceId,meshWriterName:this._meshWriterName,options:e,optionalAttributes:this.optionalAttributes}}getInput(){return this._input}setInput(e){this._input=e}}},7236:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Y});var s=i(61126),r=i(50031),a=i(8559),n=i(1940),o=i(56531),h=i(69767),l=i(95712),u=i(29287),d=(i(356),i(74579)),c=i(28774),p=i(64129),g=i(43525),_=i(77511),y=i(28227),x=i(49689),m=i(99601),w=i(51638),f=i(35286),v=i(79767),b=i(32886),A=i(84730);let S=class extends x.A{constructor(){super(...arguments),this.attached=!1,this.container=new v.m,this.updateRequested=!1,this.type="imagery",this._bitmapView=new f.l}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,m.zf)(e)||u.A.getLogger(this).error(e)}))}hitTest(e){return new r.A({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new A.A({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=e=>this.layer.pixelFilter?this.layer.applyFilter(e):{...i,extent:t.extent}})).catch((e=>{(0,m.zf)(e)||u.A.getLogger(this).error(e)}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),s=(0,w.LY)(i,t);return null!=s?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}async _fetchImage(e,t,i,s){(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,s.returnImageBitmap=!0;const r=await this.layer.fetchImage(e,t,i,s);if(r.imageBitmap)return r.imageBitmap;const a=await this.layer.applyRenderer(r.pixelData,{signal:s.signal}),n=new b.A(a.pixelBlock,a.extent?.clone(),r.pixelData.pixelBlock);return n.filter=e=>this.layer.applyFilter(e),n}};(0,s._)([(0,l.MZ)()],S.prototype,"attached",void 0),(0,s._)([(0,l.MZ)()],S.prototype,"container",void 0),(0,s._)([(0,l.MZ)()],S.prototype,"layer",void 0),(0,s._)([(0,l.MZ)()],S.prototype,"strategy",void 0),(0,s._)([(0,l.MZ)()],S.prototype,"timeExtent",void 0),(0,s._)([(0,l.MZ)()],S.prototype,"view",void 0),(0,s._)([(0,l.MZ)()],S.prototype,"updateRequested",void 0),(0,s._)([(0,l.MZ)()],S.prototype,"updating",null),(0,s._)([(0,l.MZ)()],S.prototype,"type",void 0),S=(0,s._)([(0,d.$)("esri.views.2d.layers.imagery.ImageryView2D")],S);const V=S;var T=i(28454),R=i(79238),D=i(8298),z=i(14983),M=i(73050),E=i(41462),P=i(10380),B=i(78734);class k extends B.A{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf)",brushes:[E.A],target:()=>this.children,drawPhase:P.S5.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===P.S5.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}var I=i(13713);let U=class extends x.A{constructor(e){super(e),this._loading=null,this.update=(0,m.sg)(((e,t)=>this._update(e,t).catch((e=>{(0,m.zf)(e)||u.A.getLogger(this).error(e)}))))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:s,spatialReference:r}=e.state,a=new R.A({xmin:s.xmin,ymin:s.ymin,xmax:s.xmax,ymax:s.ymax,spatialReference:r}),[n,o]=e.state.size;this._loading=this.fetchPixels(a,n,o,i);const h=await this._loading;this._addToDisplay(h,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:r}=e,a=new I.X(r);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=r.width*t.symbolTileSize,a.height=r.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a)}};(0,s._)([(0,l.MZ)()],U.prototype,"fetchPixels",void 0),(0,s._)([(0,l.MZ)()],U.prototype,"container",void 0),(0,s._)([(0,l.MZ)()],U.prototype,"_loading",void 0),(0,s._)([(0,l.MZ)()],U.prototype,"updating",null),U=(0,s._)([(0,d.$)("esri.views.2d.layers.imagery.ImageryVFStrategy")],U);const F=U;let C=class extends x.A{constructor(){super(...arguments),this.attached=!1,this.container=new k,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,s)=>{const r=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:n,width:o,height:h}=(0,M.$Q)(e,t,i,a,r);if(null!=r&&!r.intersects(e))return{extent:n,pixelBlock:null};const l={bbox:`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(l)){const e=this.getPixelData();if(null!=e&&`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===l.bbox)return e}const{pixelData:u}=await this.layer.fetchImage(n,o,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:s});this._dataParameters=l;const d=u?.pixelBlock;return null==d?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?(0,M.FI)(d,"vector-uv"):d}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new F({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles((0,h.wB)((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),h.pc),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new r.A({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch((e=>{(0,m.zf)(e)||u.A.getLogger(this).error(e)}))}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,s=this._dataParameters.symbolTileSize===e.symbolTileSize,r=this._dataParameters.bbox===e.bbox;return t&&i&&s&&r}async _getProjectedFullExtent(e){try{return(0,z._l)(this.layer.fullExtent,e)}catch(t){try{const t=(await(0,T.A)(this.layer.url,{query:{option:"footprints",outSR:(0,D.YX)(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?R.A.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};(0,s._)([(0,l.MZ)()],C.prototype,"attached",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"container",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"layer",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"timeExtent",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"type",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"view",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"updating",null),C=(0,s._)([(0,d.$)("esri.views.2d.layers.imagery.VectorFieldView2D")],C);const O=C;var q=i(86173),L=i(46803),Z=i(9630),$=i(96801),N=i(12986);const H=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeaturesAtLocation(e,t){const{layer:i}=this;if(!e)throw new q.A("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i,r=(0,N.D8)(i,t);if(!s||null==r)throw new q.A("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:r});const a=await r.getRequiredFields();(0,m.Te)(t);const n=new $.A;n.timeExtent=this.timeExtent,n.geometry=e,n.outFields=a,n.outSpatialReference=e.spatialReference;const{resolution:o,spatialReference:h}=this.view,l="2d"===this.view.type?new L.A(o,o,h):new L.A(.5*o,.5*o,h),{returnTopmostRaster:u,showNoDataRecords:d}=r.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},c={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:l,showNoDataRecords:d,signal:t?.signal};return i.queryVisibleRasters(n,c).then((e=>e))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,s._)([(0,l.MZ)()],t.prototype,"layer",void 0),(0,s._)([(0,l.MZ)()],t.prototype,"suspended",void 0),(0,s._)([(0,l.MZ)(Z.ui)],t.prototype,"timeExtent",void 0),(0,s._)([(0,l.MZ)()],t.prototype,"view",void 0),t=(0,s._)([(0,d.$)("esri.views.layers.ImageryLayerView")],t),t};var G=i(95325),j=i(72624);let W=class extends(H((0,j.A)((0,g.e)(G.A)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new c.Y,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new _.A({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new y.A(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([(0,h.wB)((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),h.OH),(0,h.wB)((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())}),h.OH),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())})),(0,h.wB)((()=>this.layer.renderer),(()=>this._setSubView()))])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:a.A.isCollection(e)?e.at(0):e)instanceof r.A))return(0,n.hA)();let i=[];return Array.isArray(e)||a.A.isCollection(e)?i=e.map((e=>e.clone())):e instanceof r.A&&(i=[e.clone()]),this._highlightGraphics.addMany(i),(0,n.hA)((()=>this._highlightGraphics.removeMany(i)))}async doRefresh(){this.requestUpdate()}isUpdating(){const e=!this.subview||this.subview.updating||!!this._highlightView?.updating;return(0,o.A)("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}\n-> subview ${!this.subview||this.subview.updating}\n-> higlightView ${this._highlightView?.updating}\n`),e}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if("vector-field"===e?t="imageryVF":"flow"===e&&(t="flow"),this.subview){const{type:e}=this.subview;if(e===t)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview="imagery"===t?new V({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new O({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new p.A({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};(0,s._)([(0,l.MZ)()],W.prototype,"pixelData",null),(0,s._)([(0,l.MZ)()],W.prototype,"subview",void 0),W=(0,s._)([(0,d.$)("esri.views.2d.layers.ImageryLayerView2D")],W);const Y=W},38806:(e,t,i)=>{i.d(t,{f:()=>T});var s=i(58407),r=i(18392),a=i(10380),n=i(6581),o=i(55891),h=i(39215);let l=0;function u(e,t,i){return new n.O((0,h.U)(l++),e,e.meshWriter.name,t,i)}const d={geometry:{visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null}};class c{constructor(){this.instances={fill:u(o.YS.fill,d,{zoomRange:!0}),marker:u(o.YS.marker,d,{zoomRange:!0}),line:u(o.YS.line,d,{zoomRange:!0}),text:u(o.YS.text,d,{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}),complexFill:u(o.YS.complexFill,d,{zoomRange:!0}),texturedLine:u(o.YS.texturedLine,d,{zoomRange:!0})},this._instancesById=Object.values(this.instances).reduce(((e,t)=>(e.set(t.instanceId,t),e)),new Map)}getInstance(e){return this._instancesById.get(e)}}var p=i(62051),g=i(93276),_=i(90385),y=i(86692),x=i(10119),m=i(97965),w=i(9903),f=i(45939),v=i(65414),b=i(52044);const A=Math.PI/180;class S extends m.q{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,g.vt)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.WD)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(v.dn.ONE,v.dn.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(v.WR.LINES,8*i.length,v.pe.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:(0,g.vt)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",V().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:r,pixelRatio:a,rotation:n,viewpoint:o}=t,h=A*n,{x:l,y:u}=o.targetGeometry,d=(0,x.mT)(l,t.spatialReference);this._localOrigin.x=d,this._localOrigin.y=u;const c=a*s[0],g=a*s[1],m=r*c,w=r*g,f=(0,p.D_)(this._dvsMat3);(0,p.lw)(f,f,i),(0,p.Tl)(f,f,(0,_.fA)(c/2,g/2)),(0,p.hs)(f,f,(0,y.fA)(s[0]/m,-g/w,1)),(0,p.e$)(f,f,-h)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=8*t.length,a=new Float32Array(r),n=new Uint32Array(8*t.length);let o=0,h=0;for(const e of t)e&&(a[2*o]=e[0]-i,a[2*o+1]=e[1]-s,a[2*o+2]=e[0]-i,a[2*o+3]=e[3]-s,a[2*o+4]=e[2]-i,a[2*o+5]=e[3]-s,a[2*o+6]=e[2]-i,a[2*o+7]=e[1]-s,n[h]=o+0,n[h+1]=o+3,n[h+2]=o+3,n[h+3]=o+2,n[h+4]=o+2,n[h+5]=o+1,n[h+6]=o+1,n[h+7]=o+0,o+=4,h+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=f.g.createVertex(e,v._U.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=f.g.createIndex(e,v._U.DYNAMIC_DRAW,n),!this._vao){const t=V();this._vao=new b.Z(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const V=()=>(0,w.ES)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:v.pe.FLOAT}]});class T extends r.j{constructor(e){super(e),this._instanceStore=new c,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.pR)(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new S(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const t of this.children){if(!t.visible)continue;const i=t.getDisplayList(e.drawPhase,this._instanceStore,a.ch.STRICT_ORDER);i?.render(e)}}}},28227:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(61126),r=(i(29287),i(56531),i(356),i(86173),i(74579)),a=i(10380),n=i(38806),o=i(83336);let h=class extends n.f{get hasHighlight(){return this.children.some((e=>e.hasData))}renderChildren(e){this.attributeView.update(),e.drawPhase===a.S5.HIGHLIGHT&&this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),(0,o.lB)(e,!0,(e=>{this._renderChildren(e,a.RI.All)})))}};h=(0,s._)([(0,r.$)("esri.views.2d.layers.support.HighlightGraphicContainer")],h);const l=h}}]);