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
  CRow,
} from '@coreui/react'
import React, { useState } from 'react'

const EmployeeRecords = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: '',
    employeeId: '',
    designation: '',
    department: '',
    contactNumber: '',
    email: '',
    dateOfJoining: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEmployeeDetails((prev) => ({ ...prev, [name]: value }))
  }

  const submitEmployeeDetails = () => {
    console.log('Employee Details Submitted:', employeeDetails)
    alert('Employee record saved successfully!')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Employee Records Management</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                {/* Name and Employee ID */}
                <CCol md={6}>
                  <CFormLabel htmlFor="name">Employee Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    name="name"
                    value={employeeDetails.name}
                    onChange={handleInputChange}
                    placeholder="Enter employee name"
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="employeeId">Employee ID</CFormLabel>
                  <CFormInput
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    value={employeeDetails.employeeId}
                    onChange={handleInputChange}
                    placeholder="Enter employee ID"
                  />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Designation and Department */}
                <CCol md={6}>
                  <CFormLabel htmlFor="designation">Designation</CFormLabel>
                  <CFormInput
                    type="text"
                    id="designation"
                    name="designation"
                    value={employeeDetails.designation}
                    onChange={handleInputChange}
                    placeholder="Enter designation (e.g., Nurse, Technician)"
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="department">Department</CFormLabel>
                  <CFormSelect
                    id="department"
                    name="department"
                    value={employeeDetails.department}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Department</option>
                    <option value="nursing">Nursing</option>
                    <option value="lab">Lab Technicians</option>
                    <option value="administration">Administration</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Contact and Email */}
                <CCol md={6}>
                  <CFormLabel htmlFor="contactNumber">Contact Number</CFormLabel>
                  <CFormInput
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={employeeDetails.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Enter contact number"
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput
                    type="email"
                    id="email"
                    name="email"
                    value={employeeDetails.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                  />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Date of Joining */}
                <CCol md={6}>
                  <CFormLabel htmlFor="dateOfJoining">Date of Joining</CFormLabel>
                  <CFormInput
                    type="date"
                    id="dateOfJoining"
                    name="dateOfJoining"
                    value={employeeDetails.dateOfJoining}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>

              <CRow className="mt-4">
                {/* Submit Button */}
                <CCol md={2}>
                  <CButton color="primary" onClick={submitEmployeeDetails}>
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

export default EmployeeRecords
