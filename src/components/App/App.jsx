import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Review from "../Review/Review";
import Comments from "../Comments/Comments";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
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
      <div className="nav">
        <Link className="link" to="/">
          Feeling
        </Link>
        <Link to="/understanding">
          Understanding
        </Link>
        <Link to="/support">Support</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/review">Review</Link>
      </div>
    </Router>
  );
}

export default App;
