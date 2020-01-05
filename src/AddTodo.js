import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    // 여기에만 하면 입력창이 비워지지 않는다. value속성사용
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Add new todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          {/* 투두리스트 추가 후 입력 창을 비워준다 */}
        </form>
      </div>
    );
  }
}

export default AddTodo;
