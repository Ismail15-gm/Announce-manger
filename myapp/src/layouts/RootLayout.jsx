import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import ensaA from "../assets/ensaA.png"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 style={{ color: "white" }}>Ensa Agadir</h1>
          <NavLink to="/">Login</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}


//---------thoes are for next updat ---------

//<NavLink to="students">Students Section</NavLink>
// <NavLink to="profs">Prof Section</NavLink>'
// <NavLink to="register">Register</NavLink>
