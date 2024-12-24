import React from "react";
import ExerciseItem from "./ExerciseItem";

function ExerciseList({ exercises }) {
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
        {exercises.map((exercise) => {
          return <ExerciseItem key={exercise._id} exercise={exercise} />;
        })}
      </tbody>
    </table>
  );
}

export default ExerciseList;
