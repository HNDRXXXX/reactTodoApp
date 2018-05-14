import React, { Component } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "Выполнить тикет!"},
        {id: 1, text: "Списаться в жире!"},
        {id: 2, text: "Проверить таймшит!"}
      ],
      nextId: 3
    };
  }

  addTodo = (todoText) => {
    let todos = this.state.todos.slice();
    todos.push({
      id: this.state.nextId,
      text: todoText
    });
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1
    });
  };

  removeTodo = (id) => {
    const filteredArray = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: filteredArray });
  };

  render() {
    const { todos } = this.state;
    const todoItems = todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todoText={todo.text}
          removeTodo={this.removeTodo}
        />
      )
    });
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput addTodo={this.addTodo} />
          <ul>
            {todoItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
