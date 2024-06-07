import React, { useState } from "react"
import Input from "@mui/joy/Input"
import Button from "@mui/material/Button"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

export default function AddAnnounce() {
  const [description, setDescription] = useState("")
  const [maker, setMaker] = useState("")
  const [year, setYear] = useState("")
  const [filier, setFilier] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const student = {
      description,
      maker,
      year,
      filier,
    }
    const response = await fetch("http://localhost:5000/api/announces", {
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
      setDescription("")
      setMaker("")
      setYear("")
      setFilier("")
      setError(null) // Clear error if there was any
      alert("Announce Is on Quee now")
      window.location.reload()
    }
  }

  return (
    <form className="add-container" onSubmit={handleSubmit}>
      <h1>Add Announce</h1>
      <textarea
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Select
        sx={{ width: 400, height: 40, backgroundColor: "white" }}
        value={filier}
        onChange={(e) => setFilier(e.target.value)}
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
        value={year}
        onChange={(e) => setYear(e.target.value)}
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

      <Input
        sx={{ width: 400 }}
        disabled={false}
        type="text"
        variant="outlined"
        placeholder="Maker"
        value={maker}
        onChange={(e) => setMaker(e.target.value)}
      />

      {error && <p className="error-message">{error}</p>}

      <Button type="submit" variant="outlined">
        Add Account
      </Button>
    </form>
  )
}
