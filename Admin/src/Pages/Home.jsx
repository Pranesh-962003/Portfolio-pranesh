import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

    const [data, setData] = useState([]);
    const [exp, setExp] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3002/projects').then(
            user=>{
                setData(user.data)
            }
        ).catch(err=>{
            console.log(err);
            
        })
    },[])


    useEffect(()=>{
        axios.get('http://localhost:3002/Experience')
        .then(data=>{
            setExp(data.data)
        })
    },[])


    const HandleDelete = (id) =>{
        axios.delete('http://localhost:3002/Projects/delete/'+id)
        .then(result=>{
            console.log(result);
            
        }).catch(err=>{
            console.log(err);
            
        })
    }



    const expHandleDelete = (id) => {
        axios.delete('http://localhost:3002/Experience/delete/'+id)
        .then(res=>{
            console.log(res);
            
        }).catch(err=>{
            console.log(err);
            
        })
    }



  return (
    <div >
        <h1>Projects</h1>
        <Link to={`/addProjects`}>add projects</Link>
        
        <div className='flex items-center justify-center'>
        <table className='w-3/4'>
            
            
            <thead >
                <tr >
                    <th>Title</th>
                    <th>Des</th>
                    <th>link1</th>
                    <th>link2</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((items,index)=>(
                    <tr key={index}>
                        <td  className='border border-gray-400'>{items.title}</td>
                        <td className='w-[30%] border  border-gray-400'>{items.description}</td>
                        <td className='border border-gray-400'>{items.link1}</td>
                        <td  className='border border-gray-400'>{items.link2}</td>
                        <td  className='border border-gray-400 '>
                            <div className='flex items-center justify-center'>
                            <Link  className='px-4 py-2 bg-indigo-500 rounded-full mx-2 ' to={`/update/${items._id}`}>Update</Link>
                            <button className='px-4 py-2 bg-red-500 rounded-full mx-2' onClick={()=>{
                                HandleDelete(items._id)
                            }} to={`/`}>Delete</button> </div>                       
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>


        <h1>Experience</h1>
        <Link to={`/exp/add`}>Add experience</Link>
        <div className='flex items-center justify-center'>
        <table className=''>
            <thead>
                <tr>
                    <th className=''>Company</th>
                    <th className=''>Role</th>
                    <th className=''>Des</th>

                    <th className=''>action</th>
                </tr>
            </thead>
            <tbody>
                {exp.map((data, key)=>(
                    <tr key={key} className=''>
                        <td className='border border-gray-400'>{data.comapny}</td>
                        <td className='border border-gray-400'>{data.role}</td>
                        <td className='border border-gray-400 '>{data.des}</td>
                      
                        <td className='border border-gray-400'> 
                        <div  className='flex items-center justify-center'>
                        <Link  className='px-4 py-2 bg-indigo-500 rounded-full mx-2' to={`/updateExp/${data._id}`}>Update</Link>
                        <button  className='px-4 py-2 bg-red-500 rounded-full mx-2' onClick={()=>
                            expHandleDelete(data._id)
                        }>Delete</button></div>   
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home

