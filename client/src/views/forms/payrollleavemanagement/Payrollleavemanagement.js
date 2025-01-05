import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import React, { useState } from 'react'

const PayrollLeaveManagement = () => {
  const [payrollDetails, setPayrollDetails] = useState({
    employeeId: '',
    employeeName: '',
    basicSalary: '',
    allowances: '',
    deductions: '',
    totalSalary: '',
    leaveType: '',
    leaveStartDate: '',
    leaveEndDate: '',
    leaveReason: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPayrollDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calculateTotalSalary = () => {
    const totalSalary =
      parseFloat(payrollDetails.basicSalary || 0) +
      parseFloat(payrollDetails.allowances || 0) -
      parseFloat(payrollDetails.deductions || 0)
    setPayrollDetails((prev) => ({ ...prev, totalSalary }))
  }

  const submitPayrollLeaveDetails = () => {
    console.log('Payroll and Leave Details Submitted:', payrollDetails)
    alert('Payroll and leave record saved successfully!')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Payroll and Leave Management</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              {/* Employee Information */}
              <CRow>
                <CCol md={6}>
                  <CFormLabel htmlFor="employeeId">Employee ID</CFormLabel>
                  <CFormInput
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    value={payrollDetails.employeeId}
                    onChange={handleInputChange}
                    placeholder="Enter employee ID"
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="employeeName">Employee Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="employeeName"
                    name="employeeName"
                    value={payrollDetails.employeeName}
                    onChange={handleInputChange}
                    placeholder="Enter employee name"
                  />
                </CCol>
              </CRow>

              {/* Salary Information */}
              <CRow className="mt-3">
                <CCol md={4}>
                  <CFormLabel htmlFor="basicSalary">Basic Salary</CFormLabel>
                  <CFormInput
                    type="number"
                    id="basicSalary"
                    name="basicSalary"
                    value={payrollDetails.basicSalary}
                    onChange={handleInputChange}
                    placeholder="Enter basic salary"
                    onBlur={calculateTotalSalary}
                  />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="allowances">Allowances</CFormLabel>
                  <CFormInput
                    type="number"
                    id="allowances"
                    name="allowances"
                    value={payrollDetails.allowances}
                    onChange={handleInputChange}
                    placeholder="Enter allowances"
                    onBlur={calculateTotalSalary}
                  />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="deductions">Deductions</CFormLabel>
                  <CFormInput
                    type="number"
                    id="deductions"
                    name="deductions"
                    value={payrollDetails.deductions}
                    onChange={handleInputChange}
                    placeholder="Enter deductions"
                    onBlur={calculateTotalSalary}
                  />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="totalSalary">Total Salary</CFormLabel>
                  <CFormInput
                    type="text"
                    id="totalSalary"
                    name="totalSalary"
                    value={payrollDetails.totalSalary}
                    disabled
                    placeholder="Calculated total salary"
                  />
                </CCol>
              </CRow>

              {/* Leave Information */}
              <CRow className="mt-3">
                <CCol md={4}>
                  <CFormLabel htmlFor="leaveType">Leave Type</CFormLabel>
                  <CFormSelect
                    id="leaveType"
                    name="leaveType"
                    value={payrollDetails.leaveType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Leave Type</option>
                    <option value="sick">Sick Leave</option>
                    <option value="vacation">Vacation Leave</option>
                    <option value="maternity">Maternity Leave</option>
                    <option value="unpaid">Unpaid Leave</option>
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="leaveStartDate">Leave Start Date</CFormLabel>
                  <CFormInput
                    type="date"
                    id="leaveStartDate"
                    name="leaveStartDate"
                    value={payrollDetails.leaveStartDate}
                    onChange={handleInputChange}
                  />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="leaveEndDate">Leave End Date</CFormLabel>
                  <CFormInput
                    type="date"
                    id="leaveEndDate"
                    name="leaveEndDate"
                    value={payrollDetails.leaveEndDate}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                <CCol md={12}>
                  <CFormLabel htmlFor="leaveReason">Leave Reason</CFormLabel>
                  <CFormTextarea
                    id="leaveReason"
                    name="leaveReason"
                    value={payrollDetails.leaveReason}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Enter reason for leave"
                  />
                </CCol>
              </CRow>

              <CRow className="mt-4">
                <CCol md={2}>
                  <CButton color="primary" onClick={submitPayrollLeaveDetails}>
                    Save Record
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PayrollLeaveManagement
