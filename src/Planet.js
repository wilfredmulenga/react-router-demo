import React from 'react'
import planetData from './planetData'

class Planet extends React.Component {

  render() {
    const { planetName } = this.props
    return (
      <div>
        <h2>Welcome to planet {planetName}</h2>
        <p>{planetData[planetName]}</p>
      </div>
    )
  }
}

export default Planet