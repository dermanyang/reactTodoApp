import React from 'react';
import ReactDOM from 'react-dom';

//temporary data
var dummyData = [
  {taskText: "Wash the dishes", completed:false},
  {taskText: "Do homework", completed:false},
  {taskText:"Walk the dog", completed:false},
  {taskText: "Do laundry", completed:false}
]

class TodoApp extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      data: dummyData,
    }
  }

  addItem(name){
    console.log(name);
    var arr = this.state.data.slice();
    var task = {
      taskText: name,
      completed: false //set default to not completed
    }
    arr.push(task) ;
    console.log(arr);
    this.setState({
      data: arr
    })
  }

  render() {
    return(
      <div>
        <InputLine addItem={this.addItem.bind(this)}/>
        <TodoList data={this.state.data} />
      </div>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      item: ''
    }
  }
  handleChange(e) {
    this.setState({
      item: e.target.value
    })
  }

  handleClick() {
    console.log('clicked');
    this.props.addItem(this.state.item)
  }

  render() {
    return(
      <div>
        <input type="text" value={this.state.item} onChange={(e) => {this.handleChange(e)}}
          placeholder="new task" /><button onClick={()=> {this.handleClick()}}>Add Task</button>
    </div>
    )
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
        {this.props.data.map((item, index) => <li key={index}><button>X</button>{' '}{item.taskText}</li>)}
      </ul>
    );
  }
}


ReactDOM.render(<TodoApp/>,
  document.getElementById('root'));
