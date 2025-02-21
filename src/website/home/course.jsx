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

        <div className="row text-center">

            <div className="col-lg-1 std_course1"></div>
            <div className="col-lg-1 std_course1"></div>
            <div className="col-lg-3 std_course1">
                <div className="div_1"><img src="../../8th-9th-10th-1.png" alt="" />
                <br/><br/><h5>8th , 9th , 10th</h5>
                (SSC,CBSE,ICSE Boards)
                </div>
            </div>
            <div className="col-lg-3 std_course1">
                <div className="div_2"><img src="../../11th-12th-Science-PCMB.png" alt="" />
                <br/><br/><h5>11th,12th,Science-PCMB</h5>(HSC & CBSE)</div>
            </div>
            
            <div className="col-lg-3 std_course1">
                <div className="div_3"><img src="../../JEE-NEET-CET.png" alt="" />
                <br/><br/><h5>JEE , NEET , CET</h5>
                </div>
                
            </div>
            <div className="col-lg-1 std_course1"></div>
        </div> 
  </div>
      
    </>
  )
}
