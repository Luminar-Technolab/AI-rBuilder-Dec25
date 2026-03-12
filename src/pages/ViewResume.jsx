import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdRefresh } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import Preview from '../components/Preview';
import Edit from '../components/Edit';

function ViewResume() {
  return (
    <div className='container'>
      <div className="row my-3">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* icon set */}
          <div className="d-flex justify-content-center align-items-center ">
            {/* download */}
            <button className="btn  fs-3 me-2" style={{color:'#455b6b'}}> <FaFileDownload/> </button>
            {/* edit */}
            <Edit/>
            {/* history */}
            <Link to={'/downloads'} className="btn  fs-2 me-2" style={{color:'#14151a'}}> <IoMdRefresh/> </Link>
            {/* back */}
            <Link to={'/form'} className="btn fs-2 me-2" style={{color:'#4c4541'}}> <FaBackward/> </Link>
          </div>
          <div className=' p-5'> <Preview/> </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default ViewResume