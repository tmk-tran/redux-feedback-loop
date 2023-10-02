import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// copy first three lines for other components setup
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Understanding.css";

export default function Understanding() {
  // bring in data from last component
  const feelingData = useSelector((state) => state.feelingReducer);
  console.log("IN UNDERSTANDING COMPONENT, data received:", feelingData);
  // state for this component
  const [understanding, setUnderstanding] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("clicked NEXT");

    event.preventDefault();
    if (understanding === "") {
      return alert("Please enter your response!");
    }

    const understandingValue = Number(understanding); // converting to a number to send

    dispatch({
      type: "SET_UNDERSTANDING",
      payload: {
        understanding: understandingValue, // sending the value as a number
      },
    });
    history.push("/support");

    // testing which response coming through
    console.log("Response for understanding is: ", understanding);
  };

  const goBack = () => {
    // need event prevent default here???
    console.log("clicked BACK");
    history.push("/feeling");
  };

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <div className="top">
          <div className="header">
            <Typography variant="h6">
              How well are you understanding the content?
            </Typography>
          </div>
          <div className="backBtn">
            <Button
              onClick={goBack}
              className="topBtn"
              variant="contained"
              color="primary"
              size="small"
            >
              Back
            </Button>
          </div>
        </div>
        <Typography variant="h7">On a scale from 1-5:</Typography>
        <br />
        <br />
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={understanding}
        >
          <div>
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="1"
              onChange={(event) => setUnderstanding(event.target.value)}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="2"
              onChange={(event) => setUnderstanding(event.target.value)}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="3"
              onChange={(event) => setUnderstanding(event.target.value)}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="4"
              onChange={(event) => setUnderstanding(event.target.value)}
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="5"
              onChange={(event) => setUnderstanding(event.target.value)}
            />
          </div>
        </RadioGroup>
        <br />
        <br />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          fullWidth
        >
          Next
        </Button>
      </CardContent>
    </Card>
  );
}
