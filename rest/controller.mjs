import "dotenv/config";
import { auth } from "express-openid-connect";
import express from "express";
import asyncHandler from "express-async-handler";
import * as exercises from "./model.mjs";
import { ExpressValidator } from "express-validator";

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: "http://localhost:3000",
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
  secret: process.env.SECRET_KEY,
};

const { body, validationResult } = new ExpressValidator();

const isUnit = (value) => {
  return ["lbs", "kgs"].includes(value);
};

const isPositive = (value) => {
  return value > 0;
};

const isValidDate = (value) => {
  const format = /^\d\d-\d\d-\d\d$/;
  return format.test(value);
};

const app = express();

app.use(express.json());

app.use(auth(config));

app.post(
  "/exercises",
  [
    body("name").isString().isLength({ min: 1 }),
    body("reps").isInt().custom(isPositive),
    body("weight").isInt().custom(isPositive),
    body("unit").isString().custom(isUnit),
    body("date").isString().custom(isValidDate),
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Error: "Invalid request" });
    }

    const { name, reps, weight, unit, date } = req.body;
    const exercise = await exercises.createExercise(
      name,
      reps,
      weight,
      unit,
      date
    );
    res.status(201).json(exercise);
  })
);

app.get(
  "/exercises",
  asyncHandler(async (req, res) => {
    const result = await exercises.getExercises();
    res.status(200).json(result);
  })
);

app.get(
  "/exercises/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const exercise = await exercises.getExercise(id);
    if (exercise) {
      res.status(200).json(exercise);
    } else {
      res.status(404).json({ Error: "Not found" });
    }
  })
);

app.put(
  "/exercises/:id",
  [
    body("name").isString().isLength({ min: 1 }),
    body("reps").isInt().custom(isPositive),
    body("weight").isInt().custom(isPositive),
    body("unit").isString().custom(isUnit),
    body("date").isString().custom(isValidDate),
  ],
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const errors = validationResult(req);

    if (!errors.isEmpty() || !id) {
      return res.status(400).json({ Error: "Invalid request" });
    }

    const { name, reps, weight, unit, date } = req.body;
    const exercise = await exercises.updateExercise(
      id,
      name,
      reps,
      weight,
      unit,
      date
    );
    if (exercise) {
      res.status(200).json(exercise);
    } else {
      res.status(404).json({ Error: "Not found" });
    }
  })
);

app.delete(
  "/exercises/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const exercise = await exercises.deleteExercise(id);
    if (exercise) {
      res.status(204).send();
    } else {
      res.status(404).json({ Error: "Not found" });
    }
  })
);

app.listen(process.env.PORT, async () => {
  await exercises.connect(false);
  console.log(`Server listening on port ${process.env.PORT}...`);
});
