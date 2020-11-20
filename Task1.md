# Tâches Sprint 1

### DoD

- NF (Implémentation d'une New Feature) :

  - [ ] Toutes les instructions sont implémentées
  - [ ] Relecture et optimisation du code
  - [ ] Fonctionnalité push sur le dépôt
  <p></p>

- TU/TI (Test Unitaire / Test Intégration):

  - [ ] Toutes les instructions sont implémentées
  - [ ] Il est exécutable
  - [ ] Il passe avec succès
  - [ ] Il est push sur le dépôt
  <p></p>

- TE2E (Test End2End):

  - [ ] Le test est décrit sous forme de scénario
  - [ ] Il est implémenté en Selenium
  - [ ] Il est exécutable
  - [ ] Il passe avec succès
  - [ ] Il est push sur le dépôt
  <p></p>

- NF1. Créer un squelette d'app JS/Express/Vue

  - Créer un fichier app/index.js
  - Implémenter un serveur Express basique
  - Créer un composant Main.vue
  - Faire pointer notre serveur vers Main.vue
  <p></p>

- TU1. Test squelete d'App

  - Faire une requête GET sur l'adresse du front
  - Faire une requête GET sur l'adresse du back
  - Si les deux requêtes passent avec succès alors le test est réussi
  <p></p>

- NF2. Requête de listage des projets

  - Ajouter à app/index.js une route GET vers /project qui appelle un useCase getProjects.js qui renvoie au front les projets déjà existants si il y en a
  <p></p>

- TU2. Test listage des projet

  - Faire une requête GET sur /project
  - Vérifier que le nombre de projets affiché et les même que celui en BD
  <p></p>

- NF3. Affichage des projets

  - Creer un composant vue ListProjet.vue
  - Afficher les projets reçus par le back sous forme de liste.
  - Ajouter à la liste un bouton menant à la page de création d'un projet via un GET sur /project/create.
  - Pour chaque projet renvoyer un GET sur /projet/:idProject lors d'un clic sur le projet
  <p></p>

- TI3_1. Test affichage des projets

  - Effectuer un GET sur /project
  - Vérifier sur la route / du front que les données affichées sont les mêmes que celles du GET
  <p></p>

- TE2E3_2. Test redirection vers un projet

  - Cliquer sur un projet existant
  - Vérifier que l'on est bien redirigés vers /project/:idProject
  <p></p>

- NF4. Formulaire de création/modification de projet

  - Créer un composant ProjectForm.vue
  - Créer dedans un formulaire avec les champs :
    - nom\*
    - date de début\* (par défaut date du jour)
    - une date de fin estimé
    - url vers un dépot git
    - une description
    - un état\* (par défaut OUVERT)
  - Créer un script qui renvoie via une requete POST à l'adresse /project/create les données du formulaire si il s'agit d'un nouveau projet.
  - Créer un script qui renvoie via une requete POST à l'adresse /project/:idProject/modify les données du formulaire si il s'agit d'une modification.
  <p></p>

- TE2E4_1. Test ajout via formulaire projet

  - Créer un projet
  - Remplir le formulaire
  - Valider
  - Vérifier qu'un projet est bien créé avec les valeurs du formulaire en BD
  <p></p>

- TE2E4_2. Test modification via formulaire projet

  - Modifier un projet
  - Remplir le formulaire
  - Valider
  - Vérifier que les projet est bien modifié en BD avec les valeurs du formulaire
  <p></p>

- NF5. Requetes de création d'un projet

  - Creer un fichier useCase/CreateProject.js qui va récupérer les données du projet à créer et les ajouter le projet à la base de données
  - Ajouter à app/index.js une route POST vers /project/create qui appelle un useCase/createProject.js
  <p></p>

- TU5. Test requête de création d'un projet

  - Envoyer un POST vers /project/create contenant les données d'un projet à créer
  - Vérifier que le projet est bien créé en BD
  <p></p>

- NF6. Requêtes de modification d'un projet

  - Creer un fichier useCase/ModifyProject.js qui va récupérer les données du projet à modifier et les répercuter dans la base de données
  - Ajouter à app/index.js une route POST vers /project/:idProject/modify qui appelle un useCase/ModifyProject.js
  <p></p>

- TU6. Test requete de modification d'un projet

  - Envoyer un POST vers /project/:idProject/modify contenant les données d'un projet à modifier
  - Vérifier que le projet est bien modifié en BD
  <p></p>

- NF7. Requetes d'ajout d'une US

  - Creer un fichier useCase/CreateUS.js qui va ajouter l'US à la base de donées et l'ajouter au projet correspondant.
  - Ajouter à app/index.js une route POST vers /project/:idProject/us/create qui appelle un useCase/createUS.js
  <p></p>

- TU7. Test requete d'ajout d'un US

  - Envoyer un POST sur /project/:idProject/us/create avec les données pour créer une US
  - Vérifier qu'une US est créé avec ces données en BD
  <p></p>

- NF8 . Requêtes de modification d'une US

  - Creer un fichier useCase/ModifyUS.js qui va récupérer les données de l'US à modifier et les répercuter dans la base de données
  - Ajouter à app/index.js une route POST vers /project/:idProject/us/:idUS/modify qui appelle un useCase/ModifyUS.js
  <p></p>

- TU8. Test requete de modification d'une US

  - Envoyer un POST sur /project/:idProject/us/:idUS/modify avec les données pour modifier une US
  - Vérifier que l'US est bien modifiée en BD
  <p></p>

- NF9. Formulaire de création/modification d'une US

  - Créer un composant UserStoryForm.vue
  - Créer dedans un formulaire avec les champs :
    - description\*
    - une liste déroulant type (new feature, bugfix, test)
    - un état\* (par défaut OUVERT)
    - importance
    - difficulté
  - Créer des boutons "Valider", "Annuler" et "Modifier"
    - Si il s'agit d'une création on affiche le bouton Valider
    - Si il s'agit d'une modification on affiche le bouton Modifier
  - Envoie via par POST à l'addresse /project/:idProject/us/create les données du formulaire s'il s'agit d'une nouvelle US.
  - Envoie via par POST à l'addresse /project/:idProject/us/:idUS/modify les données du formulaire s'il s'agit d'une US déjà existante.
  <p></p>

- TU9_1. Test formulaire US

  - Vérifier qu'on ne peut pas rentrer des caractères illégaux dans le formulaire
  <p></p>

- TE2E9_2. Test ajout US via formulaire

  - Créer une US
  - Remplir le formulaire
  - Valider
  - Vérifier qu'une US est bien créé avec les valeurs du formulaire en BD
  <p></p>

- TE2E9_3. Test modification US via formulaire

  - Modifier une US
  - Remplir le formulaire
  - Valider
  - Vérifier que l'US est bien modifiée en BD avec les valeurs du formulaire
  <p></p>

- NF10. Récupération des données d'un projet

  - Créer une route GET sur /project/:idProject qui renvoie sur useCase/getProjectInfo.js
  - Créer le fichier getProjectInfo.js dans /useCase
  - Implémenter dans getProjectInfo.js la récupération des champs du projet ayant pour id : idProject dans la BD
  - Envoyer les données au front
  <p></p>

- TU10. Test récupération des données d'un projet.

  - Envoyer une requête GET sur /project/:idProject
  - Vérifier que les données reçues correspondent au projet d'id idProject en BD
  <p></p>

- NF11. Affichage d'un projet

  - Créer un composant Project.vue
  - Afficher les champs : nom, date de début, état
  - Afficher les champs optionnels si ils sont présents : date de fin estimée, dépôt, description.
  - Ajouter un bouton de modification qui revoie un GET vers la route /project/:idProject/modify
  <p></p>

- TI11. Test affichage d'un projet

  - Afficher un projet
  - Vérifier que les données affichées correspondent à celles du projet idProject en BD

- NF12. Récupération des US d'un projet

  - Créer une route GET sur /project/:idProject/us/display/:idProject qui renvoie sur useCase/getUS.js
  - Créer le fichier getUS.js dans /useCase
  - Implémenter dans getUS.js la récupération des US du projet d'id idProject dans la BD
  - Envoyer les données au front
  <p></p>

- TU12. Test récupération des US d'un projet

  - Faire une GET sur /project/:idProject/us/display/:idProject
  - Vérifier que les données reçues sont toutes US correspondantes au projet d'id idProject
  <p></p>

- NF13. Affichage des US dans le projet

  - Créer un composant USList.vue
  - Récupérer la liste des US envoyées par le back
  - Afficher sous forme de tableau les US (id,description,difficulté,importance,sprint)
  - Ajouter pour chaque US un bouton "Modifier" qui renvoie un GET vers la route /project/:idProject/us/:idUS/modify
  - Ajouter à côté du bouton "Modifier" un bouton "Supprimer" qui renvoie un GET vers /project/:idProject/us/delete
  - Ajouter en bas du tableau un bouton "Ajouter" qui renvoie un GET vers la route /project/:idProject/us/createUS
  - Ajouter le composant USList.vue à Project.vue
  <p></p>

- TI13. Test affichage des US

  - Faire une GET sur /project/:idProject/us/display/:idProject
  - Aller sur l'URL /project/:idProject/us
  - Vérifier que le nombre d'US affiché correspond à celui dans la BD
  <p></p>

- NF14. Modif de l'importance et difficulté de l'US via liste déroulante

  - Ajouter une liste déroulante pour l'importance, contenant high, medium, low pour chaque US.
  - Ajouter une liste déroulante pour la difficulté, contenant 1, 2 , 3, 5, 8 pour chaque US.
  <p></p>

- TI14. Test modification de l'importance et de la difficulté d'une US

  - Accéder à la liste des US d'un projet
  - Modifier l'importance et la difficulté d'une US
  - Vérifier que le changement est pris en compte en BD
  <p></p>

- NF15. Requête d'ajout d'une tâche

  - Creer un fichier useCase/CreateTask.js qui va ajouter la tâche à la base de donées et l'ajouter au projet correspondant.
  - Ajouter à app/index.js une route POST vers /project/:idProject/task/create qui appelle un useCase/createTask.js
  <p></p>

- TU15. Test de la requête d'ajout d'une tâche

  - Faire un POST vers /project/:idProject/task/create avec les données nécessaires à la création d'une tâche
  - Vérifier qu'elle est bien créee avec ces données en BD
  <p></p>

- NF16 Formulaire de création des tâches

  - Creer un composant TaskForm.js.
  - Creer dedans un formulaire avec les chapms:
    -id (string)
    -description (string)
    -lien avec userStory (string)
    -état (par default en TODO)
  - Créer un script qui renvoie via une requete POST à l'adresse /project/:idProject/Task/create les données du formulaire.
  <p></p>

- TU16_1 Test du formulaire de création d'une tâche.

  - Rentrer des caractères illégaux dans le frmulaire de création de tâches
  - Vérifier qu'on ne peut pas créer de tâche dans cette situation

- TE2E16_2

  - Remplir le formulaire de création des tâches
  - Cliquer sur ajouter
  - Vérifier que la tâche apparaît bien dans la liste des tâches
  <p></p>

- NF17. Récupération des Tâches d'un projet

  - Créer une route GET sur /project/:idProject qui renvoie sur useCase/getTasks.js
  - Créer le fichier getTasks.js dans /useCase
  - Implémenter dans getTasks.js la récupération des Tâches du projet d'id idProject dans la BD
  - Envoyer les données au front
  <p></p>

- TU17. Test de réccupération des tâche d'une US.

  - Faire un GET sur /project/:idProject/tasks/display/:idProject
  - Vérifier que les Tâches renvoyées appartiennent bien au projet d'id idProject
  <p></p>

- NF18. Affichage des Tasks dans le projet

  - Créer un composant TasksList.vue
  - Récupérer la liste des Tâches envoyées par le back
  - Afficher sous forme de tableau les Tâches (id,us,temps,dépendences,développeurs et état)
  - Ajouter l'affichage de la description d'un tâche quand on clique dessus, en dessous de la ligne de la tâche concernée
  - Ajouter pour chaque tâche un bouton "Modifier" qui renvoie un GET vers la route /project/:idProject/task/:idTask/modify
  - Ajouter à côté du bouton "Modifier" un bouton "Supprimer" qui renvoie un GET vers /project/:idProject/task/delete
  - Ajouter en bas du tableau un bouton "Ajouter" qui renvoie un GET vers la route /project/:idProject/task/create
  - Ajouter le composant TasksList.vue à Project.vue
  <p></p>

- TI18. Test de l'affichage des tâche d'un projet

  - Faire un GET sur /project/:idProject/tasks/display/:idProject
  - Récupérer le nombre de tâches renvoyées
  - Accéder à la page qui liste des tâches du projet d'id idProject
  - Compter le nombre de tâches affichées
  - Si le nombre de tâches est le même qu'en BD le test est validé
  <p></p>

- NF19. Affichage du Pert dans le projet

  - Créer un composant Pert.vue
  - Ajouter un bouton d'ajout de fichier (png,jpeg)
  - Afficher l'image du Pert
  - Ajouter le composant Pert.vue à Project.vue
  <p></p>

- NF20. Affichage du Kanban dans le projet

  - Créer un composant Kanban.vue
  - Récupérer la liste des tâches
  - Classer les tâches par développeur
  - Afficher le Kanban
  - Ajouter le composant Kanban.vue à Project.vue
  <p></p>

- TE2E20. Test du kanban

  - Implémenter un test qui vérifie que les tâche d'un projet idProject sont classer au bon endroit
  <p></p>

- NF21. Modification de l'état d'une tâche

  - Drag&Drop d'une tâche dans une colonne qui modifie sont état.
  - Le drag&drop envoie une requete POST au back /project/:idProjet/task/:idTask/modify
  <p></p>

- TE2E21. Test de modification de l'état d'une tâche via drag and drop.

  - Implémenter un test qui vérifie que lorsqu'on déplace une tâche, on envoie une requete au serveur avec le nouvel état
  <p></p>

- NF22. Définir les données en BD

  - Créer un fichier txt
  - Lister les paramètres d'une projet et leur type
    - nom\* (String)
    - date de début\* (String)
    - une date de fin estimé (String)
    - url vers un dépot git (String)
    - une description (String)
    - un état\* (String)
  - Lister les paramètres d'une tâche et leur type
  - Lister les paramètres d'une US et leur type - description\* (String) - type (String) - un état (String) - un état\* (String)
  <p></p>

- NF23 Formulaire de création des sprints

  - Creer un composant SprintForm.vue.
  - Créer un script qui renvoie via une requete POST à l'adresse /project/:idProject/Sprint/create les données du formulaire.
  - Creer un formulaire avec les champs date de début (date) et date de fin (date) (l'id doit être généré automatiquement).
  - Creer deux boutons, Valider et Annuler en fin de formulaire.
  - Envoyer une requête POST avec les données saisies vers /project/:idProject/Sprint/create
  <p></p>

- TI23. Test création d'un sprint via formulaire

  - Aller sur le formulaire de création de Sprint
  - Remplir le formulaire
  - Valider
  - Vérifier que le sprint est bien créé avec les bonnes valeurs en BD

- TE2E23_2. Test création + affichage d'un sprint

  - Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/Sprint/create.
  - Implémenter un test qui vérifie qu'on entre bien dans l'état ajout.
  <p></p>

- NF24 Requête de création d'un sprint

  - Ajouter une route POST dans app/index.js qui redirige les données vers un fichier addSprint.js dans /useCase
  - Créer un fichier addSprint.js dans le dossier /useCase qui sauvegarde en BD le sprint créé
  <p></p>

- TU24. Test de la requête de création d'un sprint

  - Faire un POST sur /project/:idProject/sprint/create avec les données du sprint à créer
  - Vérifier que le sprint est bien ajouté en BD
  <p></p>

- NF25. Ajouter une US dans un sprint

  - Ajouter l'api Drag&Drop de html5 de drag and drop à l'application.
  - Utiliser l'Api de drag and drop sur les objets de type US
  <p></p>

- TE2E25. Test ajout d'une US dans un sprint

  - Implémenter un test qui vérifie que les objets de type US sont bien drag and dropable.
  - Implémenter un test qui vérifie que le drag and drop ajoute bien à l'objet sprint correspondant un objet de type US.
  - Implémenter un test qui vérifie que l'objet ajouté au sprint est bien l'objet US correspondant à l'objet dragé and dropé dans le sprint voulu.
  <p></p>

- NF26. Composant de % de complétion

  - Créer un composant Progression.vue
  - Intégrer au composant une barre de progression Bootstrap
  - En fonction des données reçues (nombre à réaliser et nombre réalisé) actualiser la barre en conséquence
  - Ajouter 3 fois ce composant a Projet.vue : - Un pour les US - Un pour les Tasks - Un pour les Sprints
  <p></p>

- NF27. Récupération de l'avancement des US

  - Dans le fichier app/index.js créer une route GET sur /project qui va appeler un fichier getProgressUS.js dans le dossier useCase
  - Créer un fichier getProgressUS.js dans le dossier useCase
  - Récupérer en BD le nombre d'US total et le nombre d'US terminées
  - Envoyer ces 2 paramètres au front
  <p></p>

- TU27. Test de réccupération de l'avancement des US

  - Faire un GET sur /project/:idProject/us/display/:idProject
  - Compter dans les US récupérées combien sont terminées
  - Comparer le résultat avec les données du GET sur /project/:idProject/us/progress/:idProject
  <p></p>

- NF28. Récupération de l'avancement des Tasks

  - Dans le fichier app/index.js créer une route GET sur /project qui va appeler un fichier getProgressTask.js dans le dossier useCase
  - Créer un fichier getProgressTask.js dans le dossier useCase
  - Récupérer en BD le nombre de Task total et le nombre de Task terminées
  - Envoyer ces 2 paramètres au front
  <p></p>

- TU28. Test de réccupération de l'avancement des Task

  - Faire un GET sur /project/:idProject/task/display/:idProject
  - Compter dans les tasks récupérées combien sont terminées
  - Comparer le résultat avec les données du GET sur /project/:idProject/task/progress/:idProject
  <p></p>

- NF29. Récupération de l'avancement des Sprints

  - Dans le fichier app/index.js créer une route GET sur /project qui va appeler un fichier getProgressSprint.js dans le dossier useCase
  - Créer un fichier getProgressSprint.js dans le dossier useCase
  - Récupérer en BD le nombre de total de Tasks du Sprint et le nombre de Tasks du sprint terminées
  - Envoyer ces 2 paramètres au front
  <p></p>

- TU29. Test de réccupération de l'avancement des Sprint

  - Faire un GET sur /project/:idProject/sprint/display/:idProject
  - Compter dans les sprints récupérés combien sont terminés
  - Comparer le résultat avec les données du GET sur /project/:idProject/sprint/progress/:idProject
  <p></p>

- NF30. Creation de la vue basique d'un Burndown Chart avec les données d'un projet test

  - Ajout d'un bouton "Génerer Burndown Chart" en bas de la page d'affichage d'un projet, qui renvoie un GET vers la route /project/:idProject/burndownChart
  - Créer un composant burndownChart.vue où sera affiché le burndown chart généré
  - Utilisation de l'api Chartjs pour générer un graphique sur deux axes:
    - En x: Iteration Timeline (days)
    - En y: Sum of task estimates (days)
  - Tracer la ligne "Ideal Tasks Remaining" correspondant à une droite du point de départ du projet jusqu'au nombre de jours final du projet.
  <p></p>

- TE2E30. Test du Burndown Chart basique

  - Implémenter un test qui vérifie que la droite tracée commence bien au nombre de jours total du projet et qui fini bien à 0 et que chaque jours a un point de la droite.
  - Implémenter un test qui vérifie que les données affichées correspondent aux données inMemory
  <p></p>

- NF31. Ajout de la ligne "Actual task remaining" au Burndown Chart avec les données d'un projet test

  - Pour chaques jours que le projet a commencé, calculer en jour la durée de toutes les tâches restantes.
  - Tracer la ligne "Actual task remaining" qui prend en x le chiffre calculé precedement, et en y le jours d'avancement correspondant.
  <p></p>

- TE2E31. Test de "Actual task remaining"

  - Implémenter un test qui vérifie que chaque jour de la courbe dispose d'un point et qu'il a la bonne valeur
  - Implémenter un test qui vérifie l'actualisation de la courbe après un changement dans la BD
  <p></p>

- NF32. Récupération des Sprints d'un projet

  - Créer une route GET sur /project/:idProject qui renvoie sur useCase/getSprints.js
  - Créer le fichier getSprints.js dans /useCase
  - Implémenter dans getSprints.js la récupération des SPrints du projet d'id idProject dans la BD
  - Envoyer les données au front
  <p></p>

- TU32. Test de réccupération des Sprints.

  - Faire un GET sur /project/:idProject/sprint/display/:idProject
  - Vérifier qu'on récupére bien tous les sprints associés au projet idProject
  <p></p>

- NF33. Affichage des Sprints dans le projet

  - Créer un composant SprintsList.vue
  - Récupérer la liste des Sprints et leurs US associées envoyées par le back
  - Afficher chaque sprint sous forme de liste d'US associée au sprint.
  <p></p>

- TI33. Test de l'affichage des sprints d'un projet
  - Faire un GET sur /project/:idProject/sprint/display/:idProject
  - Compter le nombre de sprints récupérés
  - Aller sur l'URL /project/sprint
  - Compter le nombre de sprints affichéd
  - Si les dexu correspondent le test est passé
  <p></p>

## Organisation

3 principales dépendences :
TU1 : squelette node (index.js) existe et testé
NF22 : définition des données en BD
TI11 : Project.vue existe et est testé

| id       | US      | Temps (hm) | Dépendances | développeur     | état  |
| -------- | ------- | ---------- | ----------- | --------------- | ----- |
| NF1      | US1     | 1          | /           | Alexandre Erard | DONE  |
| TU1      | US1     | 1          | NF1         | Maxime Gresse   | DONE  |
| NF2      | US1     | 1          | TU1,NF22    | Maxime Gresse   | DONE  |
| TU2      | US1     | 1          | NF2         | Maxime Gresse   | DONE  |
| NF3      | US1     | 1          | NF22        | Alexandre Erard | DONE  |
| TI3_1    | US1     | 2          | NF3         | Maxime Gresse   | DONE  |
| TE2E3_2  | US1     | 2          | NF3         | Maxime Gresse   | DONE  |
| NF4      | US1     | 1          | NF22        | Alexandre Erard | DONE  |
| TE2E4_1  | US1     | 2          | NF4         | Maxime Gresse   | DONE  |
| TE2E4_2  | US1     | 2          | NF4         | Maxime Gresse   | DONE  |
| NF5      | US1     | 1          | TU1,NF22    | Maxime Gresse   | DONE  |
| TU5      | US1     | 1          | NF5         | Alexandre Erard | DONE  |
| NF6      | US1     | 1          | TU1,NF22    | Maxime Gresse   | DONE  |
| TU6      | US1     | 1          | NF6         | Maxime Gresse   | DOING |
| NF7      | US2     | 1          | TU1,NF22    | Maxime Gresse   | DONE  |
| TU7      | US2     | 1          | NF7         | Alexandre Erard | DONE  |
| NF8      | US3     | 1          | TU1,NF22    | Maxime Gresse   | DONE  |
| TU8      | US3     | 1          | NF8         | Alexandre Erard | DONE  |
| NF9      | US2 US3 | 1          | NF22        | Alexandre Erard | DONE  |
| TU9_1    | US2 US3 | 2          | NF4         |                 | TODO  |
| TE2E9_2  | US2 US3 | 2          | NF4         |                 | TODO  |
| TE2E9_3  | US2 US3 | 2          | NF4         |                 | TODO  |
| NF10     | US1     | 1          | TU1,NF22    | Maxime Gresse   | DONE  |
| T10      | US1     | 1          | NF10        | Alexandre Erard | DONE  |
| NF11     | US1     | 2          | NF22        | Alix            | TODO  |
| TI11     | US1     | 2          | NF11        |                 | TODO  |
| NF12     | US3     | 1          | TU1,NF22    | Maxime Gresse   | DONE  |
| TU12     | US3     | 1          | NF12        | Alexandre Erard | DONE  |
| NF13     | US3     | 3          | NF22,TI11   | Alexandre Erard | DONE  |
| TI13     | US3     | 2          | NF13        |                 | TODO  |
| NF14     | US3     | 1          | TI13        | Alexandre ERARD | DONE  |
| TI14     | US3     | 1          | NF14        |                 | TODO  |
| NF15     | US4     | 1          | TU1,NF22    |                 | TODO  |
| TU15     | US4     | 1          | NF15        |                 | TODO  |
| NF16     | US4     | 1          | NF22        | Alix            | TODO  |
| TU16_1   | US4     | 1          | NF16        |                 | TODO  |
| TE2E16_2 | US4     | 1          | NF16        |                 | TODO  |
| NF17     | US4     | 1          | TU1,NF22    |                 | TODO  |
| TU17     | US4     | 1          | NF17        |                 | TODO  |
| NF18     | US4     | 2          | NF22,TI11   | Alexandre ERARD | TODO  |
| TI18     | US4     | 1          | NF18        |                 | TODO  |
| NF19     | US8     | 1          | TI11        |                 | TODO  |
| NF20     | US5     | 4          | TI11        | Alexandre ERARD | TODO  |
| TE2E20   | US5     | 3          | NF20        |                 | TODO  |
| NF21     | US5     | 2          | TI18        |                 | TODO  |
| TE2E21   | US5     | 1          | NF21        |                 | TODO  |
| NF22     | US1     | 1          |             |                 | DONE  |
| NF23     | US6     | 1          | NF22        | Alexandre Erard | DOING |
| TI23     | US6     | 2          | NF23        |                 | TODO  |
| NF24     | US6     | 1          | TU1,NF22    |                 | TODO  |
| TU24     | US6     | 1          | NF24        | Alexandre Erard | TODO  |
| NF25     | US7     | 2          | TI13,T33    | Alexandre ERARD | DONE  |
| TE2E25   | US7     | 2          | NF25        |                 | TODO  |
| NF26     | US23    | 1          | TI11        | Alix            | TODO  |
| NF27     | US23    | 1          | NF26,TU12   |                 | TODO  |
| TU27     | US23    | 1          | NF27        |                 | TODO  |
| NF28     | US23    | 1          | NF26,TU17   |                 | TODO  |
| TU28     | US23    | 1          | NF28        |                 | TODO  |
| NF29     | US23    | 1          | NF26,T32    |                 | TODO  |
| TU29     | US23    | 1          | NF29        |                 | TODO  |
| NF30     | US25    | 3          | TI11        | Alix            | TODO  |
| TE2E30   | US25    | 2          | NF30        |                 | TODO  |
| NF31     | US25    | 3          | T30,TU17    |                 | TODO  |
| TE2E31   | US25    | 2          | NF31        |                 | TODO  |
| NF32     | US25    | 1          | TU1,NF22    |                 | TODO  |
| TU32     | US25    | 1          | NF32        |                 | TODO  |
| NF33     | US25    | 3          | TU32        |                 | TODO  |
| TI33     | US25    | 1          | NF33        |                 | TODO  |
