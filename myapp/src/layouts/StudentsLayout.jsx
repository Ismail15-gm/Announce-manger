import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function StudentsLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 style={{ color: "white" }}>Welcome Student</h1>
          <NavLink to="announces">Announces</NavLink>
          <NavLink to="account">Profile</NavLink>
          <NavLink to="/">Log-out</NavLink>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  )
}
