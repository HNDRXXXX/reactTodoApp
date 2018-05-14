import React from 'react';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  addTodo = () => {
    const todoText = this.state.value;
    if (todoText.length > 0) {
      this.props.addTodo(todoText);
      this.setState({value: ''});
    }
  };

  onClickEnter = (e) => {
    if (e.keyCode === 13) {
      this.submitRef.focus();
    }
  };

  render() {
    const isDisabled = !this.state.value;
    console.log('isDISABLED', isDisabled);
    return (
      <div className="flex-sb">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.onClickEnter}
        />
        <button
          className="btn btn-primary sweep-to-right"
          onClick={this.addTodo}
          ref={(button) => this.submitRef = button}
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    );
  }
}
