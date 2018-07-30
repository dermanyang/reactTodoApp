import React from 'react';
import ReactDOM from 'react-dom';

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

export default InputLine;
