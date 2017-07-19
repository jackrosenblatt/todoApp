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
        <button className='btn btn-danger removeButton'>X</button>
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
        {this.props.todos.map((task) => (<Todo task={task.taskText} completed={task.completed}/>))}
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
        <div className='form-group'>
          <div className='input-group'>
            <input type='text'></input>
            <button className='btn btn-primary addButton' type='submit'>Add todo</button>
          </div>
        </div>
      </form>
    )
  }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({todos: dummyData})
  }

  render(){
    return (
      <div>
        <InputLine/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp/>, document.getElementById('root'));