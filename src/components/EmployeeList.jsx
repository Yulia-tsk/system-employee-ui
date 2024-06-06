import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response =  await EmployeeService.getEmployees();
        setEmployees(response.data);
        console.log(employees)
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };  fetchData();
  }, [])

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if(employees){
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !==id)
        })}}
    )}
  
  return (
   <>
   <div>
      <div className='h-12'>
      <button  
      onClick={() => navigate("addEmployee")}
      className='rounded text-white font-semibold bg-slate-500 hover:bg-slate-700 px-16 py-2'>Add Employee</button>
      </div> 
      <div className='flex border-b shadow px-4'>
        
          <table className='min-w-full'>
              <thead className='bg-gray-50'>
              <tr> 
                <th className='font-medium text-left tracking-wider uppercase text-gray-600 py-3 px-4'>First Name</th>
                <th className='font-medium text-left tracking-wider uppercase text-gray-600 py-3 px-4'>Last Name</th>
                <th className='font-medium text-left tracking-wider uppercase text-gray-600 py-3 px-4'>Email</th>
                <th className='font-medium text-right tracking-wider uppercase text-gray-600 py-3 px-4'>Actions</th>
               </tr>
              </thead>
              {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) =>  (
                  (<Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}></Employee>)
              ))}
            </tbody>
          )}
       </table>
      </div>
   </div>
   </>
  )

}

export default EmployeeList