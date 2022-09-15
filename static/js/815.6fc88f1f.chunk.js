"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[815],{4921:function(n,e,r){r.d(e,{z:function(){return s}});var o,a,i=r(168),t=r(6031),s=t.ZP.button(o||(o=(0,i.Z)(["\ndisplay: inline-flex;\nalign-items: center;\n  padding: 5px 10px;\n  margin: 5px 10px;\n  text-transform: capitalize;\n  background-color: ",";\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n  :hover {\n    background-color: blue;\n  }\n"])),(function(n){return n.theme.colors.backgroundButton}));t.ZP.button(a||(a=(0,i.Z)(["\n  display: block;\n  padding: 5px 20px;\n  border: none;\n  border-radius: 2px;\n  outline: none;\n  background-color: #d45b78;\n  color: white;\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n  @media screen and (max-width: 425px) {\n    padding: 3px 10px;\n    font-size: 9px;\n  }\n  &:hover {\n    box-shadow: 5px 5px 18px -3px rgba(255, 255, 255, 0.67);\n  }\n"])))},1424:function(n,e,r){r.d(e,{II:function(){return c},__:function(){return m},tN:function(){return l}});var o,a,i,t=r(168),s=r(6031),d=r(5705),l=(0,s.ZP)(d.l0)(o||(o=(0,t.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),m=s.ZP.label(a||(a=(0,t.Z)(["\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 16rem;\n  margin-bottom: 20px;\n  color: #0000ff;\n"]))),c=(0,s.ZP)(d.gN)(i||(i=(0,t.Z)(["\n  box-sizing: border-box;\n  min-width: 300px;\n  padding-left: 20px;\n  height: 40px;\n  font-family: inherit;\n  border: none;\n  outline: none;\n  border-radius: 0.5rem;\n  box-shadow: inset 0.2rem 0.2rem 0.5rem #ffffff;\n  background: #6178ea;\n  color: #0000ff;\n  :focus {\n    outline: none;\n    box-shadow: 0.3rem 0.3rem 0.6rem #0000ff, -0.2rem -0.2rem 0.5rem #c2c2c2;\n  }\n"])))},552:function(n,e,r){r.d(e,{D:function(){return i}});var o,a=r(168),i=r(6031).ZP.h2(o||(o=(0,a.Z)(["\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  font-size:",";\n  font-weight: ",";\n  color: #0000ff;\n"])),(function(n){return n.theme.fontSizes.sm}),(function(n){return n.theme.fontWeights.bold}))},2815:function(n,e,r){r.r(e),r.d(e,{default:function(){return x}});var o=r(4921),a=r(552),i=r(5705),t=r(9434),s=r(7564),d=r(968),l=r(1424),m=r(3504),c=r(184),u=RegExp(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/),p=d.Ry().shape({name:d.Z_().min(2).matches(u,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("No name provided."),email:d.Z_().email().required("No email provided."),password:d.Z_().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/(?=.*[0-9])/,"Password must contain a number.")}),h=function(){var n=(0,t.I0)();return(0,c.jsxs)("div",{children:[(0,c.jsx)(a.D,{children:"Create Account"}),(0,c.jsx)(i.J9,{initialValues:{name:"",email:"",password:""},validationSchema:p,onSubmit:function(e,r){var o=r.resetForm,a={name:e.name,email:e.email,password:e.password};n((0,s.a$)(a)),o()},children:function(n){var e=n.values,r=n.touched,a=n.errors,i=n.isSubmitting,t=n.handleChange,s=n.handleBlur;return(0,c.jsxs)(l.tN,{children:[(0,c.jsx)(l.__,{htmlFor:"name",children:"Name"}),(0,c.jsx)(l.II,{id:"name",name:"name",type:"text",placeholder:"Enter your name",value:e.name,onChange:t,onBlur:s,className:a.name&&r.name&&"error"}),a.name&&r.name&&(0,c.jsx)("div",{children:a.name}),(0,c.jsx)(l.__,{htmlFor:"email",children:"Email"}),(0,c.jsx)(l.II,{id:"email",name:"email",type:"text",placeholder:"Enter your email",value:e.email,onChange:t,onBlur:s,className:a.email&&r.email&&"error"}),a.email&&r.email&&(0,c.jsx)("div",{children:a.email}),(0,c.jsx)(l.__,{htmlFor:"password",children:"Password"}),(0,c.jsx)(l.II,{id:"password",name:"password",type:"password",placeholder:"Enter your password",value:e.password,onChange:t,onBlur:s,className:a.password&&r.password&&"error"}),a.password&&r.password&&(0,c.jsx)("div",{children:a.password}),(0,c.jsx)(o.z,{type:"submit",disabled:i,children:"SignUp"})]})}}),(0,c.jsxs)("div",{children:["Do you have an account?",(0,c.jsx)(m.rU,{to:"/login",children:"Login"})]})]})},x=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)("title",{children:"Register please "}),(0,c.jsx)(h,{})]})}}}]);
//# sourceMappingURL=815.6fc88f1f.chunk.js.map