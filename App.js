import React, { Component } from 'react';
import todos from './Todos'


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo =(id) => {
    console.log(id);
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>

      </div>
    );
  }
}

export default App;
