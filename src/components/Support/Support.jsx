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

    // testing which response coming through
    console.log("Response for support is: ", support);
  };

  const goBack = () => {
    // need event prevent default here???
    console.log("clicked BACK");
    history.push("/understanding");
  };

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <div className="top">
          <div className="header">
            <Typography variant="h6">
              How well are you being supported?
            </Typography>
          </div>
          <div>
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
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={support}
        >
          <div>
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="1"
              onChange={(event) => setSupport(event.target.value)}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="2"
              onChange={(event) => setSupport(event.target.value)}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="3"
              onChange={(event) => setSupport(event.target.value)}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="4"
              onChange={(event) => setSupport(event.target.value)}
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="5"
              onChange={(event) => setSupport(event.target.value)}
            />
          </div>
        </RadioGroup>
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
