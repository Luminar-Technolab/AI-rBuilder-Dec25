//rfce
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* landing */}
      <div style={{height:'100vh',backgroundImage:'url("/landing.png")',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center'>
        <div className="row container-fluid">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 rounded shadow p-5 text-center text-light" style={{backgroundColor:'rgba(151,152,143,0.7)'}}>
              <h3>Designed To Get Hired.
                Your Skills, Your Story,
                Your Next Job - All In One.
              </h3>
              <Link to={'/steps'} className="btn text-light" style={{backgroundColor:'#9b7856'}}>MAKE YOUR RESUME</Link>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      {/* tools */}
      <div className="container mb-5">
        <h1 className="text-center my-5">Tools</h1>
        <div className="row align-items-center ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Resume</h5>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h5>Cover Letters</h5>
            <p> Easily write professional cover letters.</p>
            <h5>Jobs</h5>
            <p> Automatically receive new and relevant job postings.</p>
            <h5>Applications</h5>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
           <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img width={'100%'} height={'500px'} src="/resume.png" alt="resume" />
          </div>
        </div>
      </div>
      {/* image */}
      <div style={{height:'80vh',backgroundImage:'url("https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?cs=srgb&dl=pexels-fauxels-3184360.jpg&fm=jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}> </div>
      {/* testimony */}
      <div className="container mb-5">
        <h1 className="text-center my-5">Testimony</h1>
        <div className="row align-items-center ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Trusted by professionals worldwide.</h5>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p> In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p> Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>
          </div>
           <div className="col-lg-1"></div>
          <div className="col-lg-5">
           <div className="row">
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://img.freepik.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="user" />
            </div>
            <div className="col-lg-3">
              <img className='w-100 p-2' src="https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180" alt="user" />
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home