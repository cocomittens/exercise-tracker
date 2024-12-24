import React, { useState, useEffect } from "react";
import ExerciseList from "../components/ExerciseList";
import { useExercise } from "../context/exercise";
import { getExercises, deleteExercise } from "../api/api";

function Home() {
  const [exercises, setExercises] = useState([]);

  const { id, isDelete, setIsDelete, isClicked } = useExercise();

  useEffect(() => {
    const deleteData = async () => {
      try {
        await deleteExercise(id);
        const data = await getExercises();
        setExercises(data);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchData = async () => {
      try {
        const data = await getExercises();
        setExercises(data);
      } catch (e) {
        console.error(e);
      }
    };

    if (isDelete) {
      deleteData();
      setIsDelete(false);
    }

    fetchData();
  }, [isDelete, isClicked]);

  return <ExerciseList exercises={exercises} />;
}

export default Home;
