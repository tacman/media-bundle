"use strict";(self.webpackChunkranky_media_bundle=self.webpackChunkranky_media_bundle||[]).push([[922],{1446:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var l=a(7294),r=a(4044),i=a(8062),n=a(2425);const m={application:e=>{let{media:t}=e;return l.createElement("object",{type:t.file.mime,data:t.file.url},l.createElement("img",{"aria-hidden":"true",src:(0,n.Z)("images/placeholder/application.jpg"),alt:t.description.alt,title:`${t.description.title} (${t.file.mime})`}))},audio:e=>{let{media:t}=e;return l.createElement("audio",{controls:!0,src:t.file.url,title:`${t.description.title} (${t.file.mime})`},l.createElement("track",{kind:"captions"}),"Your browser does not support the ",l.createElement("code",null,"audio")," element.")},image:e=>{let{media:t}=e,a=`${t.file.url} ${t.dimension.width}w,`;return t.thumbnails.forEach((e=>{a+=` ${e.url} ${e.dimension.width}w,`})),l.createElement("a",{target:"_blank",href:t.file.url,"aria-label":`${t.description.title} (opens in a new window)`,rel:"noreferrer"},l.createElement("img",{src:t.file.url,width:t.dimension.width??"auto",height:t.dimension.height??"auto",srcSet:t.dimension.width?(r=a,i=",",r.slice(-1)===i?r.slice(0,-1):r):"",alt:t.description.alt,title:`${t.description.title}`}));var r,i},"image_svg+xml":e=>{let{media:t}=e;return l.createElement("a",{target:"_blank",href:t.file.url,"aria-label":`${t.description.title} (opens in a new window)`,rel:"noreferrer"},l.createElement("img",{className:"img-svg-preview",src:t.file.url,alt:t.description.alt,title:`${t.description.title}`}))},"image_vnd.adobe.photoshop":e=>{let{media:t}=e;return l.createElement("a",{target:"_blank",href:t.file.url,"aria-label":`${t.description.title} (opens in a new window)`,rel:"noreferrer"},l.createElement("img",{src:(0,n.Z)("images/placeholder/image-psd.jpg"),alt:t.description.alt,title:`${t.description.title}`}))},image_tiff:e=>{let{media:t}=e;return l.createElement("a",{target:"_blank",href:t.file.url,"aria-label":`${t.description.title} (opens in a new window)`,rel:"noreferrer"},l.createElement("img",{src:(0,n.Z)("images/placeholder/image-tiff.jpg"),alt:t.description.alt,title:`${t.description.title}`}))},video:e=>{let{media:t}=e;return l.createElement("video",{controls:!0,title:`${t.description.title} (${t.file.mime})`},l.createElement("source",{src:t.file.url,type:t.file.mime}),l.createElement("track",{kind:"captions"}),"Sorry, your browser doesn't support embedded videos.")},text:e=>{let{media:t}=e;return l.createElement("object",{type:t.file.mime,data:t.file.url},l.createElement("img",{"aria-hidden":"true",src:(0,n.Z)("images/placeholder/text.jpg"),alt:t.description.alt,title:`${t.description.title} (${t.file.mime})`}))}};var d=e=>{let{media:t}=e;const a=`${t.file.mimeType}_${t.file.mimeSubType}`,r=t.file.mimeType,i=m[a]||m[r]||m.application;return l.createElement(i,{media:t})},o=a(5633),s=a(4973),c=a(8307),u=a(35),p=a(3665);var f=e=>{var t;let{onDelete:a}=e;const n=(0,r.Z)(),[m,f]=(0,p.KO)(c.W5),E=(0,u.QQ)(),[_,g]=(0,l.useState)(!1),[b,h]=(0,l.useState)({id:m.id,name:m.file.basename,alt:m.description.alt,title:m.description.title}),y=e=>{const t=e.target,a={[t.name]:t.value};h({...b,...a})};return l.createElement("div",{className:"ranky-media-modal-file__dialog__content__show"},l.createElement("div",{className:"ranky-media-modal-file__dialog__content__show__preview"},l.createElement(d,{media:m}),l.createElement("button",{type:"button",className:"ranky-media-modal-file__btn-media-danger js-delete-media","data-id":m.id,onClick:e=>a(e)},"🗑️ ",l.createElement(i.Z,{message:"delete"}))),l.createElement("div",{className:"ranky-media-modal-file__dialog__content__show__info"},l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{scope:"row","aria-label":"form_name"},l.createElement(i.Z,{message:"form_name"})),l.createElement("td",null,m.file.name)),l.createElement("tr",null,l.createElement("th",{scope:"row"},"URL"),l.createElement("td",null,l.createElement("a",{target:"_blank",href:m.file.url,rel:"noreferrer"},m.file.url))),l.createElement("tr",null,l.createElement("th",{scope:"row","aria-label":"file_type"},l.createElement(i.Z,{message:"file_type"})),l.createElement("td",null,m.file.mime)),null!=m&&null!==(t=m.dimension)&&void 0!==t&&t.label?l.createElement("tr",null,l.createElement("th",{scope:"row","aria-label":"dimensions"},l.createElement(i.Z,{message:"dimensions"})),l.createElement("td",null,m.dimension.label)):null,l.createElement("tr",null,l.createElement("th",{scope:"row","aria-label":"size"},l.createElement(i.Z,{message:"size"})),l.createElement("td",null,m.file.humanSize)),l.createElement("tr",null,l.createElement("th",{scope:"row","aria-label":"created_at"},l.createElement(i.Z,{message:"created_at"})),l.createElement("td",null,m.createdAt," ",l.createElement(i.Z,{message:"by"})," ",m.createdBy)),l.createElement("tr",null,l.createElement("th",{scope:"row","aria-label":"updated_at"},l.createElement(i.Z,{message:"updated_at"})),l.createElement("td",null,m.updatedAt," ",l.createElement(i.Z,{message:"by"})," ",m.updatedBy)),l.createElement("tr",null,l.createElement("th",{scope:"row"},l.createElement(i.Z,{message:"breakpoints"})),l.createElement("td",null,m.thumbnails.length>0?l.createElement("ul",null,m.thumbnails.map((e=>l.createElement("li",{key:e.name+e.breakpoint},l.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},l.createElement("b",null,e.breakpoint,":")," ",e.dimension.label," ",l.createElement("b",null,"size:")," ",e.humanSize))))):"-")))),l.createElement("form",{name:"media",id:"ranky-media-file__form",method:"POST",autoComplete:"off",encType:"multipart/form-data",onSubmit:async e=>{e.preventDefault(),g(!0);const{id:t}=m,{data:a,error:l}=await o.Z.create(b).put(t);return l?(console.log(l),g(!1),(0,s.sD)(l)):(f(a),h({...b,name:a.file.basename,alt:a.description.alt,title:a.description.title}),E.update(a),g(!1),(0,s.Cq)())}},l.createElement("div",{className:"input-group"},l.createElement("label",{htmlFor:"name"},l.createElement(i.Z,{message:"form_name"})),l.createElement("input",{type:"text",name:"name",id:"ranky-media-file__form__name",value:b.name,onChange:y,required:!0,autoComplete:"off"}),l.createElement("span",{className:"input-group-text"},".",m.file.extension)),l.createElement("label",{htmlFor:"alt"},l.createElement(i.Z,{message:"form_alt"})),l.createElement("input",{type:"text",name:"alt",id:"ranky-media-file__form__alt",value:b.alt,onChange:y,required:!0}),l.createElement("label",{htmlFor:"title"},l.createElement(i.Z,{message:"form_title"})),l.createElement("input",{type:"text",name:"title",id:"ranky-media-file__form__title",value:b.title,onChange:y,required:!0}),l.createElement("input",{type:"hidden",name:"id",id:"ranky-media-file__form__id",defaultValue:b.id}),l.createElement("input",{type:"submit",disabled:_,value:n.trans("form_save")}))))},E=a(8767);var _=e=>{let{onClose:t}=e;const[a,r]=(0,p.KO)(c.W5),n=(0,E.useQueryClient)(),m=(0,u.QQ)();return l.createElement("div",{className:"wrapper-ranky-media-modal-file",key:`ranky-media-modal-file-${a.id}`},l.createElement("div",{className:"ranky-media-modal-file ranky-media-modal-file--show",tabIndex:-1,"aria-labelledby":"ranky-media-modal-file","aria-modal":"true",role:"dialog"},l.createElement("div",{className:"ranky-media-modal-file__dialog",role:"document"},l.createElement("div",{className:"ranky-media-modal-file__dialog__header ranky-media-modal-file__dialog--bg-primary-dark"},l.createElement("h3",{className:"ranky-media-modal-file__dialog__header__title"},l.createElement(i.Z,{message:"modal_title",data:{file_name:a.file.name,id:a.id}})),l.createElement("div",{className:"ranky-media-modal-file__dialog__header__options"},l.createElement("ul",null,l.createElement("li",null,l.createElement("button",{onClick:function(e){let{currentTarget:t}=e;const l=m.get(),i=m.findIndex(a.id),n=l.pages[i.page].result[i.index-1],d=l.pages.length,o=i.page>0&&i.page<d;if(n)return r(n),t.removeAttribute("disabled");if(o){var s;const e=l.pages[i.page-1].result.length-1,a=(null===(s=l.pages[i.page-1])||void 0===s?void 0:s.result[e])||null;if(a)return r(a),t.removeAttribute("disabled")}return t.setAttribute("disabled","")},type:"button",className:"ranky-media-modal-file__btn-media-prev js-prev-modal","aria-label":"Prev"},l.createElement("span",{"aria-hidden":"true"},"←"))),l.createElement("li",null,l.createElement("button",{onClick:function(e){var t;let{currentTarget:l}=e;const i=m.get(),n=m.findIndex(a.id),d=i.pages.length>n.page,o=(null===(t=i.pages[n.page])||void 0===t?void 0:t.result[n.index+1])||null;if(o)return r(o),l.removeAttribute("disabled");if(d){var s;const e=(null===(s=i.pages[n.page+1])||void 0===s?void 0:s.result[0])||null;if(e)return r(e),l.removeAttribute("disabled")}return l.setAttribute("disabled","")},type:"button",className:"ranky-media-modal-file__btn-media-next js-next-modal","aria-label":"Next"},l.createElement("span",{"aria-hidden":"true"},"→"))),l.createElement("li",null,l.createElement("button",{onClick:t,type:"button",className:"ranky-media-modal-file__btn-media-close js-close-modal","aria-label":"Close"},l.createElement("span",{"aria-hidden":"true"},"×")))))),l.createElement("div",{className:"ranky-media-modal-file__dialog__content"},l.createElement(f,{onDelete:async e=>{e.preventDefault();const a=e.currentTarget;return(0,s.vl)((async()=>{const{id:e}=a.dataset,{data:l,error:r}=await o.Z.create().delete(e);r?await(0,s.sD)(r):(await n.invalidateQueries("filters"),await n.invalidateQueries(["media","list"]),await(0,s.Cq)(null==l?void 0:l.message),t())}))}})))),l.createElement("div",{className:"ranky-media-modal-file-backdrop"}))}}}]);