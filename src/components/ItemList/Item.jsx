import React from 'react'
import { Link } from 'react-router-dom'


export default function Item({info}) {
  return (
    <>
    <Link to={`/producto/${info.id}`} className="col-4">
        <div className="card" style={{width: "18rem"}}>
                <img src={info.image} className="image" alt={info.name}/>
            <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
          </div>
      </div>
    </Link>
    </>
 )
}
