import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div style={{minHeight:'350px',backgroundColor:'#9b7856'}} className='container-fluid text-light p-5' >
      <div className="row ">
        <div className="col-lg-4">
          <h4 className='mb-3'>AI rBuilder</h4>
          <p style={{textAlign:'justify'}}>An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
            <h4 className='mb-3'>Contact Us</h4>
            <p> <MdAttachEmail /> resumebuilder@gmail.com</p>
            <p> <FaPhoneAlt /> 9087654321</p>
            <h5 className='mt-3'>Connect With Us</h5>
            <div className="my-3 fs-5">
              <FaInstagram />
              <FaSquareFacebook className='mx-2'/>
              <FaWhatsapp />
            </div>
        </div>
      </div>
      
      <h6 className='text-center my-2'>Designed & built with ❤️ using React</h6>
    </div>
  )
}

export default Footer