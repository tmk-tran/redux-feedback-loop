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
          <br />
          <br />
          <div className="radio">
            <table className="radio-table">
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
                      id="input"
                      //   checked={newDeliveryMethod === "Delivery"}
                      //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="2"
                      id="input"
                      //   checked={newDeliveryMethod === "Delivery"}
                      //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="3"
                      id="input"
                      //   checked={newDeliveryMethod === "Delivery"}
                      //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="4"
                      id="input"
                      //   checked={newDeliveryMethod === "Delivery"}
                      //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="5"
                      id="input"
                      //   checked={newDeliveryMethod === "Delivery"}
                      //   onChange={(event) => setNewDeliveryMethod(event.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <Button variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
