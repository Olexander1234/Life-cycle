import React, { Component } from "react";

export class Value extends Component {
  state = {
    value1: 0,
    value2: 0,
  };


  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.value1 !== nextState.value1 || this.state.value2 !== nextState.value2
    );
  }

 

  handleSubmit=(event)=>{
    event.preventDefault()
    this.setState({
        [event.target.name]: event.target.value
      });
}

  render() {
    const { value1, value2 } = this.state;
    const result = value1 + value2;

    return (
      <div>
        <p>Result: {result}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Number 1
            <input
              type="text"
              name="value1"
              value={value1}
              onChange={this.handleChange}
              inputMode="numeric"
            />
          </label>
          <label>
            Number 2
            <input
              type="text"
              name="value2"
              value={value2}
              onChange={this.handleChange}
              inputMode="numeric" 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}