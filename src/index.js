import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import reportWebVitals from './reportWebVitals'
import AppRouter from 'routers/AppRouter'
import configureStore from 'store/configureStore'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './styles/styles.scss'

const store = configureStore()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
