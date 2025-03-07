import React from 'react'

export default function admission() {
  return (
    <>
       
      <div className="about_back w-100 h-300 bg-cover bg-center flex items-center justify-center">
          
          <img src={`${process.env.PUBLIC_URL}/Admission.jpg`} className="w-100" alt="..."/>
          <div className=" row text-center">
        
          <h1 className="text-center pt-5" >Admission</h1>
          <p className="text-lg mt-2"><a className="text-decoration-none text-white" href="/home">Home</a> » Admission</p>
          </div>
      </div>

    <div className="container">
        <div className="row mt-5">
    <div className="col-md-6 mb-5 p-5">
      <img src={`${process.env.PUBLIC_URL}/Form.png`} className="w-100 h-100" alt="..."/>
      </div>
    <div className="col-md-6">
        <form action="">
        <h1 className=''>Fill Out Form</h1>
        <br/>
        <input type="text" className='form-control  border-2 p-2 mt-3 ' placeholder='Enter Your Name'/>
        <input type="number" className='form-control p-2 mt-4 border-2 ' placeholder='Enter Your Mobile'/>
        <input type="email" className='form-control p-2 mt-4 border-2 ' placeholder='Enter Your Email'/>
        <select type="text" className='form-control p-2 mt-4 border-2' placeholder='Select Cource'>
            <option value="" >--Select Course--</option>
            <option value="" >--Select Course--</option>
            <option value="" >--Select Course--</option>
        </select>
        <input type="text" className='form-control p-2 mt-4 border-2 mb-5' placeholder='Select Nearest Center '/>

        <button className='btn btn-success w-25 mb-5'>Submit</button>
        </form>
    </div>
    </div>
    </div>

    </>
  )
}
