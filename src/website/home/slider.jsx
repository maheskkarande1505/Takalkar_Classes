import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Slider() {

  var [images, setImages] = useState([]);

   useEffect(() => {
    axios
      .get("https://react-admin-44yh.onrender.com/admin/slider_api")
      .then((response) => {
        console.log("Full API Response",response)
        setImages(response.data); // Ensure response.data is an array of image URLs
       
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  function loadImage(){
    
  }

  return (
    <>

<div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/Slider_1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/Slider_2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/Slider_3.jpg" className="d-block w-100" alt="..."/>
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
