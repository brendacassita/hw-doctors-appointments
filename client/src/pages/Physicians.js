
import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'
import Card from '../components/Card'
import useAxiosOnMount from '../hooks/useAxiosOnMount'

const Physicians= ()=>{
  const {data:physicians, loading, error} = useAxiosOnMount('/api/physicians')
  
  return (
      <div>
        <hr/>
        <AxiosContainer title={'Physicians: '}loading={loading} error={error}>
        
          <List
          data={physicians}
          renderItem={(physician)=>{
            return (
              <Card key={physician.id}>
                <h2>{physician.name}</h2>
              </Card>
            )
          }}
          />
          
          
          </AxiosContainer>
          </div>
      
  )
}

export default Physicians