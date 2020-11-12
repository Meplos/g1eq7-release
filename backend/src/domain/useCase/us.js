let usList = [
    {
      id: 1,
      desc: "En tant que développeur je veux pouvoir me créer un compte",
      type: "",
      state: "Ouvert",
      project_link: 1,
      priority: "HIGH",
      difficulty: "3",
      sprint_link: null
    }
  ];
  
  exports.createUS = (req, res) => {
    if(usList.length>0){
        req.body.id = usList[usList.length - 1].id + 1;
    }else{
        req.body.id = 1;
    }
    usList.push(req.body);
    res.status("201").send({ usList });
  };

  exports.modifyUS = (req, res) => {
      let us_at_modify = usList.find(us => us.id==req.params.idUS);
      us_at_modify.desc = req.body.desc
      us_at_modify.type = req.body.type
      us_at_modify.state = req.body.state
      us_at_modify.project_link = req.body.project_link
      us_at_modify.priority = req.body.priority
      us_at_modify.difficulty = req.body.difficulty
      us_at_modify.sprint_link = req.body.sprint_link
      res.status("200").send({ usList });
  };

  exports.getAllUS = (req,res) => {
      let idProject = req.params.idProject;
      let projectUS = [];
      for(let i=0;i<usList.length;i++){
        if(usList[i].project_link==idProject){
            projectUS.push(usList[i]);
        }
      }
      res.status('200').send(projectUS);
  }