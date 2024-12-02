"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[6457],{28043:(e,t,r)=>{r.d(t,{A:()=>l});var s,n,i=r(56531),o=r(81546);(n=s||(s={}))[n.varint=0]="varint",n[n.fixed64=1]="fixed64",n[n.delimited=2]="delimited",n[n.fixed32=5]="fixed32",n[n.unknown=99]="unknown";const a=4294967296,c=new TextDecoder("utf-8"),u=(0,i.A)("safari")||(0,i.A)("ios")?6:(0,i.A)("ff")?12:32;class l{constructor(e,t,r=0,n=(e?e.byteLength:0)){this._tag=0,this._dataType=s.unknown,this._init(e,t,r,n)}_init(e,t,r,s){this._data=e,this._dataView=t,this._pos=r,this._end=s}asUnsafe(){return this}clone(){return new l(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;if(e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128)return e;if(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)return e;if(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)return e;if(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)return e;if(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128)return e;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getUint32(t+4,!0)*a;return this._skip(8),r}getSFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getInt32(t+4,!0)*a;return this._skip(8),r}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}getBytes(){const e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,s){const n=this.getMessage(),i=e(n,t,r,s);return n.release(),i}processMessage(e){const t=this.getMessage(),r=e(t);return t.release(),r}getMessage(){const e=this._getLength(),t=l.pool.acquire();return t._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){l.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case s.varint:this._decodeVarint();break;case s.fixed64:this._skip(8);break;case s.delimited:this._skip(this._getLength());break;case s.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t=this._pos,r=0,s=0;if(this._end-t>=10)do{if(s=e[t++],r|=127&s,!(128&s))break;if(s=e[t++],r|=(127&s)<<7,!(128&s))break;if(s=e[t++],r|=(127&s)<<14,!(128&s))break;if(s=e[t++],r|=(127&s)<<21,!(128&s))break;if(s=e[t++],r+=268435456*(127&s),!(128&s))break;if(s=e[t++],r+=34359738368*(127&s),!(128&s))break;if(s=e[t++],r+=4398046511104*(127&s),!(128&s))break;if(s=e[t++],r+=562949953421312*(127&s),!(128&s))break;if(s=e[t++],r+=72057594037927940*(127&s),!(128&s))break;if(s=e[t++],r+=0x8000000000000000*(127&s),!(128&s))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;t!==this._end&&(s=e[t],128&s);)++t,r+=(127&s)*n,n*=128;if(t===this._end)throw new Error("Varint overrun!");++t,r+=s*n}return this._pos=t,r}_decodeSVarint(){const e=this._data;let t,r=0,s=0;const n=1&e[this._pos];if(s=e[this._pos++],r|=127&s,!(128&s))return n?-(r+1)/2:r/2;if(s=e[this._pos++],r|=(127&s)<<7,!(128&s))return n?-(r+1)/2:r/2;if(s=e[this._pos++],r|=(127&s)<<14,!(128&s))return n?-(r+1)/2:r/2;if(s=e[this._pos++],r|=(127&s)<<21,!(128&s))return n?-(r+1)/2:r/2;if(s=e[this._pos++],r+=268435456*(127&s),!(128&s))return n?-(r+1)/2:r/2;if(s=e[this._pos++],r+=34359738368*(127&s),!(128&s))return n?-(r+1)/2:r/2;if(s=e[this._pos++],r+=4398046511104*(127&s),!(128&s))return n?-(r+1)/2:r/2;if(t=BigInt(r),s=e[this._pos++],t+=0x2000000000000n*BigInt(127&s),!(128&s))return Number(n?-(t+1n)/2n:t/2n);if(s=e[this._pos++],t+=0x100000000000000n*BigInt(127&s),!(128&s))return Number(n?-(t+1n)/2n:t/2n);if(s=e[this._pos++],t+=0x8000000000000000n*BigInt(127&s),!(128&s))return Number(n?-(t+1n)/2n:t/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==s.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>u){const s=e.subarray(t,r);return c.decode(s)}let s="",n="";for(let i=t;i<r;++i){const t=e[i];128&t?n+="%"+t.toString(16):(s+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(s+=decodeURIComponent(n)),s}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}l.pool=new o.A(l,void 0,(e=>{e._data=null,e._dataView=null}))},56457:(e,t,r)=>{r.r(t),r.d(t,{createConnection:()=>A});var s=r(61126),n=(r(22955),r(28454)),i=r(86173),o=r(29287),a=r(99601),c=r(31145),u=(r(56531),r(356),r(74579)),l=r(95712),d=r(53126),h=r(28622);let g=class extends h.A.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new i.A("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,s._)([(0,l.MZ)({readOnly:!0})],g.prototype,"connectionError",null),g=(0,s._)([(0,u.$)("esri.layers.support.StreamConnection")],g);const f=g;var p,y;(y=p||(p={}))[y.CONNECTING=0]="CONNECTING",y[y.OPEN=1]="OPEN",y[y.CLOSING=2]="CLOSING",y[y.CLOSED=3]="CLOSED";let _=class extends f{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=(0,d.N)(t,s,r),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case p.CONNECTING:case p.OPEN:return"connected";case p.CLOSING:case p.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const t=(0,c.a6)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(s){const n=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(o.A.getLogger(this).error(new i.A("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(o.A.getLogger(this).error(new i.A("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,s)),await(0,a.Pl)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(e){return void o.A.getLogger(this).error(new i.A("websocket-connection","Failed to parse message, invalid JSON",{error:e}))}}}_createWebSocket(e){return new Promise(((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=e=>{s.onopen=s.onclose=null,r(e)}}))}async _handshake(e=1e4){const t=this._websocket;if(null==t)return;const r=(0,a.Tw)(),s=t.onmessage,{filter:n,outFields:c,spatialReference:u}=this._config;return r.timeout(e),t.onmessage=e=>{let a=null;try{a=JSON.parse(e.data)}catch(e){}a&&"object"==typeof a||(o.A.getLogger(this).error(new i.A("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),r.reject(),this.destroy()),a.spatialReference?.wkid!==u?.wkid&&(o.A.getLogger(this).error(new i.A("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${u.wkid}`,e.data)),r.reject(),this.destroy()),"json"!==a.format&&(o.A.getLogger(this).error(new i.A("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),r.reject(),this.destroy()),n&&a.filter!==n&&o.A.getLogger(this).error(new i.A("websocket-connection","Tried to set filter, but server doesn't support it")),c&&a.outFields!==c&&o.A.getLogger(this).error(new i.A("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s;for(const e of this._outstandingMessages)t.send(JSON.stringify(e));this._outstandingMessages=[],r.resolve()},t.send(JSON.stringify({filter:n,outFields:c,format:"json",spatialReference:{wkid:u.wkid}})),r.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),o.A.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&o.A.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,s._)([(0,l.MZ)()],_.prototype,"connectionStatus",null),(0,s._)([(0,l.MZ)()],_.prototype,"errorString",void 0),_=(0,s._)([(0,u.$)("esri.layers.graphics.sources.connections.WebSocketConnection")],_);var m=r(72816),b=r(96801),k=r(10359),w=r(2747);const S={maxQueryDepth:5,maxRecordCountFactor:3};let F=class extends _{constructor(e){super({...S,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||o.A.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(t.geometry)}catch(e){return void o.A.getLogger(this).error(new i.A("geoevent-connection","Failed to parse message",e))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=(0,n.A)(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:n}=r,i=this._inferWebSocketBaseUrl(s);return(0,c.a6)(`${i}/subscribe`,{outSR:""+t.wkid,token:n})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return o.A.getLogger(this).error(new i.A("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(null==r||null==e&&null==t)return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let n=!1;const c=(0,a.Tw)();return r.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(o.A.getLogger(this).error(new i.A("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(r),n=!0,c.resolve())},r.send(s),setTimeout((()=>{n||(this.destroyed||this._websocket!==r||o.A.getLogger(this).error(new i.A("geoevent-connection","Server timed out when setting filter")),c.reject())}),1e4),c.promise}_serializeFilter(e,t){const r={};if(null==e&&null==t)return r;if(e?.geometry)try{const t=(0,k.rS)(e.geometry);if("extent"!==t.type)throw new i.A(`Expected extent but found type ${t.type}`);r.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(e){o.A.getLogger(this).error(new i.A("geoevent-connection","Encountered an error when setting connection geometryDefinition",e))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(r.where=e.where),null!=t&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return o.A.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:a}=s;for(const t in n)e.attributes[t]=n[t];return a&&(e.geometry=a),e.geometry||e.centroid||o.A.getLogger(this).error(new i.A("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const n=await s;if(!n)return;for(const e of n.features)this.onFeature(this._enrich(e))}catch(e){o.A.getLogger(this).error(new i.A("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.resolve().then(r.bind(r,61211))).default)({url:e}),{capabilities:s}=await t.load(),n=s.query.supportsMaxRecordCountFactor,i=s.query.supportsPagination,o=s.query.supportsCentroid,a=this._config.maxRecordCountFactor,c=t.capabilities.query.maxRecordCount,u=n?c*a:c,l=new b.A;if(l.outFields=this._config.outFields??["*"],l.where=this._config.filter?.where??"1=1",l.returnGeometry=!0,l.returnExceededLimitFeatures=!0,l.outSpatialReference=w.A.fromJSON(this._config.spatialReference),o&&(l.returnCentroid=!0),n&&(l.maxRecordCountFactor=a),i)return l.num=u,t.destroy(),this._queryPages(e,l);const d=await(0,m.eW)(e,l,this._config.sourceSpatialReference);return t.destroy(),d.data}async _queryPages(e,t,r=[],s=0){t.start=null!=t.num?s*t.num:null;const{data:n}=await(0,m.eW)(e,t,this._config.sourceSpatialReference);return n.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(n.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,s+1)):(r.forEach((e=>n.features.push(e))),n)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const e of r){const r=e.attributes[s];t.set(r,e)}this._relatedFeatures=t}};F=(0,s._)([(0,u.$)("esri.layers.graphics.sources.connections.GeoEventConnection")],F);const x=F;let T=class extends f{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=(0,d.N)(t,s,r)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function v(e,t){if(null==e&&null==t)return null;const r={};return null!=t&&(r.geometry=t),null!=e&&(r.where=e),r}function A(e,t,r,s,n,i,o,a,c){const u={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:v(n,i),maxReconnectionAttempts:o,maxReconnectionInterval:a,customParameters:c};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new _(u):new x(u):new T(u)}(0,s._)([(0,l.MZ)()],T.prototype,"connectionStatus",void 0),(0,s._)([(0,l.MZ)()],T.prototype,"errorString",void 0),T=(0,s._)([(0,u.$)("esri.layers.support.ClientSideConnection")],T)},54503:(e,t,r)=>{function s(e){const t={};for(const r in e){if("declaredClass"===r)continue;const n=e[r];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){t[r]=[];for(let e=0;e<n.length;e++)t[r][e]=s(n[e])}else"object"==typeof n?n.toJSON&&(t[r]=JSON.stringify(n)):t[r]=n}return t}r.d(t,{z:()=>s})},46646:(e,t,r)=>{r.d(t,{SH:()=>q,ae:()=>F,cn:()=>m});var s=r(86173),n=r(28043),i=r(77559),o=r(79497);const a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],c=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],u=["upperLeft","lowerLeft"];function l(e){return e>=a.length?null:a[e]}function d(e){return e>=c.length?null:c[e]}function h(e){return e>=u.length?null:u[e]}function g(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function f(e,t,r){const s=e.asUnsafe(),n=t.createPointGeometry(r);for(;s.next();)switch(s.tag()){case 3:{const e=s.getUInt32(),r=s.pos()+e;let i=0;for(;s.pos()<r;)t.addCoordinatePoint(n,s.getSInt64(),i++);break}default:s.skip()}return n}function p(e,t,r){const s=e.asUnsafe(),n=t.createGeometry(r),i=2+(r.hasZ?1:0)+(r.hasM?1:0);for(;s.next();)switch(s.tag()){case 2:{const e=s.getUInt32(),r=s.pos()+e;let i=0;for(;s.pos()<r;)t.addLength(n,s.getUInt32(),i++);break}case 3:{const e=s.getUInt32(),r=s.pos()+e;let o=0;for(t.allocateCoordinates(n);s.pos()<r;)t.addCoordinate(n,s.getSInt64(),o),o++,o===i&&(o=0);break}default:s.skip()}return n}function y(e){const t=e.asUnsafe(),r=new i.A;let s="esriGeometryPoint";for(;t.next();)switch(t.tag()){case 2:{const e=t.getUInt32(),s=t.pos()+e;for(;t.pos()<s;)r.lengths.push(t.getUInt32());break}case 3:{const e=t.getUInt32(),s=t.pos()+e;for(;t.pos()<s;)r.coords.push(t.getSInt64());break}case 1:s=o.z[t.getEnum()];break;default:t.skip()}return{queryGeometry:r,queryGeometryType:s}}function _(e){const t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:return t.getString();case 2:return t.getFloat();case 3:return t.getDouble();case 4:return t.getSInt32();case 5:return t.getUInt32();case 6:return t.getInt64();case 7:return t.getUInt64();case 8:return t.getSInt64();case 9:return t.getBool();default:return t.skip(),null}return null}function m(e){const t=e.asUnsafe(),r={type:l(0)};for(;t.next();)switch(t.tag()){case 1:r.name=t.getString();break;case 2:r.type=l(t.getEnum());break;case 3:r.alias=t.getString();break;case 4:r.sqlType=d(t.getEnum());break;case 5:default:t.skip();break;case 6:r.defaultValue=t.getString()}return r}function b(e){const t={},r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t.name=r.getString();break;case 2:t.isSystemMaintained=r.getBool();break;default:r.skip()}return t}function k(e,t,r,s){const n=t.createFeature(r);let i=0;for(;e.next();)switch(e.tag()){case 1:{const t=s[i++].name;n.attributes[t]=e.processMessage(_);break}case 2:n.geometry=e.processMessageWithArgs(p,t,r);break;case 4:n.centroid=e.processMessageWithArgs(f,t,r);break;default:e.skip()}return n}function w(e){const t=[1,1,1,1],r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function S(e){const t=[0,0,0,0],r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function F(e){const t={originPosition:h(0)},r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t.originPosition=h(r.getEnum());break;case 2:t.scale=r.processMessage(w);break;case 3:t.translate=r.processMessage(S);break;default:r.skip()}return t}function x(e){const t={},r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t.shapeAreaFieldName=r.getString();break;case 2:t.shapeLengthFieldName=r.getString();break;case 3:t.units=r.getString();break;default:r.skip()}return t}function T(e,t){const r=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function v(e,t){const r=t.createFeatureResult(),s=e.asUnsafe();r.geometryType=g(t,0);let n=!1;for(;s.next();)switch(s.tag()){case 1:r.objectIdFieldName=s.getString();break;case 3:r.globalIdFieldName=s.getString();break;case 4:r.geohashFieldName=s.getString();break;case 5:r.geometryProperties=s.processMessage(x);break;case 7:r.geometryType=g(t,s.getEnum());break;case 8:r.spatialReference=s.processMessageWithArgs(T,t);break;case 10:r.hasZ=s.getBool();break;case 11:r.hasM=s.getBool();break;case 12:r.transform=s.processMessage(F);break;case 9:r.exceededTransferLimit=s.getBool();break;case 13:t.addField(r,s.processMessage(m));break;case 15:n||(t.prepareFeatures(r),n=!0),t.addFeature(r,s.processMessageWithArgs(k,t,r,r.fields));break;case 2:r.uniqueIdField=s.processMessage(b);break;default:s.skip()}return t.finishFeatureResult(r),r}function A(e,t){const r={};let s=null;for(;e.next();)switch(e.tag()){case 4:s=e.processMessageWithArgs(y);break;case 1:r.featureResult=e.processMessageWithArgs(v,t);break;default:e.skip()}return null!=s&&r.featureResult&&t.addQueryGeometry(r,s),r}function q(e,t){try{const r=2,s=new n.A(new Uint8Array(e),new DataView(e)),i={};for(;s.next();)s.tag()===r?i.queryResult=s.processMessageWithArgs(A,t):s.skip();return i}catch(e){throw new s.A("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},79497:(e,t,r)=>{r.d(t,{S:()=>u,z:()=>c});var s=r(29964),n=r(8298),i=r(7953),o=r(72225),a=r(77559);const c=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class u{constructor(e){this._options=e,this.geometryTypes=c,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new o.A}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e?.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||(0,n.aI)(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,s.G9)(this._options.sourceSpatialReference)/(0,s.G9)(e.spatialReference);if(1!==t)for(const r of e.features){if(!(0,i.N3)(r))continue;const e=r.geometry.coords;for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new i.Om}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.A}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.A}}},1989:(e,t,r)=>{r.d(t,{m:()=>n});var s=r(46646);function n(e,t){const r=(0,s.SH)(e,t),n=r.queryResult.featureResult,i=r.queryResult.queryGeometry,o=r.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=i,n.queryGeometryType=o),n}},72816:(e,t,r)=>{r.d(t,{GB:()=>b,IJ:()=>f,Jf:()=>m,Pk:()=>y,eW:()=>g,gW:()=>_,kS:()=>p});var s=r(28454),n=r(31145),i=r(10359),o=r(10119),a=r(8298),c=r(54503),u=r(1989),l=r(46640);const d="Layer does not support extent calculation.";function h(e,t){const r=e.geometry,s=e.toJSON();delete s.compactGeometryEnabled,delete s.defaultSpatialReferenceEnabled;const n=s;let o,c,u;if(null!=r&&(c=r.spatialReference,u=(0,a.YX)(c),n.geometryType=(0,i.$B)(r),n.geometry=function(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;const r=e.toJSON();return delete r.spatialReference,JSON.stringify(r)}(r,e.compactGeometryEnabled),n.inSR=u),s.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=s.groupByFieldsForStatistics.join(",")),s.objectIds&&(n.objectIds=s.objectIds.join(",")),s.orderByFields&&(n.orderByFields=s.orderByFields.join(",")),!s.outFields||!s.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete n.outFields:s.outFields.includes("*")?n.outFields="*":n.outFields=s.outFields.join(","),s.outSR?(n.outSR=(0,a.YX)(s.outSR),o=e.outSpatialReference):r&&(s.returnGeometry||s.returnCentroid)&&(n.outSR=n.inSR,o=c),s.returnGeometry&&delete s.returnGeometry,s.outStatistics&&(n.outStatistics=JSON.stringify(s.outStatistics)),s.fullText&&(n.fullText=JSON.stringify(s.fullText)),s.pixelSize&&(n.pixelSize=JSON.stringify(s.pixelSize)),s.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=c&&null!=e.quantizationParameters?.extent&&c.equals(e.quantizationParameters.extent.spatialReference)&&delete s.quantizationParameters.extent.spatialReference,n.quantizationParameters=JSON.stringify(s.quantizationParameters)),s.parameterValues&&(n.parameterValues=JSON.stringify(s.parameterValues)),s.rangeValues&&(n.rangeValues=JSON.stringify(s.rangeValues)),s.dynamicDataSource&&(n.layer=JSON.stringify({source:s.dynamicDataSource}),delete s.dynamicDataSource),s.timeExtent){const e=s.timeExtent,{start:t,end:r}=e;null==t&&null==r||(n.time=t===r?t:`${t??"null"},${r??"null"}`),delete s.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=c&&null!=o&&c.equals(o)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}async function g(e,t,r,s){const n=null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{features:[]}}:await b(e,t,"json",s);return(0,l.q)(t,r,n.data),n}async function f(e,t,r,s){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:r.createFeatureResult()};const n=await p(e,t,s),i=n;return i.data=(0,u.m)(n.data,r),i}function p(e,t,r){return b(e,t,"pbf",r)}function y(e,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):b(e,t,"json",r,{returnIdsOnly:!0})}function _(e,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):b(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}async function m(e,t,r){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};const s=await b(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}),n=s.data;if(n.hasOwnProperty("extent"))return s;if(n.features)throw new Error(d);if(n.hasOwnProperty("count"))throw new Error(d);return s}async function b(e,t,r,i={},a={}){const u="string"==typeof e?(0,n.An)(e):e,l=t.geometry?[t.geometry]:[],d=await(0,o.el)(l,null,{signal:i.signal}),g=d?.[0];null!=g&&((t=t.clone()).geometry=g);const f=(0,c.z)({...u.query,f:r,...a,...h(t,a)});return(0,s.A)((0,n.fj)(u.path,(p=a,null==t.formatOf3DObjects||p.returnCountOnly||p.returnExtentOnly||p.returnIdsOnly?"query":"query3d")),{...i,responseType:"pbf"===r?"array-buffer":"json",query:{...f,...i.query}});var p}}}]);