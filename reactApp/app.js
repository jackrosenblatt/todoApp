import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{
  taskText: 'Clean the dishes',
  completed: false
},
{
  taskText: 'Mow the lawn',
  completed: true
},
{
  taskText: 'Get groceries',
  completed: false
},
{
  taskText: 'Make the bed',
  completed: true
}]

class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <li>
        <button>X</button>
        {(this.props.completed) ? (<strike>{this.props.task}</strike>) : this.props.task}
      </li>
    )
  }
}

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul>
        {dummyData.map((task) => (<Todo task={task.taskText} completed={task.completed}/>))}
      </ul>
    )
  }
}

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <form>
        <input type='text'></input>
        <button type='submit'>Add todo</button>
      </form>
    )
  }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <InputLine/>
        <TodoList/>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp/>, document.getElementById('root'));