import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Admin from "../Admin/Admin";
import StartPage from "../StartPage/StartPage";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Review from "../Review/Review";
import Comments from "../Comments/Comments";
import SuccessPage from "../SuccessPage/SuccessPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/feeling">
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/success">
          <SuccessPage />
        </Route>
      </Switch>
      <Redirect to="/" /> {/* Default redirect to the first form */}
      <div className="nav">
        <Link to="/admin">Admin</Link>
        <Link to="/">Home</Link>
        <Link to="/feeling">Feeling</Link>
        <Link to="/understanding">Understanding</Link>
        <Link to="/support">Support</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/review">Review</Link>
        <Link to="/success">Success</Link>
      </div>
    </Router>
  );
}

export default App;
