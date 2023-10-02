import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./Admin.css";

export default function Admin({ feedbackList, getFeedback, deleteFeedback }) {
  //  HAD THE FOLLOWING HERE, BUT IT WAS CAUSING ERRORS, SO I MOVED IT TO APP COMPONENT
  // - axios GET request
  const [flaggedFeedback, setFlaggedFeedback] = useState({}); // state for flagging items
  // authentication for fun
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // added useEffect to get data on page load
  useEffect(() => {
    getFeedback();
  }, []);

  const flagItem = (id) => {
    console.log("FLAG clicked", flaggedFeedback);
    // Toggle the flag status for the feedback item with the given ID
    setFlaggedFeedback((prevFlagged) => ({
      ...prevFlagged,
      [id]: !prevFlagged[id],
    }));
  };

  // authentication for fun
  const handleLogin = () => {
    const validUsername = "admin";
    const validPassword = "password";

    if (validUsername === username && validPassword === password) {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1 className="admin-h1">Welcome to Admin</h1>
          <table className="admin-table">
            <thead className="admin-head">
              <tr>
                <th>ID</th>
                <th>Feeling</th>
                <th>Understanding</th>
                <th>Support</th>
                <th>Comments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((feedback) => (
                <tr
                  key={feedback.id}
                  className={flaggedFeedback[feedback.id] ? "flagged-row" : ""}
                >
                  <td id="id">{feedback.id}</td>
                  <td>{feedback.feeling}</td>
                  <td>{feedback.understanding}</td>
                  <td>{feedback.support}</td>
                  <td>{feedback.comments}</td>
                  <td>
                    <IconButton onClick={() => flagItem(feedback.id)}>
                      <FlagOutlinedIcon />
                    </IconButton>
                    <br />
                    <IconButton onClick={() => deleteFeedback(feedback.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-form">
          <Card style={{width: "15%", margin: "0 auto"}}>
            <CardContent className="login-card">
              <Typography className="login-head" variant="h3">Hello!</Typography>
              <br />
              <br />
              <TextField
                className="login-input"
                type="text"
                label="Username"
                value={username}
                fullWidth
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <br />
              <TextField
                className="login-input"
                type="password"
                label="Password"
                value={password}
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <Button onClick={handleLogin}>Login</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
