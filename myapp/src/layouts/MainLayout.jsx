import React from "react"
import { NavLink, Outlet } from "react-router-dom"


export default function MainLayout() {
  // condition renderning
  
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 style={{color:"white"}}>Welcome Admin</h1>
          
          <NavLink to="accounts">Manage Accounts </NavLink>
          <NavLink to="annouces">Manage Announces</NavLink>
          <NavLink to="account">Account</NavLink>
          <NavLink to="/">Log-out</NavLink>
        </nav>

      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
    
  )
}
