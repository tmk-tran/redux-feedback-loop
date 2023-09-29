import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Review() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">Review your feedback</Typography>
        <form>
          <TextField
            label="Review"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}