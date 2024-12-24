import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useExercise } from "../context/exercise";
import { useNavigate } from "react-router-dom";

function ExerciseItem(props) {
  const { _id, name, reps, weight, unit, date } = props.exercise;
  const { setExercise, setIsDelete } = useExercise();
  const navigate = useNavigate();

  const handleEdit = () => {
    setExercise(props.exercise);
    navigate("/edit");
  };

  const handleDelete = async () => {
    setExercise(props.exercise);
    setIsDelete(true);
  };

  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{reps}</td>
      <td>{weight}</td>
      <td>{unit}</td>
      <td>{date}</td>
      <td>
        <MdModeEdit onClick={handleEdit} />
      </td>
      <td>
        <MdDelete onClick={handleDelete} />
      </td>
    </tr>
  );
}

export default ExerciseItem;
