import React from 'react';
import Form from './Form';



export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
        name: 'Organize Garage',
        id: 1528817077286, // could look different, you could use a timestamp to generate it
        completed: false
      };
  }

  render() {
    return (
      <>
        <div>
          This is my to to app! I hated what I'd built so far so instead of just staring at it I totally nuked it! I will understand the changes made to this course! I need to {this.state.name} today.
        </div>
        <Form/>
      </>
    )
  }
}