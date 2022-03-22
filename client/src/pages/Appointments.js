import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJSON from '../components/StringifyJSON'

const Appointments= ()=>{
  const [{data:appointment, loading, error}, refetcg] = useAxios('/api/appointments')
  
  return (
      <div>
        <AxiosContainer title={'Appointments'}loading={loading} error={error}>
          
          <StringifyJSON json = {appointment} />
          
          </AxiosContainer>
      </div>
  )
}

export default Appointments