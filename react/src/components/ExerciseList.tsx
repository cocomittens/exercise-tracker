import React from "react";
import { Exercise } from "../types/Exercise";
import ExerciseItem from "../components/ExerciseItem";

function ExerciseList({ exercises }: { exercises: Exercise[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Unit</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise: Exercise) => {
          return <ExerciseItem key={exercise._id} exercise={exercise} />;
        })}
      </tbody>
    </table>
  );
}

export default ExerciseList;
