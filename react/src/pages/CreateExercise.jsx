import React, { useEffect } from "react";
import ExerciseForm from "../components/ExerciseForm";
import { useExercise } from "../context/exercise";
import { createExercise } from "../api/api";

function CreateExercise() {
  const { name, reps, weight, unit, date, clearExercise } = useExercise();

  const onSubmit = async () => {
    const response = await createExercise({ name, reps, weight, unit, date });

    if (response.status === 201) {
      alert(`Successfully created exercise`);
    } else {
      await response.json();
      alert(`Failed to create exercise`);
    }
  };

  useEffect(() => {
    clearExercise();
  }, []);

  return <ExerciseForm onSubmit={onSubmit} />;
}

export default CreateExercise;
