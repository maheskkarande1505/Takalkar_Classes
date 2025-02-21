import React from 'react'

export default function Gallery() {
  return (
    <>
 
      <div 
        className="about_back w-100 h-300 bg-cover bg-center flex items-center justify-center"
        style={{ height: "300px",}}>
          <img src="../../About-Us-1.jpg" alt="" />
          <div className=" row text-center">
          <h1 className="text-center pt-5" >Gallery</h1>
          <p className="text-lg mt-2">Home » Gallery</p>
          </div>
      </div>


      <div className="container">

        <div className="row">
            <div className="col-lg-4 col-md-6 gallery">
                <img src="../gallery1.jpg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 gallery">
                <img src="../gallery2.jpg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 gallery">
                <img src="../gallery3.jpg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 gallery">
                <img src="../gallery1.jpg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 gallery">
                <img src="../gallery2.jpg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 gallery">
                <img src="../gallery3.jpg" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}
