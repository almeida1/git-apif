import React, { useState } from "react";
import "./App.css";
import CommitList from "./componentes/CommitList";
import CommitForm from "./componentes/CommitForm";

function App() {
  const [commits, setCommits] = useState([]);

  const fetchCommits = async (repoUrl) => {
    try {
      const response = await fetch("http://localhost:8080/commits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ repoUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        setCommits(data);
      } else {
        setCommits([]);
      }
    } catch (error) {
      console.error("Erro ao buscar commits:", error);
      setCommits([]);
    }
  };

  return (
    <div className="App">
      <h3>Consulta Commits</h3>
      <CommitForm onFetchCommits={fetchCommits} />
      <CommitList commits={commits} />
    </div>
  );
}

export default App;
