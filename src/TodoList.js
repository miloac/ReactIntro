import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        const lista = this.props.todoList.map((ele) =>
    <Todo text={ele.text.toString()} priority={ele.priority.toString()} dueDate={ele.dueDate.toString()} />
  );     
    return (  
          <ul>{lista}</ul>
        );
    }

}
