import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddExp = () => {



  const [comapny,setComapny] = useState()
  const [role, setRole] = useState()
  const [des, setDes] = useState();
  const navigate = useNavigate()

  const HandleSubmit = (e) =>{
    e.preventDefault();
    const formm = new FormData();
    formm.append('comapny',comapny)
    formm.append('role',role)
    formm.append('des',des)

    axios.post('http://localhost:3002/Exp/add',formm)
    .then(result=>{
      console.log(result);
      navigate('/')
      
    }).catch(err=>{
      console.log(err);
      
    })

    
  }








  return (
    <div className='flex items-center justify-center h-screen '>
        <form className='flex flex-col items-start justify-center border-2 rounded-lg p-5 shadow-lg w-[50%]'>
            <h1 className='text-4xl font-semibold py-4'>Add Experience</h1>
            <label className='text-xl font-semibold' htmlFor="">Company</label>
            <input onChange={(e)=>setComapny(e.target.value)} className='border w-3/4 rounded-md p-1 text-sm text-gray-400' type="text" />
            <label className='text-xl font-semibold' htmlFor="">Role</label>
            <input onChange={(e)=>setRole(e.target.value)} className='border w-3/4 rounded-md p-1 text-sm text-gray-400' type="text" />
            <label className='text-xl font-semibold' htmlFor="">Description</label>
            <textarea onChange={(e)=>setDes(e.target.value)} className='border p-1 text-sm text-gray-400 h-[200px] w-3/4' name="" id=""></textarea>
            <button onClick={HandleSubmit} className='text-white px-4 py-2 rounded-full bg-black my-4'>Submit</button>
        </form>
    </div>
  )
}

export default AddExp