import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import { useExercise } from "../context/exercise";
import { updateExercise } from "../api/api";

function EditExercise() {
  const { id, name, reps, weight, unit, date } = useExercise();

  const onSubmit = async () => {
    const response = await updateExercise({
      id,
      name,
      reps,
      weight,
      unit,
      date,
    });

    if (response.status === 200) {
      alert(`Successfully edited exercise`);
    } else {
      const errors = await response.json();
      alert(`Failed to edit exercise, errors: ${JSON.stringify(errors)}`);
    }
  };
  return <ExerciseForm onSubmit={onSubmit} />;
}

export default EditExercise;
