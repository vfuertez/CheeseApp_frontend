import React from 'react'
import { useLoaderData, Form } from 'react-router-dom'

function Show(props) {
  const cheese = useLoaderData()
  return (
    <div>
      <Form action={`/update/${cheese._id}`} method="post">
        <input type="input" name="name" placeholder="cheese name" />
        <input type="input" name="image" placeholder="cheese image" />
        <input type="input" name="type" placeholder="cheese type" />
        <input type="submit" value="update" />
      </Form>

      <h1>{cheese.name}</h1>
      <h2>{cheese.type}</h2>
      <img src={cheese.image} alt={cheese.name} />
    </div>
  )
}
export default Show
