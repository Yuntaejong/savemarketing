"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[497],{72:(e,a,s)=>{s.d(a,{A:()=>i});var r=s(139),n=s.n(r),t=s(43),c=s(852),o=s(579);const l=t.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:t="div",...l}=e;const i=(0,c.oU)(s,"row"),m=(0,c.gy)(),d=(0,c.Jm)(),p=`${i}-cols`,h=[];return m.forEach((e=>{const a=l[e];let s;delete l[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const r=e!==d?`-${e}`:"";null!=s&&h.push(`${p}${r}-${s}`)})),(0,o.jsx)(t,{ref:a,...l,className:n()(r,i,...h)})}));l.displayName="Row";const i=l},602:(e,a,s)=>{s.d(a,{A:()=>i});var r=s(139),n=s.n(r),t=s(43),c=s(852),o=s(579);const l=t.forwardRef(((e,a)=>{const[{className:s,...r},{as:t="div",bsPrefix:l,spans:i}]=function(e){let{as:a,bsPrefix:s,className:r,...t}=e;s=(0,c.oU)(s,"col");const o=(0,c.gy)(),l=(0,c.Jm)(),i=[],m=[];return o.forEach((e=>{const a=t[e];let r,n,c;delete t[e],"object"===typeof a&&null!=a?({span:r,offset:n,order:c}=a):r=a;const o=e!==l?`-${e}`:"";r&&i.push(!0===r?`${s}${o}`:`${s}${o}-${r}`),null!=c&&m.push(`order${o}-${c}`),null!=n&&m.push(`offset${o}-${n}`)})),[{...t,className:n()(r,...i,...m)},{as:a,bsPrefix:s,spans:i}]}(e);return(0,o.jsx)(t,{...r,ref:a,className:n()(s,!i.length&&l)})}));l.displayName="Col";const i=l},867:(e,a,s)=>{s.d(a,{A:()=>t});s(43);const r={footer:"Footer_footer__YZ1Cd",right:"Footer_right__c0QTx",left:"Footer_left__L32vA"};var n=s(579);const t=function(){return(0,n.jsxs)("div",{className:r.footer,children:[(0,n.jsxs)("div",{className:r.right,children:[(0,n.jsx)("a",{href:"#!",children:(0,n.jsx)("img",{src:"../footer/footer_logo.png",alt:"savemarketing"})}),(0,n.jsx)("p",{className:r.copyright,children:"\xa9 2025. savemarketing Co. All Rights Reserved."})]}),(0,n.jsxs)("div",{className:r.left,children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"COMPANY : \uc8fc\uc2dd\ud68c\uc0ac \uc138\uc774\ube0c\ub9c8\ucf00\ud305"}),(0,n.jsx)("span",{children:"BUSINESS AREA : \ud37c\ud3ec\uba3c\uc2a4 \uad11\uace0 \ub300\ud589\uc0ac"})]}),(0,n.jsx)("address",{children:"ADDRESS : \uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c \ud14c\ud5e4\ub780\ub85c 4\uae38 46, 104\ub3d9 706\ud638"}),(0,n.jsxs)("p",{children:["E-MAIL : ",(0,n.jsx)("a",{href:"meilto:'wanso578@naver.com'",children:"wanso578@naver.com"})]}),(0,n.jsx)("p",{children:(0,n.jsx)("span",{children:"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 110-88-01939"})})]})]})}},878:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});var r=s(43);const n={wrap:"Contact_wrap__orX8K",content:"Contact_content__7wpIh"},t={form:"InquiryForm_form__tRNzc",formGroup:"InquiryForm_formGroup__rja0F",required:"InquiryForm_required__v8Uly",checkboxGroup:"InquiryForm_checkboxGroup__dIYg-",privacyBox:"InquiryForm_privacyBox__I+RZb",submitButton:"InquiryForm_submitButton__ZABgE",message:"InquiryForm_message__nPYYG",success:"InquiryForm_success__gJ91B",error:"InquiryForm_error__GckHK"};var c=s(519),o=(s(421),s(579));const l=function(){const[e,a]=(0,r.useState)({company:"",manager:"",contact:"",email:"",homepage:"",message:"",agree:!1}),[s,n]=(0,r.useState)(!1),[l,i]=(0,r.useState)(null),m=s=>{const{name:r,value:n,type:t,checked:c}=s.target;a({...e,[r]:"checkbox"===t?c:n})};return(0,o.jsxs)(c.A,{children:[l&&(0,o.jsx)("div",{className:`${t.message} ${t[l.type]}`,children:l.text}),(0,o.jsxs)("form",{onSubmit:async s=>{if(s.preventDefault(),e.agree){n(!0),i(null);try{const r=s.target.action,n=new FormData;n.append("company",e.company),n.append("manager",e.manager),n.append("contact",e.contact),n.append("email",e.email||"(\ubbf8\uc785\ub825)"),n.append("homepage",e.homepage||"(\ubbf8\uc785\ub825)"),n.append("message",e.message),n.append("_subject",`[\ubb38\uc758] ${e.company} - ${e.manager}\ub2d8\uc758 \ubb38\uc758`);if(!(await fetch(r,{method:"POST",body:n,headers:{Accept:"application/json"}})).ok)throw new Error("\uc11c\ubc84 \uc751\ub2f5\uc774 \uc2e4\ud328 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud588\uc2b5\ub2c8\ub2e4.");i({type:"success",text:"\ubb38\uc758\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ube60\ub978 \uc2dc\uc77c \ub0b4\uc5d0 \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."}),a({company:"",manager:"",contact:"",email:"",homepage:"",message:"",agree:!1})}catch(r){console.error("\ud3fc \uc81c\ucd9c \uc624\ub958:",r),i({type:"error",text:"\ubb38\uc758 \uc811\uc218 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."})}finally{n(!1)}}else alert("\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud574\uc8fc\uc138\uc694.")},className:t.form,action:"https://formsubmit.co/37d0d8ceb5cc26faf66c2f1df305ab8b",method:"POST",children:[(0,o.jsx)("input",{type:"hidden",name:"_captcha",value:"false"}),(0,o.jsx)("input",{type:"hidden",name:"_next",value:window.location.href}),(0,o.jsx)("input",{type:"hidden",name:"_template",value:"table"}),(0,o.jsx)("input",{type:"text",name:"_honey",style:{display:"none"}}),(0,o.jsxs)("div",{className:t.formGroup,children:[(0,o.jsx)("label",{className:t.required,children:"\uc5c5\uccb4\uba85"}),(0,o.jsx)("input",{type:"text",name:"company",value:e.company,onChange:m,placeholder:"\uc5c5\uccb4\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",required:!0})]}),(0,o.jsxs)("div",{className:t.formGroup,children:[(0,o.jsx)("label",{className:t.required,children:"\ub2f4\ub2f9\uc790\uba85"}),(0,o.jsx)("input",{type:"text",name:"manager",value:e.manager,onChange:m,placeholder:"\uc131\ud568\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",required:!0})]}),(0,o.jsxs)("div",{className:t.formGroup,children:[(0,o.jsx)("label",{className:t.required,children:"\uc5f0\ub77d\ucc98"}),(0,o.jsx)("input",{type:"text",name:"contact",value:e.contact,onChange:s=>{const r=s.target.value.replace(/[^0-9]/g,"");a({...e,contact:r})},placeholder:"'-'\ub97c \uc81c\uc678\ud55c \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",required:!0})]}),(0,o.jsxs)("div",{className:t.formGroup,children:[(0,o.jsx)("label",{children:"\uc774\uba54\uc77c"}),(0,o.jsx)("input",{type:"email",name:"email",value:e.email,onChange:m,placeholder:"(\uc120\ud0dd) \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,o.jsxs)("div",{className:t.formGroup,children:[(0,o.jsx)("label",{children:"\ud648\ud398\uc774\uc9c0 \uc8fc\uc18c"}),(0,o.jsx)("input",{type:"url",name:"homepage",value:e.homepage,onChange:m,placeholder:"(\uc120\ud0dd) \ud648\ud398\uc774\uc9c0 \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694. \uc608) savemarketing.co.kr"})]}),(0,o.jsxs)("div",{className:t.formGroup,children:[(0,o.jsx)("label",{className:t.required,children:"\ubb38\uc758\ub0b4\uc6a9"}),(0,o.jsx)("textarea",{name:"message",value:e.message,onChange:m,placeholder:"\ubb38\uc758 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694. ex)\uc608\uc0b0, \uc694\uccad\uc0ac\ud56d, \ud504\ub85c\uc81d\ud2b8 \uae30\uac04 \ub4f1",required:!0})]}),(0,o.jsxs)("div",{className:t.formGroup,children:[(0,o.jsx)("label",{className:t.required,children:"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \uc774\uc6a9\uc5d0 \ub300\ud55c \ub3d9\uc758"}),(0,o.jsxs)("p",{className:t.privacyBox,children:["- \uc218\uc9d1 \ubaa9\uc801: \ubb38\uc758\uc5d0 \ub300\ud55c \ub2f5\ubcc0/\uc548\ub0b4",(0,o.jsx)("br",{}),"- \uc218\uc9d1 \ud56d\ubaa9: \uc5c5\uccb4\uba85, \ub2f4\ub2f9\uc790\uba85, \uc5f0\ub77d\ucc98, \uc774\uba54\uc77c, \ubb38\uc758 \ub0b4\uc6a9",(0,o.jsx)("br",{}),"- \ubcf4\uc720 \uae30\uac04: 1\ub144 \ub610\ub294 \uc0ad\uc81c \uc694\uccad \uc2dc\uae4c\uc9c0",(0,o.jsx)("br",{})]}),(0,o.jsxs)("span",{children:[(0,o.jsx)("input",{id:"agreeCheckbox",type:"checkbox",name:"agree",checked:e.agree,onChange:m,required:!0}),(0,o.jsx)("label",{htmlFor:"agreeCheckbox",children:"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4."})]})]}),(0,o.jsx)("button",{type:"submit",className:t.submitButton,disabled:s,children:s?"\ucc98\ub9ac \uc911...":"\uc2e0\uccad\ud558\uae30"})]})]})};var i=s(867),m=s(72),d=s(602);const p=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.A,{fluid:!0,className:n.wrap,children:(0,o.jsx)(c.A,{children:(0,o.jsxs)(m.A,{className:n.content,children:[(0,o.jsxs)(d.A,{className:n.contentBox,children:[(0,o.jsx)("h2",{children:"Save Marketing. \uc628\ub77c\uc778 \uc0c1\ub2f4\ubb38\uc758"}),(0,o.jsx)("p",{children:"\uac01 \ubd84\uc57c\ubcc4 \uc804\ubb38\uac00\ub4e4\uc758 \uadc0\uc0ac\uc758 \ub514\uc9c0\ud138 \ub9c8\ucf00\ud305\uc744 \ub3c4\uc640\ub4dc\ub9bd\ub2c8\ub2e4."})]}),(0,o.jsx)(l,{})]})})}),(0,o.jsx)(i.A,{})]})}}}]);
//# sourceMappingURL=497.5b7a88ac.chunk.js.map