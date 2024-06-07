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
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const API_URL=import.meta.env.VITE_API_URL
function Login() {
  
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  function redirectMe(role) {
    switch (role) {
      case "student":
        navigate("/students")
        break

      case "teatcher":
        navigate("/profs")

        break
      case "admin":
        navigate("/login/main")
        break
      default:
        alert("Unknown Role")
    }
  }
  const navigate = useNavigate()
  const handlLogin = async () => {
    let role = ""
    try {
      const res = await fetch(
        API_URL+"/api/students/email/" + email
      )
      if (!res.ok) {
        alert("Invalide Email")
        throw new Error("Invalide Email ")
      }
      const json = await res.json()
      console.log(json)
      if (json.password == password) {
        redirectMe(json.role)
      } else {
        alert("Uncorect Password")
      }
    } catch (error) {
      alert("Something went Wrong")
    }
  }

  return (
    <Stack className="main-container">
      <img src={EnsaLogo} />
      <Typography color="#D70040" variant="h4" sx={{ marginBottom: "10px" }}>
        Login
      </Typography>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        className="customInput"
        color="secondary"
        type="email"
        placeholder="Email"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        className="customInput"
        type="password"
        placeholder="Password"
      />

      <Button
        onClick={handlLogin}
        sx={{ width: 200, marginTop: "30px" }}
        variant="outlined"
      >
        Login
      </Button>
    </Stack>
  )
}

export default Login
