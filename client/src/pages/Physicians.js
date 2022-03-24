
import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'
import Card from '../components/Card'
import useAxiosOnMount from '../hooks/useAxiosOnMount'
import {Form} from 'react-bootstrap'


const Physicians= ()=>{

  const{data:physicians, loading: physiciansLoading, error: physiciansError} = useAxiosOnMount('/api/physicians')
  
  if (physiciansLoading)return <p>loading</p>
  if (physiciansError)return <p>error</p>


  return (
      <div>
        <hr/>
        {/* <Form.Select aria-label="Default select example" onChange={(e)=>(e.target.value)}>
            <option>Physicians:</option>
            {physicians.map((physician)=>{
              return(<option value='1'> - {physicians}</option>)
            })}
          </Form.Select> */}
        <AxiosContainer title={'Physicians: '}loading={physiciansLoading} error={physiciansError}>
        
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