import React, { Component } from 'react';

class App extends Component {

  add() {
    this.props.store.dispatch({type: 'ADD', payload: 1});
  }

  minus() {
    this.props.store.dispatch({type: 'MINUS', payload: 1});
  }

  addOdd() {
    if(this.props.store.getState() % 2 === 1) {
      this.store.dispatch({type: 'ADD', payload: 2});
    }
  }

  addAsync() {
    setTimeout(() => {
      this.props.store.dispatch({type: 'ADD', payload: 1});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <span className="number">{this.props.store.getState()}</span>
        <button id="add" onClick={() => this.add()}>+</button>
        <button id="minus" onClick={() => this.minus()}>-</button>
        <button id="addOdd" onClick={() => this.addOdd()}>单数+2</button>
        <button id="addAsync" onClick={() => this.addAsync()}>1秒后+2</button>
      </div>
    );
  }
}

export default App;
