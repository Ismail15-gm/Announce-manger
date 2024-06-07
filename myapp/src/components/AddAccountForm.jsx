import React, { useState } from "react"
import Input from "@mui/joy/Input"
import Button from "@mui/material/Button"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
const API_URL = import.meta.env.VITE_API_URL
function AddAccountForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [codE, setcodE] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [niveau, setNiveau] = useState("")
  const [field, setFiled] = useState("")
  const [error, setError] = useState(null)
  const [role, setRole] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const student = {
      firstName,
      lastName,
      codE,
      email,
      password,
      niveau,
      field,
      role,
    }
    const response = await fetch(API_URL+"/api/students", {
      method: "POST",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
    })

    const json = await response.json()
    console.log(json)
    if (!response.ok) {
      setError(json.error)
      alert("Something went wrong")
    }
    if (response.ok) {
      console.log("New account added:", json)
      setFirstName("")
      setLastName("")
      setcodE("")
      setEmail("")
      setPassword("")
      setNiveau("")
      setFiled("")
      setRole("")
      setError(null) // Clear error if there was any
      alert("Account has been added successfully")
      window.location.reload()
    }
  }

  return (
    <form className="add-container" onSubmit={handleSubmit}>
      <h1>Add Account</h1>
      <Input
        sx={{ width: 400 }}
        disabled={false}
        type="text"
        variant="outlined"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <Input
        sx={{ width: 400 }}
        disabled={false}
        type="text"
        variant="outlined"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <Input
        sx={{ width: 400 }}
        disabled={false}
        type="text"
        variant="outlined"
        placeholder="Account Number"
        value={codE}
        onChange={(e) => setcodE(e.target.value)}
      />

      <Input
        sx={{ width: 400 }}
        disabled={false}
        type="email"
        variant="outlined"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        sx={{ width: 400 }}
        disabled={false}
        type="password"
        variant="outlined"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Select
        sx={{ width: 400, height: 40, backgroundColor: "white" }} 
        value={niveau}
        onChange={(e) => setNiveau(e.target.value)}
        displayEmpty 
      >
        <MenuItem value="" disabled>
          Choose Class
        </MenuItem>{" "}
        <MenuItem value="1">Class 1</MenuItem>
        <MenuItem value="2">Class 2</MenuItem>
        <MenuItem value="3">Class 3 </MenuItem>
        <MenuItem value=" ">None</MenuItem>
      </Select>


      <Select
        sx={{ width: 400, height: 40, backgroundColor: "white" }} 
        value={field}
        onChange={(e) => setFiled(e.target.value)}
        displayEmpty 
      >
        <MenuItem value="" disabled>
          Choose Filed
        </MenuItem>{" "}
        <MenuItem value="info">Informatique</MenuItem>
        <MenuItem value="Fid">FID</MenuItem>
        <MenuItem value="gee">GEE</MenuItem>
        <MenuItem value="elec">Electrique</MenuItem>
        <MenuItem value="meca">Mecanique</MenuItem>
        <MenuItem value="indus">Génie Industriel</MenuItem>
        <MenuItem value="btb">BTB</MenuItem>
        <MenuItem value=" ">None</MenuItem>
      </Select>

      <Select
        sx={{ width: 400, height: 40, backgroundColor: "white" }}
        value={role}
        onChange={(e) => setRole(e.target.value)}
        displayEmpty
      >
        <MenuItem value="" disabled>
          Choose Role
        </MenuItem>{" "}
        <MenuItem value="student">Student</MenuItem>
        <MenuItem value="chef">Chef</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="teacher">Teacher</MenuItem>{" "}
      </Select>

      {error && <p className="error-message">{error}</p>}

      <Button type="submit" variant="outlined">
        Add Account
      </Button>
    </form>
  )
}

export default AddAccountForm
