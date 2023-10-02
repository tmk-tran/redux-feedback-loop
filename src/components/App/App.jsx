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
import Swal from "sweetalert2";

function App() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios
      .get("/form")
      .then((res) => {
        setFeedbackList(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const deleteFeedback = (id) => {
    Swal.fire({ // essential sweet alert info
      title: "Are you sure?",
      text: "You will not be able to recover this feedback!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with deletion
        axios
          .delete(`/form/${id}`)
          .then((response) => {
            Swal.fire({ // additional message for delete button press
              title: "Deleted!",
              text: "The feedback has been deleted.",
              icon: "success",
            });
            console.log("Clicked DELETE, deleting ID #: ", id);
            getFeedback();
          })
          .catch((err) => {
            Swal.fire({ // additional message for cancel button press
              title: "Error",
              text: "An error occurred while deleting the feedback.",
              icon: "error",
            });
            console.log("Error in deleting feedback", err);
          });
      } else {
        // User cancels the deletion, message to show
        Swal.fire("Cancelled", "The feedback was not deleted.", "info");
      }
    });
  };

  return (
    <Router>
      <Header />
      <br />
      <br />
      <Switch>
        <Route exact path="/admin">
          <Admin
            feedbackList={feedbackList}
            getFeedback={getFeedback}
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
      {/* <Redirect to="/" /> Default redirect to the first form */}
      <div className="nav">
        {/* <Link to="/admin">Admin</Link> */}
        <Link to="/">Home</Link>
        <Link to="/feeling">Feeling</Link>
        <Link to="/understanding">Understanding</Link>
        <Link to="/support">Support</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/review">Review</Link>
        {/* <Link to="/success">Success</Link> */}
      </div>
    </Router>
  );
}

export default App;
