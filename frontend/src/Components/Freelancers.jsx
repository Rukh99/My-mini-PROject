import { useFormik } from "formik";
import { useState } from "react";
import { Formik } from 'formik'
import { React } from 'react';
import Swal from 'sweetalert2'

const Freelancers = () => {
  const [userData, setUserData] = useState(JSON.parse(sessionStorage.getItem('user')));

  const submitForm = async (values) => {
    const res = await fetch("http://localhost:5000/user/update/" + userData._id,
      {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }


      })

    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Profile updated  successfully'
      })

      const data = await res.json();
      console.log(data);
      setUserData(data);
      sessionStorage.setItem('user', JSON.stringify(data));
    }

  }










  return (
    <div>

      <header className="bg-dark p-3">
        <h1 className='text-primary text-center'> FIND THE PERFECT FREELANCER FOR YOUR PROJECT  </h1>

      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card my-3'>
              <div className='card-body'>
                <form className='mx-auto'>
                  <label>  FIRST NAME </label>
                  <p>{userData.firstName}</p>
                  <label>  LAST NAME </label>
                  <p>{userData.lastName}</p>

                  <label> EMAIL </label>
                  <p>{userData.email}</p>
                  <label> PASSWORD  </label>
                  <p>{userData.password}</p>
                  <label> EDUCATION  </label>
                  <p>{userData.education}</p>
                  <label> EXPERIENCE  </label>
                  <p>{userData.experience}</p>
                  <label> SKILLS   </label>
                  <p>{userData.skills}</p>



                </form>


              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <h1> UPDATE YOUR PROFILE </h1>
            <div className='card-body'>
              {userData !== null ? (
                <Formik initialValues={userData} onSubmit={submitForm}>
                  {(userData) => (
                    <form onSubmit={userData.handleSubmit}>
                      <label>  FIRST NAME </label>
                      <input id="firstName" onChange={userData.handleChange} value={userData.values.firstName} type="text" className='form-control' placeholder=""></input>
                      <label>  LAST NAME </label>
                      <input id="lastName" onChange={userData.handleChange} value={userData.values.lastName} type="text" className='form-control' placeholder=""></input>
                      <label> EMAIL </label>
                      <input id="email" onChange={userData.handleChange} value={userData.values.email} type="text" className='form-control' placeholder=""></input>
                      <label> PASSWORD  </label>
                      <input id="password" onChange={userData.handleChange} value={userData.values.password} type="text" className='form-control' placeholder=""></input>
                      <label>EDUCATION </label>
                      <input id="education" onChange={userData.handleChange} value={userData.values.education} type="text" className='form-control' placeholder=""></input>
                      <label> SKILLS   </label>
                      <input id="skills" onChange={userData.handleChange} value={userData.values.skills} type="text" className='form-control' placeholder=""></input>
                      <label> EXPERIENCE   </label>
                      <input id="experience" onChange={userData.handleChange} value={userData.values.experience} type="text" className='form-control' placeholder=""></input>
                      <hr/>
                      <button type="submit" className="button"> SUBMIT </button>
                    </form>)}
                </Formik>) : <h1>Loading ...</h1>}

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Freelancers