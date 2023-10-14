import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import UpdateProject from './UpdateProject'
import { Link } from 'react-router-dom'

const Projectmanager = () => {
    const [projectList, setProjectList] = useState([])
    const getProjectData = async () => {
        const res = await fetch("http://localhost:5000/project/getall")
        const data = await res.json();
        console.log(data);
        setProjectList(data);
    }


    // useEffect(() => {
    // getProjectData();
    // }, []);


    useEffect(() => {
        getProjectData();
    }, [])

    const deleteProject = async (id) => {

            const res = await fetch("http://localhost:5000/project/delete/" +id)
            console.log(res.status);
            if (res.status===200)
            {
              Swal.fire({
                icon:'success',
                title:'Project deleted successfully'
              })
            }
        
          }

    


    return (
        <div>
            <h1 className='text-primary text-center'> PROJECTS DETAILS </h1>

            <div className='vh-100 bg-body-secondary'>
                <div className='container py-4'>
                    <table className='table table-dark mx-auto '>
                        <thead>
                            <tr>
                                <td> S.no </td>
                                <td> PROJECT NAME </td>
                                <td> PROJECT DESCRIPTION  </td>
                                <td> AMOUNT </td>
                                <td>  DURATION  </td>
                                <td> TECHNOLOGY  </td>
                               
                                <td colSpan={2}> ACTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            {projectList.map((project, index) => {

                                return <tr>
                                    <td> {index + 1} </td>
                                    <td> {project.name}</td>
                                    <td> {project.description}  </td>
                                    <td> {project.amount} </td>
                                    <td>  {project.duration}  </td>
                                    <td> {project.technology}  </td>
                                    
                                    <td> <button className='btn btn-danger' onClick={(id) => {deleteProject(project._id)}}> DELETE </button></td>
                                    <td> <Link to={"/updateProject/"+project._id} className='btn btn-danger'>EDIT </Link>
                    
                                    
                                    </td>
                                </tr>

                            })}


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}



export default Projectmanager