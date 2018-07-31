import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import InputLine from './InputLine';
import axios from 'axios';
const dbUrl = "http://localhost:3000/db";

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
    console.log('ADDNAME', name);
    console.log('sending post request...');
    axios.post(dbUrl + '/add', {name})
      .then(function (response) {
       console.log(response);
      })
      .catch(function (error) {
      console.log(error);
    });
  }

  removeItem(name) {
    var arr = this.state.todos.slice();
    var newArr = arr.filter(obj => obj.taskText != name)
    this.setState({
      todos: newArr
    })
  }
  crossItem(name) {
    //strikethrough i.e. set
    var arr = this.state.todos.slice();
    for (var elem in arr) {
      if (arr[elem].taskText == name) {
        arr[elem].completed = !arr[elem].completed;
        break;
      }
    }

    this.setState({
      todos: arr,
    })
  }

  render() {
    return(
      <div>
        <InputLine addItem={this.addItem.bind(this)} />
        <TodoList todos={this.state.todos} crossItem={this.crossItem.bind(this)}
          removeItem={this.removeItem.bind(this)}/>
      </div>
    )
  }
}

export default TodoApp;
