import React from 'react'
import { NavLink } from 'react-router-dom'


export default function About() {
  return (
    <>

      <div className="container">
        <div className="row mt-5">
            <div className="col-md-6 ">
              <img src={`${process.env.PUBLIC_URL}/About.png`} alt="" className="w-25"/><br></br>
              <img src={`${process.env.PUBLIC_URL}/About_text.png`} alt="" className="w-25"/>
            <h1 className='about_takalkar'><span className='text-success'>Takalkar</span> Classes</h1><br/>
                <p className='about_text'>In the year 1987, a visionary saw a dream. A dream to impart quality education to every student who would come seeking it. Through his persistent efforts , Prof. Kedar Takalkar realized his dream and brought the Takalkar Legacy to life along with Prof. Vrinda Takalkar, Prof. Ritesh Bhattad , and Mr. Sheetal Patil as support pillars and directors of the organization
                 <br/><br/>
                  <NavLink to={'/about'}>
                  <img src={`${process.env.PUBLIC_URL}/Read-More.png`} alt="" className="w-25"/>
                  </NavLink>
                  <br/><br/>

                </p>
                
                <b>
                <div className="about_icons"><i class="fa-solid fa-users-line"></i> 1 Lakh Alumni +  </div>
                <div className="about_icons"><i class="fa-solid fa-book-open-reader"></i> Admission Assistance</div> 
                <div className="about_icons"><i class="fa-solid fa-people-group"></i> TEMAT <br/></div>
               
                <div className="about_icons"><i class="fa-solid fa-swatchbook"></i> Learning Material </div>
                <div className="about_icons"><i class="fa-solid fa-laptop-file"></i> Quality Education </div>
                <div className="about_icons"><i class="fa-solid fa-piggy-bank"></i>Affotdable fees</div>
                </b>

               
            </div>
            <div className="col-md-6 mb-5">
              <img src={`${process.env.PUBLIC_URL}/Group-169_11zon.png`} alt="" className="w-100 h-100"/>

            </div>
        </div>
      </div>
    </>
  )
}
