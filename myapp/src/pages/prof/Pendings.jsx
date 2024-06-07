import React, { useEffect, useState } from "react"
import "../../styles/announces.css"


export default function Pendings() {
  const [announces, setAnnounces] = useState([])

  useEffect(() => {
    const fetchAnnounces = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/announces")
        if (!res.ok) {
          throw new Error("Failed To Find Data")
        }
        const json = await res.json()
        setAnnounces(json)
      } catch (error) {
        console.error("Error fetching announces:", error)
      }
    }
    fetchAnnounces()
  }, [])

  return (
    <div className="careers">
      {announces.length === 0 ? (
        <h1>No announcements available</h1>
      ) : (
        announces.map((announce, index) => (
          <div key={index} className="announce-card">
            <p className="announce-maker">{announce.maker}</p>
            <p>{announce.description}</p>
            <div>
              <p className={announce.filier}>
                {announce.filier} {announce.year}
              </p>
              {announce.isValideAdmin ? (
                <p className="confirmed">Status: Confirmed</p>
              ) : (
                <p className="pending">Status: Pending</p>
              )}
            </div>

            <p className="announce-date">{new Date(announce.createdAt).toISOString().split("T")[0]}</p>
          </div>
        ))
      )}
    </div>
  )
}
