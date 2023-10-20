import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {

    const { id } = useParams();
    const [projectData, setProjectData] = useState(null);


    const fetchProjectData = async () => {
        const res = await fetch("http://localhost:5000/project/getbyid/" + id)
        const data = await res.json();
        console.log(data);
        setProjectData(data);
    }

    useEffect(() => {
        fetchProjectData();
    }, []);

    const displayProjectData = () => {
        if (projectData !== null) {
            return (
                <div className='card mx-auto'>
                <h3 className='text-primary text-center'> PROJECT DETAILS </h3>
                    <div className='card-body mx-auto'>

                    <table className='table mx-auto'>
                    <thead>
                    <tr className="">
                    <th>  NAME </th>
                    <th>  DESCRIPTION </th>
                    <th>  AMOUNT </th>
                    <th>  TECHNOLOGY </th>
                    <th>  DURATION </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                    <td> {projectData.name}  </td>
                    <td>{projectData.description} </td>
                    <td> {projectData.amount}</td>
                    <td> {projectData.technology}</td>
                    <td>{projectData.duration} </td>
                    </tr>

                    
                    </tbody>
                    </table>
                        

                    </div>
                </div>
            )
        }
    }


    return (
        <div>

            {displayProjectData()}


        </div> 
    )
}

export default ProjectDetails;