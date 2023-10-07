import React, { useEffect, useState } from 'react'

const Projectmanager = () => {
    const [projectList, setProjectList] = useState([])
    const getProjectData = async()=>{
        const res= await fetch("http://localhost:5000/project/getall")
        const data= await res.json();
        console.log(data);
        setProjectList(data);}

        // useEffect(() => {
        // getProjectData();
        // }, []);


        useEffect(() => {
        getProjectData();
        }, [])
        
    

        
  return (
    <div>
    <h1 className='text-primary text-center'> PROJECTS DETAILS </h1>

    <div className='vh-100 bg-body-secondary'>
    <div className='container py-4'>
    <div className='table table-dark mx-auto '>
    <thead>
    <tr>
    <td> S.no </td>
    <td> PROJECT NAME </td>
    <td> PROJECT DESCRIPTION  </td>
    <td> AMOUNT </td>
    <td>  DURATION  </td>
    <td> TECHNOLOGY  </td>
    <td> REFERENCE  </td>
    <td colspan={2}> ACTION</td>
    </tr>
 </thead>
 <tbody>
 {projectList.map((project,index) => {
    
       return <tr>
        <td> {index+1} </td>
        <td> {project.name}</td>
        <td> {project.description}  </td>
        <td> {project.amount} </td>
        <td>  {project.duration}  </td>
        <td> {project.technology}  </td>
        <td> {project.reference}  </td>
        <td> <button className='btn btn-danger'> DELETE </button></td>
        <td> <button className='btn btn-danger'> EDIT  </button></td>
        
        </tr>
        
 })}
 
 
 </tbody>
    </div>
    </div>
    </div>
     
    </div>
    )}

 

export default Projectmanager