import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      seletedColor: ''
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} cb= {this.sendColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )
  grabColor =(color) =>{
    this.setState({
      seletedColor: color
    })
  }
  sendColor = () => {
    return this.state.seletedColor
  }
  render() {

    return (

      <div id="app">
        <ColorSelector value = {this.grabColor}/>
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
