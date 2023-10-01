import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

export default function Admin() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const source = axios.CancelToken.source();

  useEffect(() => {
    // update axios to below, there was a memory leak previously
    axios
      .get("/form", {
        cancelToken: source.token,
      })
      .then((res) => {
        setFeedbackList(res.data);
        setLoading(false); // Data loaded, set loading to false
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          setError(err); // Set error state
          setLoading(false); // Error occurred, set loading to false
        }
      });
  }, []);

  // Render based on loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Welcome to Admin, bruh</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Response ID</th>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
