"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[1371,1766],{61371:(e,t,r)=>{r.r(t),r.d(t,{createArcadeExecutor:()=>A,createArcadeProfile:()=>U});var s=r(50031),a=r(40962),n=r(67127),i=r(86173),o=r(32639),c=r(98992),u=r(48433),l=r(61211),m=r(2344),d=r(45674),h=r(79377);let f=null;function y(e,t,r,s={}){const a=t.elementType,i="value",o="array"===a.type?[{name:i,type:a.type,elementType:a.elementType}]:"dictionary"===a.type?[{name:i,type:a.type,properties:a.properties}]:[{name:i,type:a.type}];return new n.A(e.map((e=>{const t={};return g(t,o,{[i]:e},r,s),t[i]})))}function p(e,t,r={}){const s=e instanceof d.A?new l.default({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return t.constructFeatureSet(s,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function T(e,t,r={}){const{spatialReference:s,interceptor:a,lruCache:n}=r;return"string"==typeof e?t.createFeatureSetCollectionFromService(e,s,n,a):t.createFeatureSetCollectionFromMap(e,s,n,a)}function S(e,t,r,s={}){const a={};return g(a,t.properties,e,r,s),new f.Dictionary(a)}function g(e,t,r,s,n={}){const i={};for(const e of Object.keys(r))i[e.toLowerCase()]=r[e];for(const r of t){const t=r.name.toLowerCase();if(n.variablesPreProcessed)e[t]=i[t];else switch(r.type){case"array":{const a=i[t];e[t]=null==a?null:y(a,r,s,n);break}case"feature":{const r=i[t];e[t]=null==r?null:f.Feature.createFromGraphic(r,n?.timeZone);break}case"featureSet":{const r=i[t];e[t]=null==r?null:s?p(r,s,n):null;break}case"featureSetCollection":{const r=i[t];e[t]=null==r?null:s?T(r,s,n):null;break}case"dictionary":{const a=i[t];e[t]=null==a?null:S(a,r,s,n);break}case"date":{const r=i[t];e[t]=r?r instanceof a.lY?r:n?.timeZone?a.lY.dateJSAndZoneToArcadeDate(r,n?.timeZone):a.lY.dateJSToArcadeDate(r):null;break}case"dateOnly":{const r=i[t];e[t]=r?r instanceof c.n?r:c.n.fromReader(r):null;break}case"time":{const r=i[t];e[t]=r?r instanceof u.k?r:u.k.fromReader(r):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[t]=i[t]}}}function w(e,t){for(const r of e)t.push(r),"dictionary"===r.type&&w(r.properties,t);return t}function D(e,t,r,s,a){const{spatialReference:n,interceptor:i,lruCache:o,console:c,abortSignal:u,timeZone:l,services:d={portal:m.A.getDefault()}}=r,h={vars:{},spatialReference:n,interceptor:i,timeZone:l,lrucache:o,useAsync:a,services:d,console:c,abortSignal:u};return t?(g(h.vars,e.variables,t,s,r),h):h}function C(e,t){switch(t.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const t=(e.type,e),r="geometry"in t?t.geometry():null,a="readAttributes"in t?t.readAttributes():t.attributes;return new s.A({geometry:r,attributes:a})}case"dictionary":{const r=e,s=r.attributes,a={};for(const e of Object.keys(s))a[e]=C(r.field(e),t);return a}case"array":return("toArray"in e?e.toArray():e).map((e=>C(e,t)))}return e}const k={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},_={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},b=new Map([["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",k],["popup-element",k],["feature-reduction-popup",_],["feature-reduction-popup-element",_],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function U(e){const t=b.get(e);if(!t){const t=Array.from(b.keys()).map((e=>`'${e}'`)).join(", ");throw new i.A("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${t}`)}return(0,o.o8)(t)}async function A(e,t,r={}){f||(f=await(0,h.lw)());const{arcade:s,arcadeUtils:a}=f,{loadScriptDependencies:n,referencesMember:o,scriptIsAsync:c}=s,u=w(t.variables,[]),l=u.filter((e=>"featureSet"===e.type||"featureSetCollection"===e.type)).map((e=>e.name.toLowerCase())),m=s.parseScript(e,l);if(!m)throw new i.A("arcade:invalid-script","Unable to create SyntaxTree");const d=a.extractFieldNames(m),y=s.scriptTouchesGeometry(m),p=u.map((e=>e.name.toLowerCase())).filter((e=>o(m,e))),T=c(m,l);await n(m,T,l);const S={vars:{},spatialReference:null,useAsync:T};for(const e of p)S.vars[e]="any";const{lruCache:g}=r,k=s.compileScript(m,S),_=s.featureSetUtils(),{services:b}=r;return{execute:(e,r={})=>{if(T)throw new i.A("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const s=k(D(t,e,{lruCache:g,...r},_,T));return r.rawOutput?s:C(s,a)},executeAsync:async(e,r={})=>{const s=await k(D(t,e,{lruCache:g,services:b,...r},_,T));return r.rawOutput?s:C(s,a)},isAsync:T,variablesUsed:p,fieldsUsed:d,geometryUsed:y,syntaxTree:m}}},40962:(e,t,r)=>{r.d(t,{lY:()=>m,mT:()=>d});var s,a=r(51982),n=r(43969),i=r(15279);(s||(s={})).TimeZoneNotRecognized="TimeZoneNotRecognized";const o={[s.TimeZoneNotRecognized]:"Timezone identifier has not been recognized."};class c extends Error{constructor(e,t){super((0,a.HC)(o[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,c)}}function u(e,t,r){return e<t?e-t:e>r?e-r:0}function l(e,t,r){return e<t?t:e>r?r:e}class m{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,r=1,s=0,a=0,n=0,o=0,c){if(isNaN(e)||isNaN(t)||isNaN(r)||isNaN(s)||isNaN(a)||isNaN(n)||isNaN(o))return null;const h=i.c9.local(e,t).daysInMonth;let f=i.c9.fromObject({day:l(r,1,h),year:e,month:l(t,1,12),hour:l(s,0,23),minute:l(a,0,59),second:l(n,0,59),millisecond:l(o,0,999)},{zone:d(c)});return f=f.plus({months:u(t,1,12),days:u(r,1,h),hours:u(s,0,23),minutes:u(a,0,59),seconds:u(n,0,59),milliseconds:u(o,0,999)}),new m(f)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,t){const r=d(t);return e.isUnknownTimeZone||r===n.GB.instance?m.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,r):new m(e._date.setZone(r))}static dateJSToArcadeDate(e){return new m(i.c9.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){const r=d(t);return new m(i.c9.fromJSDate(e,{zone:r}))}static unknownEpochToArcadeDate(e){return new m(i.c9.fromMillis(e,{zone:n.GB.instance}))}static unknownDateJSToArcadeDate(e){return new m(i.c9.fromMillis(e.getTime(),{zone:n.GB.instance}))}static epochToArcadeDate(e,t="system"){const r=d(t);return new m(i.c9.fromMillis(e,{zone:r}))}static dateTimeToArcadeDate(e){return new m(e)}clone(){return new m(this._date)}changeTimeZone(e){const t=d(e);return m.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const r=d(t);return e.zone===n.GB.instance||r===n.GB.instance?m.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,r):new m(e.setZone(r))}static nowToArcadeDate(e){const t=d(e);return new m(i.c9.fromJSDate(new Date,{zone:t}))}static nowUTCToArcadeDate(){return new m(i.c9.utc())}get isSystem(){return"system"===this.timeZone||this.timeZone===m.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===n.GB.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if("system"===this._date.zone.type)return"system";const e=this.zone;return"fixed"===e.type?0===e.fixed?"UTC":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new m(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISODate(){return this._date.toISODate()}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toISOTime(e,t){return this._date.toISOTime({suppressMilliseconds:e,includeOffset:t&&!this.isUnknownTimeZone})}toFormat(e,t){return this.isUnknownTimeZone&&(e=e.replaceAll("Z","")),this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLValue(){return this._date.toFormat("yyyy-LL-dd HH:mm:ss")}toSQLWithKeyword(){return`timestamp '${this.toSQLValue()}'`}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new m(this._date.toUTC())}toLocal(){return new m(this._date.toLocal())}toString(){return this.toISOString(!0)}static fromReaderAsTimeStampOffset(e){if(!e)return null;const t=i.c9.fromISO(e,{setZone:!0});return new m(t)}}function d(e,t=!0){if(e instanceof i.bo)return e;if("system"===e.toLowerCase())return"system";if("utc"===e.toLowerCase())return"UTC";if("unknown"===e.toLowerCase())return n.GB.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=i.mQ.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e);if(t)return t}const r=i.oh.create(e);if(!r.isValid){if(t)throw new c(s.TimeZoneNotRecognized);return null}return r}},67127:(e,t,r)=>{r.d(t,{A:()=>s});class s{constructor(e=[]){this._elements=e}length(){return this._elements.length}get(e){return this._elements[e]}toArray(){const e=[];for(let t=0;t<this.length();t++)e.push(this.get(t));return e}}},94459:(e,t,r)=>{r.d(t,{Fq:()=>c,SQ:()=>i,Yc:()=>n,Yq:()=>o,uf:()=>a});var s=r(79238);function a(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109439;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function n(e){if(null==e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new s.A({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function i(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9093;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function o(e){if(null==e)return null;const t=e.clone();return void 0!==e.cache._geVersion&&(t.cache._geVersion=e.cache._geVersion),t}function c(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},98992:(e,t,r)=>{r.d(t,{n:()=>o});var s=r(40962),a=r(77521),n=r(15279);function i(e){e=e.replaceAll(/LTS|LT|LL?L?L?|l{1,4}/g,"[$&]");let t="";const r=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const s of e.match(r)||[])switch(s){case"D":t+="d";break;case"DD":t+="dd";break;case"DDD":t+="o";break;case"d":t+="c";break;case"ddd":t+="ccc";break;case"dddd":t+="cccc";break;case"M":t+="L";break;case"MM":t+="LL";break;case"MMM":t+="LLL";break;case"MMMM":t+="LLLL";break;case"YY":t+="yy";break;case"Y":case"YYYY":t+="yyyy";break;case"Q":t+="q";break;case"X":case"x":t+=s;break;default:s.length>=2&&"["===s.slice(0,1)&&"]"===s.slice(-1)?t+=`'${s.slice(1,-1)}'`:t+=`'${s}'`}return t}class o{constructor(e,t,r){this._year=e,this._month=t,this._day=r,this.declaredRootClass="esri.core.sql.dateonly"}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(e){return e instanceof o&&e.day===this.day&&e.month===this.month&&e.year===this.year}clone(){return new o(this._year,this._month,this._day)}toDateTime(e){return n.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,s.mT)(e)})}toDateTimeLuxon(e){return n.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,s.mT)(e)})}toString(){return`${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(e=null,t=!0){if(null===e||""===e)return this.toString();if(t&&(e=i(e)),!e)return"";const r=this.toDateTime("unknown");return s.lY.dateTimeToArcadeDate(r).toFormat(e,{locale:(0,a.JK)(),numberingSystem:"latn"})}toArcadeDate(){const e=this.toDateTime("unknown");return s.lY.dateTimeToArcadeDate(e)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd",!1)}toSQLValue(){return this.toFormat("yyyy-LL-dd",!1)}toSQLWithKeyword(){return"date '"+this.toFormat("yyyy-LL-dd",!1)+"'"}plus(e,t){return o.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}toUTCDateTime(){return n.c9.utc(this.year,this.month,this.day,0,0,0,0)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}static fromMilliseconds(e){const t=n.c9.fromMillis(e,{zone:n.mQ.utcInstance});return t.isValid?o.fromParts(t.year,t.month,t.day):null}static fromSeconds(e){const t=n.c9.fromSeconds(e,{zone:n.mQ.utcInstance});return t.isValid?o.fromParts(t.year,t.month,t.day):null}static fromReader(e){if(!e)return null;const t=e.split("-");return 3!==t.length?null:new o(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10))}static fromParts(e,t,r){const s=new o(e,t,r);return!1===s.isValid?null:s}static fromDateJS(e){return o.fromParts(e.getFullYear(),e.getMonth()+1,e.getDay())}static fromDateTime(e){return o.fromParts(e.year,e.month,e.day)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(""===e)return null;if(null===e)return null;const r=[];if(t)(t=i(t))&&r.push(t);else if(null===t||""===t){const t=n.c9.fromISO(e,{setZone:!0});return t.isValid?o.fromParts(t.year,t.month,t.day):null}for(const s of r){const r=n.c9.fromFormat(e,t??s);if(r.isValid)return new o(r.year,r.month,r.day)}return null}static fromNow(e="system"){const t=n.c9.fromJSDate(new Date).setZone((0,s.mT)(e));return new o(t.year,t.month,t.day)}}},48433:(e,t,r)=>{r.d(t,{k:()=>o});var s=r(94459),a=r(77521),n=r(15279);function i(e){if(!e)return"";const t=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let r="";for(const s of e.match(t)||[])switch(s){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":r+=s;break;case"A":case"a":r+="a";break;default:r+=`'${s}'`}return r}class o{constructor(e,t,r,s){this._hour=e,this._minute=t,this._second=r,this._millisecond=s,this.declaredRootClass="esri.core.sql.timeonly"}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(e){return e instanceof o&&e.hour===this.hour&&e.minute===this.minute&&e.second===this.second&&e.millisecond===this.millisecond}clone(){return new o(this.hour,this.minute,this.second,this.millisecond)}isValid(){return(0,s.Fq)(this.hour)&&(0,s.Fq)(this.minute)&&(0,s.Fq)(this.second)&&(0,s.Fq)(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return`time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(e=null){return null===e||""===e?this.toString():(e=i(e))?n.c9.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(e,{locale:(0,a.JK)(),numberingSystem:"latn"}):""}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(e,t,r,s){const a=new o(e,t,r,s);return a.isValid()?a:null}static fromReader(e){if(!e)return null;const t=e.split(":");return 3!==t.length?null:new o(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),0)}static fromMilliseconds(e){if(e>864e5||e<0)return null;const t=Math.floor(e/1e3%60),r=Math.floor(e/6e4%60),s=Math.floor(e/36e5%24),a=Math.floor(e%1e3);return new o(s,r,t,a)}static fromDateJS(e){return new o(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}static fromDateTime(e){return new o(e.hour,e.minute,e.second,e.millisecond)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(""===e)return null;if(null===e)return null;const r=[];t?(t=i(t))&&r.push(t):null!==t&&""!==t||(r.push("HH:mm:ss"),r.push("HH:mm:ss.SSS"),r.push("hh:mm:ss a"),r.push("hh:mm:ss.SSS a"),r.push("HH:mm"),r.push("hh:mm a"),r.push("H:mm"),r.push("h:mm a"),r.push("H:mm:ss"),r.push("h:mm:ss a"),r.push("H:mm:ss.SSS"),r.push("h:mm:ss.SSS a"));for(const t of r){const r=n.c9.fromFormat(e,t);if(r.isValid)return new o(r.hour,r.minute,r.second,r.millisecond)}return null}plus(e,t){switch(e){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return o.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}return null}toUTCDateTime(){return n.c9.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}}}}]);