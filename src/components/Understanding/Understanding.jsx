import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Understanding.css";

export default function Understanding() {
  return (
    <Card variant="outlined">
      <CardContent>
        <div className="top">
          <Typography variant="h6">
            How well are you understanding the content?
          </Typography>
            <Button className="topBtn" variant="contained" color="primary" size="small">
              Back
            </Button>
        </div>
        <form>
          <TextField
            label="Understanding"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
