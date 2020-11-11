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
    desc* : string
    type* : string
    state* : string (default: ouvert)
    priority : string
    difficulty : string
    project_link* : int (id project)
    sprint_link : int (id sprint)
}

Task : 
{
    id* : int (incrémenté par rapport aux autres Tasks du projet)
    name* : string
    desc : string
    us_link : string
    state : string (default: TODO)
    time (hm) : int
    dependencies : string list
    devs : string list
    project_link* : int
}

Sprint : {
    _id : int (généré par mongo)
    start_date* : string
    end_date* : string
    state* : string
}
```