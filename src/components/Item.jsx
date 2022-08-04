import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'

export default function Item({list}) {
  return (
    <div className="card col">
    <img src="/" className="card-img-top" alt="Product Image"/>
    <div className="card-body">
    <h5 className="card-title">Name: {list.name}</h5>
    <p className="card-text">product description, dos elefantes se..</p>
    <a href="#" className="btn btn-primary">See More!</a>
  </div>
</div>
 )
}
