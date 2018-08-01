import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  handleTick(id) {
    console.log('cross item');
    this.props.crossItem(id);
  }

  handleClick(id) {
    console.log('remove item');
    this.props.removeItem(id);
  }

  render(){
    return(
      <ul>
        {this.props.todos.map((item, index) => item.completed ?
          <strike><li key={todo.id}><button onClick={()=>this.handleTick(item.id)}>✓</button><button onClick={()=>this.handleClick(item.id)} >X</button>{' '}{item.taskText}</li></strike> :
            <li key={todo.id}><button onClick={()=>this.handleTick(item.id)}>✓</button><button onClick={()=>this.handleClick(item.id)}   >X</button>{' '}{item.taskText}</li>
          )}
      </ul>
    );
  }
}

export default TodoList;
