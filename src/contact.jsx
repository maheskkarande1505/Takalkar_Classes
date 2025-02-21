import React from 'react'

export default function Contact() {
  return (
    <>
      
      <div className="about_back w-100 h-300 bg-cover bg-center flex items-center justify-center"style={{ height: "300px",}}>
          
          <img src={`${process.env.PUBLIC_URL}/About-Us-1.jpg`} className="w-100 h-100" alt="..."/>
          <div className=" row text-center">
          
          <h1 className="text-center pt-5" >Contact</h1>
          <p className="text-lg mt-2"><a className="text-decoration-none text-white" href="/home">Home</a> » Contact</p>
          </div>
    </div>



    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2 className='mt-3'>Get In Touch With Us!</h2>
                <form action="">
                    <input name="name" type="text"  placeholder='Enter Your Name' className='form-control mt-4 border-dark bg-light p-3' />
                    <input name="mobil" type="number" placeholder='Enter Your Mobile' className='form-control mt-4 border-dark bg-light p-3' />
                    <input name="email" type="email" placeholder='Enter Your Email' className='form-control mt-4 border-dark bg-light p-3' />
    
                    <textarea name="address" placeholder='Enter Your Message' className='form-control mt-4 border-dark bg-light p-4 '></textarea>
                    <br />
                    <button className='btn btn-success'>Save</button>                
                </form>
            </div>
            <div className="col-md-6">
                <div className="border-dark contact_Address_box">
                
                <i class="fa-solid fa-location-dot"></i> <big>Head Office - Bibwewadi</big> <br/>
                    634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibwewadi, Pune - 411 037.<br/><br/>
                    
                    <i class="fa-solid fa-envelope"></i> <big>Email us directly</big><br/>
                    learn@takalkarclasses.com<br/><br/>

                    <i class="fa-solid fa-phone"></i> <big>Phone</big><br/>
                    +91 98810 98308<br/><br/>
                    <big><b>Social Title</b></big> <br/><br/>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div><br/><br/>
            </div>
        </div>
    </div>

    <iframe src="" frameborder="0"></iframe>

    </>
  )
}
