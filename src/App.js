import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';


class App extends Component {
  state = {
    todo: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'clean the house'},
      {id: 3, content: 'make a pie'}
    ]
  }

  delTodos = (id) => {
    console.log(id);
    let todo = this.state.todo.filter (z => {
      return (z.id !== id)
    })
    this.setState ({
      todo
    })
  }

  addTodos = (y) => {
    console.log(y);
    y.id = Math.random()*15
    let todo = [...this.state.todo, y];
    this.setState ({
      todo
    })
  }


  render() {
    return (
      <div>
        <h3>Todos list</h3>
      <Todos todos = {this.state.todo} deltodos = {this.delTodos}></Todos> 
      <AddTodos addTodos = {this.addTodos}></AddTodos>
      </div>
    )
  }
}

export default App;

