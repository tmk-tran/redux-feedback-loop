import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Understanding() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">How well are you being supported?</Typography>
        <form>
          <TextField
            label="Support"
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