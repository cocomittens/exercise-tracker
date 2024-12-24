import { Link } from "react-router-dom";
import React from "react";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
    </nav>
  );
};
