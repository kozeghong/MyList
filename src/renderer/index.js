import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import App from './containers/App'

const store = createStore(reducer)
const rootElem = document.createElement('div')
rootElem.id = 'root'
document.body.appendChild(rootElem)
const elem = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    elem
)