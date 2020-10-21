# Définition

- **Un utilisateur** est une personne physique capable de créer et gérer des projet.

# Architecture

// TODO décrire architecture Hexagonale

```
src
|- Domain
|    |- Entity
|    |- Port
|- App
|    |- useCase
|- Infra
|- UI

```

# Backlog

| ID  | Description                                                                                                                                                                                                                                                                        | Difficulté | Importance | Sprint |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------ |
| 1   | **En tant qu'** utilisateur **je souhaite** pouvoir créer un projet. Un projet comporte un nom, une date de début, une date de fin estimé (possiblement null? ), un depot git, une description,un état **afin de** pouvoir saisir, plannifier, mes issues, tasks, tests et release | 1          |            |        |
| 2   | **En tant que qu'** utilisateur **je souhaite** créer des issues (descrition, type, id généré automatiquement, état = "ouvert" par défaut) **afin de** pouvoir les organisés et réaliser leur suivie. .                                                                            | 1          |            |        |
| 3   | **En tant qu'** utilisateur, **je souhaite** pouvoir modifié l'état d'une issue à l'aide d'une liste d'état (OUVERT, EN COURS, TESTABLE, TESTEE, CLOTUREE)                                                                                                                         | 1          |            |        |
| 4   | **En tant qu'** utilisateur, **je souhaite** créer des tâches (id, description, lien avec issues, état par défaut en TODO) **afin de** de pouvoir ensuite réaliser                                                                                                                 | 1          |            |        |
| 5   | **En tant qu'** utilisateur, **je souhaite** pouvoir gérer mes tâche sous la forme d'un kanban (TODO, DOING, TOTEST, DONE) **afin d'** assurer le suivie des tâches.                                                                                                               | 2          |            |        |
| 6   | **En tant qu'** utilisateur, **je souhaite** pouvoir créer différents sprints (date de début, date de fin, id générér automatiquement ) afin de pouvoir plus tardplannifié mes différentes issues.                                                                                 | 1          |            |        |
| 7   | **En tant qu’** utilisateur, **je souhaite** pouvoir ajouter une issue dans un sprint à l'aide d'un drag & drop ou à l'aide d'une liste **afin de** plannifié mes issue.                                                                                                           | 1          |            |        |
| 25  | **Ent tant qu'** utilisateur **je souhaite** pouvoir drag & drop une issues dans des colonnes FACILE, MOYENNE, DUR **afin de** pouvoir généré la difficulté de chaque issue                                                                                                        | 2          |            |        |
| 26  | **Ent tant que** PO **je souhaite** pouvoir drag & drop une issues dans des colonnes d'importance HAUTE, MOYENNE, FAIBLE **afin de** pouvoir généré l'importance de chaque issue                                                                                                   | 2          |            |        |
| 8   | En tant qu’utilisateur je souhaite pouvoir créer un Pert pour le projet global et un pour chaque sprint                                                                                                                                                                            | 5          |            |        |
| 9   | En tant qu’utilisateur je souhaite pouvoir organiser mes tâches chronologiquement dans un diagramme                                                                                                                                                                                | 3          |            |        |
| 10  | En tant qu’utilisateur je souhaite pouvoir créer un profil (nom, prénom, mail)                                                                                                                                                                                                     | 1          |            |        |
| 11  | En tant qu'utilisateur, je souhaite pouvoir enregistrer des tests E2E.                                                                                                                                                                                                             | 2          |            |        |
| 12  | En tant qu'utilisateur, je souhaite pouvoir créer une page release qui contiendrait le nom, la version, lien vers le fichier, la vidéo, la page d'installation et la liste des issues présentes dans la release et la date.                                                        | 2          |            |        |
| 13  | En tant qu'utilisateur, je souhaite pouvoir signaler un bug présent sur la release directement sur l'application.                                                                                                                                                                  | 1          |            |        |
| 14  | En tant qu'utilisateur, je souhaite pouvoir uploader une vidéo de démo sur une release pour l'expliquer                                                                                                                                                                            | 1          |            |        |
| 15  | En tant qu'utilisateur je souhaite pourvoir télécharger une release présente sur la page des releases                                                                                                                                                                              | 1          |            |
| 16  | En tant qu'utilisateur je souhaite créer un test (id,nom, tâches associées)                                                                                                                                                                                                        | 1          |            |        |
| 17  | En tant qu'utilisateur je souhaite définir si un test est validé ou non                                                                                                                                                                                                            | 1          |            |        |
| 18  | En tant qu'utilisateur je souhaite lier mon test à un fichier sur github pour récupérer son scénario et sa description                                                                                                                                                             | 3          |            |        |
| 19  | En tant qu'utilisateur je souhaite ajouter à mon test une vidéo de son exécution                                                                                                                                                                                                   | 1          |            |        |
| 20  | En tant qu'utilisateur je souhaite pouvoir définir chaque étape d'une tâche comme effectuée ou non afin de visualiser son avancement                                                                                                                                               | 3          |            |        |
| 21  | En tant qu'utilisateur je souhaite visualiser toutes les releases sur une page afin de consulter l'historique et faire mon choix                                                                                                                                                   | 1          |            |        |
| 22  | En tant qu'utilsateur je souhaite que le numéro de release soit automatiquement incrémenté en fonction du type de release choisi (Majeure,mineure,patch)                                                                                                                           | 1          |            |        |
| 23  | En tant qu'utilsateur je souhaite visualiser sur la page d'acceuil du projet son avancement (tâches à effectuer cette semaine, % de complétion du sprint, des tâches, des issues, des tests)                                                                                       | 1          |            |        |
| 24  | En tant qu'utilsateur je souhaite ajouter une note (titre, description) à la page d'accueil du projet afin de servir comme mémo ou message important à faire passer aux autres developpeurs                                                                                        | 2          |            |        |
