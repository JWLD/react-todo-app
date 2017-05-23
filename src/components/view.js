import React, { Component } from 'react';
import AddTodo from './add_todo';
import TodoList from './todo_list';

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [{ id: 0, data: 'Make todo list'}] };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo() {
    var newTodo = {
      id: this.state.todos.length ? this.state.todos[this.state.todos.length - 1].id + 1 : 0,
      data: document.getElementById('input').value
    }

    var newArray = this.state.todos;
    newArray.push(newTodo);
    this.setState({ todos: newArray });
  }

  deleteTodo(e) {
    var id = e.currentTarget.parentElement.dataset.key;
    var newArray = this.state.todos.filter(function(todo) {
      return todo.id !== Number(id);
    });

    this.setState({ todos: newArray });
  }

  render() {
    return (
      <div>
        <AddTodo add={this.addTodo} />
        <TodoList todos={this.state.todos} delete={this.deleteTodo} />
      </div>
    );
  }
};
