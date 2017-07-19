import React from 'react';

class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <li>
        <button className='btn btn-danger removeButton'>X</button>
        {(this.props.completed) ? (<strike>{this.props.task}</strike>) : this.props.task}
      </li>
    )
  }
}

export default Todo;