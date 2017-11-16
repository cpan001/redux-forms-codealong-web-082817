import React, { Component } from "react";

class CreateTodo extends Component {
  state = {
    text: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({ type: "ADD_TODO", todo: this.state });
    this.setState({ text: "" });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              value={this.state.text}
              onChange={e => this.handleChange(e)}
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
        {this.props.store.getState().todos.map(todo => <p>{todo}</p>)}
      </div>
    );
  }
}

export default CreateTodo;
