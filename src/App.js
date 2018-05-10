import { Component, h } from 'preact'
import { Router } from 'preact-router'
import Home from './components/Home'
import Users from './components/Users'
import AsyncRoute from 'preact-async-route'
import { Provider } from 'unistore/preact'

export default class App extends Component {
  // getHome(url, cb, props) {
  //   const componentOrPromise = import('./components/Home')
  //   if (componentOrPromise.then) {
  //     return componentOrPromise.then(module => module.default)
  //   } else if (componentOrPromise.default) {
  //     cb({ component: componentOrPromise.default })
  //   }
  // }
  // getUser(url, cb, props) {
  //   const componentOrPromise = import('./components/Users')
  //   if (componentOrPromise.then) {
  //     return componentOrPromise.then(module => module.default)
  //   } else if (componentOrPromise.default) {
  //     cb({ component: componentOrPromise.default })
  //   }
  // }
  getComponent(name) {
    return (url, cb, props) => {
      const componentOrPromise = import(`./components/${name}`)
      if (componentOrPromise.then) {
        return componentOrPromise.then(module => module.default)
      } else if (componentOrPromise.default) {
        cb({ component: componentOrPromise.default })
      }
    }
  }
  render(props) {
    return (
      <div id="app">
        <Provider store={props.store}>
          <Router url={props.url}>
            <AsyncRoute path="/" getComponent={this.getComponent('Home')} />
            <AsyncRoute
              path="/users"
              getComponent={this.getComponent('Users')}
            />
          </Router>
        </Provider>
      </div>
    )
  }
}
