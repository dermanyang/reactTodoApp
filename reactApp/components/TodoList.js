import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  handleTick(name) {
    console.log('remove item');
    this.props.crossItem(name);
  }

  handleClick(name) {
    console.log('remove item');
    this.props.removeItem(name);
  }

  render(){
    return(
      <ul>
        {this.props.todos.map((item, index) => item.completed ?
          <strike><li key={index}><button onClick={()=>this.handleTick(item.taskText)}>✓</button><button onClick={()=>this.handleClick(item.taskText)} >X</button>{' '}{item.taskText}</li></strike> :
            <li key={index}><button onClick={()=>this.handleTick(item.taskText)}>✓</button><button onClick={()=>this.handleClick(item.taskText)}   >X</button>{' '}{item.taskText}</li>
          )}
      </ul>
    );
  }
}

export default TodoList;
