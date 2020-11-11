let projectList = [
    {   id : "1",
        name : "Test",
        start_date : Date.now().toString(),
        state : "ouvert",
        end_date : null,
        git_repo : null,
        desc : "Projet de test"
    }
];

exports.getProjects = (req,res) => {
    res.status('200').send({projectList});
}