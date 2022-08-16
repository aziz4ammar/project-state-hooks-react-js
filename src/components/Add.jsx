import React, { useState } from "react";

const Add = ({ add }) => {
  const [newInput, setNewInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    add(newInput);
    setNewInput("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        />
        <button type="submit">plus</button>
      </form>
    </div>
  );
};

export default Add;
