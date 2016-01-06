
import React from 'react'

import Menu from '../Menu'

// Budget Item List
const List = (props) => {
  let itemList = props.items.map((item) => {
    return (
      <li><Item key={item.id} item={item} /></li>
    )
  })

  return (
    <div className="list">
      <h2>List Component</h2>
      <Menu />
      <ul>{itemList}</ul>
    </div>
  )
}

// Budget Item
const Item = (props) => {
  return (
    <span>{props.item.name}</span>
  )
}

export default List
