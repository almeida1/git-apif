import React from "react";
import "./styles.css";
function CommitList({ commits }) {
  return (
    <div>
      {commits.length > 0 ? (
        <ul>
          {commits.map((commit, index) => (
            <li key={index}>
              <p>
                <strong>Message:</strong> {commit.message}
              </p>
              <p>
                <strong>Date:</strong> {commit.date}
              </p>
              <p>
                <strong>Author:</strong> {commit.name}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No commits found.</p>
      )}
    </div>
  );
}

export default CommitList;
