import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  handleClick(name) {
    //change false to true
    return
  }
  render(){
    return(
      <ul>
        {this.props.todos.map((item, index) => item.completed ?
          <strike><li key={index}><button>X</button>{' '}{item.taskText}</li></strike> :
            <li key={index}><button onClick={this.handleClick(item)}>X</button>{' '}{item.taskText}</li>
          )}
      </ul>
    );
  }
}

export default TodoList;
