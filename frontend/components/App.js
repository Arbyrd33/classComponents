import React from 'react';
import Form from './Form';



export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:[
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: `A thing.`,
          id: 4,
          completed: false
        },
        {
          name: `Another thing.`,
          id: 5,
          completed: true
        },
        {
          name: `A thingly thing of things.`,
          id: 6,
          completed: false
        }
      ]
       
      };
  }

  render() {
    const {todos} = this.state
    console.log(todos)
    return (
      <>
        <h1>
          A basic to-do list.
        </h1>
        {
        todos.map(todo=>{
          return (<li key={todo.name}>{todo.name}</li>)
        })
        }
        <Form dataFromApp = {this.state}/>
      </>
    )
  }
}