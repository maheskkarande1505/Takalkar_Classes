import React from 'react'

export default function CourcesBanner() {
  return (
    <>
   
      <div className="about_back ">
          <img src={`${process.env.PUBLIC_URL}/About-Us-1.jpg`} className="d-block w-100" alt="..."/>

          <div className=" row text-center">
          <h1 className="pt-5" >Cources</h1>
          <p className="mt-2"><a className="text-decoration-none text-white" href="/home">Home</a> » Cources</p>
          </div>
      </div> 
  
    </>
  )
}
