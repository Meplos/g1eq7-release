const Model = require("./MongooseSchema");
const mongoose = require("mongoose");
const US = require("./USMongoRepository");

async function createSprint(sprint) {
  sprint.idProject = mongoose.Types.ObjectId(sprint.idProject);
  const newSprint = Model.Sprint(sprint);
  let _id = null;
  await newSprint.save().then((res) => {
    _id = res._id;
  });
  return _id;
}

async function getSprintOfProject(idProject) {
  let list = [];
  await Model.Sprint.find({ idProject: mongoose.Types.ObjectId(idProject) })
    .exec()
    .then((res) => {
      list = res;
    });
  return list;
}

async function getAllUSFromCurrentSprint(idProject) {
  let sprints = await getSprintOfProject(idProject);
  console.log("Sprints : "+sprints);
  let current_sprint_id = null;
  for(let i=0;i<sprints.length;i++){
    let start = new Date(sprints[i].start_date);
    console.log("Start : "+start);
    let end = new Date(sprints[i].end_date);
    console.log("End : "+end);
    console.log("In between today : "+(start<=new Date()<=end))
    if(start<=new Date()<=end){
      current_sprint_id=sprints[i]._id;
      break;
    }
  }
  console.log("Id current sprint : "+current_sprint_id)
  /*let us = await US.getUsOfProject(idProject);
  let us_current_sprint = [];
  for(let i=0;i<us.length;i++){
    if(us[i].sprintId===current_sprint_id){
      us_current_sprint.push(us[i]);
    }
  }
  return us_current_sprint;*/
  let list = [];
  await Model.UserStory.find({ sprintId: mongoose.Types.ObjectId(current_sprint_id) })
    .exec()
    .then((res) => {
      list = res;
    });
  return list;
}

module.exports = {
  createSprint,
  getSprintOfProject,
  getAllUSFromCurrentSprint,
};
