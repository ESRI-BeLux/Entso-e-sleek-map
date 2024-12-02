"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[1187],{41187:(e,t,n)=>{n.r(t),n.d(t,{registerFunctions:()=>X});var a=n(40962),i=n(64656),r=n(87658),s=n(80494),l=n(11858),o=n(66684),u=n(93211),f=n(67127),c=n(44217),d=n(13391),m=n(44566),y=n(63425),h=n(76354),p=n(60732),w=n(47219),F=n(35620),g=n(3759),D=n(44830),T=n(14466),I=n(14847),A=n(99601),$=n(81338),b=n(61211),E=n(92862),C=n(2344);async function N(e,t,n){const a=e.getVariables();if(a.length>0){const i=[];for(let e=0;e<a.length;e++){const r={name:a[e]};i.push(await t.evaluateIdentifier(n,r))}const r={};for(let e=0;e<a.length;e++)r[a[e]]=i[e];return e.parameters=r,e}return e}function S(e,t,n=null){for(const n in e)if(n.toLowerCase()===t.toLowerCase())return e[n];return n}function x(e){if(null===e)return null;const t={type:S(e,"type",""),name:S(e,"name","")};if("range"===t.type)t.range=S(e,"range",[]);else{t.codedValues=[];for(const n of S(e,"codedValues",[]))t.codedValues.push({name:S(n,"name",""),code:S(n,"code",null)})}return t}function L(e){if(null===e)return null;const t={},n=S(e,"wkt",null);null!==n&&(t.wkt=n);const a=S(e,"wkid",null);return null!==a&&(t.wkid=a),t}function v(e){if(null===e)return null;const t={hasZ:S(e,"hasz",!1),hasM:S(e,"hasm",!1)},n=S(e,"spatialreference",null);n&&(t.spatialReference=L(n));const a=S(e,"x",null);if(null!==a)return t.x=a,t.y=S(e,"y",null),t.hasZ&&(t.z=S(e,"z",null)),t.hasM&&(t.m=S(e,"m",null)),t;const i=S(e,"rings",null);if(null!==i)return t.rings=i,t;const r=S(e,"paths",null);if(null!==r)return t.paths=r,t;const s=S(e,"points",null);if(null!==s)return t.points=s,t;for(const n of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const a=S(e,n,null);null!==a&&(t[n]=a)}return t}function P(e){return"utc"===e?.toLowerCase()?"UTC":"unknown"===e?.toLowerCase()?"Unknown":e}function X(e){"async"===e.mode&&(e.functions.timezone=function(t,n){return e.standardFunctionAsync(t,n,(async(e,i,l)=>{if((0,c.H)(l,1,2,t,n),(0,c.n)(l[0]))return"Unknown";if((0,c.m)(l[0]))return"Unknown";if((0,c.u)(l[0])){if(await l[0].load(),1===l.length||null===l[1])return l[0].datesInUnknownTimezone?P("unknown"):P(l[0].dateFieldsTimeZone);if(!(l[1]instanceof r.A)||!1===l[1].hasField("type"))throw new s.D$(t,s.TX.InvalidParameter,n);const e=l[1].field("type");if(!1===(0,c.c)(e))throw new s.D$(t,s.TX.InvalidParameter,n);switch((0,c.j)(e).toLowerCase()){case"preferredtimezone":return P(l[0].preferredTimeZone);case"editfieldsinfo":return P(l[0].editFieldsInfo?.timeZone??null);case"timeinfo":return P(l[0].timeInfo?.timeZone??null);case"field":if(l[1].hasField("fieldname")&&(0,c.c)(l[1].field("fieldname")))return P(l[0].fieldTimeZone((0,c.j)(l[1].field("fieldname"))))}throw new s.D$(t,s.TX.InvalidParameter,n)}const o=(0,c.l)(l[0],(0,c.N)(t));if(null===o)return null;const u=o.timeZone;return"system"===u?a.lY.systemTimeZoneCanonicalName:"utc"===u.toLowerCase()?"UTC":"unknown"===u.toLowerCase()?"Unknown":u}))},e.functions.sqltimestamp=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.H)(i,1,3,t,n);const r=i[0];if((0,c.k)(r)){if(1===i.length)return r.toSQLWithKeyword();if(2===i.length)return r.changeTimeZone((0,c.j)(i[1])).toSQLWithKeyword();throw new s.D$(t,s.TX.InvalidParameter,n)}if((0,c.m)(r))return r.toSQLWithKeyword();if((0,c.u)(r)){if(3!==i.length)throw new s.D$(t,s.TX.InvalidParameter,n);await r.load();const e=(0,c.j)(i[1]);if((0,c.m)(i[2]))return i[2].toSQLWithKeyword();if(!1===(0,c.k)(i[2]))throw new s.D$(t,s.TX.InvalidParameter,n);const a=r.fieldTimeZone(e);return null===a?i[2].toSQLWithKeyword():i[2].changeTimeZone(a).toSQLWithKeyword()}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,c.H)(i,2,4,t,n),i[0]instanceof o.A){const e=(0,c.j)(i[1]);let a=(0,c.K)(i[2],null);const r=(0,c.h)((0,c.K)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,c.o)(a))throw new s.D$(t,s.TX.InvalidParameter,n);return i[0].featureSetById(e,r,a)}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,c.H)(i,1,2,t,n),(0,c.r)(i[0])){let e=(0,c.K)(i[1],"datasource");return null===e&&(e="datasource"),e=(0,c.j)(e).toLowerCase(),(0,u.convertToFeatureSet)(i[0].fullSchema(),e,t.lrucache,t.interceptor,t.spatialReference)}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,((e,a,r)=>{if((0,c.H)(r,2,5,t,n),null===r[0])throw new s.D$(t,s.TX.PortalRequired,n);if(r[0]instanceof i.A){const e=(0,c.j)(r[1]),a=(0,c.j)(r[2]);let i=(0,c.K)(r[3],null);const l=(0,c.h)((0,c.K)(r[4],!0));if(null===i&&(i=["*"]),!1===(0,c.o)(i))throw new s.D$(t,s.TX.InvalidParameter,n);let o=null;return o=t.services?.portal?t.services.portal:C.A.getDefault(),o=(0,d.R)(r[0],o),(0,u.constructFeatureSetFromPortalItem)(e,a,t.spatialReference,i,l,o,t.lrucache,t.interceptor)}if(!1===(0,c.c)(r[0]))throw new s.D$(t,s.TX.PortalRequired,n);const l=(0,c.j)(r[0]),o=(0,c.j)(r[1]);let f=(0,c.K)(r[2],null);const m=(0,c.h)((0,c.K)(r[3],!0));if(null===f&&(f=["*"]),!1===(0,c.o)(f))throw new s.D$(t,s.TX.InvalidParameter,n);return(0,u.constructFeatureSetFromPortalItem)(l,o,t.spatialReference,f,m,t.services?.portal??C.A.getDefault(),t.lrucache,t.interceptor)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,c.H)(i,2,4,t,n),i[0]instanceof o.A){const e=(0,c.j)(i[1]);let a=(0,c.K)(i[2],null);const r=(0,c.h)((0,c.K)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,c.o)(a))throw new s.D$(t,s.TX.InvalidParameter,n);return i[0].featureSetByName(e,r,a)}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,((e,a,i)=>{(0,c.H)(i,1,1,t,n);let l=i[0];const o={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,c.c)(l))l=JSON.parse(l),void 0!==l.layerDefinition?(o.layerDefinition=l.layerDefinition,o.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(o.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(o.featureSet.features=l.features,o.featureSet.geometryType=l.geometryType,o.layerDefinition.geometryType=o.featureSet.geometryType,o.layerDefinition.objectIdField=l.objectIdFieldName??"",o.layerDefinition.typeIdField=l.typeIdFieldName,o.layerDefinition.globalIdField=l.globalIdFieldName,o.layerDefinition.fields=l.fields,l.spatialReference&&(o.layerDefinition.spatialReference=l.spatialReference));else{if(!(i[0]instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);{l=JSON.parse(i[0].castToText(!0));const e=S(l,"layerdefinition");if(null!==e){o.layerDefinition.geometryType=S(e,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.globalIdField=S(e,"globalidfield",""),o.layerDefinition.objectIdField=S(e,"objectidfield",""),o.layerDefinition.typeIdField=S(e,"typeidfield",""),o.layerDefinition.hasZ=!0===S(e,"hasz",!1),o.layerDefinition.hasM=!0===S(e,"hasm",!1);const t=S(e,"spatialreference",null);t&&(o.layerDefinition.spatialReference=L(t));for(const t of S(e,"fields",[])){const e={name:S(t,"name",""),alias:S(t,"alias",""),type:S(t,"type",""),nullable:S(t,"nullable",!0),editable:S(t,"editable",!0),length:S(t,"length",null),domain:x(S(t,"domain"))};o.layerDefinition.fields.push(e)}const n=S(l,"featureset",null);if(n){const e={};for(const t of o.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of S(n,"features",[])){const n={},a=S(t,"attributes",{});for(const t in a)n[e[t.toLowerCase()]]=a[t];o.featureSet.features.push({attributes:n,geometry:v(S(t,"geometry",null))})}}}else{o.layerDefinition.hasZ=!0===S(l,"hasz",!1),o.layerDefinition.hasM=!0===S(l,"hasm",!1),o.layerDefinition.geometryType=S(l,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.objectIdField=S(l,"objectidfieldname",""),o.layerDefinition.typeIdField=S(l,"typeidfieldname","");const e=S(l,"spatialreference",null);e&&(o.layerDefinition.spatialReference=L(e));let t=S(l,"fields",null);if((0,c.o)(t))for(const e of t){const t={name:S(e,"name",""),alias:S(e,"alias",""),type:S(e,"type",""),nullable:S(e,"nullable",!0),editable:S(e,"editable",!0),length:S(e,"length",null),domain:x(S(e,"domain"))};o.layerDefinition.fields.push(t)}else t=null,o.layerDefinition.fields=t;const n={};for(const e of o.layerDefinition.fields)n[e.name.toLowerCase()]=e.name;let a=S(l,"features",null);if((0,c.o)(a))for(const e of a){const t={},a=S(e,"attributes",{});for(const e in a)t[n[e.toLowerCase()]]=a[e];o.featureSet.features.push({attributes:t,geometry:v(S(e,"geometry",null))})}else a=null,o.featureSet.features=a}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e){for(const t of["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(t===e)return!0;return!1}(e.layerDefinition.geometryType)&&!1!==(0,c.o)(e.layerDefinition.fields)&&!1!==(0,c.o)(e.featureSet.features)}(o))throw new s.D$(t,s.TX.InvalidParameter,n);return o.layerDefinition.geometryType||(o.layerDefinition.geometryType="esriGeometryNull"),F.A.create(o,t.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,r)=>{if((0,c.H)(r,2,2,t,n),(0,c.o)(r[0])||(0,c.q)(r[0])){const e=[];let a=r[0];a instanceof f.A&&(a=a.toArray());let i=null;if(!(0,c.i)(r[1]))throw new s.D$(t,s.TX.InvalidParameter,n);i=r[1].createFunction(t);for(const t of a){const n=i(t);(0,A.$X)(n)?!0===await n&&e.push(t):!0===n&&e.push(t)}return e}if((0,c.u)(r[0])){const n=await r[0].load(),a=$.WhereClause.create(r[1],n.getFieldsIndex(),n.dateFieldsTimeZoneDefaultUTC),i=a.getVariables();if(i.length>0){const n=[];for(let a=0;a<i.length;a++){const r={name:i[a]};n.push(await e.evaluateIdentifier(t,r))}const s={};for(let e=0;e<i.length;e++)s[i[e]]=n[e];return a.parameters=s,new y.A({parentfeatureset:r[0],whereclause:a})}return new y.A({parentfeatureset:r[0],whereclause:a})}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.H)(i,2,2,t,n),(0,c.u)(i[0])){const e=new g.A(i[1]);return new h.A({parentfeatureset:i[0],orderbyclause:e})}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.H)(i,2,2,t,n),(0,c.u)(i[0]))return new p.A({parentfeatureset:i[0],topnum:i[1]});if((0,c.o)(i[0]))return(0,c.g)(i[1])>=i[0].length?i[0].slice(0):i[0].slice(0,(0,c.g)(i[1]));if((0,c.q)(i[0]))return(0,c.g)(i[1])>=i[0].length()?i[0].slice(0):i[0].slice(0,(0,c.g)(i[1]));throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.H)(i,1,1,t,n),(0,c.u)(i[0])){const n=await i[0].first(e.abortSignal);if(null!==n){const e=l.A.createFromGraphicLikeObject(n.geometry,n.attributes,i[0],t.timeZone);return e._underlyingGraphic=n,e}return n}return(0,c.o)(i[0])?0===i[0].length?null:i[0][0]:(0,c.q)(i[0])?0===i[0].length()?null:i[0].get(0):null}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.H)(i,1,2,t,n);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(i.length>1)if(i[1]instanceof r.A){if(i[1].hasField("minsize")&&(l.minsize=(0,c.g)(i[1].field("minsize"))),i[1].hasField("metadata")&&(l.returnMetadata=(0,c.h)(i[1].field("metadata"))),i[1].hasField("maxsize")&&(l.maxsize=(0,c.g)(i[1].field("maxsize"))),i[1].hasField("types")){const e=(0,c.a3)(i[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==i[1])throw new s.D$(t,s.TX.InvalidParameter,n);if((0,c.r)(i[0])){let e=i[0]._layer;return e instanceof b.default&&(e=(0,u.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===(0,c.u)(e)?[]:(await e.load(),e.queryAttachments(i[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===i[0])return[];throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.H)(i,2,4,t,n);const r=i[0],l=(0,c.j)(i[1]);let o=(0,c.K)(i[2],null);const f=(0,c.h)((0,c.K)(i[3],!0));if(null===o&&(o=["*"]),!1===(0,c.o)(o))throw new s.D$(t,s.TX.InvalidParameter,n);if(null===i[0])return null;if(!(0,c.r)(i[0]))throw new s.D$(t,s.TX.InvalidParameter,n);let d=r._layer;if(d instanceof b.default&&(d=(0,u.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===d)return null;if(!1===(0,c.u)(d))return null;d=await d.load();const m=d.relationshipMetaData().filter((e=>e.name===l));if(0===m.length)return null;if(void 0!==m[0].relationshipTableId&&null!==m[0].relationshipTableId&&m[0].relationshipTableId>-1)return(0,u.constructFeatureSetFromRelationship)(d,m[0],r.field(d.objectIdField),d.spatialReference,o,f,t.lrucache,t.interceptor);let y=d.serviceUrl();if(!y)return null;y="/"===y.charAt(y.length-1)?y+m[0].relatedTableId.toString():y+"/"+m[0].relatedTableId.toString();const h=await(0,u.constructFeatureSetFromUrl)(y,d.spatialReference,o,f,t.lrucache,t.interceptor);await h.load();let p=h.relationshipMetaData();if(p=p.filter((e=>e.id===m[0].id)),!1===r.hasField(m[0].keyField)||null===r.field(m[0].keyField)){const e=await d.getFeatureByObjectId(r.field(d.objectIdField),[m[0].keyField]);if(e){const t=$.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return t.parameters={id:e.attributes[m[0].keyField]},h.filter(t)}return new w.A({parentfeatureset:h})}const F=$.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return F.parameters={id:r.field(m[0].keyField)},h.filter(F)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.H)(i,2,3,t,n);const r=i[0],l=(0,c.j)((0,c.K)(i[1],"")).toLowerCase(),o=(0,c.c)(i[2])?(0,c.j)(i[2]):null;if(null===i[0])return null;if(!(0,c.r)(i[0]))throw new s.D$(t,s.TX.InvalidParameter,n);let f=r._layer;if(f instanceof b.default&&(f=(0,u.constructFeatureSet)(f,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===f)return null;if(!1===(0,c.u)(f))return null;await f.load();const d=f.serviceUrl(),y=await(0,u.constructAssociationMetaDataFeatureSetFromUrl)(d,t.spatialReference);let h=null,p=null,w=!1;if(null!==o&&""!==o&&void 0!==o){for(const e of y.terminals)e.terminalName===o&&(p=e.terminalId);null===p&&(w=!0)}const F=y.associations.getFieldsIndex(),g=F.get("TOGLOBALID").name,T=F.get("FROMGLOBALID").name,I=F.get("TOTERMINALID").name,A=F.get("FROMTERMINALID").name,C=F.get("FROMNETWORKSOURCEID").name,N=F.get("TONETWORKSOURCEID").name,S=F.get("ASSOCIATIONTYPE").name,x=F.get("ISCONTENTVISIBLE").name,L=F.get("OBJECTID").name;for(const e of f.fields)if("global-id"===e.type){h=r.field(e.name);break}let v=null,P=new m.Gr(new E.A({name:"percentalong",alias:"percentalong",type:"double"}),$.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),X=new m.Gr(new E.A({name:"side",alias:"side",type:"string"}),$.WhereClause.create("''",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));const k="globalid",R="globalId",Z={};for(const e in y.lkp)Z[e]=y.lkp[e].sourceId;const U=new m.bV(new E.A({name:"classname",alias:"classname",type:"string"}),null,Z);let W="";switch(l){case"midspan":{W=`((${g}='${h}') OR ( ${T}='${h}')) AND (${S} IN (5))`,U.codefield=$.WhereClause.create(`CASE WHEN (${g}='${h}') THEN ${C} ELSE ${N} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,D.ke)(m.a.findField(y.associations.fields,T));e.name=k,e.alias=k,v=new m.Gr(e,$.WhereClause.create(`CASE WHEN (${T}='${h}') THEN ${g} ELSE ${T} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),P=y.unVersion>=4?new m.IO(m.a.findField(y.associations.fields,F.get("PERCENTALONG").name)):new m.Gr(new E.A({name:"percentalong",alias:"percentalong",type:"double"}),$.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{W=`((${g}='${h}') OR ( ${T}='${h}')) AND (${S} IN (4,6))`,U.codefield=$.WhereClause.create(`CASE WHEN (${g}='${h}') THEN ${C} ELSE ${N} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,D.ke)(m.a.findField(y.associations.fields,T));e.name=k,e.alias=k,v=new m.Gr(e,$.WhereClause.create(`CASE WHEN (${T}='${h}') THEN ${g} ELSE ${T} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),X=new m.Gr(new E.A({name:"side",alias:"side",type:"string"}),$.WhereClause.create(`CASE WHEN (${S}=4) THEN 'from' ELSE 'to' END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let e=`${g}='@T'`,t=`${T}='@T'`;null!==p&&(e+=` AND ${I}=@A`,t+=` AND ${A}=@A`),W="(("+e+") OR ("+t+"))",W=(0,c.T)(W,"@T",h??""),e=(0,c.T)(e,"@T",h??""),null!==p&&(e=(0,c.T)(e,"@A",p.toString()),W=(0,c.T)(W,"@A",p.toString())),U.codefield=$.WhereClause.create("CASE WHEN "+e+` THEN ${C} ELSE ${N} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const n=(0,D.ke)(m.a.findField(y.associations.fields,T));n.name=k,n.alias=k,v=new m.Gr(n,$.WhereClause.create("CASE WHEN "+e+` THEN ${T} ELSE ${g} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":W=`${g}='${h}' AND ${S} = 2`,null!==p&&(W+=` AND ${I} = `+p.toString()),U.codefield=C,W="( "+W+" )",v=new m.p8(m.a.findField(y.associations.fields,T),k,k);break;case"content":W=`(${T}='${h}' AND ${S} = 2)`,null!==p&&(W+=` AND ${A} = `+p.toString()),U.codefield=N,W="( "+W+" )",v=new m.p8(m.a.findField(y.associations.fields,g),k,k);break;case"structure":W=`(${g}='${h}' AND ${S} = 3)`,null!==p&&(W+=` AND ${I} = `+p.toString()),U.codefield=C,W="( "+W+" )",v=new m.p8(m.a.findField(y.associations.fields,T),k,R);break;case"attached":W=`(${T}='${h}' AND ${S} = 3)`,null!==p&&(W+=` AND ${A} = `+p.toString()),U.codefield=N,W="( "+W+" )",v=new m.p8(m.a.findField(y.associations.fields,g),k,R);break;default:throw new s.D$(t,s.TX.InvalidParameter,n)}return w&&(W="1 <> 1"),new m.a({parentfeatureset:y.associations,adaptedFields:[new m.IO(m.a.findField(y.associations.fields,L)),new m.IO(m.a.findField(y.associations.fields,x)),v,X,U,P],extraFilter:W?$.WhereClause.create(W,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC):null})}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,l)=>{if((0,c.H)(l,3,3,t,n),!(0,c.u)(l[0]))throw new s.D$(t,s.TX.InvalidParameter,n);const o=await l[0].load(),u=[],f=[];let d=!1,m=[];if((0,c.c)(l[1]))m.push(l[1]);else if(l[1]instanceof r.A)m.push(l[1]);else if((0,c.o)(l[1]))m=l[1];else{if(!(0,c.q)(l[1]))throw new s.D$(t,s.TX.InvalidParameter,n);m=l[1].toArray()}for(const e of m)if((0,c.c)(e)){const t=$.WhereClause.create((0,c.j)(e),o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC),n=!0===(0,T.DA)(t)?(0,c.j)(e):"%%%%FIELDNAME";u.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(d=!0)}else{if(!(e instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===a&&(d=!0),!a)throw new s.D$(t,s.TX.InvalidParameter,n);u.push({name:a,expression:$.WhereClause.create(i||a,o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC)})}}if(m=[],(0,c.c)(l[2]))m.push(l[2]);else if((0,c.o)(l[2]))m=l[2];else if((0,c.q)(l[2]))m=l[2].toArray();else{if(!(l[2]instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);m.push(l[2])}for(const e of m){if(!(e instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"",i=e.hasField("statistic")?e.field("statistic"):"",r=e.hasField("expression")?e.field("expression"):"";if(!a||!i||!r)throw new s.D$(t,s.TX.InvalidParameter,n);f.push({name:a,statistic:i.toLowerCase(),expression:$.WhereClause.create(r,o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC)})}}if(d){const e={};for(const t of o.fields)e[t.name.toLowerCase()]=1;for(const t of u)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);for(const t of f)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of u)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of u)await N(n.expression,e,t);for(const n of f)await N(n.expression,e,t);return l[0].groupby(u,f)}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,l)=>{if((0,c.u)(l[0])){(0,c.H)(l,2,2,t,n);const a=await l[0].load(),i=[];let o=[];if((0,c.c)(l[1]))o.push(l[1]);else if(l[1]instanceof r.A)o.push(l[1]);else if((0,c.o)(l[1]))o=l[1];else{if(!(0,c.q)(l[1]))throw new s.D$(t,s.TX.InvalidParameter,n);o=l[1].toArray()}let u=!1;for(const e of o)if((0,c.c)(e)){const t=$.WhereClause.create((0,c.j)(e),a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC),n=!0===(0,T.DA)(t)?(0,c.j)(e):"%%%%FIELDNAME";i.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(u=!0)}else{if(!(e instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);{const r=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",l=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===r&&(u=!0),!r)throw new s.D$(t,s.TX.InvalidParameter,n);i.push({name:r,expression:$.WhereClause.create(l||r,a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC)})}}if(u){const e={};for(const t of a.fields)e[t.name.toLowerCase()]=1;for(const t of i)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of i)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of i)await N(n.expression,e,t);return l[0].groupby(i,[])}return function(e,t,n,a){if(1===a.length){if((0,c.o)(a[0]))return(0,I.t)(e,a[0],-1);if((0,c.q)(a[0]))return(0,I.t)(e,a[0].toArray(),-1)}return(0,I.t)(e,a,-1)}("distinct",0,0,l)}))}),e.functions.getfeaturesetinfo=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.H)(i,1,1,t,n),!(0,c.u)(i[0]))return null;const s=await i[0].getFeatureSetInfo();return s?r.A.convertObjectToArcadeDictionary({layerId:s.layerId,layerName:s.layerName,itemId:s.itemId,serviceLayerUrl:s.serviceLayerUrl,webMapLayerId:s.webMapLayerId??null,webMapLayerTitle:s.webMapLayerTitle??null,className:null,objectClassId:null},(0,c.N)(t),!1,!1):null}))},e.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),e.functions.filterbysubtypecode=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.H)(i,2,2,t,n),(0,c.u)(i[0])){const e=await i[0].load(),a=i[1];if(!(0,c.O)(a))throw new s.D$(t,s.TX.InvalidParameter,n);if(e.subtypeField){const t=$.WhereClause.create(`${e.subtypeField}= ${i[1]}`,e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC);return new y.A({parentfeatureset:i[0],whereclause:t})}if(null===e.typeIdField||""===e.typeIdField)throw new s.D$(t,s.TX.FeatureSetDoesNotHaveSubtypes,n);const r=$.WhereClause.create(`${e.typeIdField}= ${i[1]}`,e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC);return new y.A({parentfeatureset:i[0],whereclause:r})}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"filterbysubtypecode",min:2,max:2})}},13391:(e,t,n)=>{n.d(t,{R:()=>i});var a=n(2344);function i(e,t){return null===e?t:new a.A({url:e.field("url")})}}}]);