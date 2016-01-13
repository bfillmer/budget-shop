
// Style Imports
import 'normalize.css'
import './styles.scss'

// Create our application node on the body to hook the application to.
const appNode = document.createElement('div')
appNode.className = 'app'
appNode.id = 'app'
document.body.appendChild(appNode)

// Core Imports
import React from 'react'
import ReactDOM from 'react-dom'
import helloFactory from './components/Hello'

// Create our Hello React Component
const Hello = helloFactory({ React })

// Actions (Temp duplicated in Hello.js)
// Would be imported to both files.
const EDIT_MODE = 'EDIT'
const DISPLAY_MODE = 'DISPLAY'

// Data store.
let store = {
  word: 'world',
  mode: DISPLAY_MODE
}

// Define our application render function.
let render

// Standard mode setting function for composition.
const setMode = function (m) {
  return () => {
    store.mode = m
    render()
  }
}

// Define our store actions.
const actions = {
  setWord (w) {
    store.word = w
    render()
  },

  // setMode: setMode,

  editMode: setMode(EDIT_MODE),

  displayMode: setMode(DISPLAY_MODE)
}

// Flesh out render containing our React application.
render = function () {
  ReactDOM.render(
    <Hello
      word = { store.word }
      mode = { store.mode }
      actions = { actions } />,
      appNode
  )
}

// Render our application.
render()
