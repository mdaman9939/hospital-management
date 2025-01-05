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

const ShiftManagement = () => {
  const [shiftDetails, setShiftDetails] = useState({
    employeeId: '',
    employeeName: '',
    shiftType: '',
    shiftDate: '',
    shiftHours: '',
    notes: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setShiftDetails((prev) => ({ ...prev, [name]: value }))
  }

  const submitShiftDetails = () => {
    console.log('Shift Details Submitted:', shiftDetails)
    alert('Shift record saved successfully!')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Shift Management</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                {/* Employee ID and Name */}
                <CCol md={6}>
                  <CFormLabel htmlFor="employeeId">Employee ID</CFormLabel>
                  <CFormInput
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    value={shiftDetails.employeeId}
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
                    value={shiftDetails.employeeName}
                    onChange={handleInputChange}
                    placeholder="Enter employee name"
                  />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Shift Type and Date */}
                <CCol md={6}>
                  <CFormLabel htmlFor="shiftType">Shift Type</CFormLabel>
                  <CFormSelect
                    id="shiftType"
                    name="shiftType"
                    value={shiftDetails.shiftType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Shift Type</option>
                    <option value="morning">Morning Shift</option>
                    <option value="evening">Evening Shift</option>
                    <option value="night">Night Shift</option>
                  </CFormSelect>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="shiftDate">Shift Date</CFormLabel>
                  <CFormInput
                    type="date"
                    id="shiftDate"
                    name="shiftDate"
                    value={shiftDetails.shiftDate}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Shift Hours */}
                <CCol md={6}>
                  <CFormLabel htmlFor="shiftHours">Shift Hours</CFormLabel>
                  <CFormInput
                    type="text"
                    id="shiftHours"
                    name="shiftHours"
                    value={shiftDetails.shiftHours}
                    onChange={handleInputChange}
                    placeholder="Enter shift hours (e.g., 8:00 AM - 4:00 PM)"
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="notes">Additional Notes</CFormLabel>
                  <CFormTextarea
                    id="notes"
                    name="notes"
                    value={shiftDetails.notes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Enter any additional notes"
                  />
                </CCol>
              </CRow>

              <CRow className="mt-4">
                {/* Submit Button */}
                <CCol md={2}>
                  <CButton color="primary" onClick={submitShiftDetails}>
                    Save Shift
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

export default ShiftManagement
