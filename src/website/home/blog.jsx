import React from 'react'

export default function blog() {
  return (
    <>
   
      <div className="row blog">
        <h1 className='text-center mt-3'>LATEST <span className='text-success'>ARTICLE</span></h1>
        <div className="col-md-6">
        <img src={`${process.env.PUBLIC_URL}/artical2.png`} alt=""/>
        </div>
        <div className="col-md-6">
           <img src={`${process.env.PUBLIC_URL}/article1.png`} alt=""/>
        </div>
      </div>
    </>
  )
}
