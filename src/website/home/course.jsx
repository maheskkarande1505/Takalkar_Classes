import React from 'react'
export default function Course() {
  return (
    <>
        <div className="flexible_courses">
            <p className='heding'>FLEXIBLE COURSES</p>
            <p className='text'>Our goal is to make students enjoy studies and prepare them for reacting greater heights. Our unique teaching methodology is focused on making students learn conceptually and in a way that works for them.
            8th , 9th , 10th
            (SSC,CBSE,ICSE Boards)
            11th,12th,Science-PCMB
            (HSC & CBSE)
            </p>
        </div>
      <div className="container">

        <div className="row text-center" style={{marginTop:"-50px"}}>

        <div className="col-md-3 offset-1">
              <div className="card">
                 <div className='card-body p-0'>
                   <img src={`${process.env.PUBLIC_URL}/8th-9th-10th-1.png`} alt="" className="w-100 h-100"/>
                 </div>
                 <div className='card-header p-4 pt-5 pb-5'>
                    <h6><b>8th , 9th , 10th</b></h6>
                    <p>(SSC,CBSE,ICSE Boards)</p>
                 </div>
              </div>
          </div>
 
          <div className="col-md-3">
              <div className="card">
                 <div className='card-body p-0'>
                   <img src={`${process.env.PUBLIC_URL}/11th-12th-Science-PCMB.png`} alt="" className="w-100 h-100"/>
                 </div>
                 <div className='card-header p-4 pt-5 pb-5'>
                    <h6><b>11th,12th,Science-PCMB</b></h6>
                    <p>(HSC & CBSE)</p>
                 </div>
              </div>
          </div>

          <div className="col-md-3">
              <div className="card">
                 <div className='card-body p-0'>
                   <img src={`${process.env.PUBLIC_URL}/JEE-NEET-CET.png`} alt="" className="w-100 h-100"/>
                 </div>
                 <div className='card-header p-5 pt-5 pb-5'>
                    <h6><b>JEE , NEET , CET</b></h6>
                    <p>.</p>
                 </div>
              </div>
          </div>
            
        </div> 
  </div>
      
    </>
  )
}
