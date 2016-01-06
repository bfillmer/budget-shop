
import React from 'react'

// Top Level Menu
const Menu = () => {
  return (
    <div className="menu">
      <h3>Menu Component</h3>
      <ClearList />
      <ToggleListMode />
    </div>
  )
}

// Clear List Items
const ClearList = () => {
  return (
    <h4>Clear List Component</h4>
  )
}

// Toggle List Mode
const ToggleListMode = () => {
  return (
    <h4>Toggle List Mode</h4>
  )
}

export default Menu
