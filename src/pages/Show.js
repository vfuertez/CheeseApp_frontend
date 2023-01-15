import React from 'react'
import { useLoaderData } from "react-router-dom"

function Show(props) {
    const cheese = useLoaderData()
  return (
    <div>
    <h1>{cheese.name}</h1>
    <h2>{cheese.type}</h2>
    <img src={cheese.image} alt={cheese.name} />
  </div>
  )
}
export default Show
