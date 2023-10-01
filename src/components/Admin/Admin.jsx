import "./Admin.css";

export default function Admin({ feedbackList, loading, error, deleteFeedback }) {
  //  HAD THE FOLLOWING HERE, BUT IT WAS CAUSING ERRORS, SO I MOVED IT TO APP COMPONENT
  //  State, and an axios GET request

  // Render based on loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    // HAD THIS FIRST, needed to change because of memory leak error on page load
    // <div>
    //   <h1>Welcome to Admin</h1>
    //   <table className="admin-table">
    //     <thead className="admin-head">
    //       <tr>
    //         <th>ID</th>
    //         <th>Feeling</th>
    //         <th>Understanding</th>
    //         <th>Support</th>
    //         <th>Comments</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {feedbackList.map((feedback) => (
    //         <tr key={feedback.id}>
    //           <td id="id">{feedback.id}</td>
    //           <td>{feedback.feeling}</td>
    //           <td>{feedback.understanding}</td>
    //           <td>{feedback.support}</td>
    //           <td>{feedback.comments}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div>
      <h1 className="admin-h1">Welcome to Admin</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && (
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
                  <button onClick={deleteFeedback}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
