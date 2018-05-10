import { h, render } from 'preact'
import Router from 'preact-router'
import createStore from './store/store'
let root

function init() {
  const store = createStore(window.__STATE__)
  const App = require('./App').default
  const app = document.getElementById('app')
  render(<App store={store} />, app, app.lastChild)
}

// process.env.NODE_ENV === 'development'
if (module.hot) {
  require('preact/devtools') // turn this on if you want to enable React DevTools!
  module.hot.accept(() => requestAnimationFrame(init))
}

init()
