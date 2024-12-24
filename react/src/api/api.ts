import { Exercise } from "../types/Exercise";

const createExercise = async (exercise: Exercise) => {
  const { name, reps, weight, unit, date } = exercise;
  const response = await fetch(`/exercises`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, reps, weight, unit, date }),
  });
  return response;
};

const getExercises = async () => {
  const response = await fetch(`/exercises`);
  return response.json();
};

const getExercise = async (id: string) => {
  const response = await fetch(`/exercises/${id}`);
  return response.json();
};

const updateExercise = async (exercise: Exercise) => {
  const { id, name, reps, weight, unit, date } = exercise;
  const response = await fetch(`/exercises/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, reps, weight, unit, date }),
  });
  return response;
};

const deleteExercise = async (id: string) => {
  const response = await fetch(`/exercises/${id}`, {
    method: "DELETE",
  });
  return response;
};

export {
  createExercise,
  getExercises,
  getExercise,
  updateExercise,
  deleteExercise,
};
