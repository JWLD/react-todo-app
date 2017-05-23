import React, { Component } from 'react';

export default class TodoList extends Component {
  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <li key={todo.id} data-key={todo.id}>
          {todo.data}
          <button className="delete" onClick={this.props.delete}>DELETE</button>
        </li>
      )
    });
  };

  render() {
    return (
      <ul className="todoList">
        {this.renderList()}
      </ul>
    );
  };
};
