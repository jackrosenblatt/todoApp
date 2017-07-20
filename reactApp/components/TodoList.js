import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul>
        {this.props.todos.map((task, idx) => (<Todo key={task._id}
          task={task.task}
          completed={task.completed}
          xClick={() => this.props.todoXClick(idx)}
          taskClick={() => this.props.todoTaskClick(idx)}/>))}
      </ul>
    )
  }
}

export default TodoList;