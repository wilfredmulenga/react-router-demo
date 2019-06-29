import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Here is home</h1>
        <Link to='/planetlist'>Go to planet list</Link>
      </div>
    )
  }
}

export default Home