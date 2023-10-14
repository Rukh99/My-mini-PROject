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
                <div className='card my-auto'>
                <h3 className='text-primary'> PROJECT DETAILS </h3>
                    <div className='card-body'>
                        <h3>Name: {projectData.name}</h3>
                        <h3> DESCRIPTION: {projectData.description}</h3>
                        <h3>Amount: {projectData.amount}</h3>
                        <h3>  TECHNOLOGY: {projectData.technology}</h3>
                        <h3> DURATION :{projectData.duration}</h3>


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