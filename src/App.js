import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';
import { Todo } from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: '', dueDate: ''};
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangePrio = this.handleChangePrio.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO React App</h1>
        </header>
        <TodoList todoList={todos}/>
         <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="newtext" placeholder="Name"
            onChange={this.handleChangeText}
            value={this.state.text}
          />
          <input
            id="newpriority" placeholder="Priority"
            onChange={this.handleChangePrio}
            value={this.state.priority}
          />
          <input
            id="newpriority" placeholder="Due Date (YYY/DD/MM)"
            onChange={this.handleChangeDate}
            value={this.state.dueDate}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
      </div>
    );
  }
  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }

  handleChangePrio(e) {
    this.setState({ priority: e.target.value });
  }

  handleChangeDate(e) {
    this.setState({ dueDate: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text, priority:this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '', priority: '', dueDate: ''
    }));
  }
}

export default App;
