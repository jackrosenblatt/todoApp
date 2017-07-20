import React from 'react';
import TodoList from './TodoList';
import InputLine from './InputLine';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      todos: []
    }
  }

  componentDidMount(){
    axios.get(dbUrl+'/all')
      .then(response => {
        this.setState({todos: response.data})
      })
  }

  addTodo(task){
    axios.post(dbUrl+'/add', {
      task: task
    })
      .then(response => {
        this.setState({ todos: this.state.todos.concat(response.data)});
      })
      .catch(error => {
        console.log(error);
      });
  }

  removeTodo(id){
    axios.post(dbUrl+'/remove', {
      id: id
    })
    .then(response => {
      var index;
      this.state.todos.forEach(function(obj, idx){
        if(obj._id === id)
          index=idx;
      })

      var tempArr = this.state.todos.slice()
      tempArr.splice(index,1)

      this.setState({
        todos: tempArr
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  toggleCompleted(id){
    axios.post(dbUrl+'/toggle', {
      id: id
    })
    .then(response => {
      var index;
      this.state.todos.forEach(function(obj, idx){
        if(obj.id === id)
          index=idx;
      })

      var tempArr = this.state.todos.slice();
      tempArr.splice(index,1,response.data)

      this.setState({
        todos: tempArr
      })
    })
    .catch(err => {
      console.log(err);
    })
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