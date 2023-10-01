import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// copy first three lines for other components setup
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Comments() {
  // bring in data from last component
  const feelingData = useSelector((state) => state.feelingReducer);
  const understandingData = useSelector((state) => state.understandingReducer);
  const supportData = useSelector((state) => state.supportReducer);
  console.log("IN COMMENTS COMPONENT, data received:", feelingData);
  console.log("IN COMMENTS COMPONENT, data received:", understandingData);
  console.log("IN COMMENTS COMPONENT, data received:", supportData);

  // state for this component
  const [comments, setComments] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("clicked NEXT");

    event.preventDefault();
    if (comments === "") {
      return alert("Please enter your response!");
    }

    dispatch({
      type: "SET_COMMENTS",
      payload: {
        comments: comments,
      },
    });
    history.push("/review");

    // testing which comments coming through
    console.log("Response for comments: ", comments);
  };

  const goBack = () => {
    // need event prevent default here???
    console.log("clicked BACK");
    history.push("/review");
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">Any comments you want to leave?</Typography>
        <Button
          onClick={goBack}
          className="topBtn"
          variant="contained"
          color="primary"
          size="small"
        >
          Back
        </Button>
        <form>
          <TextField
            label="Comments"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(event) => setComments(event.target.value)}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Next
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
