import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import React from 'react'

const DoctorProfilesSpecializations = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Doctor Profiles and Specializations</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                {/* Doctor Information */}
                <CCol md={4}>
                  <CFormLabel htmlFor="doctorName">Doctor Name</CFormLabel>
                  <CFormInput type="text" id="doctorName" placeholder="Full name" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="qualification">Qualification</CFormLabel>
                  <CFormInput type="text" id="qualification" placeholder="e.g., MBBS, MD" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="experience">Years of Experience</CFormLabel>
                  <CFormInput type="number" id="experience" placeholder="e.g., 10" />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Specializations and Contact Info */}
                <CCol md={6}>
                  <CFormLabel htmlFor="specializations">Specializations</CFormLabel>
                  <CFormTextarea
                    id="specializations"
                    rows="2"
                    placeholder="e.g., Cardiology, Neurology"
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="contactInfo">Contact Information</CFormLabel>
                  <CFormInput type="tel" id="contactInfo" placeholder="Phone number or email" />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Clinic Address */}
                <CCol md={12}>
                  <CFormLabel htmlFor="clinicAddress">Clinic/Hospital Address</CFormLabel>
                  <CFormTextarea
                    id="clinicAddress"
                    rows="3"
                    placeholder="Enter clinic or hospital address"
                  />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Biography */}
                <CCol md={12}>
                  <CFormLabel htmlFor="biography">Biography</CFormLabel>
                  <CFormTextarea
                    id="biography"
                    rows="4"
                    placeholder="Provide a short biography about the doctor"
                  />
                </CCol>
              </CRow>

              <CRow className="mt-4">
                {/* Submit Button */}
                <CCol md={12} className="text-center">
                  <CButton color="primary" type="submit" className="w-25">
                    Save Profile
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

export default DoctorProfilesSpecializations
