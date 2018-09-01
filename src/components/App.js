import React, { Component } from "react"
import Header from "./Header"
import { Switch, Route } from "react-router-dom"
import HomeContainer from "../containers/HomeContainer"
import SearchContainer from "../containers/SearchContainer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/search/:number" component={SearchContainer} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
