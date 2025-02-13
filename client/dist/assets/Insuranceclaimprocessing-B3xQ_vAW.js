import{r as p,j as e}from"./index-C8M8d5TP.js";import{C as n,a as r}from"./CRow-DwbOyR1O.js";import{C as x,a as C}from"./CCardBody-BC-1MHGB.js";import{C as j}from"./CCardHeader-Cy4Bd0Ol.js";import{C as v}from"./CForm-w6XIb02x.js";import{C as i}from"./CFormLabel-Dc_uzIQC.js";import{C as l}from"./CFormInput-Bd3bcSFW.js";import{C as N}from"./CFormSelect-DPn45vPc.js";import{C as g}from"./CFormTextarea-CI9dEni-.js";import{a as f}from"./index.esm-D35apfu2.js";import"./CFormControlWrapper-CObUvOP_.js";import"./CFormControlValidation-1FHZm8X5.js";const k=()=>{const[a,t]=p.useState({patientName:"",policyNumber:"",insurer:"",claimAmount:"",claimReason:"",documents:null}),s=o=>{const{name:m,value:u}=o.target;t(h=>({...h,[m]:u}))},c=o=>{t(m=>({...m,documents:o.target.files[0]}))},d=()=>{console.log("Submitting Claim:",a),alert("Claim submitted successfully!")};return e.jsx(n,{children:e.jsx(r,{xs:12,children:e.jsxs(x,{className:"mb-4",children:[e.jsx(j,{children:e.jsx("strong",{children:"Insurance Claim Processing"})}),e.jsx(C,{children:e.jsxs(v,{children:[e.jsxs(n,{children:[e.jsxs(r,{md:6,children:[e.jsx(i,{htmlFor:"patientName",children:"Patient Name"}),e.jsx(l,{type:"text",id:"patientName",name:"patientName",value:a.patientName,onChange:s,placeholder:"Enter patient name"})]}),e.jsxs(r,{md:6,children:[e.jsx(i,{htmlFor:"policyNumber",children:"Policy Number"}),e.jsx(l,{type:"text",id:"policyNumber",name:"policyNumber",value:a.policyNumber,onChange:s,placeholder:"Enter policy number"})]})]}),e.jsxs(n,{className:"mt-3",children:[e.jsxs(r,{md:6,children:[e.jsx(i,{htmlFor:"insurer",children:"Insurance Provider"}),e.jsxs(N,{id:"insurer",name:"insurer",value:a.insurer,onChange:s,children:[e.jsx("option",{value:"",children:"Select provider"}),e.jsx("option",{value:"provider1",children:"Provider 1"}),e.jsx("option",{value:"provider2",children:"Provider 2"}),e.jsx("option",{value:"provider3",children:"Provider 3"})]})]}),e.jsxs(r,{md:6,children:[e.jsx(i,{htmlFor:"claimAmount",children:"Claim Amount"}),e.jsx(l,{type:"number",id:"claimAmount",name:"claimAmount",value:a.claimAmount,onChange:s,placeholder:"Enter claim amount"})]})]}),e.jsx(n,{className:"mt-3",children:e.jsxs(r,{md:12,children:[e.jsx(i,{htmlFor:"claimReason",children:"Claim Reason"}),e.jsx(g,{id:"claimReason",name:"claimReason",rows:"3",value:a.claimReason,onChange:s,placeholder:"Provide a detailed reason for the claim"})]})}),e.jsx(n,{className:"mt-3",children:e.jsxs(r,{md:12,children:[e.jsx(i,{htmlFor:"documents",children:"Supporting Documents"}),e.jsx(l,{type:"file",id:"documents",name:"documents",onChange:c,placeholder:"Upload relevant documents"})]})}),e.jsx(n,{className:"mt-4",children:e.jsx(r,{md:2,children:e.jsx(f,{color:"primary",onClick:d,children:"Submit Claim"})})})]})})]})})})};export{k as default};
