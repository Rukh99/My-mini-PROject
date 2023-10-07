import React, { useState } from 'react'


const Freelancers = () => {

    const [first, setfirst] = useState([])
  return (
    <div>

    <div className='container'>
    <h1 className='text-primary text-center'> FIND THE PERFECT FREELANCER FOR YOUR PROJECT  </h1>
    <div className='row'>
    <div className='col-md-6'>
    <div className='card'>
    <div className='card-body'>
    
    
{
    first.map((profile)=>(
        <h4>{profile.Name}</h4>
    ))
}
        
        


    
    
    </div>
    </div>
    </div>
    </div>
    
    
    </div>
    
    
    
    </div>
  )
}

export default Freelancers