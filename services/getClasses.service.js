// services/exerciseService.js
const Exercise = require('../model/addClass.model');

async function getAllExercises() {
  try {
    const exercises = await Exercise.find();
    return exercises;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllExercises,
};
