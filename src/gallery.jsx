import React from 'react'

export default function Gallery() {
  return (
    <>
 
      <div 
        className="about_back w-100 h-300 bg-cover bg-center flex items-center justify-center"
        style={{ height: "300px",}}>
           <img src={`${process.env.PUBLIC_URL}/About-Us-1.jpg`} className="w-100 h-100" alt="..."/>

          <div className=" row text-center">
          <h1 className="text-center pt-5" >Gallery</h1>
          <p className="text-lg mt-2"><a className="text-decoration-none text-white" href="/home">Home</a> » Gallery</p>
          </div>
      </div>


      <div className="container">

        <div className="row">
            <div className="col-lg-4 col-md-6 gallery">
                <img src={`${process.env.PUBLIC_URL}/gallery1.jpg`} className="w-100 h-100" alt="..."/>
            </div>
            <div className="col-lg-4 col-md-6 gallery">
                <img src={`${process.env.PUBLIC_URL}/gallery2.jpg`} className="w-100 h-100" alt="..."/>
            </div>
            <div className="col-lg-4 col-md-6 gallery">
                <img src={`${process.env.PUBLIC_URL}/gallery3.jpg`} className="w-100 h-100" alt="..."/>
            </div>
            <div className="col-lg-4 col-md-6 gallery">
               <img src={`${process.env.PUBLIC_URL}/gallery4.jpg`} className="w-100 h-100" alt="..."/>
            </div>
            <div className="col-lg-4 col-md-6 gallery">
               <img src={`${process.env.PUBLIC_URL}/gallery2.jpg`} className="w-100 h-100" alt="..."/>
            </div>
            <div className="col-lg-4 col-md-6 gallery">
                <img src={`${process.env.PUBLIC_URL}/gallery3.jpg`} className="w-100 h-100" alt="..."/>
            </div>
        </div>
      </div>
    </>
  )
}
