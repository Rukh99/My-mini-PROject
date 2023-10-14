import React, { useEffect } from 'react'
import { useFormik } from "formik";
import Swal from "sweetalert2";



const Signup = () => {
    const SignupForm = useFormik({
        initialValues: { firstName: "", lastName: "", password: "", email: "" },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            
            const res = await fetch('http://localhost:5000/user/add',
            {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            console.log(res.status);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registered Successfully',
                    text: 'Login to Continue'
                })
                //   navigate('/login');
                resetForm();

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong!!'
                })
            }
        }
    })


    return (
        <div className='py-5 vh-100 bg-body-secondary' >
            <div className='col-md-6 mx-auto'>

                <header className="" >
                    <h1 className='text-primary'> FREELANCER </h1>
                    <h1 className='my-3 text-primary  '>SIGN UP FORM </h1>
                </header>


                <hr />
                <div className='card bg-dark'>
                    <div className='card-body'>
                        <form onSubmit={SignupForm.handleSubmit}>
                            <label className='card-title'> FIRST NAME </label>
                            <input id="firstName" onChange={SignupForm.handleChange} value={SignupForm.values.firstName} type="text" className='card-title form-control' placeholder='ENTER YOUR FIRST NAME'></input>
                            <label className='card-title'> LAST NAME </label>
                            <input id="lastName" onChange={SignupForm.handleChange} value={SignupForm.values.lastName} type='text' className='card-title form-control' placeholder='ENTER YOU LAST NAME'></input>
                            <label className='card-title'> EMAIL  </label>

                            <input id="email" onChange={SignupForm.handleChange} value={SignupForm.values.email} type='text' className='card-title form-control' placeholder='ENTER YOU EMAIL'></input>
                            <label className='card-title '> PASSWORD </label>
                            <input id="password" onChange={SignupForm.handleChange} value={SignupForm.values.password} type='text' className=' card-title form-control' placeholder='ENTER YOU PASSWORD'></input>
                            <input type="checkbox" className=''></input>
                            <span className='card-title '> I AGREE TO THE TERMS AND CONDITION </span><br />
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