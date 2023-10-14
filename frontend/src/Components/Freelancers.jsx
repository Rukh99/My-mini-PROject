import { useFormik } from "formik";
import { useState } from "react";
import { Formik } from 'formik'
import {React} from 'react';
 
const Freelancers = () => {
  const [userData, setUserData] = useState(JSON.parse(sessionStorage.getItem('user')));
  
  const submitForm = async (values) => {
    const res = await fetch("http://localhost:5000/project/update/",
      {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }


      });
    }
  

  return (
    <div>
      <div className='container'>
        <h1 className='text-primary text-center'> FIND THE PERFECT FREELANCER FOR YOUR PROJECT  </h1>
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
         <input id="firstName" onChange={userData.handleChange} value={userData.handleChange.firstName} type="text" className='form-control' placeholder=""></input>
         <label>  LAST NAME </label>
         <input id="lastName" onChange={userData.handleChange} value={userData.handleChange.lastName}type="text" className='form-control' placeholder=""></input>
         <label> EMAIL </label>
         <input id="email" onChange={userData.handleChange} value={userData.handleChange.email} type="text" className='form-control' placeholder=""></input>
         <label> PASSWORD  </label>
         <input id="password" onChange={userData.handleChange} value= {userData.handleChange.password} type="text" className='form-control' placeholder=""></input>
         <label>EDUCATION </label>
         <input id="education" onChange={userData.handleChange} value= {userData.handleChange.education} type="text" className='form-control' placeholder=""></input>
         <label> SKILLS   </label>
         <input id="skills" onChange={userData.handleChange} value= {userData.handleChange.skills} type="text" className='form-control' placeholder=""></input>
         <label> EXPERIENCE   </label>
         <input id="experience" onChange={userData.handleChange} value= {userData.handleChange.experience} type="text" className='form-control' placeholder=""></input>
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