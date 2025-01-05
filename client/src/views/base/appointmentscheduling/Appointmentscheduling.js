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
import React from 'react'

const AppointmentScheduling = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Appointment Scheduling</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                {/* Patient Name */}
                <CCol md={4}>
                  <CFormLabel htmlFor="patientName">Patient Name</CFormLabel>
                  <CFormInput type="text" id="patientName" placeholder="Full name" />
                </CCol>
                {/* Contact Number */}
                <CCol md={4}>
                  <CFormLabel htmlFor="contactNumber">Contact Number</CFormLabel>
                  <CFormInput type="tel" id="contactNumber" placeholder="Contact number" />
                </CCol>
                {/* Appointment Date */}
                <CCol md={4}>
                  <CFormLabel htmlFor="appointmentDate">Appointment Date</CFormLabel>
                  <CFormInput type="date" id="appointmentDate" />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Appointment Time */}
                <CCol md={4}>
                  <CFormLabel htmlFor="appointmentTime">Appointment Time</CFormLabel>
                  <CFormInput type="time" id="appointmentTime" />
                </CCol>
                {/* Doctor Selection */}
                <CCol md={4}>
                  <CFormLabel htmlFor="doctor">Doctor</CFormLabel>
                  <CFormSelect id="doctor">
                    <option>Select Doctor</option>
                    <option value="dr_smith">Dr. Smith</option>
                    <option value="dr_jones">Dr. Jones</option>
                    <option value="dr_williams">Dr. Williams</option>
                  </CFormSelect>
                </CCol>
                {/* Reason for Appointment */}
                <CCol md={4}>
                  <CFormLabel htmlFor="reason">Reason for Appointment</CFormLabel>
                  <CFormTextarea id="reason" rows="1" placeholder="Brief reason for visit" />
                </CCol>
              </CRow>

              <CRow className="mt-4">
                {/* Submit Button */}
                <CCol md={12} className="text-center">
                  <CButton color="primary" type="submit" className="w-25">
                    Schedule Appointment
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

export default AppointmentScheduling
