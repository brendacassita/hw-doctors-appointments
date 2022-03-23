import Appointment from '../components/Appointment'
import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List';
import useAxiosOnMount from '../hooks/useAxiosOnMount';


const Appointments= ()=>{
  
  const {data:appointments, loading, error} = useAxiosOnMount('/api/appointments/all_yo')
  console.log(appointments)
  const renderOneAppointment = (appointment) =>{
    return <Appointment key = {appointment.id}{...appointment}/>
  }
  return (
    <div>
      <hr/>
        <AxiosContainer title={'Appointments:'}loading={loading} error={error}>
          
          <List data={appointments} renderItem={renderOneAppointment} />
          
          </AxiosContainer>
          </div>
  )
}

export default Appointments