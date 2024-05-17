import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ClientProducts = () => {
  const [users, setAdminID, setLocalAdminID, data] = useOutletContext()
  console.log(data);
  return (
    <div className="container py-5">
      <div className="row">
        {data.data && data.data.map((el) =>
          <div className="col-lg-3" key={el._id}>
            <div className="card p-3">
              <div className="card-img">
                <img style={{width:"100%", height:"350px", objectFit:"cover"}} src={el.imgSrc} alt="" />
              </div>
              <div className="card-desc">
                <h2>{el.name}</h2>
                <span>Sale Price:{el.salePrice - (el.salePrice * el.discountPercentage /100)}</span> <small>Stock:{el.stock}</small>
              </div>
              <div className="card-btns">
                <button className='btn btn-primary'>Detail</button>
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