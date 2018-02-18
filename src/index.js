import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux';
import store from './store/createstore';

const defaultStore = store()

ReactDOM.render(<Provider store={defaultStore}>
    <App/>
  </Provider>
  , document.getElementById('root'))
//registerServiceWorker()
