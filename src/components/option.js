// indiv option

import React from "react"
import {Router, Route, Link, Switch, NavLink } from "react-router-dom"

const Option = (props) => {
  return (
    <div>
      <Link to="/options/create">
        {props.optionText}
      </Link>
    </div>
  )
}

export default Option