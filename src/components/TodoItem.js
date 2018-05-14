import React from 'react';

export default class TodoItem extends React.Component {

  removeTodo = () => {
    const { id, removeTodo } = this.props;
    removeTodo(id);
  };

  render() {
    const todoText = this.props.todoText;
    return (
      <li className="flex-sb todoItem">
        <span className='todoText'>{todoText}</span>
        <button className="btn btn-remove sweep-to-right" onClick={this.removeTodo}>remove</button>
      </li>
    );
  }
}
