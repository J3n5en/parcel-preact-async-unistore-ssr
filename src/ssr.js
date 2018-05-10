'use strict'

import { h } from 'preact'
import render from 'preact-render-to-string'
import App from './App'
import createStore from 'unistore'

module.exports = function(url, store) {
  const html = render(h(App, { store: createStore(store), url: url }))
  return {
    html,
    state: store
  }
}
