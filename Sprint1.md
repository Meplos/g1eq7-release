# Tâches Sprint 1

### DoD

-> Toutes les étapes de la tâche sont réalisées et les tests associés (décrits dans la tâche) sont passés avec succès.

```

|- /project (Accueil avec liste des projets)
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
0. Créer un squelette d'app JS/Express/Vue

   - [ ] Créer un fichier app/index.js
   - [ ] Implémenter un serveur Express basique
   - [ ] Créer un composant Main.vue
   - [ ] Faire pointer notre serveur vers Main.vue
   - [ ] Implémenter un test qui vérifie qu'on a bien accès à notre serveur

1. Requête de listage des projets US:1

   - [ ] Ajouter à app/index.js une route GET vers /project qui appelle un useCase qui renvoie au front les projets déjà existants si il y en a
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données au front (rien si il n'y a pas de projets en BD et les bons si ils y en a)

2. Affichage des projets US:1

   - [ ] Creer un composant vue ListProjet.vue
   - [ ] Afficher les projets reçus par le back sous forme de liste.
   - [ ] Ajouter à la liste un bouton menant à la page de création d'un projet via un GET sur /project/create.
   - [ ] Pour chaque projet renvoyer un GET sur /projet/:idProject lors d'un clic sur le projet
   - [ ] Implémenter un test qui vérifie qu'on affiche correctement les données reçues par le back.
   - [ ] Implémenter un test qui vérifie qu'on envoie la bonne requête de GET une fois qu'on a cliqué sur le bouton.
   - [ ] Implémenter un test qui vérifie lors d'un clic sur le projet que la route GET renvoyée contient le bon id associé

3. Formulaire de création/modification de projet US:1

   - [ ] Créer un composant ProjectForm.vue
   - [ ] Créer dedans un formulaire avec les champs :
     - nom\*
     - date de début\* (par défaut date du jour)
     - une date de fin estimé
     - url vers un dépot git
     - une description
     - un état\* (par défaut OUVERT)
   - [ ] Créer un script qui renvoie via une requete POST à l'adresse /project/create les données du formulaire si il s'agit d'un nouveau projet.
   - [ ] Créer un script qui renvoie via une requete POST à l'adresse /project/:idProject/modify les données du formulaire si il s'agit d'une modification.
   - [ ] Implémenter un test qui vérifie qu'on ne peut pas rentrer de caractères illégaux dans notre formulaire
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/modify
   - [ ] Vérifie qu'on entre bien dans l'état modification quand on passe des paramètre à notre composant et dans l'état ajout sinon.

4. Requetes de création d'un projet US:1

   - [ ] Creer un fichier useCase/CreateProject.js qui va récupérer les données du projet à créer et les ajouter le projet à la base de données
   - [ ] 
   - [ ] Ajouter à app/index.js une route POST vers /project/create qui appelle un useCase/createProject.js
   - [ ] Implémenter un test qui vérifie que le projet ,avec les bonnes informations, a bien été créer.

5. Requete d'ajout d'une US  US:2

   - [ ] Creer un fichier useCase/CreateUS.js qui va ajouter l'issue à la base de donées et l'ajouter au projet correspondant.
   - [ ] Ajouter à app/index.js une route POST vers /project/:idProject/us/create qui appelle un useCase/createUS.js
   - [ ] Implémenter un test qui vérifie que l'US avec les bonnes information à bien était créée. et qu'elle a bien était ajouté au bon projet.

6. Formulaire de création/modification d'une US US:2 et 3

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
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/us/create
   - [ ] Implémenter un test qui vérifie qu'on ne peut pas rentrer de caractères illégaux dans notre formulaire
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/us/:idUS/modify
   - [ ] Vérifier qu'on entre bien dans l'état modification quand on passe des paramètre à notre composant et dans l'état ajout sinon.

7. Affichage d'un projet US:1
   - [ ] Créer un composant Project.vue
   - [ ] Afficher les champs : nom, date de début, état
   - [ ] Afficher les champs optionnels si ils sont présents : date de fin estimée, dépôt, description.
   - [ ] Ajouter un bouton de modification qui revoie un GET vers la route /project/:idProject/modify
   - [ ] Implémenter un test qui vérifie que les champs du projets sont bien affichés
   - [ ] Implémenter un test qui vérifie qu'après un clic sur le bouton "Modifier" on revoie bien un GET avec l'id du projet

8. Affichage des US dans le projet US:2
   - [ ] Créer un composant USList.vue
   - [ ] Récupérer la liste des US envoyées par le back
   - [ ] Afficher sous forme de tableau les US (id,description,difficulté,importance,sprint)
   - [ ] Ajouter pour chaque US un bouton "Modifier" qui renvoie un GET vers la route /project/:idProject/us/:idUS/modify
   - [ ] Ajouter à côté du bouton "Modifier" un bouton "Supprimer" qui renvoie un GET vers /project/:idProject/us/delete
   - [ ] Ajouter en bas du tableau un bouton "Ajouter" qui renvoie un GET vers la route /project/:idProject/us/createUS
   - [ ] Ajouter le composant USList.vue à Project.vue

9. Affichage des Tasks dans le projet
   - [ ] Créer un composant TasksList.vue
   - [ ] Récupérer la liste des Tâches envoyées par le back
   - [ ] Afficher sous forme de tableau les Tâches (id,us,temps,dépendences,développeurs et état)
   - [ ] Ajouter l'affichage de la description d'un tâche quand on clique dessus, en dessous de la ligne de la tâche concernée
   - [ ] Ajouter pour chaque tâche un bouton "Modifier" qui renvoie un GET vers la route /project/:idProject/task/:idTask/modify
   - [ ] Ajouter à côté du bouton "Modifier" un bouton "Supprimer" qui renvoie un GET vers /project/:idProject/task/delete
   - [ ] Ajouter en bas du tableau un bouton "Ajouter" qui renvoie un GET vers la route /project/:idProject/task/create
   - [ ] Ajouter le composant TasksList.vue à Project.vue

10. Affichage du Pert dans le projet US 8,23
   - [ ] Créer un composant Pert.vue
   - [ ] Ajouter un bouton d'ajout de fichier (png,jpeg)
   - [ ] Afficher l'image du Pert
   - [ ] Ajouter le composant Pert.vue à Project.vue

11. Affichage du Kanban dans le projet US 5,23
   - [ ] Créer un composant Pert.vue
   - [ ] Récupérer la liste des tâches
   - [ ] Classer les tâches par développeur
   - [ ] Afficher le Kanban
   - [ ] Ajouter le composant Kanban.vue à Project.vue

12. Définir les données en BD
   - [ ] Créer un fichier txt
   - [ ] Lister les paramètres d'une projet et leur type
     - nom\* (String)
     - date de début\* (String)
     - une date de fin estimé (String)
     - url vers un dépot git (String)
     - une description (String)
     - un état\* (String)
   - [ ] Lister les paramètres d'une tâche et leur type
   - [ ] Lister les paramètres d'une US et leur type
      - description\* (String)
     - type (String)
     - un état (String)
     - un état\* (String)


###RAF :

- Créer des sprints US 6
   - [ ] Creer un composant SprintForm.js.
   - [ ] Créer un script qui renvoie via une requete POST à l'adresse /project/:idProject/Sprint/create les données du formulaire.
   - [ ] Creer un formulaire avec les champs date de début (date) et date de fin (date) (l'id doit être généré automatiquement).
   - [ ] Creer deux boutons, Valider et Annuler en fin de formulaire.
   - [ ] Implémenter un test qui vérifie qu'on ne peut pas mettre autre chose que des dates dans les deux champs.
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/Sprint/create.
   - [ ] Implémenter un test qui vérifie qu'on entre bien dans l'état ajout.

- Ajouter une US dans un sprint US 7
   - [ ] Ajouter l'api de drag and drop à l'application.
   - [ ] Utiliser l'Api de drag and drop sur les objets de type US
   - [ ] Implémenter un test qui vérifie que les objets de type US sont bien drag and dropable.
   - [ ] Implémenter un test qui vérifie que le drag and drop ajoute bien à l'objet sprint correspondant un objet de type US.
   - [ ] Implémenter un test qui vérifie que l'objet ajouté au sprint est bien l'objet US correspondant à l'objet dragé and dropé dans le sprint voulu.

- Modif de l'importance et difficulté de l'US via liste déroulante US 22
   - [ ] Ajouter une liste déroulante pour l'importance, contenant high, medium, low pour chaque US.
   - [ ] Ajouter une liste déroulante pour la difficulté, contenant 1, 2 , 3, 5, 8 pour chaque US.
   - [ ] Implémenter un test qui vérifie que lorqu'il y a modification de la valeur des listes, celle-ci est bien sauvegardé et enregistré en BDD.

- Créer des tâches US 4
   - [ ] Creer un composant TaskForm.js.
   - [ ] Creer dedans un formulaire avec les chapms:
      -id (string)
      -description (string)
      -lien avec userStory (string)
      -état (par default en TODO)
   - [ ] Créer un script qui renvoie via une requete POST à l'adresse /project/:idProject/Task/create les données du formulaire.
   - [ ] Implémenter un test qui vérifie qu'on ne peut pas rentrer de caractères illégaux dans notre formulaire
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /project/:idProject/task
   - [ ] Implémenter un test qui vérifie qu'on entre bien dans l'état ajout.
   

- Organisation des tâches chronologiquement via drag and drop US 9

- % de complétion du sprint US 23

- % de complétion des tâches US 23

- % de complétion des US US 23

- Burndown Chart US 25


## Organisation

| id  | US  | Temps | Dépendances | dévelloppeur | état |
| --- | --- | ----- | ----------- | ------------ | ---- |

