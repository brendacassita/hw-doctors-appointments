import axios from "axios"
import { useState } from "react"
import useAxiosOnMount from "../hooks/useAxiosOnMount"
import {useNavigate} from "react-router-dom"
import {Form} from 'react-bootstrap'


const AppointmentForm = (props) =>{
  const navigate =  useNavigate()
  const[patientId, setPatientId] = useState('')
  const[physicianId, setPhysicianId] = useState('')
  const[appointmentDate, setAppointmentDate] = useState('')


  const{data:patients, loading: patientsLoading, error: patientsError} = useAxiosOnMount('/api/patients')
  const{data:physicians, loading: physiciansLoading, error: physiciansError} = useAxiosOnMount('/api/physicians')
  
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log({patient_id:patientId, physician_id:physicianId, appointment_date:appointmentDate})
    let newAppointment = {patient_id:patientId, physician_id:physicianId, appointment_date:appointmentDate }
    try{
      // db
      let res = await axios.post(`/api/appointments`, newAppointment)
      console.log(res.data)
      // ui
      // props.addAppointment(res.data)

      console.log('ssubmit')
      // navigate back to appointments
      navigate('/appointments')
    }catch(err){
    }
  }

  
  if (patientsLoading || physiciansLoading)return <p>loading</p>
  if (patientsError || physiciansError)return <p>error</p>

  
  
  return (
    <div>
      {/* <List data={patients} renderItem={(patient)=><p>Patient id:{patient.id} - Name: {patient.name}</p>}/>
      <hr/>
      <List data={physicians} renderItem={(physician)=><p>Physician id:{physician.id} - Name: {physician.name}</p>}/> */}
      <hr/>
      <Form.Select aria-label="Default select example" onChange={(e)=>setPatientId(e.target.value)}>
            <option>Patients:</option>
            {patients.map((patient)=>{
              return(<option value={patient.id}>{patient.id} - {patient.name}</option>)
            })}
          </Form.Select>

          <Form.Select aria-label="Default select example" onChange={(e)=>setPhysicianId(e.target.value)}>
          <option>Physicians:</option>
            {physicians.map((physician)=>{
              return(<option value={physician.id}>{physician.id} - {physician.name}</option>)
            })}
          </Form.Select>
      <hr/>
      
      <h1>Appointment Form:</h1> 
      <form onSubmit={handleSubmit}>
        <p>Patient id:</p>

        <input value = {patientId} onChange={(e)=>setPatientId(e.target.value)} />
        <p>Physician id: </p>
        <input value = {physicianId} onChange={(e)=>setPhysicianId(e.target.value)} />
        <p>Appointment Date: </p>
        <input value = {appointmentDate} onChange={(e)=>setAppointmentDate(e.target.value)} />
        <button>add</button>
      </form>

    </div>
  )
}

export default AppointmentForm