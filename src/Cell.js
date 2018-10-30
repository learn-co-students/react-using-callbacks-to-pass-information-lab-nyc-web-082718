import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  } //end of constructor

  handleClick = () => {
    const newColor = this.props.getColor()
    this.setState({
      color: newColor
    })
  }//end of handleClick function

  render() {
    return (
      <div className="cell"
      style={{backgroundColor: this.state.color}}
      onClick={this.handleClick}>
      </div>
    )
  }

}
