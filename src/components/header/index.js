import React, { useMemo } from 'react'
import logo from '../../assets/logo.svg'
import './style.css'

function Header() {
  return useMemo(() => (
    <div className="header">
      <img src={logo} alt="logo" height="80" />
    </div>
  ), [])
}
  
export default Header