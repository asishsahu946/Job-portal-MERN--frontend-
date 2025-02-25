import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jobportalmernbackend.vercel.app/getjobs/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
  })
  return (
    <div>
        <h1>JobDetails</h1>
        <h1>{id}</h1>
      </div>
  )
}

export default JobDetails