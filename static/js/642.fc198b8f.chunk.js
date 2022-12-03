"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[642],{8642:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,i,o,a,s,c=e(5705),u=e(9434),l=e(5772),m=e(168),h=e(6444),d=(0,h.ZP)(c.l0)(r||(r=(0,m.Z)(["\n  margin: 0 auto;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n"]))),p=h.ZP.label(i||(i=(0,m.Z)([""]))),g=(0,h.ZP)(c.gN)(o||(o=(0,m.Z)(["\n  display: block;\n  width: 600px;\n  font-weight: bolder;\n  font-size: ",";\n  border: 1px solid;\n  border-radius: ",";\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),\n    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),\n    inset 0 0 40px rgba(0, 0, 0, 0.1);\n  transition-property: background-color;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.radii.big}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.text})),f=h.ZP.div(a||(a=(0,m.Z)([""]))),x=h.ZP.button(s||(s=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bolder;\n  font-size: ",";\n  gap: ","px;\n  margin-top: ","px;\n  margin-bottom: ","px;\n  background-color: ",";\n  color: ",";\n  border: 1px solid;\n  border-radius: ",";\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),\n    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),\n    inset 0 0 40px rgba(0, 0, 0, 0.1);\n  transition-property: background-color;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.big}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.text})),b=e(4050),v=e(4345),w=e.n(v),y=e(3329);w()(b);var j=b.object().shape({email:b.string().email(),password:b.string().required().minLowercase(1).minUppercase(1).minNumbers(1).minSymbols().min(8)}),Z={email:"",password:""},k=function(){var n=(0,u.I0)();return(0,y.jsx)(c.J9,{initialValues:Z,onSubmit:function(t,e){var r=e.resetForm;n((0,l.Ib)(t)),r()},validationSchema:j,children:(0,y.jsxs)(d,{autoComplete:"off",children:[(0,y.jsxs)(p,{children:["Email",(0,y.jsx)(g,{type:"email",name:"email",title:"Invalid email address"}),(0,y.jsx)(c.Bc,{name:"email",children:function(n){return(0,y.jsx)(f,{children:n})}})]}),(0,y.jsxs)(p,{children:["Password",(0,y.jsx)(g,{type:"password",name:"password",title:"The length of the password is at least 8. The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 number"}),(0,y.jsx)(c.Bc,{name:"password",children:function(n){return(0,y.jsx)(f,{children:"The length of the password is at least 8. The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 number"})}})]}),(0,y.jsx)(x,{type:"submit",children:"Log in"})]})})},$=e(6222),z=function(){return(0,y.jsxs)("main",{children:[(0,y.jsx)($.D,{children:"Log in of your account"}),(0,y.jsx)(k,{})]})}},6222:function(n,t,e){e.d(t,{D:function(){return o}});var r,i=e(168),o=e(6444).ZP.h2(r||(r=(0,i.Z)(["\n  text-align: center;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[5]}))},4345:function(n){var t=function(n,t){return 1===t?n:"".concat(n,"s")},e=function(n){return null===n||void 0===n};function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} lowercase "+t("letter",n);return this.test({name:"minLowercase",exclusive:!0,message:i,params:{length:n},test:function(t){return e(t)||(t.match(/[a-z]/g)||[]).length>=n}})}function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} uppercase "+t("letter",n);return this.test({name:"minUppercase",exclusive:!0,message:i,params:{length:n},test:function(t){return e(t)||(t.match(/[A-Z]/g)||[]).length>=n}})}function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} "+t("number",n);return this.test({name:"minNumber",exclusive:!0,message:i,params:{length:n},test:function(t){return e(t)||(t.match(/[0-9]/g)||[]).length>=n}})}function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} "+t("symbol",n);return this.test({name:"minSymbol",exclusive:!0,message:i,params:{length:n},test:function(t){return e(t)||(t.match(/[^a-zA-Z0-9\s]/g)||[]).length>=n}})}function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must not contain sequences of more than ${length} repeated "+t("character",n);return this.test({name:"minRepeating",exclusive:!0,message:i,params:{length:n},test:function(t){return e(t)||!new RegExp("(.)\\1{".concat(n,",}")).test(t)}})}function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,r=arguments.length>1?arguments[1]:void 0,i=r||"${path} must contain at least ${length} "+t("word",n),o=new RegExp("[a-zA-Z0-9]");return this.test({name:"minWords",exclusive:!0,message:i,params:{length:n},test:function(t){return e(t)||t.split(" ").filter((function(n){return!!n&&o.test(n)})).length>=n}})}function u(){return this.min(8).max(250).minLowercase(1).minUppercase(1).minNumbers(1).minSymbols(1)}n.exports=function(n){n.addMethod(n.string,"minLowercase",r),n.addMethod(n.string,"minUppercase",i),n.addMethod(n.string,"minNumber",o),n.addMethod(n.string,"minNumbers",o),n.addMethod(n.string,"minSymbol",a),n.addMethod(n.string,"minSymbols",a),n.addMethod(n.string,"minRepeating",s),n.addMethod(n.string,"minWords",c),n.addMethod(n.string,"password",u)}}}]);
//# sourceMappingURL=642.fc198b8f.chunk.js.map