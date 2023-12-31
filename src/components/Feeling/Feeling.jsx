import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// copy first three lines for other components setup
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Feeling.css";

export default function Feeling() {
  const [selectedFeeling, setSelectedFeeling] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("clicked NEXT");

    event.preventDefault();
    if (selectedFeeling === "") {
      return alert("Please select a feeling!");
    }

    const feelingValue = Number(selectedFeeling); // converting to a number to send

    dispatch({
      type: "SET_FEELING",
      payload: {
        feeling: feelingValue, // sending the value as a number
      },
    });
    history.push("/understanding");

    // testing which feeling coming through
    console.log("Feeling is: ", selectedFeeling);
  };

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography variant="h6">How are you feeling today?</Typography>
        <Typography variant="h7">On a scale from 1-5:</Typography>
        <br />
        <br />
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={selectedFeeling}
        >
          <div>
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="1"
              onChange={(event) => setSelectedFeeling(event.target.value)}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="2"
              onChange={(event) => setSelectedFeeling(event.target.value)}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="3"
              onChange={(event) => setSelectedFeeling(event.target.value)}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="4"
              onChange={(event) => setSelectedFeeling(event.target.value)}
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="5"
              onChange={(event) => setSelectedFeeling(event.target.value)}
            />
          </div>
        </RadioGroup>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Next
        </Button>
      </CardContent>
    </Card>
  );
}
