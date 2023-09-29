import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Feeling.css";

export default function Feeling() {
  const [feeling, setFeeling] = React.useState("");

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">How are you feeling today?</Typography>
        <form>
            <Typography variant="h6">On a scale from 1-5:</Typography>
          {/* <TextField
            label="Feeling"
            variant="outlined"
            type="number"
            style={{ width: "10%" }}
            inputProps={{ min: 1, max: 5, step: 1 }}
            margin="normal"
          /> */}
          <div classNmae="radio">
            {/* 1
            <input
              type="radio"
              name="feeling"
              value="1"
              //   checked={newDeliveryMethod === "Delivery"}
              //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
            />
            2
            <input
              type="radio"
              name="feeling"
              value="2"
              //   checked={newDeliveryMethod === "Delivery"}
              //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
            />
            3
            <input
              type="radio"
              name="feeling"
              value="3"
              //   checked={newDeliveryMethod === "Delivery"}
              //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
            />
            4
            <input
              type="radio"
              name="feeling"
              value="4"
              //   checked={newDeliveryMethod === "Delivery"}
              //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
            />
            5
            <input
              type="radio"
              name="feeling"
              value="5"
              //   checked={newDeliveryMethod === "Delivery"}
              //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
            /> */}
            <table>
  <thead>
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <input
          type="radio"
          name="feeling"
          value="1"
          //   checked={newDeliveryMethod === "Delivery"}
          //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
        />
      </td>
      <td>
        <input
          type="radio"
          name="feeling"
          value="2"
          //   checked={newDeliveryMethod === "Delivery"}
          //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
        />
      </td>
      <td>
        <input
          type="radio"
          name="feeling"
          value="3"
          //   checked={newDeliveryMethod === "Delivery"}
          //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
        />
      </td>
      <td>
        <input
          type="radio"
          name="feeling"
          value="4"
          //   checked={newDeliveryMethod === "Delivery"}
          //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
        />
      </td>
      <td>
        <input
          type="radio"
          name="feeling"
          value="5"
          //   checked={newDeliveryMethod === "Delivery"}
          //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
        />
      </td>
    </tr>
  </tbody>
</table>
          </div>
          <Button variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
