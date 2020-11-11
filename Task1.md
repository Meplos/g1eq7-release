# Tâches Sprint 1

### DoD

-> New feature : toutes les étapes de la tâche sont réalisées et implémentées
-> Test : Les tests décrits sont implémentés et passés avec succès

- NF1 : New Feature 1
- T1 : Test 1

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

- NF1. Créer un squelette d'app JS/Express/Vue

  - [x] Créer un fichier app/index.js
  - [x] Implémenter un serveur Express basique
  - [x] Créer un composant Main.vue
  - [x] Faire pointer notre serveur vers Main.vue
  <p></p>

- T1. Test squelete d'App

  - [ ] Implémenter un test qui vérifie qu'on a bien accès à notre serveur
  <p></p>

- NF2. Requête de listage des projets US:1

  - [x] Ajouter à app/index.js une route GET vers /project qui appelle un useCase getProjects.js qui renvoie au front les projets déjà existants si il y en a
  <p></p>

- T2. Test listage des projet

  - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données au front (rien si il n'y a pas de projets en BD et les bons si ils y en a)
  <p></p>

- NF3. Affichage des projets US:1

  - [x] Creer un composant vue ListProjet.vue
  - [x] Afficher les projets reçus par le back sous forme de liste.
  - [x] Ajouter à la liste un bouton menant à la page de création d'un projet via un GET sur /project/create.
  - [x] Pour chaque projet renvoyer un GET sur /projet/:idProject lors d'un clic sur le projet
  <p></p>

- T3. Test affichage des projet

  - [ ] Implémenter un test qui vérifie qu'on affiche correctement les données reçues par le back.
  - [ ] Implémenter un test qui vérifie qu'on envoie la bonne requête de GET une fois qu'on a cliqué sur le bouton.
  - [ ] Implémenter un test qui vérifie lors d'un clic sur le projet que la route GET renvoyée contient le bon id associé
  <p></p>

- NF4. Formulaire de création/modification de projet US:1

  - [x] Créer un composant ProjectForm.vue
  - [x] Créer dedans un formulaire avec les champs :
    - nom\*
    - date de début\* (par défaut date du jour)
    - une date de fin estimé
    - url vers un dépot git
    - une description
    - un état\* (par défaut OUVERT)
  - [ ] Créer un script qui renvoie via une requete POST à l'adresse /project/create les données du formulaire si il s'agit d'un nouveau projet.
  - [ ] Créer un script qui renvoie via une requete POST à l'adresse /project/:idProject/modify les données du formulaire si il s'agit d'une modification.
  <p></p>

- T4. Test formulaire projet

  - [ ] Implémenter un test qui vérifie qu'on ne peut pas rentrer de caractères illégaux dans notre formulaire
  - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/modify
  - [ ] Vérifie qu'on entre bien dans l'état modification quand on passe des paramètre à notre composant et dans l'état ajout sinon.
  <p></p>

- NF5. Requetes de création d'un projet US:1

  - [x] Creer un fichier useCase/CreateProject.js qui va récupérer les données du projet à créer et les ajouter le projet à la base de données
  - [x] Ajouter à app/index.js une route POST vers /project/create qui appelle un useCase/createProject.js
  <p></p>

- T5. Test requête de création d'une us

  - [ ] Implémenter un test qui vérifie que le projet ,avec les bonnes informations, a bien été créer.
  <p></p>

- NF6. Requêtes de modification d'un projet

  - [x] Creer un fichier useCase/ModifyProject.js qui va récupérer les données du projet à modifier et les répercuter dans la base de données
  - [x] Ajouter à app/index.js une route POST vers /project/:idProject/modify qui appelle un useCase/ModifyProject.js
  <p></p>

- T6. Test requete de modification d'un projet

  - [ ] Implémenter un test qui vérifie que le projet à été modifié correctement
  <p></p>

- NF7. Requetes d'ajout d'une US US:2

  - [ ] Creer un fichier useCase/CreateUS.js qui va ajouter l'US à la base de donées et l'ajouter au projet correspondant.
  - [ ] Ajouter à app/index.js une route POST vers /project/:idProject/us/create qui appelle un useCase/createUS.js
  <p></p>

- T7. Test requete d'ajout d'un US

  - [ ] Implémenter un test qui vérifie que l'US avec les bonnes information à bien était créée. et qu'elle a bien était ajouté au bon projet.
  <p></p>

- NF8 . Requêtes de modification d'une US

  - [ ] Creer un fichier useCase/ModifyUS.js qui va récupérer les données de l'US à modifier et les répercuter dans la base de données
  - [ ] Ajouter à app/index.js une route POST vers /project/:idProject/us/:idUS/modify qui appelle un useCase/ModifyUS.js
  <p></p>

- T8. Test requete de modification d'une US

  - [ ] Implémenter un test qui vérifie que le projet à été modifié correctement
  <p></p>

- NF9. Formulaire de création/modification d'une US US:2 et 3

  - [ ] Créer un composant UserStoryForm.vue
  - [ ] Créer dedans un formulaire avec les champs :
    - description\*
    - une liste déroulant type (new feature, bugfix, test)
    - un état (Ouvert par défaut)
    - un état\* (par défaut OUVERT)
  - [ ] Créer des boutons "Valider", "Annuler" et "Modifier"
    - Si il s'agit d'une création on affiche le bouton Valider
    - Si il s'agit d'une modification on affiche le bouton Modifier
  - [ ] Envoie via par POST à l'addresse /project/:idProject/us/create les données du formulaire s'il s'agit d'une nouvelle US.
  - [ ] Envoie via par POST à l'addresse /project/:idProject/us/:idUS/modify les données du formulaire s'il s'agit d'une US déjà existante.
  <p></p>

- T9. Test Formulaire de création/ modification d'une US

  - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/us/create
  - [ ] Implémenter un test qui vérifie qu'on ne peut pas rentrer de caractères illégaux dans notre formulaire
  - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/us/:idUS/modify
  - [ ] Vérifier qu'on entre bien dans l'état modification quand on passe des paramètre à notre composant et dans l'état ajout sinon.
  <p></p>

- NF10. Récupération des données d'un projet

  - [ ] Créer une route GET sur /project/:idProject qui renvoie sur useCase/getProjectInfo.js
  - [ ] Créer le fichier getProjectInfo.js dans /useCase
  - [ ] Implémenter dans getProjectInfo.js la récupération des champs du projet ayant pour id : idProject dans la BD
  - [ ] Envoyer les données au front
  <p></p>

- T10. Test récupération des données d'un projet.

  - [ ] Implémenter un test qui créer un projet puis fais la requete de réccupération affin de vérifié si les données sont identique.
  <p></p>

- NF11. Affichage d'un projet US:1

  - [ ] Créer un composant Project.vue
  - [ ] Afficher les champs : nom, date de début, état
  - [ ] Afficher les champs optionnels si ils sont présents : date de fin estimée, dépôt, description.
  - [ ] Ajouter un bouton de modification qui revoie un GET vers la route /project/:idProject/modify
  <p></p>

- T11. Test affichage d'un projet

  - [ ] Implémenter un test qui vérifie que les champs du projets sont bien affichés
  - [ ] Implémenter un test qui vérifie qu'après un clic sur le bouton "Modifier" on revoie bien un GET avec l'id du projet
  <p></p>

- NF12. Récupération des US d'un projet

  - [ ] Créer une route GET sur /project/:idProject qui renvoie sur useCase/getUS.js
  - [ ] Créer le fichier getUS.js dans /useCase
  - [ ] Implémenter dans getUS.js la récupération des US du projet d'id idProject dans la BD
  - [ ] Envoyer les données au front
  <p></p>

- T12. Test récupération des US d'un projet

  - [ ] Implémenter un test qui vérifie qu'on réccuppére bien toutes les US d'un projet idProjet
  <p></p>

- NF13. Affichage des US dans le projet US:2

  - [ ] Créer un composant USList.vue
  - [ ] Récupérer la liste des US envoyées par le back
  - [ ] Afficher sous forme de tableau les US (id,description,difficulté,importance,sprint)
  - [ ] Ajouter pour chaque US un bouton "Modifier" qui renvoie un GET vers la route /project/:idProject/us/:idUS/modify
  - [ ] Ajouter à côté du bouton "Modifier" un bouton "Supprimer" qui renvoie un GET vers /project/:idProject/us/delete
  - [ ] Ajouter en bas du tableau un bouton "Ajouter" qui renvoie un GET vers la route /project/:idProject/us/createUS
  - [ ] Ajouter le composant USList.vue à Project.vue
  <p></p>

- T13. Test affichage des US

  - [ ] Implémenter un test qui vérifie que toute les US réccupérer sont bien afficher.
  <p></p>

- NF14. Modif de l'importance et difficulté de l'US via liste déroulante US 22

  - [ ] Ajouter une liste déroulante pour l'importance, contenant high, medium, low pour chaque US.
  - [ ] Ajouter une liste déroulante pour la difficulté, contenant 1, 2 , 3, 5, 8 pour chaque US.
  <p></p>

- T14. Test modification de l'importance et de la difficulté d'une US

  - [ ] Implémenter un test qui vérifie que lorqu'il y a modification de la valeur des listes, celle-ci est bien sauvegardé et enregistré en BDD.
  <p></p>

- NF15. Requête d'ajout d'une tâche

  - [ ] Creer un fichier useCase/CreateTask.js qui va ajouter la tâche à la base de donées et l'ajouter au projet correspondant.
  - [ ] Ajouter à app/index.js une route POST vers /project/:idProject/task/create qui appelle un useCase/createTask.js
  <p></p>

- T15. Test de l'ajout d'une tâche

  - [ ] Implémenter un test qui vérifie que l'US avec les bonnes information à bien était créée. et qu'elle a bien était ajouté au bon projet.
  <p></p>

- NF16 Formulaire de création des tâches US 4

  - [ ] Creer un composant TaskForm.js.
  - [ ] Creer dedans un formulaire avec les chapms:
        -id (string)
        -description (string)
        -lien avec userStory (string)
        -état (par default en TODO)
  - [ ] Créer un script qui renvoie via une requete POST à l'adresse /project/:idProject/Task/create les données du formulaire.
  <p></p>

- T16 Test du formulaire de création d'une tâche.

  - [ ] Implémenter un test qui vérifie qu'on ne peut pas rentrer de caractères illégaux dans notre formulaire
  - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/task
  - [ ] Implémenter un test qui vérifie qu'on entre bien dans l'état ajout.
  <p></p>

- NF17. Récupération des Tâches d'un projet US 4

  - [ ] Créer une route GET sur /project/:idProject qui renvoie sur useCase/getTasks.js
  - [ ] Créer le fichier getTasks.js dans /useCase
  - [ ] Implémenter dans getTasks.js la récupération des Tâches du projet d'id idProject dans la BD
  - [ ] Envoyer les données au front
  <p></p>

- T17. Test de réccupération des tâche d'une US.

  - [ ] Implémenter un test qui vérifie qu'on réccupére bien toutes les tâche lier a une US idUS
  <p></p>

- NF18. Affichage des Tasks dans le projet US 4

  - [ ] Créer un composant TasksList.vue
  - [ ] Récupérer la liste des Tâches envoyées par le back
  - [ ] Afficher sous forme de tableau les Tâches (id,us,temps,dépendences,développeurs et état)
  - [ ] Ajouter l'affichage de la description d'un tâche quand on clique dessus, en dessous de la ligne de la tâche concernée
  - [ ] Ajouter pour chaque tâche un bouton "Modifier" qui renvoie un GET vers la route /project/:idProject/task/:idTask/modify
  - [ ] Ajouter à côté du bouton "Modifier" un bouton "Supprimer" qui renvoie un GET vers /project/:idProject/task/delete
  - [ ] Ajouter en bas du tableau un bouton "Ajouter" qui renvoie un GET vers la route /project/:idProject/task/create
  - [ ] Ajouter le composant TasksList.vue à Project.vue
  <p></p>

- T18. Test de l'affichage des tâche d'un projet
  - [ ] Implémenter un test qui vérifie qu'on affiche bien toute les tâche associé aux projet idProjet
  <p></p>
- NF19. Affichage du Pert dans le projet US 8,23

  - [ ] Créer un composant Pert.vue
  - [ ] Ajouter un bouton d'ajout de fichier (png,jpeg)
  - [ ] Afficher l'image du Pert
  - [ ] Ajouter le composant Pert.vue à Project.vue
  <p></p>

- T19. Test affichage du pert

  - [ ] Implémenter un test qui vérifie qu'on affiche la bonne image.
  <p></p>

- NF20. Affichage du Kanban dans le projet US 5,23

  - [ ] Créer un composant Pert.vue
  - [ ] Récupérer la liste des tâches
  - [ ] Classer les tâches par développeur
  - [ ] Afficher le Kanban
  - [ ] Ajouter le composant Kanban.vue à Project.vue
  <p></p>

- T20. Test du kanban

  - [ ] Implémenter un test qui vérifie que les tâche d'un projet idProject sont classer au bon endroit
  <p></p>

- NF21. Modification de l'état d'une tâche

  - [ ] Drag&Drop d'une tâche dans une colonne qui modifie sont état.
  - [ ] Le drag&drop envoie une requete POST au back /project/:idProjet/task/:idTask/modify
  <p></p>

- T21. Test de modification de l'état d'une tâche.

  - [ ] Implémenter un test qui vérifie que lorsqu'on déplace une tâche, on envoie une requete au serveur avec le nouvel état
  <p></p>

- NF22. Définir les données en BD

  - [x] Créer un fichier txt
  - [x] Lister les paramètres d'une projet et leur type
    - nom\* (String)
    - date de début\* (String)
    - une date de fin estimé (String)
    - url vers un dépot git (String)
    - une description (String)
    - un état\* (String)
  - [x] Lister les paramètres d'une tâche et leur type
  - [x] Lister les paramètres d'une US et leur type - description\* (String) - type (String) - un état (String) - un état\* (String)
  <p></p>

- NF23 Formulaire de création des sprints US 6

  - [ ] Creer un composant SprintForm.vue.
  - [ ] Créer un script qui renvoie via une requete POST à l'adresse /project/:idProject/Sprint/create les données du formulaire.
  - [ ] Creer un formulaire avec les champs date de début (date) et date de fin (date) (l'id doit être généré automatiquement).
  - [ ] Creer deux boutons, Valider et Annuler en fin de formulaire.
  - [ ] Envoyer une requête POST avec les données saisies vers /project/:idProject/Sprint/create
  <p></p>

- T23. Test formulaire de création d'un sprint

  - [ ] Implémenter un test qui vérifie qu'on ne peut pas mettre autre chose que des dates dans les deux champs.
  - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/Sprint/create.
  - [ ] Implémenter un test qui vérifie qu'on entre bien dans l'état ajout.
  <p></p>

- NF24 Requête de création d'un sprint

  - [ ] Ajouter une route POST dans app/index.js qui redirige les données vers un fichier addSprint.js dans /useCase
  - [ ] Créer un fichier addSprint.js dans le dossier /useCase qui sauvegarde en BD le sprint créé
  <p></p>

- T24. Test de la requête de création d'un sprint
  - [ ] Implémenter un test qui vérifie que le sprint a bien était créer.
  <p></p>
- NF25. Ajouter une US dans un sprint US 7

  - [ ] Ajouter l'api Drag/Drop de html5 de drag and drop à l'application.
  - [ ] Utiliser l'Api de drag and drop sur les objets de type US
  <p></p>

- T25. Test ajout d'une US dans un sprint

  - [ ] Implémenter un test qui vérifie que les objets de type US sont bien drag and dropable.
  - [ ] Implémenter un test qui vérifie que le drag and drop ajoute bien à l'objet sprint correspondant un objet de type US.
  - [ ] Implémenter un test qui vérifie que l'objet ajouté au sprint est bien l'objet US correspondant à l'objet dragé and dropé dans le sprint voulu.
  <p></p>

- NF26. Composant de % de complétion US 23

  - [ ] Créer un composant Progression.vue
  - [ ] Intégrer au composant une barre de progression Bootstrap
  - [ ] En fonction des données reçues (nombre à réaliser et nombre réalisé) actualiser la barre en conséquence
  - [ ] Ajouter 3 fois ce composant a Projet.vue : - Un pour les US - Un pour les Tasks - Un pour les Sprints
  <p></p>

- T26. Test composant de complétion

  - [ ] Implémentation d'un test qui vérifie que le pourcentage afficher est correct
  <p></p>

- NF27. Récupération de l'avancement des US US 23

  - [ ] Dans le fichier app/index.js créer une route GET sur /project qui va appeler un fichier getProgressUS.js dans le dossier useCase
  - [ ] Créer un fichier getProgressUS.js dans le dossier useCase
  - [ ] Récupérer en BD le nombre d'US total et le nombre d'US terminées
  - [ ] Envoyer ces 2 paramètres au front
  <p></p>

- T27. Test de réccupération de l'avancement d'une US

  - [ ] Implémenter un test qui vérifie que l'avancement d'une US est égale au nombre d'US d'un projet idProject terminé /au nombre d'US total d'un projet idProject \* 100
  <p></p>

- NF28. Récupération de l'avancement des Tasks US 23

  - [ ] Dans le fichier app/index.js créer une route GET sur /project qui va appeler un fichier getProgressTask.js dans le dossier useCase
  - [ ] Créer un fichier getProgressTask.js dans le dossier useCase
  - [ ] Récupérer en BD le nombre de Task total et le nombre de Task terminées
  - [ ] Envoyer ces 2 paramètres au front
  <p></p>

- T28. Test de réccupération de l'avancement d'une Task

  - [ ] Implémenter un test qui vérifie que l'avancement d'une US est égale au nombre de task d'un projet terminé idProject terminé /au nombre de task total d'un projet idProject x 100.
  <p></p>

- NF29. Récupération de l'avancement des Sprints US 23

  - [ ] Dans le fichier app/index.js créer une route GET sur /project qui va appeler un fichier getProgressSprint.js dans le dossier useCase
  - [ ] Créer un fichier getProgressSprint.js dans le dossier useCase
  - [ ] Récupérer en BD le nombre de total de Tasks du Sprint et le nombre de Tasks du sprint terminées
  - [ ] Envoyer ces 2 paramètres au front
  <p></p>

- T29. Test de récupération de l'avancement d'un Sprint

  - [ ] Implémenter un test qui vérifie que l'avancement d'une US est égale au nombre de task terminées lié a une US d'un sprint idSprint terminé /au nombre de task total task lié a une US d'un sprint d'un projet idProject x 100.
  <p></p>

- NF30. Creation de la vue basique d'un Burndown Chart avec les données d'un projet test US 25

  - [ ] Ajout d'un bouton "Génerer Burndown Chart" en bas de la page d'affichage d'un projet, qui renvoie un GET vers la route /project/:idProject/burndownChart
  - [ ] Créer un composant burndownChart.vue où sera affiché le burndown chart généré
  - [ ] Utilisation de l'api Chartjs pour générer un graphique sur deux axes:
    - En x: Iteration Timeline (days)
    - En y: Sum of task estimates (days)
  - [ ] Tracer la ligne "Ideal Tasks Remaining" correspondant à une droite du point de départ du projet jusqu'au nombre de jours final du projet.
  <p></p>

- T30. Test du Burndown Chart basique

  - [ ] Implémenter un test qui vérifie que la droite tracée commence bien au nombre de jours total du projet et qui fini bien à 0 et que chaque jours a un point de la droite.
  - [ ] Implémenter un test qui vérifie que les données affichées correspondent aux données inMemory
  <p></p>

- NF31. Ajout de la ligne "Actual task remaining" au Burndown Chart avec les données d'un projet test

  - [ ] Pour chaques jours que le projet a commencé, calculer en jour la durée de toutes les tâches restantes.
  - [ ] Tracer la ligne "Actual task remaining" qui prend en x le chiffre calculé precedement, et en y le jours d'avancement correspondant.
  <p></p>

- T31. Test de "Actual task remaining"

  - [ ] Implémenter un test qui vérifie que chaque jour de la courbe dispose d'un point et qu'il a la bonne valeur
  - [ ] Implémenter un test qui vérifie l'actualisation de la courbe après un changement dans la BD

- NF32. Récupération des Sprints d'un projet US 4

  - [ ] Créer une route GET sur /project/:idProject qui renvoie sur useCase/getSprints.js
  - [ ] Créer le fichier getSprints.js dans /useCase
  - [ ] Implémenter dans getSprints.js la récupération des SPrints du projet d'id idProject dans la BD
  - [ ] Envoyer les données au front
  <p></p>

- T32. Test de réccupération des Sprints.

  - [ ] Implémenter un test qui vérifie qu'on réccupére bien touts les sprints liés à un projet d'id idProject
  <p></p>

- NF33. Affichage des Sprints dans le projet US 4

  - [ ] Créer un composant SprintsList.vue
  - [ ] Récupérer la liste des Sprints et leurs US associées envoyées par le back
  - [ ] Afficher chaque sprint sous forme de liste d'US associée au sprint.
  <p></p>

- T33. Test de l'affichage des tâche d'un projet
  - [ ] Implémenter un test qui vérifie qu'on affiche bien tous les sprints si il en existe ou zero si il n'y en a pas
  - [ ] Implémenter un test qui vérifie que les US affichées dans un sprint appartiennent bien à ce sprint.
  <p></p>

###RAF :

- Liaison avec la base de données pour le Burndown Chart
- Créer la BD

- Passer les accès en mémoire de inMemory à la BD ?

- Modif des sprints ?

## Organisation

3 principales dépendences :
T1 : squelette node (index.js) existe et testé
NF22 : définition des données en BD
T11 : Project.vue existe et est testé

| id   | US      | Temps (hm) | Dépendances | développeur     | état  |
| ---- | ------- | ---------- | ----------- | --------------- | ----- |
| NF1  | US1     | 1          | /           | Alexandre Erard | DONE  |
| T1   | US1     | 1          | NF1         |                 | TODO  |
| NF2  | US1     | 1          | T1,NF22     | Maxime Gresse   | DONE  |
| T2   | US1     | 1          | NF2         |                 | TODO  |
| NF3  | US1     | 1          | NF22        | Alexandre Erard | DONE  |
| T3   | US1     | 2          | NF3         |                 | TODO  |
| NF4  | US1     | 1          | NF22        | Alexandre Erard | DOING |
| T4   | US1     | 2          | NF4         |                 | TODO  |
| NF5  | US1     | 1          | T1,NF22     | Maxime Gresse   | DONE  |
| T5   | US1     | 1          | NF5         |                 | TODO  |
| NF6  | US1     | 1          | T1,NF22     | Maxime Gresse   | DONE  |
| T6   | US1     | 1          | NF6         |                 | TODO  |
| NF7  | US2     | 1          | T1,NF22     |                 | TODO  |
| T7   | US2     | 1          | NF7         |                 | TODO  |
| NF8  | US3     | 1          | T1,NF22     |                 | TODO  |
| T8   | US3     | 1          | NF8         |                 | TODO  |
| NF9  | US2 US3 | 1          | NF22        | Alexandre Erard | TODO  |
| T9   | US2 US3 | 2          | NF9         |                 | TODO  |
| NF10 | US1     | 1          | T1,NF22     |                 | TODO  |
| T10  | US1     | 1          | NF10        |                 | TODO  |
| NF11 | US1     | 2          | NF22        |                 | TODO  |
| T11  | US1     | 2          | NF11        |                 | TODO  |
| NF12 | US3     | 1          | T1,NF22     |                 | TODO  |
| T12  | US3     | 1          | NF12        |                 | TODO  |
| NF13 | US3     | 3          | NF22,T11    |                 | TODO  |
| T13  | US3     | 2          | NF13        |                 | TODO  |
| NF14 | US3     | 1          | T13         |                 | TODO  |
| T14  | US3     | 1          | NF14        |                 | TODO  |
| NF15 | US4     | 1          | T1,NF22     |                 | TODO  |
| T15  | US4     | 1          | NF15        |                 | TODO  |
| NF16 | US4     | 1          | NF22        |                 | TODO  |
| T16  | US4     | 1          | NF16        |                 | TODO  |
| NF17 | US4     | 1          | T1,NF22     |                 | TODO  |
| T17  | US4     | 1          | NF17        |                 | TODO  |
| NF18 | US4     | 2          | NF22,T11    |                 | TODO  |
| T18  | US4     | 1          | NF18        |                 | TODO  |
| NF19 | US8     | 1          | T11         |                 | TODO  |
| T19  | US8     | 1          | NF19        |                 | TODO  |
| NF20 | US5     | 4          | T11         |                 | TODO  |
| T20  | US5     | 3          | NF20        |                 | TODO  |
| NF21 | US5     | 2          | T18         |                 | TODO  |
| T21  | US5     | 1          | NF21        |                 | TODO  |
| NF22 | US1     | 1          |             |                 | DONE  |
| NF23 | US6     | 1          | NF22        |                 | TODO  |
| T23  | US6     | 2          | NF23        |                 | TODO  |
| NF24 | US6     | 1          | T1,NF22     |                 | TODO  |
| T24  | US6     | 1          | NF24        |                 | TODO  |
| NF25 | US7     | 2          | T13,T33     |                 | TODO  |
| T25  | US7     | 2          | NF25        |                 | TODO  |
| NF26 | US23    | 1          | T11         |                 | TODO  |
| T26  | US23    | 1          | NF26        |                 | TODO  |
| NF27 | US23    | 1          | T26,T12     |                 | TODO  |
| T27  | US23    | 1          | NF27        |                 | TODO  |
| NF28 | US23    | 1          | T26,T17     |                 | TODO  |
| T28  | US23    | 1          | NF28        |                 | TODO  |
| NF29 | US23    | 1          | T26,T32     |                 | TODO  |
| T29  | US23    | 1          | NF29        |                 | TODO  |
| NF30 | US25    | 3          | T11         |                 | TODO  |
| T30  | US25    | 2          | NF30        |                 | TODO  |
| NF31 | US25    | 3          | T30,T17     |                 | TODO  |
| T31  | US25    | 2          | NF31        |                 | TODO  |
| NF32 | US25    | 1          | T1,NF22     |                 | TODO  |
| T32  | US25    | 1          | NF32        |                 | TODO  |
| NF33 | US25    | 3          | T32         |                 | TODO  |
| T33  | US25    | 1          | NF33        |                 | TODO  |
