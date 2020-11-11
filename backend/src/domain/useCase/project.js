let projectList = [
    {   id : 1,
        name : "Test",
        start_date : "11/11/2020",
        state : "Ouvert",
        end_date : null,
        git_repo : null,
        desc : "Projet de test"
    }
];

exports.getProjects = (req,res) => {
    res.status('200').send({projectList});
}

exports.addProject = (req,res) => {
    req.body.id=projectList[projectList.length-1].id+1;
    projectList.push(req.body);
    res.status('201').send({projectList});
}