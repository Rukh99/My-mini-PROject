import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import{useNavigate} from 'react-router-dom'
import Swal  from 'sweetalert2'
import ProjectForm from './ProjectForm'

const UpdateProject = () => {
    const [getProjectData, setProjectData] = useState()
    
    const navigate= useNavigate();

    const fetchProjectData= async()  =>{
        const res = await fetch("http://localhost:5000/project/getbyid/", +id)
        console.log(res.status);
        const data= await res.json();
        console.log(data);
        setProjectData(data);

    }
    useEffect(() => {
    }, [fetchProjectData]);

    const submitFOrm  = async(values) => {
        const res = await fetch("http://localhost:5000/project/update/" +id,
        {
            method:'PUT',
            body: json.stringify(values),
            Headers:{'Content-Type': 'application/json'}


        });}
        console.log(res.status);
        if(res.status===200)
        Swal.fire({
    icon:'success',
    title:'Project updated successfully'

    })

    naviagte('/UpdateProject')


        


    

  return (
    <div>
    <div className='col-md-4 mx-auto'>
    <div className='card'>
    <div className='card-body'>
    <h2 className='PROJECT UPDATE FORM '> </h2>
    {getProjectData !== null ? (
        <Formik initialValues={getProjectData} onSubmit={ProjectForm}>
          {(ProjectForm) => (
            <form onSubmit={ProjectForm.handleSubmit}>
            
<label> PROJECT NAME </label>
<input id="name" onChange={addForm.handleChange} value={addForm.values.name}  type="text" className="form-control">
</input>
<label> PROJECT DESCRIPTION  </label>
<input id="description" onChange={addForm.handleChange} value={addForm.values.description} type="text" className="form-control">
</input>
<label> DURATION  </label>
<input id="duration" onChange={addForm.handleChange} value={addForm.values.duration}type="text" className="form-control">
</input>
<label> AMOUNT  </label>
<input id="amount" onChange={addForm.handleChange} value={addForm.values.amount}type="text" className="form-control">
</input>
<label> TECHNOLOGY USED  </label>
<input id="technology" onChange={addForm.handleChange} value={addForm.values.technology} type="text" className="form-control">
</input><br/>
<label> REFERENCE  </label>
<input id="reference" onChange={addForm.handleChange} value={addForm.values.reference} type="text" className="form-control">
</input><br/>
<button type="submit" className='btn btn-primary form-control'> SUBMIT  </button>


</form>)}
 </Formik>)}
 </div> </div> </div> </div>

  )
}

export default UpdateProject