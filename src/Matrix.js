import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: '#fff'
    }
  }

  // colorSelectorFunction={this.trackColorSelected}
  genRow = (vals) => (
    vals.map((val, idx) => <Cell sendColor={this.sendColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  getColor = (colorSelected) => {
    this.setState({
      selectedColor: colorSelected
    }, () => console.log(this.state.selectedColor))
  }

  sendColor = () => (this.state.selectedColor)


  render() {
    return (
      <div id="app">
        <ColorSelector trackColorSelected={this.getColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
