import React from 'react'
import TodoList from './TodoList'



export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: props.name
    }
  }

  render() {
    return (
      <div>
        <TodoList/>
        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Hide Completed</button>
      </div>
    )
  }
}
