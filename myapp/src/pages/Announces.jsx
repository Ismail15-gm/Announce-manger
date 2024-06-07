import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import "../styles/announces.css"
import Button from "@mui/material/Button"

export default function Announces() {
  const announces = useLoaderData()

  async function handleAccept(id) {
    const formData = {
      isValideAdmin: true,
    }
    console.log("Accepting announcement with ID:", id)
    const response = await fetch("http://localhost:5000/api/announces/" + id, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json()
    if (response.ok) {
      alert("Announce got Accepted")
      window.location.reload()
    } else {
      alert("Something Went Wrong")
    }
  }


  async function handleReject(id) {
    console.log("Rejecting announcement with ID:", id)
    const response = await fetch("http://localhost:5000/api/announces/" + id, {
      method: "DELETE",
    })
    const json = await response.json()
    if (response.ok) {
      alert("Announce got Rejected And Deleted")
      window.location.reload()
    } else {
      alert("Something Went Wrong")
    }
  }

  return (
    <div className="careers">
      {announces.length === 0 ? ( 
        <h1>No announcements available</h1>
      ) : (
        announces.map((announce, index) => (
          <div key={index} className="announce-card">
            <p className="maker">{announce.maker}</p>
            <p>{announce.description}</p>
            <p className={announce.filier}>
                {announce.filier} {announce.year}
              </p>
            <p>{new Date(announce.createdAt).toISOString().split("T")[0]}</p>
            <div className="bottom-part">
              <Button
                color="success"
                variant="contained"
                onClick={() => handleAccept(announce._id)}
              >
                Accept
              </Button>
              <Button
                color="error"
                variant="contained"
                onClick={() => handleReject(announce._id)}
              >
                Reject
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export const announcestesLoader = async () => {
  const res = await fetch(
    "http://localhost:5000/api/announces/isValideAdmin/false"
  )
  if (!res.ok) {
    throw Error("Failed To Find Data")
  }
  return res.json()
}
