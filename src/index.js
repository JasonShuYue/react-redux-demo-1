import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

let store = createStore(stateChanger);

function stateChanger(state, action) {
    if(typeof state === "undefined") {
        state = 0;
    }
    switch(action.type) {
        case 'ADD':
            return  state = state + action.payload;
        case 'MINUS':
            return  state = state - action.payload;
        default:
            return state;
    }
}


render();

store.subscribe(() => {
    render();
})

function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));

}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
