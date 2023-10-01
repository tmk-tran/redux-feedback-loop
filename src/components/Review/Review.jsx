import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

  // state for this component
//   const [review, setReview] = useState("");

//   const dispatch = useDispatch();
//   const history = useHistory();

//   const handleSubmit = (event) => {
//     console.log("clicked NEXT");

//     event.preventDefault();

//     dispatch({
//       type: "SET_REVIEW",
//       payload: {
//         comments: comments,
//       },
//     });
//     history.push("/review");

//     // testing which feeling coming through
//     console.log("Response for comments: ", comments);
//   }; 

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">Review your feedback</Typography>
        <form>
          <TextField
            label="Review"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
