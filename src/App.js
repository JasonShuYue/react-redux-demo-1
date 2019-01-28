import React, { Component } from 'react';

import { connect } from 'react-redux';


class App extends Component {


  addOdd() {
    if(this.props.number % 2 === 1) {
      this.props.addOdd()
    }
  }

  addAsync() {
    setTimeout(() => {
      this.props.addAsync();
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <span className="number">{this.props.number}</span>
        <button id="add" onClick={() => this.props.add()}>+</button>
        <button id="minus" onClick={() => this.props.minus()}>-</button>
        <button id="addOdd" onClick={() => this.addOdd()}>单数+2</button>
        <button id="addAsync" onClick={() => this.addAsync()}>1秒后+2</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
};


// 注意「mapDispatchToProps」是一个对象
const mapDispatchToProps =  {
  add: () => {
    return {
      type: 'ADD',
      payload: 1
    }
  },
  minus: () => {
    return {
      type: 'MINUS',
      payload: 1
    }
  },
  addOdd: () => {
    return {
      type: 'ADD',
      payload: 2
    }
  },
  addAsync: () => {
    return {
      type: 'ADD',
      payload: 2
    }
  }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
