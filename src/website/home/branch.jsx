
import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Branch() {

   const [branches, setBranches] = useState([]);
  

   useEffect(() => {
      axios
        .get("https://deepipl.com/php_react/API/homebranch")  //https://react-admin-44yh.onrender.com/admin/center_api
        .then((response) => {
          //console.log("Fetched Data:", response.data); // Debugging
          setBranches(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);

  return (
    <>
    
  
      <div className="container branch_section">
        <h1>13 CENTRES IN PUNE & PCMC</h1>
        <h2>Takalkar Classes Is Now Closer To You !</h2>

         <div className="row branch_center">
            {branches.map((branch, index) => (
               <div className="col-lg-3 col-md-6 branch_name">
                  <div className="branch_name1">
                     <br />
                     <b>{branch.area_name}</b>
                     <br />
                     <br />
                     {branch.full_address}
                     <br />
                     <br />
                     <h6><i className="fa-solid fa-phone">{branch.mobile}</i></h6> 
                     <h6> <a className='text-decoration-none' href={branch.map_link}>Map Link </a></h6>
                  
                     
                  </div>
               </div>
            ))}
         </div>

      </div>
    </>
  )
}
