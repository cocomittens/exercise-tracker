import React, { useEffect } from "react";
import ExerciseForm from "../components/ExerciseForm";
import { useExercise } from "../context/exercise";
import { createExercise } from "../api/api";
import { useAuth0 } from "@auth0/auth0-react";

function CreateExercise() {
  const { name, reps, weight, unit, date, clearExercise } = useExercise();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const onSubmit = async () => {
    const response = await createExercise({ name, reps, weight, unit, date });

    if (response.status === 201) {
      alert(`Successfully created exercise`);
    } else {
      const errors = await response.json();
      alert(`Failed to create exercise, errors: ${JSON.stringify(errors)}`);
    }
  };

  useEffect(() => {
    clearExercise();
  }, []);

  // return isAuthenticated ? (
  //   <ExerciseForm onSubmit={onSubmit} />
  // ) : (
  //   "Please log in to create an exercise"
  // );

  return <ExerciseForm onSubmit={onSubmit} />;
}

export default CreateExercise;
