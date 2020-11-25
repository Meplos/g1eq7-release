let taskList = [
];

exports.createTask = (req, res) => {
  if (taskList.length > 0) {
    req.body.id = taskList[taskList.length - 1].id + 1;
  } else {
    req.body.id = 1;
  }
  const newTask = req.body;
  taskList.push(newTask);

  res.status("201").send(newTask);
};

exports.modifyTask = (req, res) => {
  let taskToModify = taskList.find((task) => task.id == req.params.idTask);
  taskToModify.name = req.body.name;
  taskToModify.description = req.body.description;
  taskToModify.usLink = req.body.usLink;
  taskToModify.state = req.body.state;
  taskToModify.time = req.body.time;
  taskToModify.dependencies = req.body.dependencies;
  taskToModify.devs = req.body.devs;
  taskToModify.projectLink = req.body.projectLink;
  res.status("200").send(taskToModify);
};

exports.getAllTask = (req, res) => {
  //console.log(req);
  let projectId = eval(req.params.idProject);
  let projectTasks = [];

  taskList.forEach((task) => {
    if (task.projectLink === projectId) projectTasks.push(task);
  });

  res.status("200").send(projectTasks);
};
