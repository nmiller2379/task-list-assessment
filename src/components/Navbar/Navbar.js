import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/form">Create a task</NavLink>
        </li>
        <li>
            <NavLink to="/list">Task list</NavLink>
        </li>
      </ul>
    </nav>
  )
}
