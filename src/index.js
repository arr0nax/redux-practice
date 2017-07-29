import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import greetingApp from './reducers'
import App from './App'


let store = createStore(greetingApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
