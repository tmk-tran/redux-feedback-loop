import React from "react";
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

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">Please review your feedback:</Typography>
        <div className="review-info">
          <table className="review-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Feeling</td>
                <td>{feelingData.feeling}</td>
              </tr>
              <tr>
                <td>Understanding</td>
                <td>{understandingData.understanding}</td>
              </tr>
              <tr>
                <td>Support</td>
                <td>{supportData.support}</td>
              </tr>
              <tr>
                <td>Comments</td>
                <td>{commentsData.comments}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
