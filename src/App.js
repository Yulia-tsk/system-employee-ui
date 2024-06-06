
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import NavBar from './components/NavBar';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<EmployeeList />}></Route>
        <Route path="/employeeList" element={<EmployeeList />}></Route>
        <Route path={"/addEmployee"} element={<AddEmployee />}></Route>
        <Route path={"/updateEmployee/:id"} element={<UpdateEmployee />}></Route>
      </Routes>
     
    </BrowserRouter>
   
    </>
  );
}

export default App;
