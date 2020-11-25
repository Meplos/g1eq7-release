#Données

```
* -> obligatoire

Projets :
{
    _id* : int (généré par mongo)
    name* : string
    start_date* : date (default: date du jour)
    state* : string  (default: ouvert)
    end_date : date
    git_repo : string
    desc : string
}

US :
{
    id* : int (incrémenté par rapport aux autres US du projet)
    description : string
    type* : string
    state* : string (default: ouvert)
    priority : string
    difficulty : string
    projectId* : int (id project)
    sprintId : int (id sprint)
}

Task :
{
    id* : int (incrémenté par rapport aux autres Tasks du projet)
    name* : string
    desc : string
    idUs : string
    state : string (default: TODO)
    time (hm) : int
    dependencies : string list
    devs : string list
    IdProject* : int
}

Sprint : {
    id : int (généré par mongo)
    startDate* : string
    endDate* : string
    state* : string
}
```

```
Routes de l'appli
|- /project (Accueil avec liste des projets)
|   |- /burndownChart
|   |- /create (Formulaire de création de projet)
|   |- /delete
|   |- /:idProject (Accueil du projet : liste US, liste Tasks, Kanban, Pert, Sprints)
|   |   |- /modify (Formulaire modif de projet)
|   |   |- /sprint
|   |   |   |- /create
|   |   |- /us
|   |   |   |- /:idUS
|   |   |   |   |- /modify (Formulaire modif d'US)
|   |   |   |- /create (Formulaire de création d'US)
|   |   |   |- /delete
|   |   |- /task/
|   |   |   |-:idTask
|   |   |   |   |- /modify (Formulaire modif de tâche)
|   |   |   |- /create (Formulaire de création d'une tâche)
|   |   |   |- /delete
|   |   |- pert

```
