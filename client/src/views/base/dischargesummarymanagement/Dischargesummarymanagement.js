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

const DischargeSummaryManagement = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Discharge Summary Management</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                {/* Patient Information */}
                <CCol md={4}>
                  <CFormLabel htmlFor="patientName">Patient Name</CFormLabel>
                  <CFormInput type="text" id="patientName" placeholder="Full name" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="admissionDate">Admission Date</CFormLabel>
                  <CFormInput type="date" id="admissionDate" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="dischargeDate">Discharge Date</CFormLabel>
                  <CFormInput type="date" id="dischargeDate" />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Diagnosis */}
                <CCol md={6}>
                  <CFormLabel htmlFor="diagnosis">Diagnosis</CFormLabel>
                  <CFormTextarea id="diagnosis" rows="2" placeholder="Diagnosis details" />
                </CCol>
                {/* Treatments Given */}
                <CCol md={6}>
                  <CFormLabel htmlFor="treatments">Treatments Given</CFormLabel>
                  <CFormTextarea id="treatments" rows="2" placeholder="Treatments provided" />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Medications */}
                <CCol md={6}>
                  <CFormLabel htmlFor="medications">Medications</CFormLabel>
                  <CFormTextarea id="medications" rows="2" placeholder="Prescribed medications" />
                </CCol>
                {/* Follow-up Instructions */}
                <CCol md={6}>
                  <CFormLabel htmlFor="followUp">Follow-up Instructions</CFormLabel>
                  <CFormTextarea id="followUp" rows="2" placeholder="Instructions for follow-up" />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Notes */}
                <CCol md={12}>
                  <CFormLabel htmlFor="notes">Additional Notes</CFormLabel>
                  <CFormTextarea id="notes" rows="3" placeholder="Any additional information" />
                </CCol>
              </CRow>

              <CRow className="mt-4">
                {/* Submit Button */}
                <CCol md={12} className="text-center">
                  <CButton color="primary" type="submit" className="w-25">
                    Save Summary
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

export default DischargeSummaryManagement
