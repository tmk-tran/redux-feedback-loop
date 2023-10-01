import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
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

  const submitForm = () => {
    let formData = {
      feeling: feelingData.feeling,
      understanding: understandingData.understanding,
      support: supportData.support,
      comments: commentsData.comments,
    };

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
  };

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography variant="h6">Please review your feedback:</Typography>
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
