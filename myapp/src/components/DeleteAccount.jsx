import Input from "@mui/joy/Input"
import "../styles/accountes.css"
import Button from "@mui/material/Button"
import React, { useState } from "react"

export default function DeleteAccount() {
  const [accountSearch, setAccountSearch] = useState({
    codE: "",
    firstName: "",
    lastName: "",
    email: "",
  })

  async function handlSearch() {
    const id = document.getElementById("task-input").value
    if (!id) {
      console.log("Can You entre Student Id ")
      return
    }

    try {
      const result = await accountDetailsLoader(id)
      //console.log(result);

      setAccountSearch({
        codE: result.codE,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
      })

      //console.log(accountSearch);;
    } catch (error) {
      console.error("Id Not Found", error)
    }
  }

  function handlCancel() {
    setAccountSearch({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      Fieldclass: "",
    })
  }

  async function handlDelete() {
    console.log(accountSearch.id)
    const response = await fetch("http://localhost:5000/api/students/codE/" + accountSearch.codE, {
      method: "DELETE",
    })
    const json = await response.json()
    if (response.ok) {
      alert("Account deleted")
      handlCancel()
      window.location.reload();
    }else{
      alert("Something Went Wrong")
    }

  }

  return (
    <div className="delete-container ">
      <h1>Delete Account </h1>

      <div className="find-me">
        <Input
          disabled={false}
          variant="outlined"
          placeholder="D1355236709"
          id="task-input"
        />

        <Button onClick={() => handlSearch()} variant="outlined">
          Search
        </Button>
      </div>
      <div className="account-found">
        <h2>First name:{accountSearch.firstName}</h2>
        <h2>Last name:{accountSearch.lastName}</h2>
        <h2>Email:{accountSearch.email}</h2>
      </div>
      <Button onClick={handlDelete} color="error" variant="contained">
        Delete Account
      </Button>
      <Button onClick={handlCancel} variant="contained">
        Cancel
      </Button>
    </div>
  )
}

export const accountDetailsLoader = async (id) => {
  const res = await fetch("http://localhost:5000/api/students/codE/" + id)
  if (!res.ok) {
    throw Error("Could Not find that student")
  }

  return res.json()
}
