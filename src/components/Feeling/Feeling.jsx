import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Feeling.css";

export default function Feeling() {
  const [feeling1, setFeeling1] = React.useState("");
  const [feeling2, setFeeling2] = React.useState("");
  const [feeling3, setFeeling3] = React.useState("");
  const [feeling4, setFeeling4] = React.useState("");
  const [feeling5, setFeeling5] = React.useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("clicked NEXT", event);
    event.preventDefault();
    dispatch({
      type: "SET_FEELING",
      payload: {
        feeling1: feeling1,
        feeling2: feeling2,
        feeling3: feeling3,
        feeling4: feeling4,
        feeling5: feeling5,
      },
    });
    history.push("/understanding");
    console.log(
      "Feeling is: ",
      feeling1,
      feeling2,
      feeling3,
      feeling4,
      feeling5
    );

    setFeeling1("");
    setFeeling2("");
    setFeeling3("");
    setFeeling4("");
    setFeeling5("");
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
                    //   checked={feeling1 === "1"}
                      onChange={(event) => setFeeling1(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="2"
                      id="input"
                    //   checked={feeling2 === "2"}
                      onChange={(event) => setFeeling2(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="3"
                      id="input"
                    //   checked={feeling3 === "3"}
                      onChange={(event) => setFeeling3(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="4"
                      id="input"
                    //   checked={feeling4 === "4"}
                      onChange={(event) => setFeeling4(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="5"
                      id="input"
                    //   checked={feeling5 === "5"}
                      onChange={(event) => setFeeling5(event.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
        </form>
      </CardContent>
    </Card>
  );
}
