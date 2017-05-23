import React, { Component } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div className="addWrap">
        <input
          id="input"
          className="addInput"
        />
        <button
          className="addButton"
          onClick={this.props.add}
        >ADD
        </button>
      </div>
    );
  }
};
