import React, { useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import Swal from 'sweetalert2'
import useAppContext from '../AppContext'

const Login = () => {
  const { setLoggedIn } = useAppContext();
  const LoginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();


      const res = await fetch('http://localhost:5000/user/authenticate',
        {
          method: 'POST',
          body: JSON.stringify(values),
          headers: { 'Content-Type': 'application/json' }
        })
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'login Successfully',

        })
        setLoggedIn(true);
        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));


      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong!!'
        })
      }
    }
  }
  )

  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 my-auto'>
            <div className='card mx-auto'>
              <div className='card-body'>
                <h1 className='text-primary'> FREELANCER </h1>
                <h2 className='my-3 text-primary '> WELCOME BACK  </h2>
                <hr />
                <form onSubmit={LoginForm.handleSubmit}>
                  <label className='card-tit'> EMAIL OR USERNAME </label>
                  <input type="text" id="email" onChange={LoginForm.handleChange} value={LoginForm.values.email} className='card-title form-control' placeholder='ENTER YOUR EMAIL OR USERNAME' />

                  <label className='card-tit '> PASSWORD  </label>
                  <input type="text" id="password" onChange={LoginForm.handleChange} value={LoginForm.values.password} className=' card-title form-control' placeholder='ENTER YOUR PASSWORD ' />
                  <br/>

                  <button type="submit" className="button"> Login </button>


                  <hr />
                </form>
              </div>

            </div>

          </div>
          <div className='col-md-6'>
            <img className="w-100" src="https://www.wishesmsg.com/wp-content/uploads/Welcome-Messages-for-Customers-1.jpg" />
          </div>
        </div>

      </div>

    </div>


  )
}

export default Login