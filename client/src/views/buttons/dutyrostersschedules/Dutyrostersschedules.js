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
import React from 'react'

const DutyRostersSchedules = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Duty Rosters and Schedules</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                {/* Staff Information */}
                <CCol md={4}>
                  <CFormLabel htmlFor="staffName">Staff Name</CFormLabel>
                  <CFormInput type="text" id="staffName" placeholder="Enter staff name" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="staffRole">Role</CFormLabel>
                  <CFormSelect id="staffRole">
                    <option>Select Role</option>
                    <option value="doctor">Doctor</option>
                    <option value="nurse">Nurse</option>
                    <option value="admin">Administrative Staff</option>
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="contactInfo">Contact Information</CFormLabel>
                  <CFormInput type="tel" id="contactInfo" placeholder="Phone number or email" />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Duty Timing */}
                <CCol md={4}>
                  <CFormLabel htmlFor="dutyStart">Duty Start Time</CFormLabel>
                  <CFormInput type="time" id="dutyStart" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="dutyEnd">Duty End Time</CFormLabel>
                  <CFormInput type="time" id="dutyEnd" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="shiftType">Shift Type</CFormLabel>
                  <CFormSelect id="shiftType">
                    <option>Select Shift</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="night">Night</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Assigned Date and Ward */}
                <CCol md={6}>
                  <CFormLabel htmlFor="assignedDate">Assigned Date</CFormLabel>
                  <CFormInput type="date" id="assignedDate" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="assignedWard">Assigned Ward/Department</CFormLabel>
                  <CFormInput
                    type="text"
                    id="assignedWard"
                    placeholder="e.g., ICU, General Ward, Pediatrics"
                  />
                </CCol>
              </CRow>

              <CRow className="mt-4">
                {/* Submit Button */}
                <CCol md={12} className="text-center">
                  <CButton color="primary" type="submit" className="w-25">
                    Save Duty Roster
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

export default DutyRostersSchedules
