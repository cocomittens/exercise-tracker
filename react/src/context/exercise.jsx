import React, { useState, createContext, useContext } from 'react';

const ExerciseContext = createContext();

export const useExercise = () => {
    const context = useContext(ExerciseContext);
    return context;
}

export const ExerciseProvider = ({ children }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [unit, setUnit] = useState("lbs");
    const [date, setDate] = useState("");
    const [isDelete, setIsDelete] = useState(false);
    const [isClicked, setIsClicked] = useState(false);  

    const setExercise = (exercise) => {
        setId(exercise._id)
        setName(exercise.name);
        setReps(exercise.reps);
        setWeight(exercise.weight);
        setUnit(exercise.unit);
        setDate(exercise.date);
    }

    const clearExercise = () => {
        setId(0);
        setName("");
        setReps(0);
        setWeight(0);
        setUnit("lbs");
        setDate("");
    }
        
    
    const value = {id, setId, name, setName, reps, setReps, weight, setWeight, unit, setUnit, date, setDate, setExercise, isDelete, setIsDelete, isClicked, setIsClicked, clearExercise};

    return(
        <ExerciseContext.Provider value={value}>
            {children}
        </ExerciseContext.Provider>)
}