import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import App from './App'
import {Router} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import {store} from './store'

import './index.css'

const history = createBrowserHistory()

render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
      document.getElementById('root'))
