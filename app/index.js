
/**
 * App's entry point
 * Creates and inserts a div and mounts the app on it
 */
import 'normalize.css'
import styles from './styles.css'

import debug from 'debug'
import React from 'react'
import ReactDOM from 'react-dom'

import List from './components/List'
import Total from './components/Total'

import data from './data-store'

const log = debug('app:bootstrap')

// Enable debug messages outside of production
if (process.env.NODE_ENV !== 'production') {
  debug.enable('app:*')
}

log('Creating Application Node')
const appNode = document.createElement('div')
appNode.className = styles.app
appNode.id = 'app'

log('Adding Application Node to Body')
document.body.appendChild(appNode)

// Create primary application wrapper.
const BudgetShopApp = (props) => {
  return (
    <div className="budgetApp">
      <List items={props.data.items} />
      <Total />
    </div>
  )
}

ReactDOM.render(<BudgetShopApp data={data} />, appNode, () => {
  log('Budget Application Mounted')
})
