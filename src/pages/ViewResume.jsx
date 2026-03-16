import React, { useEffect, useState } from 'react'
import { FaFileDownload } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { IoMdRefresh } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { getResumeAPI } from '../services/allResumeApiService';

function ViewResume() {
 const {id} = useParams()
 const [resumeData,setResumeData] = useState({})
 console.log(resumeData);

 useEffect(()=>{
  getResumeDetails()
 },[])

 const getResumeDetails = async()=>{
  if(id){
    const result = await getResumeAPI(id)
    // console.log(result);
    setResumeData(result.data)
  }
 }

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
          <div className=' p-5'> <Preview resumeData={resumeData}/> </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default ViewResume