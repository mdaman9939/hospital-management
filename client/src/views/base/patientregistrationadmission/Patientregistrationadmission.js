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
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'

const PatientRegistrationAdmission = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientGender: '',
    contactInfo: '',
    admissionDate: '',
    address: '',
    ward: '',
    guardianContact: '',
    medicalHistory: '',
  })

  const [patients, setPatients] = useState([])
  const API_BASE_URL = 'http://localhost:5001/api' // Centralize API URL

  // Fetch patients data
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/patient`)

        if (!response.ok) {
          throw new Error(`Failed to fetch patients: ${response.statusText}`)
        }

        const data = await response.json()
        console.log('fetched patients:', data)
        setPatients(data)
      } catch (error) {
        console.error('Error fetching patients:', error)
        alert(`Error fetching patient data: ${error.message}`)
      }
    }

    fetchPatients()
  }, [API_BASE_URL])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Failed to register patient: ${response.statusText}`)
      }

      const result = await response.json()
      alert('Patient registered successfully!')
      console.log(result)

      // Reset form after successful submission
      setFormData({
        patientName: '',
        patientAge: '',
        patientGender: '',
        contactInfo: '',
        admissionDate: '',
        address: '',
        ward: '',
        guardianContact: '',
        medicalHistory: '',
      })
    } catch (error) {
      console.error('Error registering patient:', error)
      alert(`Error registering patient: ${error.message}`)
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Patient Registration and Admission</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow>
                {/* Personal Information */}
                <CCol md={3}>
                  <CFormLabel htmlFor="patientName">Patient Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="patientName"
                    placeholder="Full name"
                    value={formData.patientName}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={2}>
                  <CFormLabel htmlFor="patientAge">Age</CFormLabel>
                  <CFormInput
                    type="number"
                    id="patientAge"
                    placeholder="Age"
                    value={formData.patientAge}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={2}>
                  <CFormLabel htmlFor="patientGender">Gender</CFormLabel>
                  <CFormSelect
                    id="patientGender"
                    value={formData.patientGender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </CFormSelect>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="contactInfo">Contact Number</CFormLabel>
                  <CFormInput
                    type="tel"
                    id="contactInfo"
                    placeholder="Contact number"
                    value={formData.contactInfo}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={2}>
                  <CFormLabel htmlFor="admissionDate">Admission Date</CFormLabel>
                  <CFormInput
                    type="date"
                    id="admissionDate"
                    value={formData.admissionDate}
                    onChange={handleChange}
                  />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Address and Ward */}
                <CCol md={5}>
                  <CFormLabel htmlFor="address">Address</CFormLabel>
                  <CFormTextarea
                    id="address"
                    rows="1"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="ward">Ward/Room</CFormLabel>
                  <CFormSelect id="ward" value={formData.ward} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="general">General Ward</option>
                    <option value="private">Private Room</option>
                    <option value="icu">ICU</option>
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="guardianContact">Guardian Contact</CFormLabel>
                  <CFormInput
                    type="text"
                    id="guardianContact"
                    placeholder="Guardian's contact"
                    value={formData.guardianContact}
                    onChange={handleChange}
                  />
                </CCol>
              </CRow>

              <CRow className="mt-3">
                {/* Medical History and Submit Button */}
                <CCol md={10}>
                  <CFormLabel htmlFor="medicalHistory">Medical History</CFormLabel>
                  <CFormTextarea
                    id="medicalHistory"
                    rows="2"
                    placeholder="Relevant medical history"
                    value={formData.medicalHistory}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={2} className="d-flex align-items-end">
                  <CButton color="primary" type="submit" className="w-100">
                    Submit
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>

        {/* Display Fetched Patient Data */}
        <CCard>
          <CCardHeader>
            <strong>Patient List</strong>
          </CCardHeader>
          <CCardBody>
            {patients.length > 0 ? (
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>#</CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Age</CTableHeaderCell>
                    <CTableHeaderCell>Gender</CTableHeaderCell>
                    <CTableHeaderCell>Contact</CTableHeaderCell>
                    <CTableHeaderCell>Admission Date</CTableHeaderCell>
                    <CTableHeaderCell>Address</CTableHeaderCell>
                    <CTableHeaderCell>Ward</CTableHeaderCell>
                    <CTableHeaderCell>Guardian Contact</CTableHeaderCell>
                    <CTableHeaderCell>Medical History</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {patients.map((patient, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>{patient.patientName}</CTableDataCell>
                      <CTableDataCell>{patient.patientAge}</CTableDataCell>
                      <CTableDataCell>{patient.patientGender}</CTableDataCell>
                      <CTableDataCell>{patient.contactInfo}</CTableDataCell>
                      <CTableDataCell>{patient.admissionDate}</CTableDataCell>
                      <CTableDataCell>{patient.address}</CTableDataCell>
                      <CTableDataCell>{patient.ward}</CTableDataCell>
                      <CTableDataCell>{patient.guardianContact}</CTableDataCell>
                      <CTableDataCell>{patient.medicalHistory}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            ) : (
              <p>No patients found.</p>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PatientRegistrationAdmission
