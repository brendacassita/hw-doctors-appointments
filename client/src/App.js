import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav
        style={{
          padding: "0 20px",
          borderBottom: "1px solid",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Physicians/Patients/Appointments App</h1>
        <nav>
          <Link to="/physicians">Physicians</Link> -  
          <Link to="/patients">Patients</Link> - 
          <Link to="/appointments"> Appointments</Link>  -  
          <Link to="/appointments/new">Appointment Form</Link>
          {/* <Link to="/about">About</Link>  */}
          {/* <Link to="/home">Home</Link> */}

        </nav>
      </nav>
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
