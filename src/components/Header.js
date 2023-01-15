import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div><h1>Cheese App</h1></div>
      </Link>
    </nav>
  )
}

export default Header