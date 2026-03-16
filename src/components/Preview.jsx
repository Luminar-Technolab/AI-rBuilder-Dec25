import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview({resumeData}) {
  return (
    <div className='w-100'>
        <h2>{resumeData?.fullName}</h2>
        <p className='fs-6 lh-1'>Phone: {resumeData?.phone} </p>
        <p className='fs-6 lh-1' >Email: {resumeData?.email} </p>
        <p className='fs-6 lh-1'>LinkedIn: <a href={resumeData?.linkedin}>{resumeData?.linkedin}</a> </p>
        <p className='fs-6 lh-1'>Github: <a href={resumeData?.github}>{resumeData?.github}</a> </p>
        <p className='fs-6 lh-1'>Location: {resumeData?.location} </p>
        <Divider className='bg-dark my-3'/>
        <h4>Professional Summary</h4>
        <p>{resumeData?.summary}</p>
        <Divider className='bg-dark'/>
        <h4 className='mt-3'>Technical Skills</h4>
        {/* duplicate according to user skill */}
        {
          resumeData?.skills?.map((item,index)=>(
            <span key={index} ><Button variant="text" className='text-dark'>{item}</Button>{index!=resumeData?.skills?.length-1 && ','} </span>
          ))
        }
        <Divider className='bg-dark my-3'/>
        <h4>Education</h4>
        <p className='fs-6 lh-1'>Bachelor’s Degree in <b >{resumeData?.degree}</b></p>
        <p className='fs-6 lh-1'>University/College Name : {resumeData?.university} </p>
        <p className='fs-6 lh-1'>Year of Graduation : {resumeData?.passOut}</p>
    </div>
  )
}

export default Preview