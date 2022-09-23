import React from 'react'
import Todo from './Todo.js'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        THIS IS A LIST OF THINGS TO DO!!!
        <Todo/>
      </div>
    )
  }
}
// - `<TodoList />` receives your todos array and iterates over the list generating a new `<Todo />` for each element in the array.