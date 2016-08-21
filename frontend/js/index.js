import 'babel-polyfill'
import App from './containers/app'
import React from 'react'
import ReactDOM from 'react-dom'

window.onload = function(){
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  )
}
