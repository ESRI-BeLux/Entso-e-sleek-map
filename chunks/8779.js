"use strict";(self.webpackChunkentso_e_sleek_map_tester=self.webpackChunkentso_e_sleek_map_tester||[]).push([[8779],{58779:(e,t,a)=>{a.d(t,{applyEdits:()=>v,r3:()=>w,uploadAssets:()=>O,zp:()=>F});var r=a(50031),s=a(8559),n=a(86173),i=a(32639),o=a(29287),d=a(99601),l=a(31145),u=a(5588),p=a(10119),c=a(8298),h=a(90142),y=a(28449),f=a(73110),m=a(2594);function g(e){return null!=e?.applyEdits}function b(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function w(e){return e.every(b)}function A(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(A)}async function v(e,t,a,r={}){let l;const p="gdbVersion"in e?e.gdbVersion:null,c=r.gdbVersion??p;if((0,h.Mk)(e)&&e.url)l=(0,h.Zk)(e.url,e.layerId,c,"original-and-current-features"===r.returnServiceEditsOption);else{l=(0,d.Tw)(),l.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:l.promise};e.emit("apply-edits",t)}try{const{results:d,edits:p}=await async function(e,t,a,r){if(await e.load(),!g(t))throw new n.A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,m.tk)(e))throw new n.A(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:d}=await async function(e,t,a){const r=(0,m.BR)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(function(e,t,a,r,s,i){if(!e||!r&&!s)throw new n.A(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&a?.globalIdUsed)throw new n.A(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new n.A(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!a?.globalIdUsed&&s)throw new n.A(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,r,a,!!i,!!d,`${e.type}-layer`),!r.data.isVersioned&&a?.gdbVersion)throw new n.A(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&a?.rollbackOnFailureEnabled)throw new n.A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const p={...a};if(null!=p.rollbackOnFailureEnabled||r.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),p.rollbackOnFailureEnabled||"original-and-current-features"!==p.returnServiceEditsOption||(!1===p.rollbackOnFailureEnabled&&o.A.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),p.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new n.A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new n.A(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c=function(e,t,a){const r=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&s.A.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(r.addFeatures?.length&&!t.operations.supportsAdd)throw new n.A(`${a}:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures?.length&&!t.operations.supportsUpdate)throw new n.A(`${a}:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures?.length&&!t.operations.supportsDelete)throw new n.A(`${a}:unsupported-operation`,"Layer does not support deleting features.");return r.addFeatures=r.addFeatures.map(R),r.updateFeatures=r.updateFeatures.map(R),r.addAssetFeatures=[],r}(t,r,`${e.type}-layer`),h=a?.globalIdUsed||l,y=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new n.A(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");c.addFeatures.forEach((e=>function(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,u.yS)())}(e,t)))}return c.addFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),$(e,t)}(t,e,h,y))),c.updateFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),$(e,t);const s=(0,m.BR)(t);if("geometry"in e&&null!=e.geometry&&!s?.editing.supportsGeometryUpdate)throw new n.A(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,h,y))),c.deleteFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r)}(t,e,h,y))),c.addAttachments.forEach((t=>E(t,e))),c.updateAttachments.forEach((t=>E(t,e))),l&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:a}=t,r=(0,f.R_)("model/gltf-binary",a.supportedFormats)??(0,f.E1)("glb",a.supportedFormats);if(!r||!a.editFormats.includes(r))throw new n.A(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const t of e.addFeatures??[])k(t)&&s.push(t);for(const t of e.updateFeatures??[])k(t)&&s.push(t)}(c,e),{edits:await S(c),options:p}}(e,a,r);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,d)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,r),c=e=>e.filter((e=>!e.error)).map(i.o8),h={edits:p,addedFeatures:c(d.addFeatureResults),updatedFeatures:c(d.updateFeatureResults),deletedFeatures:c(d.deleteFeatureResults),addedAttachments:c(d.addAttachmentResults),updatedAttachments:c(d.updateAttachmentResults),deletedAttachments:c(d.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:d.editMoment?new Date(d.editMoment):null,globalIdToObjectId:r.globalIdToObjectId};return d.editedFeatureResults?.length&&(h.editedFeatures=d.editedFeatureResults),l.resolve(h),d}catch(e){throw l.reject(e),e}}function I(e,t,a,r){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n.A(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new n.A(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const a of r){const r=e.attributes[a.name];if(void 0!==r&&!(0,y.OG)(a,r))throw new n.A(`${t.type}-layer:invalid-parameter`,`Big-integer field '${a.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new n.A(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new n.A(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function $(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:a}=e,{spatialReference:r,vertexSpace:s}=a,i=t.spatialReference,o="local"===s.type,d=(0,c.EA)(i),l=(0,c.aI)(i,r),u=l||(0,c.oT)(i)&&((0,c.oT)(r)||(0,c.K8)(r));if(!(o&&d&&u||!o&&!d&&l))throw new n.A(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${s.type} vertex space and a spatial reference wkid:${r.wkid} to a layer with a spatial reference wkid:${i.wkid} is not supported.`)}}function E(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new n.A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new n.A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new n.A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new n.A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new n.A(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&r.uploadId)throw new n.A(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=(0,l.r$)(r.data);if(e&&!e.isBase64)throw new n.A(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function S(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),s=await(0,p.el)(r),n=t.length,i=a.length;return s.slice(0,n).forEach(((e,a)=>t[a].geometry=e)),s.slice(n,n+i).forEach(((e,t)=>a[t].geometry=e)),e}function R(e){const t=new r.A;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function k(e){return"mesh"===e?.geometry?.type}function O(e,t,a,r){if(!g(t))throw new n.A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n.A(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}}}]);