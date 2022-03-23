
import AxiosContainer from "../components/AxiosContainer"
import Card from "../components/Card"
import List from "../components/List"
import useAxiosOnMount from "../hooks/useAxiosOnMount"

const Patients = () => {
  const { data: patients, loading, error } = useAxiosOnMount("/api/patients")

  return (
    <div>
      <hr/>
    
    <AxiosContainer title={"Patients: "} loading={loading} error={error}>
      <List
        data={patients}
        renderItem={(patient) => {
          return (
            <Card key={patient.id}>
              <h1>{patient.name}</h1>
            </Card>
          )
        }}
      />
    </AxiosContainer>
    </div>
  )
}

export default Patients