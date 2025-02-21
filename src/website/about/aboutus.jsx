import React from "react";
function AboutA () {
  return (
    <>
  
  
      <div className="about_back w-100 h-300 bg-cover bg-center flex items-center justify-center">
          <div className=" row text-center">
          <img src={`${process.env.PUBLIC_URL}/About-Us-1.jpg`} className="d-block w-100" alt="..."/>

          <div className=" row text-center">

          <h1 className="text-center pt-5" >About Us</h1>
          <p className="text-lg mt-2"><a className="text-decoration-none text-white" href="">Home</a> » About</p>
          </div>
      </div> 
      </div>
 
 

</>
  );
};

export default AboutA;