import React from 'react';
import ReactDOM from 'react-dom';

//temporary data
var dummyData = [
  "Wash the dishes",
  "Do homework",
  "Walk the dog",
  "Do laundry"
]
class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
        {dummyData.map(item => <li><button>X</button>{' '}{item}</li>)}
      </ul>
    );
  }
}


ReactDOM.render(<TodoList/>,
  document.getElementById('root'));
