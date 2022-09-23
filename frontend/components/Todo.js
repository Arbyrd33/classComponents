import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <li>
          <label>
            todo! X Onclick, displays checkmark.
          </label>
        </li>
      </div>
    )
  }
}
// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.