import React, { useEffect } from 'react'
import { Formik, useFormik } from 'formik'

const Login = () => {
  const LoginForm = useFormik({
    initialValues: {
      EMAIL: "",
      PASSWORD: ""
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();


      const res = await fetch('https://localhost:5000/user/add',
        {
          method: 'POST',
          body: 'JSON.stringify(values),
        headers : { 'Content-Type': 'application/json' },

        })
    })}


  useEffect(() => {
    LoginForm()

  }, [])



  return (
    <div>
      <div><div className='py-5 vh-100 bg-body-secondary' >
        <div className='col-md-6 mx-auto'>
          <div className='card'>
            <div className='card-body'>
              <h1> FREELANCER </h1>
              <h2 className='my-3 '> WELCOME BACK  </h2>
              <button className='btn btn-primary '> CONTINUE WITH FACEBOOK  </button>
              <hr />
              <form onSubmit={LoginForm.handleChange}>
                <label> EMAIL OR USERNAME </label>
                <input type="text" id="EMAIL" onChange={LoginForm.handleChange} value={LoginForm.values.EMAIL} className='form-control' placeholder='ENTER YOUR EMAIL OR USERNAME'></input>

                <label> PASSWORD  </label>
                <input type="text" id="PASSWORD" onChange={LoginForm.handleChange} value={LoginForm.values.PASSWORD} className='form-control' placeholder='ENTER YOUR PASSWORD '></input>



                <span> REMEMBER ME </span>
                <a> FORGOT PASSWORD </a>

                <button type="submit" className="btn btn-primary form-control"> Login </button>

                <hr />
              </form>


            </div>
          </div>
        </div></div>
      </div>

    </div>
  )

  }


export default Login