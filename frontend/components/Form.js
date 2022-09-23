import React from 'react'
import TodoList from './TodoList';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <TodoList/>
        <p>help</p>
        <p>I need to include an input field, an 'add todo' button (which does the same thing as the enter button), a 'clear completed' button, and for the submission to re-render the todo list with the additional do.</p>
        <div id="form">
          <form>
            <input
            type = "text"
            id = "textInput"
            placeholder = "Whatcha Needta Do?"/>
            <button type = "submit" id = "add">Add To-Do</button>
            <button id = "hide">Hide Completed Tasks</button>
          </form>
        </div>
      </div>
    )
  }
}