import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Home from "./pages/Home";
import CreateExercise from "./pages/CreateExercise";
import EditExercise from "./pages/EditExercise";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <header>
        <h1>Exercise Tracker</h1>
        <p>App to keep track of a list of exercises.</p>
        <p>
          Click the icons to delete or edit an exercise, or create one with the
          create button above.
        </p>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/edit" element={<EditExercise />} />
      </Routes>

      <footer>© 2024 Corrie Stoddard</footer>
    </>
  );
}

export default App;
