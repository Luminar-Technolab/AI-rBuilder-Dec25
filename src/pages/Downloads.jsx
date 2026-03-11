import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
function Downloads() {
  return (
    <div className='container'>
      <div className='d-flex my-5 justify-content-between align-items-center'>
        <h1>Downloaded Resume History</h1>
        <Link to={'/form'}> <IoArrowBackSharp/> Back</Link>
      </div>
      <div className="row mb-5">
        <div className="col-lg-4">
          <div style={{height:'400px'}} className="shadow p-3 rounded">
            <div className='d-flex justify-content-between align-items-center'>
              <h5>Review at : time</h5>
              <button className="btn fs-5 text-danger"> <MdDelete/> </button>
            </div>
            <div className="mt-3 text-center">
              <img height={'300px'} width={'200px'} src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg" alt="cv" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads