import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Feeling.css";

export default function Feeling() {
  const [selectedFeeling, setSelectedFeeling] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("clicked NEXT");

    event.preventDefault();
    if (selectedFeeling === "") {
        return alert("Please select a feeling");
    }

    dispatch({
      type: "SET_FEELING",
      payload: {
        feeling: selectedFeeling,
      },
    });
    history.push("/understanding");

    // testing which feeling coming through
    console.log(
      "Feeling is: ",
      selectedFeeling
    );

    setSelectedFeeling("");
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
                      onChange={(event) => setSelectedFeeling(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="2"
                      id="input"
                      onChange={(event) => setSelectedFeeling(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="3"
                      id="input"
                      onChange={(event) => setSelectedFeeling(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="4"
                      id="input"
                      onChange={(event) => setSelectedFeeling(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="feeling"
                      value="5"
                      id="input"
                      onChange={(event) => setSelectedFeeling(event.target.value)}
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
