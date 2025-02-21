import React from 'react'

export default function Slider() {

  
  return (
    <>

<div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={`${process.env.PUBLIC_URL}/Slider_1.jpg`} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={`${process.env.PUBLIC_URL}/Slider_2.jpg`} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={`${process.env.PUBLIC_URL}/Slider_3.jpg`} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </>
  )
}
