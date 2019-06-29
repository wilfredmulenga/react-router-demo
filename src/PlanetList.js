import React from 'react'
import { Link } from 'react-router-dom'
import Planet from './Planet'

class PlanetList extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h1>List of Planets</h1>
        <hr />
        <ul>
          <li>
            <Link to='/planetlist/mercury'>Mercury</Link>
          </li>
          <li>
            <Link to='/planetlist/venus'>Venus</Link>
          </li>
          <li>
            <Link to='/planetlist/earth'>Earth</Link>
          </li>
        </ul>
        <hr />
        <Planet planetName={this.props.match.params.planet} />
      </div>

    )
  }
}

export default PlanetList