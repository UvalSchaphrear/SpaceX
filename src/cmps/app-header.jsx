import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const AppHeader = (props) => {

  const navigate = useNavigate()

  return (
    <header className="app-header main-container">
      <div className="main-header flex">
        <div className="logo" onClick={() => navigate("/")}>
          SpaceX
        </div>
        <nav className="main-nav">
          <NavLink className={() => "clean-link"} to="/landing">Landings</NavLink>
          <NavLink className={() => "clean-link"} to="/">Home page</NavLink>
        </nav>
      </div>
    </header >
  )
}

