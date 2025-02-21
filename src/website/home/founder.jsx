import React from 'react'
export default function founder() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 ps-2 mb-5">
              <img src={`${process.env.PUBLIC_URL}/About-the-founder.png`} alt="" className="w-75 h-100"/>
            </div>
            <div className="col-md-6">
                
                 <h1>ABOUT THE <span className='text-danger'>FOUNDER</span></h1>
                  <p className='text-muted'>
                  Prof. Kedar Takalkar is a noted educationist and has conducted more than 300 Faculty Development Workshops and more than 3000 seminars all over Maharashtra for parents and students. Through these seminars, he has guided on topics such as – Parenting, Techniques of Studying, How to write Board Papers, FYJC admission guidance, Aptitude tests, Engineering & Medical admission counseling etc.
                  </p>
                  <p className='text-muted'>
                  As an accomplished career counselor, he has been instrumental in directing thousands of young minds towards their dream careers. Times of India group has rightly felicitated him with the ‘Best Career Counselor Award’ for three consecutive years 2017, 2018 & 2019.
                  </p>
                  <img src={`${process.env.PUBLIC_URL}/Kedar-Takalkar_Sign.png`} alt=""/>
                  <p><b>PROF.KEDAR TAKALKAR</b><br></br>Founder</p>
                  
                  
            </div>
        </div>
      </div>
    </>
  )
}
