
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

// Data store.
let store = {
  word: 'world',
  mode: 'display'
}

// Define our application render function.
let render

// Define our store actions.
const actions = {
  setWord (w) {
    store.word = w
    render()
  },

  setMode (m) {
    store.mode = m
    render()
  }
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
