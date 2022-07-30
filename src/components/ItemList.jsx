import React from 'react'
import Item from './Item'



export default function ItemList() {
  return (
    <> {list.map((list)=>(
        < Item key={list.id} list={list} />
      ))}</>
  )
}
