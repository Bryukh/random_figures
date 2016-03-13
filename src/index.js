import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import figuresApp from './reducers'

let store = createStore(figuresApp);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));