import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./SuccessPage.css";

export default function SuccessPage() {
  // bring in data from last component
  const feelingData = useSelector((state) => state.feelingReducer);
  const understandingData = useSelector((state) => state.understandingReducer);
  const supportData = useSelector((state) => state.supportReducer);
  const commentsData = useSelector((state) => state.commentsReducer);
  console.log("IN SUCCESS COMPONENT, data received:", feelingData);
  console.log("IN SUCCESS COMPONENT, data received:", understandingData);
  console.log("IN SUCCESS COMPONENT, data received:", supportData);
  console.log("IN SUCCESS COMPONENT, data received:", commentsData);

  const dispatch = useDispatch();
  const history = useHistory();

  const resetButton = () => {
    console.log("RESET BUTTON CLICKED");

    dispatch({
        type: "RESET",
        payload: {
          feeling: "",
          understanding: "",
          support: "",
          comments: "",
        },
      });
      history.push("/"); 

  };

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography variant="h4">Form Submitted!</Typography>
        <div className="success-info">
          <h3>Thank you!</h3>
          <br />
          <div className="centerBtn">
            <Button
              onClick={resetButton}
              className="resetBtn"
              variant="contained"
              color="primary"
              size="small"
            >
              Leave New Feedback
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
