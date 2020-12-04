# Tâches Sprint 3

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

- TI14. Test modification de l'importance et de la difficulté d'une US

  - Accéder à la liste des US d'un projet
  - Modifier l'importance et la difficulté d'une US
  - Vérifier que le changement est pris en compte en BD
  <p></p>

- TU15. Test de la requête d'ajout d'une tâche

  - Faire un POST vers /project/:idProject/task/create avec les données nécessaires à la création d'une tâche
  - Vérifier qu'elle est bien créee avec ces données en BD
  <p></p>

- TU16_1 Test du formulaire de création d'une tâche.

  - Rentrer des caractères illégaux dans le frmulaire de création de tâches
  - Vérifier qu'on ne peut pas créer de tâche dans cette situation

- TE2E16_2

  - Remplir le formulaire de création des tâches
  - Cliquer sur ajouter
  - Vérifier que la tâche apparaît bien dans la liste des tâches
  <p></p>

- TU17. Test de réccupération des tâche d'une US.

  - Faire un GET sur /project/:idProject/tasks/display/:idProject
  - Vérifier que les Tâches renvoyées appartiennent bien au projet d'id idProject
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

- TE2E20. Test du kanban

  - Implémenter un test qui vérifie que les tâche d'un projet idProject sont classer au bon endroit
  <p></p>

- TE2E21. Test de modification de l'état d'une tâche via drag and drop.

  - Implémenter un test qui vérifie que lorsqu'on déplace une tâche, on envoie une requete au serveur avec le nouvel état
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

- NF34 Formulaire de création d'une release

  - Ajouter un composant form/ReleaseForm.vue
  - Une release contient un nom, une date, une description, une liste d'issue implémenter, un fichier au format zip
  - Envoie du fichier au serveur
  - Requete post sur un /project/:idProject/release/create si on ajoute un nouvelle release
  - Requete post sur un /project/:idProject/release/:idRelease/modify si on modifie une release existante
  <p></p>

- NF35 Liste de toutes les releases

  - Ajouter un composant list/ReleaseList.vue
  - Récuppérer les release avec une requete get à /project/:idProject/release/display/:idProject
  <p></p>

- NF36 Implémenter la route GET /project/:idProject/release/display/:idProject renvoie la liste des release
  <p></p>
- NF37 Implémenter la route POST /project/:idProject/release/create qui créé une release en BDD
  <p></p>
- NF38 Implémenter la route POST /project/:idProject/release/:idRelease/modify qui modifie une release idRelease en BDD
  <p></p>
- NF39 Création du model du répository Release pour interagir avec mongoDB

## Organisation

3 principales dépendences :
TU1 : squelette node (index.js) existe et testé
NF22 : définition des données en BD
TI11 : Project.vue existe et est testé

| id       | US   | Temps (hm) | Dépendances | développeur     | état |
| -------- | ---- | ---------- | ----------- | --------------- | ---- |
| TI14     | US3  | 1          | NF14        |                 | TODO |
| TU15     | US4  | 1          | NF15        |                 | TODO |
| TU16_1   | US4  | 1          | NF16        |                 | TODO |
| TE2E16_2 | US4  | 1          | NF16        |                 | TODO |
| TU17     | US4  | 1          | NF17        |                 | TODO |
| TI18     | US4  | 1          | NF18        |                 | TODO |
| NF19     | US8  | 1          | TI11        |                 | TODO |
| TE2E20   | US5  | 3          | NF20        |                 | TODO |
| TE2E21   | US5  | 1          | NF21        |                 | TODO |
| TI23     | US6  | 2          | NF23        |                 | TODO |
| NF24     | US6  | 1          | TU1,NF22    |                 | TODO |
| TU24     | US6  | 1          | NF24        | Alexandre Erard | TODO |
| TE2E25   | US7  | 2          | NF25        |                 | TODO |
| NF26     | US23 | 1          | TI11        | Alix            | TODO |
| NF27     | US23 | 1          | NF26,TU12   |                 | TODO |
| TU27     | US23 | 1          | NF27        |                 | TODO |
| NF28     | US23 | 1          | NF26,TU17   |                 | TODO |
| TU28     | US23 | 1          | NF28        |                 | TODO |
| NF29     | US23 | 1          | NF26,T32    |                 | TODO |
| TU29     | US23 | 1          | NF29        |                 | TODO |
| NF30     | US25 | 3          | TI11        | Alix            | TODO |
| TE2E30   | US25 | 2          | NF30        |                 | TODO |
| NF31     | US25 | 3          | T30,TU17    |                 | TODO |
| TE2E31   | US25 | 2          | NF31        |                 | TODO |
| NF32     | US25 | 1          | TU1,NF22    |                 | TODO |
| TU32     | US25 | 1          | NF32        |                 | TODO |
| NF33     | US25 | 3          | TU32        |                 | TODO |
| TI33     | US25 | 1          | NF33        |                 | TODO |
| NF34     | US12 | 3          | NF37,NF38   | Alexandre ERARD | TODO |
| NF35     | US12 | 1          | NF36        | Alexandre ERARD | TODO |
| NF36     | US12 | 1          | NF39        | Alexandre ERARD | TODO |
| NF37     | US12 | 1          | NF39        | Alexandre ERARD | TODO |
| NF38     | US12 | 1          | NF39        | Alexandre ERARD | TODO |
| NF39     | US12 | 1          |             | Alexandre ERARD | TODO |
