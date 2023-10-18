import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import ProjectForm from './ProjectForm'

const UpdateProject = () => {
  const [projectData, setProjectData] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const fetchProjectData = async () => {
    const res = await fetch("http://localhost:5000/project/getbyid/"+id)
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setProjectData(data);

  }
  
  useEffect(() => {
    fetchProjectData();
  }, []);



  const submitForm = async (values) => {
    const res = await fetch("http://localhost:5000/project/update/" + id,
      {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }


      });

    console.log(res.status);
    if (res.status === 200) {

      Swal.fire({
        icon: 'success',
        title: 'Project updated successfully',
        

      })
      navigate ('/browzeproject'); 
    }
   
  }

  return (
    <div>
      <div className='col-md-6 mx-auto'>
        <div className='card bg-dark'>
          <div className='card-body '>
            <h2  className='text-white'> PROJECT UPDATE FORM  </h2>
            {projectData !== null ? (
              <Formik initialValues={projectData} onSubmit={submitForm}>
                {(ProjectForm) => (
                  <form onSubmit={ProjectForm.handleSubmit}>

                    <label className='card-title'> PROJECT NAME </label>
                    <input id="name" onChange={ProjectForm.handleChange} value={ProjectForm.values.name} type="text" className="form-control">
                    </input>
                    <label className='card-title'> PROJECT DESCRIPTION  </label>
                    <input id="description" onChange={ProjectForm.handleChange} value={ProjectForm.values.description} type="text" className="form-control">
                    </input>
                    <label className='card-title'> DURATION  </label>
                    <input id="duration" onChange={ProjectForm.handleChange} value={ProjectForm.values.duration} type="text" className="form-control">
                    </input>
                    <label className='card-title'> AMOUNT  </label>
                    <input id="amount" onChange={ProjectForm.handleChange} value={ProjectForm.values.amount} type="text" className="form-control">
                    </input>
                    <label className='card-title'> TECHNOLOGY USED  </label>
                    <input id="technology" onChange={ProjectForm.handleChange} value={ProjectForm.values.technology} type="text" className="form-control">
                    </input>
                    <br />
                    
                    <button type="submit" className='button'> SUBMIT  </button>
                   

                  </form>)}
              </Formik>) : <h1>Loading ...</h1>}
          

          </div> </div> </div> </div>

  )
}

export default UpdateProject