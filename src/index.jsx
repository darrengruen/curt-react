/* global document */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Home } from './home'
import rootReducer from './rootReducer'

// const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

const renderApp = () => render(<Home
    dispatch={ store.dispatch }
    state={ store.getState() }
    store={ store }
/>, document.getElementById('app'))

store.subscribe(renderApp)

renderApp()
