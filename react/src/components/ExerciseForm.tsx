import React from "react";
import { useExercise } from "../context/exercise";
import { useNavigate } from "react-router-dom";

function ExerciseForm({ onSubmit }) {
  const {
    name,
    setName,
    reps,
    setReps,
    weight,
    setWeight,
    unit,
    setUnit,
    date,
    setDate,
  } = useExercise();

  const navigate = useNavigate();
  const weightUnits = ["lbs", "kgs"];

  return (
    <form id="exercise-form">
      <fieldset>
        <legend>Exercise Information</legend>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Reps</label>
        <input
          type="number"
          id="reps"
          name="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <div id="weight-container">
          <div>
            <label>Weight</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Unit</label>
            <select
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              {weightUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
        <label>Date</label>
        <input
          type="text"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </fieldset>
      <button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          await onSubmit();
          navigate("/");
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default ExerciseForm;
