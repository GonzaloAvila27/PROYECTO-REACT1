import React from 'react'
import './CSS/Navbar.css'

export default function ItemList() {
  console.log(list);
  return (
    <> {list.map((list)=>(
        < Item key={list.id} list={list} />
      ))}</>
  )
}
