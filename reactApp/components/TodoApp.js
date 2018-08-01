import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import InputLine from './InputLine';
import axios from 'axios';
const dbUrl = "http://localhost:3000/db";

//temporary data
// var dummyData = [
//   {taskText: "Wash the dishes", completed:true},
//   {taskText: "Do homework", completed:false},
//   {taskText:"Walk the dog", completed:true},
//   {taskText: "Do laundry", completed:false}
// ]

class TodoApp extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      todos: [],
    }
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    //1) grab all items from mongo database
    console.log('component dDID mount');
    axios.get(dbUrl + '/all')
    .then(function(data){
      console.log('data response', data.data);
      () => this.setState({
          todos: data.response
      })
    })

    .catch(function(error) {
      console.log(error);
    })

  }

  addItem(name){
    //2) add item into mongo database
    //DONE
    console.log('ADDNAME', name);
    console.log('sending post request...');
    axios.post(dbUrl + '/add', {name})
      .then(function (response) {
        () => {this.setState({
         todos: this.state.todos.concat(response.data)
       });
     }
      })
      .catch(function (error) {
      console.log(error);
    });
  }

  removeItem(id) {
    //3) remove item from mongo database
    axios.post(dbUrl + '/remove', id)
    .then(function(response) {
      this.setState({
        todos: response.data
      })
    })
    .catch(function (error) {
    console.log(error);
  });
  }

  crossItem(id) {
    //4) strikethrough i.e. set item.completed = !item.completed
    axios.post(dbUrl + '/toggle', id)
      .then( function (response) {
        this.setState({
          todos: response.data
        })
      })
      .catch(function (error) {
      console.log(error);
    });
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
