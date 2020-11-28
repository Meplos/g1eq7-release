const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  start_date: { type: String, required: true },
  end_date: String,
  state: String,
  git_repo: String,
  description: String,
});

const Project = mongoose.model("Project", projectSchema);

const sprintSchema = mongoose.Schema({
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  state: { type: String, require: true },
  idProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Sprint = mongoose.model("Sprint", sprintSchema);

const usSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },

  state: { type: String, required: true },
  priority: Number,
  difficulty: Number,
  idProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  sprintId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sprint",
  },
});

const UserStory = mongoose.model("UserStory", usSchema);

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  dependencies: { type: [mongoose.Schema.Types.ObjectId], ref: "Task" },
  dev: String,
  time: Number,
  state: { type: String, required: true },
  idProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  idUs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserStory",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = {
  Project,
  Sprint,
  UserStory,
  Task,
};
