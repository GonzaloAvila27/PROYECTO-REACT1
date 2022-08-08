import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({info}) {
  return (
    <>
        <div className="card col" style={{width: "18rem"}}>
            <img src="{info.image}" className="card-img-top" alt="Product Image"/>
          <div className="card-body">
                <h5 className="card-title">Name: {info.name}</h5>
            <Link to={`/producto/${info.id}`} className="btn btn-primary">See More!</Link>
          </div>
      </div>
    </>
 )
}
