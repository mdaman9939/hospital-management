import{r as c,j as e}from"./index-C8M8d5TP.js";import{C as s,a}from"./CRow-DwbOyR1O.js";import{C as j,a as C}from"./CCardBody-BC-1MHGB.js";import{C as v}from"./CCardHeader-Cy4Bd0Ol.js";import{C as f}from"./CForm-w6XIb02x.js";import{C as t}from"./CFormLabel-Dc_uzIQC.js";import{C as N}from"./CFormSelect-DPn45vPc.js";import{C as o}from"./CFormInput-Bd3bcSFW.js";import{a as g}from"./index.esm-D35apfu2.js";import"./CFormControlWrapper-CObUvOP_.js";import"./CFormControlValidation-1FHZm8X5.js";const R=()=>{const[m,d]=c.useState("online"),[n,i]=c.useState({cardNumber:"",expiryDate:"",cvv:"",transactionId:"",payerName:"",amount:""}),h=l=>{d(l.target.value),i({cardNumber:"",expiryDate:"",cvv:"",transactionId:"",payerName:"",amount:""})},r=l=>{const{name:p,value:y}=l.target;i(u=>({...u,[p]:y}))},x=()=>{console.log(m==="online"?"Processing Online Payment:":"Processing Offline Payment:",n),alert("Payment processed successfully!")};return e.jsx(s,{children:e.jsx(a,{xs:12,children:e.jsxs(j,{className:"mb-4",children:[e.jsx(v,{children:e.jsx("strong",{children:"Payment Integration"})}),e.jsx(C,{children:e.jsxs(f,{children:[e.jsx(s,{children:e.jsxs(a,{md:6,children:[e.jsx(t,{htmlFor:"paymentMethod",children:"Select Payment Method"}),e.jsxs(N,{id:"paymentMethod",value:m,onChange:h,children:[e.jsx("option",{value:"online",children:"Online Payment"}),e.jsx("option",{value:"offline",children:"Offline Payment"})]})]})}),m==="online"&&e.jsxs(s,{className:"mt-3",children:[e.jsxs(a,{md:4,children:[e.jsx(t,{htmlFor:"cardNumber",children:"Card Number"}),e.jsx(o,{type:"text",id:"cardNumber",name:"cardNumber",value:n.cardNumber,onChange:r,placeholder:"Enter card number"})]}),e.jsxs(a,{md:3,children:[e.jsx(t,{htmlFor:"expiryDate",children:"Expiry Date"}),e.jsx(o,{type:"text",id:"expiryDate",name:"expiryDate",value:n.expiryDate,onChange:r,placeholder:"MM/YY"})]}),e.jsxs(a,{md:2,children:[e.jsx(t,{htmlFor:"cvv",children:"CVV"}),e.jsx(o,{type:"text",id:"cvv",name:"cvv",value:n.cvv,onChange:r,placeholder:"CVV"})]})]}),m==="offline"&&e.jsxs(s,{className:"mt-3",children:[e.jsxs(a,{md:4,children:[e.jsx(t,{htmlFor:"transactionId",children:"Transaction ID"}),e.jsx(o,{type:"text",id:"transactionId",name:"transactionId",value:n.transactionId,onChange:r,placeholder:"Enter transaction ID"})]}),e.jsxs(a,{md:4,children:[e.jsx(t,{htmlFor:"payerName",children:"Payer Name"}),e.jsx(o,{type:"text",id:"payerName",name:"payerName",value:n.payerName,onChange:r,placeholder:"Enter payer's name"})]})]}),e.jsx(s,{className:"mt-3",children:e.jsxs(a,{md:4,children:[e.jsx(t,{htmlFor:"amount",children:"Payment Amount"}),e.jsx(o,{type:"number",id:"amount",name:"amount",value:n.amount,onChange:r,placeholder:"Enter amount"})]})}),e.jsx(s,{className:"mt-4",children:e.jsx(a,{md:2,children:e.jsx(g,{color:"success",onClick:x,children:"Submit Payment"})})})]})})]})})})};export{R as default};
