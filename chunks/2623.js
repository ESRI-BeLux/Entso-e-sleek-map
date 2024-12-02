"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[2623],{92623:(e,t,l)=>{l.r(t),l.d(t,{default:()=>R});var r,o=l(61126),s=(l(22955),l(28454)),i=l(86173),n=l(56152),a=l(51982),p=l(31145),u=l(95712),c=(l(56531),l(29287),l(356),l(17642)),y=l(74579),h=l(7066),d=l(15391),m=l(25229),w=l(30522),v=l(13734),f=l(90251),A=l(85665),g=l(88555),T=l(65769),b=l(48656),_=l(58240),M=l(79238),Z=l(2747),j=l(46803);let S=r=class extends((0,m.d)((0,f.J)((0,A.j)((0,w.q)((0,v.A)((0,n.P)(d.A))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new M.A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,Z.A.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=Z.A.WebMercator,this.subDomains=null,this.tileInfo=new b.A({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new j.A({x:-20037508.342787,y:20037508.342787,spatialReference:Z.A.WebMercator}),spatialReference:Z.A.WebMercator,lods:[new T.A({level:0,scale:591657527.591555,resolution:156543.033928}),new T.A({level:1,scale:295828763.795777,resolution:78271.5169639999}),new T.A({level:2,scale:147914381.897889,resolution:39135.7584820001}),new T.A({level:3,scale:73957190.948944,resolution:19567.8792409999}),new T.A({level:4,scale:36978595.474472,resolution:9783.93962049996}),new T.A({level:5,scale:18489297.737236,resolution:4891.96981024998}),new T.A({level:6,scale:9244648.868618,resolution:2445.98490512499}),new T.A({level:7,scale:4622324.434309,resolution:1222.99245256249}),new T.A({level:8,scale:2311162.217155,resolution:611.49622628138}),new T.A({level:9,scale:1155581.108577,resolution:305.748113140558}),new T.A({level:10,scale:577790.554289,resolution:152.874056570411}),new T.A({level:11,scale:288895.277144,resolution:76.4370282850732}),new T.A({level:12,scale:144447.638572,resolution:38.2185141425366}),new T.A({level:13,scale:72223.819286,resolution:19.1092570712683}),new T.A({level:14,scale:36111.909643,resolution:9.55462853563415}),new T.A({level:15,scale:18055.954822,resolution:4.77731426794937}),new T.A({level:16,scale:9027.977411,resolution:2.38865713397468}),new T.A({level:17,scale:4513.988705,resolution:1.19432856685505}),new T.A({level:18,scale:2256.994353,resolution:.597164283559817}),new T.A({level:19,scale:1128.497176,resolution:.298582141647617}),new T.A({level:20,scale:564.248588,resolution:.14929107082380833}),new T.A({level:21,scale:282.124294,resolution:.07464553541190416}),new T.A({level:22,scale:141.062147,resolution:.03732276770595208}),new T.A({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new p.s0(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&t.authority?.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new i.A("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||Z.A.fromJSON(t.fullExtent?.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,r=new p.s0(t),o=r.scheme?r.scheme+"://":"//",s=o+r.authority+"/",i=r.authority;if(i?.includes("{subDomain}")){if(l&&l.length>0&&i.split(".").length>1)for(const t of l)e.push(o+i.replaceAll(/\{subDomain\}/gi,t)+"/")}else e.push(s);return e.map(p.Il)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new p.s0(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){(0,p.BQ)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,p.S8)(e)),t.templateUrl=e}fetchTile(e,t,l,r={}){const{signal:o}=r,i=this.getTileUrl(e,t,l),n={responseType:"image",signal:o,query:{...this.refreshParameters}};return(0,s.A)(i,n).then((e=>e.data))}async fetchImageBitmapTile(e,t,l,o={}){const{signal:i}=o;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,l,o);return(0,g.C)(r,e,t,l,i)}const n=this.getTileUrl(e,t,l),a={responseType:"blob",signal:i,query:{...this.refreshParameters}},{data:p}=await(0,s.A)(n,a);return(0,g.C)(p,e,t,l,i)}getTileUrl(e,t,l){const{levelValues:r,tileServers:o,urlPath:s}=this;if(!r||!o||!s)return"";const i=r[e];return o[t%o.length]+(0,a.HC)(s,{level:i,z:i,col:l,x:l,row:t,y:t})}};(0,o._)([(0,u.MZ)({type:String,value:"",json:{write:!0}})],S.prototype,"copyright",void 0),(0,o._)([(0,u.MZ)({type:M.A,json:{write:!0},nonNullable:!0})],S.prototype,"fullExtent",void 0),(0,o._)([(0,u.MZ)({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"legendEnabled",void 0),(0,o._)([(0,u.MZ)({type:["show","hide"]})],S.prototype,"listMode",void 0),(0,o._)([(0,u.MZ)({json:{read:!0,write:!0}})],S.prototype,"blendMode",void 0),(0,o._)([(0,u.MZ)()],S.prototype,"levelValues",null),(0,o._)([(0,u.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],S.prototype,"isReference",void 0),(0,o._)([(0,u.MZ)({type:["WebTiledLayer"],value:"WebTiledLayer"})],S.prototype,"operationalLayerType",void 0),(0,o._)([(0,u.MZ)({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"popupEnabled",void 0),(0,o._)([(0,u.MZ)({type:Z.A})],S.prototype,"spatialReference",void 0),(0,o._)([(0,c.w)("spatialReference",["spatialReference","fullExtent.spatialReference"])],S.prototype,"readSpatialReference",null),(0,o._)([(0,u.MZ)({type:[String],json:{write:!0}})],S.prototype,"subDomains",void 0),(0,o._)([(0,u.MZ)({type:b.A,json:{write:!0}})],S.prototype,"tileInfo",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],S.prototype,"tileServers",null),(0,o._)([(0,u.MZ)({json:{read:!1}})],S.prototype,"type",void 0),(0,o._)([(0,u.MZ)()],S.prototype,"urlPath",null),(0,o._)([(0,u.MZ)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],S.prototype,"urlTemplate",void 0),(0,o._)([(0,c.w)("urlTemplate",["urlTemplate","templateUrl"])],S.prototype,"readUrlTemplate",null),(0,o._)([(0,h.K)("urlTemplate",{templateUrl:{type:String}})],S.prototype,"writeUrlTemplate",null),(0,o._)([(0,u.MZ)({type:_.x,json:{write:!0}})],S.prototype,"wmtsInfo",void 0),S=r=(0,o._)([(0,y.$)("esri.layers.WebTileLayer")],S);const R=S},58240:(e,t,l)=>{l.d(t,{x:()=>p});var r,o=l(61126),s=l(71979),i=l(32639),n=l(95712),a=(l(56531),l(29287),l(74579));let p=r=class extends s.oY{constructor(e){super(e)}clone(){return new r({customLayerParameters:(0,i.o8)(this.customLayerParameters),customParameters:(0,i.o8)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,o._)([(0,n.MZ)({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),(0,o._)([(0,n.MZ)({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=r=(0,o._)([(0,a.$)("esri.layer.support.WMTSLayerInfo")],p)},88555:(e,t,l)=>{l.d(t,{C:()=>i,m:()=>s});var r=l(86173),o=l(99601);async function s(e,t,l){let s;try{s=await createImageBitmap(e)}catch(e){throw new r.A("request:server",`Unable to load ${t}`,{url:t,error:e})}return(0,o.Te)(l),s}async function i(e,t,l,s,i){let n;try{n=await createImageBitmap(e)}catch(e){throw new r.A("request:server",`Unable to load tile ${t}/${l}/${s}`,{error:e,level:t,row:l,col:s})}return(0,o.Te)(i),n}}}]);