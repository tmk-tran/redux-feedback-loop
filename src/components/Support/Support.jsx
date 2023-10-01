import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// copy first three lines for other components setup
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Support() {
  // bring in data from last component
  const feelingData = useSelector((state) => state.feelingReducer);
  const understandingData = useSelector((state) => state.understandingReducer);
  console.log("IN SUPPORT COMPONENT, data received:", feelingData);
  console.log("IN SUPPORT COMPONENT, data received:", understandingData);

  // state for this component
  const [support, setSupport] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("clicked NEXT");

    event.preventDefault();
    if (support === "") {
      return alert("Please enter your response!");
    }

    dispatch({
      type: "SET_SUPPORT",
      payload: {
        support: support,
      },
    });
    history.push("/comments"); // add to pass prop to next component

    // testing which feeling coming through
    console.log("Response for support is: ", support);

    setSupport("");
  };

  const goBack = () => {
    // need event prevent default here???
    console.log("clicked BACK");
    history.push("/understanding");
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">How well are you being supported?</Typography>
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
            label="Support"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(event) => setSupport(event.target.value)}
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
