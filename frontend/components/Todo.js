import React from 'react'

class Todo extends React.Component{
  render(){
    console.log(this.props.name)
    return(<ul id = {this.props.key}>{this.props.name} {this.props.check ? `⭕️` : `❌`}</ul>)
   }
}

export default Todo