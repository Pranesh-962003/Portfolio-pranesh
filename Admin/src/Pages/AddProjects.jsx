import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddProjects = () => {

    const [exp, setExp] = useState({})
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [link1, setLink1] = useState()
    const [link2, setLink2] = useState()
    const [file, setFile] = useState()

    const navigate = useNavigate()






    const HandleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',title)
        formData.append('description',description)
        formData.append('link1',link1)
        formData.append('link2',link2)
        formData.append('file',file)



        axios.post('http://localhost:3002/Projects/add/data',formData)
        .then(result=>{
            console.log(result);
            navigate('/')
            
        }).catch(err=>{
            console.log(err);
            
        })

    }

    
  return (
    <div  className='flex items-center justify-center h-screen'>
        <form onSubmit={HandleSubmit} className='flex flex-col items-start justify-center p-5 bg-gray-500 rounded-sm w-[50%]'>
            <label className='ml-3 p-2 mt-2 rounded-lg' htmlFor="">Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className='ml-3 p-2 mt-2 rounded-lg' type="text" />
            <label className='ml-3 p-2 mt-2 rounded-lg' htmlFor="">Description</label>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='ml-3 h-52 w-3/4 p-2 mt-2 rounded-lg' name="" id=""></textarea>
            <label className='ml-3 p-2 mt-2 rounded-lg' htmlFor="">Link1</label>
            <input className='ml-3 p-2 mt-2 rounded-lg' type="text" value={link1} onChange={(e)=>setLink1(e.target.value)}/>
            <label className='ml-3 p-2 mt-2 rounded-lg' htmlFor="" >Link2</label>
            <input className='ml-3 p-2 mt-2 rounded-lg' type="text" value={link2} onChange={(e)=>setLink2(e.target.value)} />
            <label className='ml-3 p-2 mt-2 rounded-lg' htmlFor="">Image</label>
            <input type="file" name="" onChange={(e)=>setFile(e.target.files[0])} id="" />
            <button className='text-white bg-black rounded-full px-5 py-2 text-center'>Submit</button>
        </form>
    </div>
  )
}

export default AddProjects