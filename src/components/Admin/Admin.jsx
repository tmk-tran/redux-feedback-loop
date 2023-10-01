import React, { useEffect } from 'react';
import "./Admin.css";

export default function Admin({ feedbackList, getFeedback, deleteFeedback }) {
  //  HAD THE FOLLOWING HERE, BUT IT WAS CAUSING ERRORS, SO I MOVED IT TO APP COMPONENT
  //  State, and an axios GET request
  useEffect(() => {
    getFeedback();
  }, []);

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
            <tr key={feedback.id}>
              <td id="id">{feedback.id}</td>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
              <td>
                <button>Flag</button>
                <button onClick={() => deleteFeedback(feedback.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
