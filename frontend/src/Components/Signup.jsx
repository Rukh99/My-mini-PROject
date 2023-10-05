import React, { useEffect } from 'react'
import { useFormik } from "formik"
const Signup = () => {


    const SignupForm = () => useFormik({ initialValues: { FirstName:"", LastName : "", PASSWORD:"", EMAIL:"" },
    onSubmit: async(values, { resetForm }) =>
    {console.log(values);
    resetForm();
    
    const res = await fetch('https://localhost:5000/user/add',
        {
            method: 'POST',
            body: JSON.stringify(values),
                header: {
        'content-type': 'application/json'}})
    }})
    useEffect(() => {
        SignupForm();
    
      return () => {
      }
    }, [])
    
 
       

return (
    <div className='py-5 vh-100 bg-body-secondary' >
        <div className='col-md-6 mx-auto'>
                <div className='card-body'>
                
                    <h1> FREELANCER </h1>
                    <h2 className='my-3 '>SIGN UP FORM </h2>
                    <button className='btn btn-primary '> CONTINUE WITH FACEBOOK  </button>
                    <hr />
           <div className='card'>
           <form onSubmit={SignupForm.handleSubmit}> 
        <label> FIRST NAME </label>
                    <input type='text' id="FirstName" onChange={SignupForm.handleChange} value={SignupForm.values.FirstName} className='form-control' placeholder='ENTER YOU FIRST NAME '></input>
                    <label> LAST NAME </label>
                    <input id="LastName" onChange={SignupForm.handleChange} value={SignupForm.values.LastName} type='text' className='form-control' placeholder='ENTER YOU LAST  NAME '></input>

                    <label> PASSWORD </label>
                    <input  id="PASSWORD" onChange={SignupForm.handleChange} value={SignupForm.values.Password}type='text' className='form-control' placeholder='ENTER YOU PASSWORD  '></input>
                    <label> EMAIL  </label>
                    <input id="EMAIL" onChange={SignupForm.handleChange} value={SignupForm.values.Email} type='text' className='form-control' placeholder='ENTER YOU EMAIL  '></input>
                    <input type="checkbox"></input>
                    <span> I AGREE TO THE TERMS AND CONDITION </span><br />
                    </form>

                    <button type='submit' className='btn btn-primary'>JOIN FREELANCER</button>

                    <hr />
                    <span>ALREADY HAVE AN ACCOUNT </span>
                </div>
</div>
                
                </div>

        </div>

)
}

export default Signup