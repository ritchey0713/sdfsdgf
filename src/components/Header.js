import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
  return(
    <div>
      <Link to="/options/new"><h1>Create an option</h1></Link>
    </div>
  )
}

export default Header