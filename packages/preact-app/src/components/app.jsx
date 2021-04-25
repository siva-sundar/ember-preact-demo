import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "preact-app/components/header/index.jsx";

// Code-splitting is automated for `routes` directory
import Home from "preact-app/routes/home/index.jsx";
import Profile from "preact-app/routes/profile/index.jsx";

const App = () => (
  <div id="app">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile user="me" />
        </Route>
        <Route path="/profile/:user">
          <Profile />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
