import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ClientProducts = () => {
const [users, setAdminID, setLocalAdminID,data]=useOutletContext()
console.log(data.data);
  return (
    <div className="container">
      <div className="row">
     { data.data && data.data.map((el)=>
         <div className="col-lg-3" key={el._id}>
         <div className="card">
           <div className="card-img">
             <img src={el.imgSrc} alt="" />
           </div>
           <div className="card-desc">
             <h2>{el.name}</h2>
             <span>Sale Price:{el.salePrice}</span> <small>Stock:{el.stock}</small>
           </div>
         </div>
       </div>
     )

     }
      </div>
    </div>
  )
}

export default ClientProducts