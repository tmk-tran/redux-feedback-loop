import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

import "./Admin.css";

export default function Admin({ feedbackList, getFeedback, deleteFeedback }) {
  //  HAD THE FOLLOWING HERE, BUT IT WAS CAUSING ERRORS, SO I MOVED IT TO APP COMPONENT
  // - axios GET request
  const [flaggedFeedback, setFlaggedFeedback] = useState({}); // state for flagging items

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

  return (
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
              className={
                flaggedFeedback[feedback.id] ? "flagged-row" : ""
              }
            >
              <td id="id">{feedback.id}</td>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
              <td>
                <IconButton onClick={() => flagItem(feedback.id)}><FlagOutlinedIcon /></IconButton>
                <br />
                <IconButton onClick={() => deleteFeedback(feedback.id)}><DeleteIcon /></IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
