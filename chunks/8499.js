"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[8499],{58499:(n,e,t)=>{t.r(e),t.d(e,{registerFunctions:()=>u});var a=t(87658),r=t(80494),o=t(44217),i=t(44830);function c(n,e){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?a.A.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:i.At[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))},(0,o.N)(e)):a.A.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:i.At[n.field.type],min:n.domain.minValue,max:n.domain.maxValue},(0,o.N)(e)):null}function u(n){"async"===n.mode&&(n.functions.domain=function(e,t){return n.standardFunctionAsync(e,t,(async(n,a,i)=>{if((0,o.H)(i,2,3,e,t),(0,o.r)(i[0]))return c((0,o.X)(i[0],(0,o.j)(i[1]),void 0===i[2]?void 0:i[2]),e);if((0,o.u)(i[0]))return await i[0]._ensureLoaded(),c((0,o.a4)((0,o.j)(i[1]),i[0],null,void 0===i[2]?void 0:i[2]),e);throw new r.D$(e,r.TX.InvalidParameter,t)}))},n.functions.subtypes=function(e,t){return n.standardFunctionAsync(e,t,(async(n,i,c)=>{if((0,o.H)(c,1,1,e,t),(0,o.r)(c[0])){const n=(0,o.W)(c[0]);return n?a.A.convertObjectToArcadeDictionary(n,(0,o.N)(e)):null}if((0,o.u)(c[0])){await c[0]._ensureLoaded();const n=c[0].subtypeMetaData();return n?a.A.convertObjectToArcadeDictionary(n,(0,o.N)(e)):null}throw new r.D$(e,r.TX.InvalidParameter,t)}))},n.functions.domainname=function(e,t){return n.standardFunctionAsync(e,t,(async(n,a,i)=>{if((0,o.H)(i,2,4,e,t),(0,o.r)(i[0]))return(0,o.Y)(i[0],(0,o.j)(i[1]),i[2],void 0===i[3]?void 0:i[3]);if((0,o.u)(i[0])){await i[0]._ensureLoaded();const n=(0,o.a4)((0,o.j)(i[1]),i[0],null,void 0===i[3]?void 0:i[3]);return(0,o.a5)(n,i[2])}throw new r.D$(e,r.TX.InvalidParameter,t)}))},n.signatures.push({name:"domainname",min:2,max:4}),n.functions.domaincode=function(e,t){return n.standardFunctionAsync(e,t,(async(n,a,i)=>{if((0,o.H)(i,2,4,e,t),(0,o.r)(i[0]))return(0,o.Z)(i[0],(0,o.j)(i[1]),i[2],void 0===i[3]?void 0:i[3]);if((0,o.u)(i[0])){await i[0]._ensureLoaded();const n=(0,o.a4)((0,o.j)(i[1]),i[0],null,void 0===i[3]?void 0:i[3]);return(0,o.a6)(n,i[2])}throw new r.D$(e,r.TX.InvalidParameter,t)}))},n.signatures.push({name:"domaincode",min:2,max:4})),n.functions.text=function(e,t){return n.standardFunctionAsync(e,t,((n,a,r)=>{if((0,o.H)(r,1,2,e,t),!(0,o.u)(r[0]))return(0,o.t)(r[0],r[1]);{const e=(0,o.K)(r[1],"");if(""===e)return r[0].castToText();if("schema"===e.toLowerCase())return r[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return r[0].convertToText("featureset",n.abortSignal)}}))},n.functions.gdbversion=function(e,t){return n.standardFunctionAsync(e,t,(async(n,a,i)=>{if((0,o.H)(i,1,1,e,t),(0,o.r)(i[0]))return i[0].gdbVersion();if((0,o.u)(i[0]))return(await i[0].load()).gdbVersion;throw new r.D$(e,r.TX.InvalidParameter,t)}))},n.functions.schema=function(e,t){return n.standardFunctionAsync(e,t,(async(n,i,c)=>{if((0,o.H)(c,1,1,e,t),(0,o.u)(c[0]))return await c[0].load(),a.A.convertObjectToArcadeDictionary(c[0].schema(),(0,o.N)(e));if((0,o.r)(c[0])){const n=(0,o.V)(c[0]);return n?a.A.convertObjectToArcadeDictionary(n,(0,o.N)(e)):null}throw new r.D$(e,r.TX.InvalidParameter,t)}))}}}}]);