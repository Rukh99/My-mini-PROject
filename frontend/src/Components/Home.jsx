import React from 'react'

const Home = () => {
  return (
    <div className='banner'>
    <div className='banner container mt-5'>
      
        <div className="row py-5">
          <div className="col-md-6 my-auto">
            <h1 className='text-primary'>WELCOME TO FREELANCER </h1>
            <h4>Safe and secure</h4>
            <p>Be in control. Keep in contact.
Use our collaboration tools to work efficiently with your freelancer. Share files, chat in real-time, monitor progress, and so much more</p>
          </div>
          <div className="col-md-6">
          <video className='background-video img-fluid' src="/video/video1.mp4" muted autoPlay loop></video>
          </div>
        </div>
        </div>
    
      <div className='container'>
  
      <div className="row py-5">
          <div className="col-md-6 my-auto">
            <h1 className='text-primary'>HOW IT WORKS  </h1>
            <ul>
            <li> <h3> POST A PROJECT </h3>
            <p>Simply post a project or contest for what you need done and receive competitive bids from freelancers within minutes.</p>
            </li>
            <li><h3>CHOOSE THE PERFECT FREELANCER </h3>
            <p>
            Browse freelancer profiles. Chat in real-time. Compare proposals and select the best one. Award your project and your freelancer starts work.
            </p>

            </li>
            <li>
            <h3> PAY WHEN YOU WERE SATISFIED </h3>
            <p>Pay securely using our Milestone Payment system. Release payments when it has been completed and you're 100% satisfied.</p>
            </li>
            </ul>
            
          </div>
          <div className="col-md-6">
          <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfpC_GlRy5Gfi3WXiel3H3jTJPTbNGsHVqQ&usqp=CAU"/>
          </div>
        </div>
        
        </div>
        <footer className='footer'>
          <h3 className='text-white text-center ' >
            Power your organisation competitive advantage with Freelancer
          </h3>

        </footer>
    
        </div>

  )
}

export default Home;