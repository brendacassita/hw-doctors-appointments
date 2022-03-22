import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJSON from '../components/StringifyJSON'

const Patients = ()=>{
  const [{data:patients, loading, error}, refetcg] = useAxios('/api/patients')
  
  return (
      <div>
        <AxiosContainer title={'Patient'}loading={loading} error={error}>
          
          <StringifyJSON json = {patients} />
          
          </AxiosContainer>
      </div>
  )
}

export default Patients