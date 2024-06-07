import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./styles/App.css"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  NavLink,
} from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import RootLayout from "./layouts/RootLayout"
import MainLayout from "./layouts/MainLayout"
import Accounts, { accountesLoader } from "./pages/Accounts"
import Announces, { announcestesLoader } from "./pages/Announces"
import Profile from "./pages/Profile"
import States from "./pages/States"
import AddAnnounce from "./pages/prof/AddAnnounce"
import Pendings from "./pages/prof/Pendings"
import MainStudent from "./pages/student/MainStudent"
import ProfLayouts from "./layouts/ProfLayouts"
import StudentsLayout from "./layouts/StudentsLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">

      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/login/main" element={<MainLayout />}>
        <Route index element={<States />} />
        <Route
          path="accounts"
          element={<Accounts />}
          loader={accountesLoader}
        />
        <Route
          path="annouces"
          element={<Announces />}
          loader={announcestesLoader}
        />
        <Route path="account" element={<Profile />} />
      </Route>

      <Route path="/profs" element={<ProfLayouts />}>
        <Route path="addAnnounce" element={<AddAnnounce />} />
        <Route path="pendings" element={<Pendings />} />
        <Route path="account" element={<Profile />} />
      </Route>

      <Route path="/students" element={<StudentsLayout />}>
        <Route path="announces" element={<MainStudent />} />
        <Route path="account" element={<Profile />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
