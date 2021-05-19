import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from './home'
import Complete from './complete'
import './style.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/complete">
          <Complete />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
