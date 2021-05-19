import React, { useMemo } from "react"
import { Link } from 'react-router-dom'
import Header from '../components/header'

function Complete() {
  return useMemo(() => (
    <div className="main">
      <Header />
      <div className="content">
        <p className="title">
          Congratulations....
        </p>
        <div>
          <Link className="btn" to='/'>Go Back</Link>
        </div>
      </div>
    </div>
  ), [])
}

export default Complete
