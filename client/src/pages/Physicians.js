import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJSON from '../components/StringifyJSON'

const Physicians= ()=>{
  const [{data:physicians, loading, error}, refetcg] = useAxios('/api/physicians')
  
  return (
      <div>
        <AxiosContainer title={'Physician'}loading={loading} error={error}>
          
          <StringifyJSON json = {physicians} />
          
          </AxiosContainer>
      </div>
  )
}

export default Physicians