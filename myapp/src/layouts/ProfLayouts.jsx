import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function ProfLayouts() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 style={{ color: "white" }}>Welcome Teatcher</h1>
          <NavLink to="addAnnounce">Add announce</NavLink>
          <NavLink to="pendings"> Announces Status</NavLink>
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
