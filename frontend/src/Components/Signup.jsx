import React, { useEffect } from 'react'
import { useFormik } from "formik";
import Swal from "sweetalert2";



const Signup = () => {
    const SignupForm = useFormik({
        initialValues: { firstName: "", lastName: "", password: "", email: "" },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            resetForm();

            const res = await fetch('http://localhost:5000/user/add',
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
                    title : 'Registered Successfully',
                    text: 'Login to Continue'
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
        <div className='py-5 vh-100 bg-body-secondary' >
            <div className='col-md-6 mx-auto'>
                

                    <h1> FREELANCER </h1>
                    <h2 className='my-3 '>SIGN UP FORM </h2>
                    <button className='btn btn-primary '> CONTINUE WITH FACEBOOK  </button>
                    <hr />
                    <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={SignupForm.handleSubmit}>
                            <label> FIRST NAME </label>
                            <input type='text' id="firstName" onChange={SignupForm.handleChange} value={SignupForm.values.firstName} className='form-control' placeholder='ENTER YOU FIRST NAME '></input>
                            <label> LAST NAME </label>
                            <input id="lastName" onChange={SignupForm.handleChange} value={SignupForm.values.lastName} type='text' className='form-control' placeholder='ENTER YOU LAST  NAME '></input>

                            <label> PASSWORD </label>
                            <input id="password" onChange={SignupForm.handleChange} value={SignupForm.values.password} type='text' className='form-control' placeholder='ENTER YOU PASSWORD  '></input>
                            <label> EMAIL  </label>
                            <input id="email" onChange={SignupForm.handleChange} value={SignupForm.values.email} type='text' className='form-control' placeholder='ENTER YOU EMAIL  '></input>
                            <input type="checkbox"></input>
                            <span> I AGREE TO THE TERMS AND CONDITION </span><br />
                            <button type='submit' className='btn btn-primary w-100'>JOIN FREELANCER</button>
                        </form>


                        <hr />
                        <span>ALREADY HAVE AN ACCOUNT </span>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Signup