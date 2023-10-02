import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Snackbar from '@mui/material/Snackbar';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./StartPage.css";

export default function StartPage() {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const openSnackbar = () => {
    setOpen(true);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const startClick = () => {
    console.log("START clicked");
    history.push("/feeling");
  };

  return (
    <Card className="start-card" variant="outlined">
      <CardContent>
        <Typography variant="h3" style={{ fontFamily: "Comic Sans" }}>
          Welcome!
        </Typography>
        <br />
        <Typography
          variant="body1"
          color="text.secondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          'Start' to begin
        </Typography>
        <br />
        <Button onClick={openSnackbar}>Info</Button>
        <Snackbar
          open={open}
          autoHideDuration={9000} // time adjustment
          onClose={closeSnackbar}
          message="Please fill out all the forms, and submit! Your feedback is greatly appreciated!"
          anchorOrigin={{
            vertical: 'bottom', // 'top', 'bottom'
            horizontal: 'center', // 'left', 'center', 'right'
          }}
          style={{ fontSize: '28px', padding: '20px' }} // Custom styles
        />
        <Button onClick={startClick} variant="contained" color="primary">
          Start
        </Button>
      </CardContent>
    </Card>
  );
}
