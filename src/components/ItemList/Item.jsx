import React from 'react'
import { Link } from 'react-router-dom'


export default function Item({info}) {
  return (
    <>
    <Link to={`/producto/${info.id}`} style={{border:"blue solid 1px"}} >
        <div className="card" style={{width: "18rem"}}>
                <img src={info.image}  alt={info.name}/>
            <div >
                <h5 >{info.name}</h5>
          </div>
      </div>
    </Link>
    </>
 )
}
