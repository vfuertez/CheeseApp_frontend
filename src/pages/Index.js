import { Link, useLoaderData, Form } from 'react-router-dom'

function Index(props) {
  const cheeses = useLoaderData()

  return (
    <div>
      <h3>Add Cheese</h3>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="cheese's name" />
        <input type="input" name="image" placeholder="cheese image" />
        <input type="input" name="type" placeholder="cheese type" />
        <input type="submit" value="Add" />
      </Form>

      {cheeses.map((cheese) => (
        <div key={cheese._id} className="Index">
          <Link to={`/${cheese._id}`}>
            <h1> {cheese.name}</h1>
          </Link>
          <img src={cheese.image} alt={cheese.name} />
        </div>
      ))}
    </div>
  )
}

export default Index
