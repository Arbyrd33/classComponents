import React from 'react';
import Form from './Form'

const initialState =
{
  toDos: [{name: `Organize Garage`, id: `1528817077286`,
    completed: false }],
}

  

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <>
        <div>
          This is my to-do app!
        </div>
        <Form/>
      </>
    )
  }
}
//   - `<App />` will hold all the data needed for this project.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.