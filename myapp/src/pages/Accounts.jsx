import React, { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import Input from "@mui/joy/Input"
import { DataGrid } from "@mui/x-data-grid"
import "../styles/accountes.css"
import Button from "@mui/material/Button"
import AddAccountForm from "../components/AddAccountForm"
import DeleteAccount from "../components/DeleteAccount"
import { StudentsContextProvider } from "../context/StudentsContext"

//gardes
const columns = [
  {
    field: "codE",
    headerName: "Id",
    width: 150,
    cellClass0Name: "custom-cell-class",
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    cellClassName: "custom-cell-class",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 100,
    cellClassName: "custom-cell-class",
  },
  {
    field: "field",
    headerName: "Field",
    width: 100,
    cellClassName: "custom-cell-class",
  },
  {
    field: "niveau",
    headerName: "Class",
    width: 0,
    cellClass0Name: "custom-cell-class",
  },
  {
    field: "role",
    headerName: "Role",
    width: 150,
    cellClassName: "custom-cell-class",
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    cellClassName: "custom-cell-class",
  },
]

export default function Accounts() {
  const accountes = useLoaderData()
  return (
    <main className="accounts-container">
      <div className="table-container">
        <DataGrid
          className="table"
          rows={accountes}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
        />
      </div>
      <DeleteAccount />
      <AddAccountForm />
    </main>
  )
}

export const accountesLoader = async () => {
  const res = await fetch("http://localhost:5000/api/students/")
  if (!res.ok) {
    throw Error("Faild To Find Data")
  }
  return res.json()
}

export const accountDetailsLoader = async (id) => {
  const res = await fetch("http://localhost:5000/api/students/codE/" + id)
  if (!res.ok) {
    throw Error("Could Not find that student")
  }

  return res.json()
}

//json-server -p 4010 -w ./data/accountes.json
