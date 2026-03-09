import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'#9b7856'}} className='d-flex justify-content-center align-items-center flex-column text-light' >
      <h1 className='mb-3'>Contact Us</h1>
      <h5> <MdAttachEmail /> resumebuilder@gmail.com</h5>
      <h5> <FaPhoneAlt /> 9087654321</h5>
      <h2 className='mt-3'>Connect With Us</h2>
      <div className="my-3 fs-5">
        <FaInstagram />
        <FaSquareFacebook className='mx-2'/>
        <FaWhatsapp />
      </div>
      <h6>Designed & built with ❤️ using React</h6>
    </div>
  )
}

export default Footer