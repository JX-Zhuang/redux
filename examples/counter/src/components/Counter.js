import React, {Component} from 'react';

class Counter extends Component {
  incrementAsync=()=>{
    setTimeout(this.props.increment,1000);
  }
  render() {
    const {number} = this.props;
    return (<div>
      {number}
      <button onClick={this.props.increment}>
        +
      </button>
      <button  onClick={this.props.decrement}>
        -
      </button>
      <button onClick={this.incrementAsync}>
        1s后加1
      </button>
    </div>)
  }
}

export default Counter;
