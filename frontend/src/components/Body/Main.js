import {Switch, Route, Redirect} from "react-router-dom";
import Home from "../../pages/Home";

function Main() {
  return (
    <main className="main-container">
      <Switch>
          <Route path="/" exact component={Home} />
            
          <Route path='*'>
            <Redirect to='/' />
          </Route>
      </Switch>
    </main>
  )
}

export default Main;