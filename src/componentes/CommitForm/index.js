import React, { useState } from "react";

function CommitForm({ onFetchCommits }) {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchCommits(repoUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        placeholder="Digite a URL do repositorio GitHub"
        required
      />
      <button type="submit">Consulta Commits</button>
    </form>
  );
}

export default CommitForm;
