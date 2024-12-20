import React from 'react'
import { experience } from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Experience = () => {



  const [exp, setExpData]= useState([])


  useEffect(()=>{
    axios.get('http://localhost:3002/Experience')
    .then(result=>{
      setExpData(result.data)
    })
  },[])


  return (
    <div className=''>
        <h1 className='text-2xl font-semibold'>Experience</h1>
        <div className='p-2 w-full'>
        <div className='flex flex-wrap flex-col items-center justify-center gap-7 '>
          {
            exp.map((items,index)=>(
              <div key={index} className='border w-full py-3 px-3 rounded-sm shadow-xl hover:scale-[1.02] transition-all duration-500'>
              <h1 className='text-lg font-semibold'>{items.comapny}</h1>
              <h1 className='text-sm text-gray-600 mt-2'>{items.role}</h1>
              <p className='text-xs mt-1 text-gray-500'>{items.des}</p>
            </div>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Experience