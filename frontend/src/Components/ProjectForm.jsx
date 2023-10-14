import { useFormik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2'

const ProjectForm = () => {
    const addForm= useFormik({
        initialValues: { name: "", description: "", duration: "", amount: "" , technology:"" , reference: ""},
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            resetForm();

            const res = await fetch('http://localhost:5000/project/add',
                {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                console.log(res.status);
                if(res.status === 200){
                  Swal.fire({
                    icon : 'success',
                    title : 'project added successfully ',
                    text: 'thank you for your project'
                  })
                //   navigate('/login');
          
                }else{
                  Swal.fire({
                    icon : 'error',
                    title : 'Error',
                    text: 'Something went wrong!!'
                  })
                }
        }
    })

  return (
    <div class="container mt-5">
    
    <div className='card bg-dark'>
    <div className='card-body'>
    <header>
    <h1 className='text-primary text-center'> FREELANCER </h1>
    <h4 className='text-secondary text-center '>Tell us what you need done </h4>
    </header>
    <hr/>
    
<form onSubmit={addForm.handleSubmit}>
<label className='card-title'> PROJECT NAME </label>
<input id="name" onChange={addForm.handleChange} value={addForm.values.name}  type="text" className="form-control">
</input>
<label className='card-title '> PROJECT DESCRIPTION  </label>
<input id="description" onChange={addForm.handleChange} value={addForm.values.description} type="text" className="form-control">
</input>
<label className='card-title'> DURATION  </label>
<input id="duration" onChange={addForm.handleChange} value={addForm.values.duration}type="text" className="form-control">
</input>
<label className='card-title'> AMOUNT  </label>
<input id="amount" onChange={addForm.handleChange} value={addForm.values.amount}type="text" className="form-control">
</input>
<label className='card-title'> TECHNOLOGY USED  </label>
<input id="technology" onChange={addForm.handleChange} value={addForm.values.technology} type="text" className="form-control">
</input><br/>

<button type="submit" className='button'> SUBMIT  </button>


</form>
</div>
    </div>
    '
    
    </div>
    
    
    
    
  )
}

export default ProjectForm