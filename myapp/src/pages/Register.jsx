import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "../styles/login.css"
import * as React from "react"
import Stack from "@mui/material/Stack"
import EnsaLogo from "../assets/Ensa-Logo.png"
import { Input } from "@mui/material"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { NavLink } from "react-router-dom"





function Register() {
 
  return (
    <Stack className="main-container">
      <img src={EnsaLogo} />
      <Typography color="#D70040" variant="h4">
        Register
      </Typography>
      <Input
        className="customInput"
        color="secondary"
        type="email"
        placeholder="First Name"
      />
      <Input
        className="customInput"
        color="secondary"
        type="email"
        placeholder="Last Name"
      />
      <Input
        className="customInput"
        color="secondary"
        type="email"
        placeholder="Email"
      />

      <Input
        className="customInput"
        type="password"
        placeholder="Type your password"
      />
      <NavLink to="/login">
      <Button sx={{width:200}}  variant="outlined">
        Sign Up
      </Button>
      </NavLink>
      
    </Stack>
  )
}

export default Register
