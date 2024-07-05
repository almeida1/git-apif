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
        placeholder="Digite a URL do repositorio Git sem o .git no final"
        required
      />
      <button type="submit">Consulta</button>
    </form>
  );
}

export default CommitForm;
