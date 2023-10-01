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

    dispatch({
      type: "SET_FEELING",
      payload: {
        feeling: selectedFeeling,
      },
    });
    history.push("/understanding");

    // testing which feeling coming through
    console.log("Feeling is: ", selectedFeeling);

    // setSelectedFeeling("");
  };

  //   axios
  //     .post("/orders/", {newName, newAddress, newCity, newZip, newDeliveryMethod})
  //     .then((response) => {
  //       console.log('POSTing orders', );
  //     })
  //     .catch((err) => console.log("Error in adding new order", err));
  // };

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography variant="h6">How are you feeling today?</Typography>
        <Typography variant="h6">On a scale from 1-5:</Typography>
        <br />
        <br />
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={selectedFeeling}
        >
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
        </RadioGroup>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ padding: "20px" }}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </CardContent>
    </Card>
  );
}
