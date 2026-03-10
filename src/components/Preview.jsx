import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div className='w-100'>
        <h2>FullName</h2>
        <p className='fs-6'>Phone: 9088673423 </p>
        <p className='fs-6'>Email: mail </p>
        <p className='fs-6'>LinkedIn: <a href="">url</a> </p>
        <p className='fs-6'>Github: <a href="">url</a> </p>
        <p className='fs-6'>Location: location </p>
        <Divider className='bg-dark my-3'/>
        <h4>Professional Summary</h4>
        <p>summary</p>
        <Divider className='bg-dark'/>
        <h4 className='mt-3'>Technical Skills</h4>
        {/* duplicate according to user skill */}
        <Button variant="text" className='text-dark'>Skill</Button>
        <Divider className='bg-dark my-3'/>
        <h4>Education</h4>
        <p className='fs-6'>Bachelor’s Degree in <b >degree</b></p>
        <p className='fs-6'>University/College Name</p>
        <p className='fs-6'>Year of Graduation</p>
    </div>
  )
}

export default Preview