import React from "react"
import {BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom"
import App from "../App"

import AddOption from "../components/AddOption"

const appRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact={true}/>
        <Route path="/create" component={AddOption} />
      </Switch>
    </BrowserRouter>
  )
}

export default appRouter