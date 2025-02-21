import React from 'react'
import Course from './website/home/course'
import CourcesBanner from './website/cources/Cources Banner'
export default function Courcespage() {
  return (
    <>
    
<CourcesBanner/>
        <h1 className='text-center bolder text-danger-emphasis m-5'>Courses Offered</h1>

      <Course/>
      
    </>
  )
}
