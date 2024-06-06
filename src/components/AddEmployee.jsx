import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]:value })
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response) =>{
            console.log(response);
        }).catch((err) => console.log(err));
    }
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            email: ""
        })
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b justify-left'>
        <div className='px-8 py-8 bg-yellow-100 w-full'>
            <div className='font-thin tracking-wider text-2xl'>
                <h1>Add Employee</h1>
            </div>
            <div className='h-14 w-full items-center justify-center my-4'>
                <label htmlFor="" className='block text-gray-800 text-sm'>First Name</label>
                <input type="text" name="firstName" onChange={(e) =>handleChange(e)} className='border h-10 w-96 p-2'/>
            </div>
              
            <div className='h-14 w-full items-center justify-center my-4'>
                <label htmlFor="" className='block text-gray-800 text-sm'>Last Name</label>
                <input type="text" name="lastName"  onChange={(e) =>handleChange(e)}  className='border h-10 w-96 p-2'/>
            </div>
            <div className='h-14 w-full items-center justify-center my-4'>
                <label htmlFor="" className='block text-gray-800 text-sm'>Email</label>
                <input type="email" name="email"  onChange={(e) =>handleChange(e)}  className='border h-10 w-96 p-2'/>
            </div>
            <div className='h-14 w-fullonC items-center justify-center my-4 space-x-4 pt-4'>
            
            <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 px-16 py-2'>Save</button>
                <button onClick={reset} className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 px-16 py-2'>Cancel</button>
            </div>
          
        </div>
        
    </div>
  )
}

export default AddEmployee