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
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
    });
    res.status('200').send({projectList});
}

exports.addProject = (req,res) => {
    req.body.id=projectList[projectList.length-1].id+1;
    projectList.push(req.body);
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
    });
    res.status('201').send({projectList});
}

exports.modifyProject = (req,res) => {
    let projet_at_modify = projectList.find( projet => projet.id==req.params.idProject)
    projet_at_modify.name = req.body.name
    projet_at_modify.start_date = req.body.start_date
    projet_at_modify.state = req.body.state
    projet_at_modify.end_date = req.body.end_date
    projet_at_modify.git_repo = req.body.git_repo
    projet_at_modify.desc = req.body.desc
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
    });
    res.status('200').send({projectList});
}

exports.getProject = (req,res) => {
    let project = projectList.find( projet => projet.id==req.params.idProject)
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
    });
    res.send(project);
}