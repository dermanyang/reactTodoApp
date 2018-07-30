import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import InputLine from './InputLine';

//temporary data
var dummyData = [
  {taskText: "Wash the dishes", completed:true},
  {taskText: "Do homework", completed:false},
  {taskText:"Walk the dog", completed:true},
  {taskText: "Do laundry", completed:false}
]

class TodoApp extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    this.setState({
        todos: dummyData
    })
  }

  addItem(name){
    console.log(name);
    var arr = this.state.todos.slice();
    var task = {
      taskText: name,
      completed: false //set default to not completed
    }
    arr.push(task) ;
    console.log(arr);
    this.setState({
      todos: arr
    })
  }

  render() {
    return(
      <div>
        <InputLine addItem={this.addItem.bind(this)}/>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
