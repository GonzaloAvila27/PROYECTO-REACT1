import React from 'react'
import { Link } from 'react-router-dom'


export default function Item({info, loading}) {
  return (
    <>
            {loading && 
      <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status"/>
      </div>
            } { loading ||

    <Link to={`/producto/${info.id}`} >
        <div className="card">
          <div className='card__inner'>
                <img className='card__img' src={info.image}  alt={info.name}/>
                <p className='card__desc'>{info.desc}</p>
          </div>
                <h5 className='card__title'>{info.name}</h5>
      </div>
    </Link>
    }
    </>
 )
}
