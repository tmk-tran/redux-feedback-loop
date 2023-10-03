import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Review.css";

export default function Review() {
  // bring in data from last component
  const feelingData = useSelector((state) => state.feelingReducer);
  const understandingData = useSelector((state) => state.understandingReducer);
  const supportData = useSelector((state) => state.supportReducer);
  const commentsData = useSelector((state) => state.commentsReducer);
  console.log("IN REVIEW COMPONENT, data received:", feelingData);
  console.log("IN REVIEW COMPONENT, data received:", understandingData);
  console.log("IN REVIEW COMPONENT, data received:", supportData);
  console.log("IN REVIEW COMPONENT, data received:", commentsData);

  const history = useHistory();

  const submitForm = () => {
    let formData = {
      feeling: feelingData.feeling,
      understanding: understandingData.understanding,
      support: supportData.support,
      comments: commentsData.comments,
    };
    // Check if any field is empty
    if (
      formData.feeling === undefined ||
      formData.understanding === undefined ||
      formData.support === undefined ||
      formData.comments === undefined
    ) {
      alert("Please go back and fill out all forms!");
      return; // Stop the function if any field is empty
    }

    console.log("FORM DATA CONTAINS: ", formData);

    // send form data to backend
    axios
      .post("/form", formData)
      .then((response) => {
        console.log("Sent to Server: ", response);
      })
      .catch((error) => {
        console.log("Error sending: ", error);
      });
    history.push("/success");
  };

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography className="review-head" variant="h3">
          Review
        </Typography>
        <br />
        <div className="review-info">
          <table className="review-table">
            <thead>
              <tr>
                <th id="section-head">Section</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="section">Feeling</td>
                <td id="response">{feelingData.feeling}</td>
              </tr>
              <tr>
                <td id="section">Understanding</td>
                <td id="response">{understandingData.understanding}</td>
              </tr>
              <tr>
                <td id="section">Support</td>
                <td id="response">{supportData.support}</td>
              </tr>
              <tr>
                <td id="section">Comments</td>
                <td id="response">{commentsData.comments}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Typography
          className="above-submit"
          variant="body1"
          color="text.secondary"
          component="p"
        >
          Everything look good?
        </Typography>
        <Typography
          className="above-submit"
          variant="body2"
          color="text.secondary"
          component="p"
        >
          Submit your feedback below!
        </Typography>
        <br />
        <Button
          onClick={submitForm}
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
