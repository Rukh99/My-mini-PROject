import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BrowzeProjects = () => {
    const [projectList, setProjectList] = useState([])

    const fetchProjectData = async () => {
        const res = await fetch('http://localhost:5000/project/getall');
        const data = await res.json();
        console.log(data);
        setProjectList(data);


    }

    useEffect(() => {
        fetchProjectData();
    }, []);

    const displayData = () => {
        return projectList.map((project) => {
            return <div className='col-md-4'>
            
                <div className='card'>
                    <div className="card-body">
                        <h3>{project.name}</h3>
                        <p>{project.amount}</p>
                        <p>{project.technology}</p>
                        <button className='button'>
                        <Link to={'/projectdetails/' + project._id}>
                        View More
                    </Link>
                        </button>
                       
                    </div>
                </div>
            </div>
        })
    }


    return (
        <div className='container-1 '>
        <header className='bg-dark p-3'>
        <h1 className='text-center text-primary'  > INTRODUCING PROJECTS HUB </h1>
        <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"></input>
            <h5 className='text-secondary text-danger'> Build What you love  </h5>
            <div className='row'>
                <h1 className='bg-body-dark text-danger'> EXPLORE YOUR CATEGORIES </h1>
                {displayData()}
            </div>

       
        </header>
        </div>

            
    )
}

export default BrowzeProjects