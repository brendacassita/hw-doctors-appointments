import Card from "./Card"

const Appointment = ({id,patient,physician, date}) =>{
    return (
        <Card>
            <h4>Patient: {patient.name} id:{patient.id}</h4>
            <h4>Physician: {physician.name} id:{physician.id}</h4>
            <p>Appointments: {date}</p>
            <p>Appointment id: {id}</p>
  
        </Card>
    )
}

export default Appointment