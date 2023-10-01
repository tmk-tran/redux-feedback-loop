import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// copy first three lines for other components setup
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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

    dispatch({
      type: "SET_UNDERSTANDING",
      payload: {
        understanding: understanding,
      },
    });
    history.push("/support"); // add to pass prop to next component

    // testing which response coming through
    console.log("Response for understanding is: ", understanding);
  };

  const goBack = () => {
    // need event prevent default here???
    console.log("clicked BACK");
    history.push("/");
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <div className="top">
          <Typography variant="h6">
            How well are you understanding the content?
          </Typography>
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
                      name="understanding"
                      value="1"
                      id="input"
                      onChange={(event) =>
                        setUnderstanding(event.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="understanding"
                      value="2"
                      id="input"
                      onChange={(event) =>
                        setUnderstanding(event.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="understanding"
                      value="3"
                      id="input"
                      onChange={(event) =>
                        setUnderstanding(event.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="understanding"
                      value="4"
                      id="input"
                      onChange={(event) =>
                        setUnderstanding(event.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="understanding"
                      value="5"
                      id="input"
                      onChange={(event) =>
                        setUnderstanding(event.target.value)
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
