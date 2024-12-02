"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[3605],{23681:(e,t,i)=>{i.d(t,{X_:()=>n,i1:()=>l,zx:()=>o});var s=i(68668),r=i(29964);const a=96;function n(e,t){const i=t||e.extent,s=e.width,n=(0,r.GA)(i?.spatialReference);return i&&s?i.width/s*n*r.dy*a:0}function l(e,t){return e/((0,r.GA)(t)*r.dy*a)}function o(e,t,i){return function(e,t){return 0===t||(0,s.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,s.Sp)(e,t)||e>t}(e,i)}},53605:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var s=i(61126),r=(i(29287),i(56531),i(356),i(86173),i(74579)),a=i(43525),n=i(8559),l=i(57102),o=i(69767),p=i(95712),h=i(95325);let d=class extends h.A{constructor(e){super(e),this.type="group",this.layerViews=new n.A}destroy(){this.layerViews.length=0}_allLayerViewVisibility(e){this.layerViews.forEach((t=>{t.visible=e}))}initialize(){this.addHandles([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),(0,o.wB)((()=>this.layer?.visibilityMode),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))}),o.OH),(0,o.wB)((()=>this.visible),(e=>{this._applyVisibility((()=>this._allLayerViewVisibility(e)),(()=>{}))}),o.OH)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(e){this._set("layerViews",(0,l.V)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,t)=>e+t.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.layerViews.some((e=>e.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((t=>t.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const t=this._findLayerViewForLayer(e);return!!t?.visible}));return e&&this._findLayerViewForLayer(e)}_applyExclusiveVisibility(e){null==e&&null==(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((t=>{t.visible=t===e}))}_layerViewsChangeHandler(e){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map((e=>(0,o.wB)((()=>e.visible),(t=>this._applyVisibility((()=>{t!==this.visible&&(e.visible=this.visible)}),(()=>this._applyExclusiveVisibility(t?e:null)))),o.OH))).toArray(),"grouplayerview:visible");const t=e.added[e.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(t?.visible?t:null)))}_applyVisibility(e,t){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?e():"exclusive"===this.layer?.visibilityMode&&t())}};(0,s._)([(0,p.MZ)({cast:l.H})],d.prototype,"layerViews",null),(0,s._)([(0,p.MZ)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,s._)([(0,p.MZ)()],d.prototype,"view",void 0),d=(0,s._)([(0,r.$)("esri.views.layers.GroupLayerView")],d);const y=d;let u=class extends((0,a.e)(y)){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};u=(0,s._)([(0,r.$)("esri.views.2d.layers.GroupLayerView2D")],u);const c=u},43525:(e,t,i)=>{i.d(t,{e:()=>m});var s,r=i(61126),a=i(8559),n=i(57102),l=i(86173),o=i(69767),p=i(95712),h=(i(56531),i(29287),i(356),i(74579)),d=i(23681),y=i(79767),u=i(94895),c=i(52830);let v=s=class extends c.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),v=s=(0,r._)([(0,h.$)("esri.views.layers.support.ClipRect")],v);const g=v;var w=i(5801);let _=class extends c.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,p.MZ)({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),_=(0,r._)([(0,h.$)("esri.views.layers.support.Path")],_);const b=_,f=a.A.ofType({key:"type",base:null,typeMap:{rect:g,path:b,geometry:w.A}}),m=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new l.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new y.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,o.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),o.pc),(0,o.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.pc),(0,o.wB)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),o.pc),(0,o.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.pc),(0,o.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.pc),(0,o.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),o.pc),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.pc),(0,o.wB)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),o.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,d.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,p.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,p.MZ)({type:f,set(e){const t=(0,n.V)(e,this._get("clips"),f);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,p.MZ)()],t.prototype,"updating",null),(0,r._)([(0,p.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,p.MZ)({type:u.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,h.$)("esri.views.2d.layers.LayerView2D")],t),t}},95325:(e,t,i)=>{i.d(t,{A:()=>c});var s=i(61126),r=i(49689),a=i(28622),n=i(7919),l=i(29287),o=i(58407),p=i(73262),h=i(95712),d=(i(56531),i(356),i(74579)),y=i(78610);let u=class extends((0,n.sA)((0,p.g)(a.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new y.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";l.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,h.MZ)()],u.prototype,"fullOpacity",null),(0,s._)([(0,h.MZ)()],u.prototype,"layer",void 0),(0,s._)([(0,h.MZ)()],u.prototype,"parent",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],u.prototype,"suspended",null),(0,s._)([(0,h.MZ)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,s._)([(0,h.MZ)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,s._)([(0,h.MZ)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,h.MZ)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,s._)([(0,h.MZ)()],u.prototype,"visible",null),(0,s._)([(0,h.MZ)()],u.prototype,"view",void 0),u=(0,s._)([(0,d.$)("esri.views.layers.LayerView")],u);const c=u},52830:(e,t,i)=>{i.d(t,{A:()=>o});var s=i(61126),r=i(71979),a=i(95712),n=(i(56531),i(29287),i(356),i(74579));let l=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,a.MZ)({readOnly:!0})],l.prototype,"version",null),l=(0,s._)([(0,n.$)("esri.views.layers.support.ClipArea")],l);const o=l},5801:(e,t,i)=>{i.d(t,{A:()=>c});var s,r=i(61126),a=(i(22955),i(95712)),n=(i(56531),i(29287),i(356),i(74579)),l=i(55150),o=i(10359),p=i(52830),h=i(79238),d=i(55734);const y={base:l.A,key:"type",typeMap:{extent:h.A,polygon:d.A}};let u=s=class extends p.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new s({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,a.MZ)({types:y,json:{read:o.rS,write:!0}})],u.prototype,"geometry",void 0),u=s=(0,r._)([(0,n.$)("esri.views.layers.support.Geometry")],u);const c=u}}]);