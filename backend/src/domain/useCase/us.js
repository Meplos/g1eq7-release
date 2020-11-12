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
    res.status("200").send({ usList });
  };