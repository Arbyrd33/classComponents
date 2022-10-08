import React from 'react';
import Form from './Form';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          This is my to to app! I hated what I'd built so far so instead of just staring at it I totally nuked it! I will understand the changes made to this course!
        </div>
        <Form/>
      </>
    )
  }
}
// - OK! `<App />` will hold all the data needed for this project.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.