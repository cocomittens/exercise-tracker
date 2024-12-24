import mongoose from "mongoose";
import "dotenv/config";

let connection = undefined;
let Exercise = undefined;

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
    connection = mongoose.connection;
    Exercise = createModel();
    console.log("Successfully connected to MongoDB using Mongoose!");
    return mongoose.connection;
  } catch (err) {
    console.log(err);
    throw Error(`Could not connect to MongoDB ${err.message}`);
  }
}

function createModel() {
  const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true },
  });
  return mongoose.model("Exercise", exerciseSchema);
}

async function createExercise(name, reps, weight, unit, date) {
  const exercise = new Exercise({ name, reps, weight, unit, date });
  return exercise.save();
}

async function getExercises() {
  return Exercise.find();
}

async function getExercise(_id) {
  return Exercise.findOne({ _id });
}

async function updateExercise(_id, name, reps, weight, unit, date) {
  return Exercise.findOneAndUpdate(
    { _id },
    { name, reps, weight, unit, date },
    { new: true }
  );
}

async function deleteExercise(_id) {
  const result = await Exercise.deleteOne({ _id });
  return result.deletedCount === 1;
}

export {
  connect,
  createExercise,
  getExercise,
  getExercises,
  updateExercise,
  deleteExercise,
};
