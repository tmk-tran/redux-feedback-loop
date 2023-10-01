import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios
      .get("/form")
      .then((res) => {
        setFeedbackList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  // const deleteFeedback = (id) => {
  //   axios
  //     .delete("/form/${id}")
  //     .then((res) => {
  //       // Update the feedbackList state by filtering out the deleted feedback
  //       setFeedbackList((prevList) =>
  //         prevList.filter((item) => item.id !== id)
  //       );
  //     })
  //     .catch((err) => {
  //       console.log("Error deleting feedback", err);
  //     });
  // };
  const deleteFeedback = (id) => {
    axios
      .delete(`/form/${id}`)
      .then((response) => {
        console.log("Clicked DELETE, deleting ID #: ", id);
        getFeedback();
      })
      .catch((err) => console.log("Error in deleting feedback", err));
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/admin">
          <Admin
            feedbackList={feedbackList}
            loading={loading}
            error={error}
            deleteFeedback={deleteFeedback}
          />
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
