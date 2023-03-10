import './App.css';
import TodoItem from './components/todoitem/TodoItem';
import TasksData from './Data';
import React, { Component } from 'react'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: TasksData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return { todos: updatedTodos }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem
      key={item.id}
      item={item}
      handleChange={this.handleChange}
    />)
    return (
      <div className='todo-list' >
        {todoItems}
      </div>
    )
  }
}

