import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const TopBar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-3">Newborn</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <NavLink to="/register" className="navbar-item">Регистрация</NavLink>
          <NavLink to="/login" className="navbar-item">Вход</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default TopBar