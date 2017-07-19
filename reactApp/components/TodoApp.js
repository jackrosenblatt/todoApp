import React from 'react';
import TodoList from './TodoList';
import InputLine from './InputLine';
import axios from 'axios';

var dummyData = [{
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

const dbUrl = "http://localhost:3000/db";

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

  addTodo(task){
    axios.post(dbUrl+'/add', {
      task: task
    })
      .then(response => {
        dummyData.push({
          taskText: response.data.task,
          completed: response.data.completed
        })

        this.setState({ todos: this.state.todos.concat(response.data)});
      })
      .catch(error => {
        console.log(error);
      });
  }

  removeTodo(idx){
    dummyData.splice(idx, 1);

    this.setState({todos: dummyData});
  }

  toggleCompleted(idx){
    dummyData[idx].completed = !dummyData[idx].completed

    this.setState({todos: dummyData});
  }

  render(){
    return (
      <div>
        <InputLine
          submit={(task) => this.addTodo(task)}/>
        <TodoList
          todos={this.state.todos}
          todoXClick={(idx) => this.removeTodo(idx)}
          todoTaskClick={(idx) => this.toggleCompleted(idx)}/>
      </div>
    )
  }
}

export default TodoApp;