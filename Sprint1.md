# Tâches Sprint 1

### DoD

-> Toutes les étapes de la tâche sont réalisées et les tests associés (décrits dans la tâche) sont passés avec succès.

## Listes des tâches

0. Créer un squelette d'app JS/Express/Vue

   - [ ] Créer un fichier app/index.js
   - [ ] Implémenter un serveur Express basique
   - [ ] Créer un composant Main.vue
   - [ ] Faire pointer notre serveur vers Main.vue
   - [ ] Implémenter un test qui vérifie qu'on a bien accès à notre serveur

1. Requête de listage des projets

   - [ ] Ajouter à app/index.js une route GET vers / qui appelle un useCase qui renvoie au front les projets déjà existants si il y en a
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données au front (rien si il n'y a pas de projets en BD et les bons si ils y en a)

2. Affichage des projets

   - [ ] Creer un composant vue ListProjet.vue
   - [ ] Afficher les projets reçus par le back sous forme de liste.
   - [ ] Ajouter à la liste un bouton menant à la page de création d'un projet via un GET sur /create.
   - [ ] Pour chaque projet renvoyer un GET sur /projet/:idProject lors d'un clic sur le projet
   - [ ] Implémenter un test qui vérifie qu'on affiche correctement les données reçues par le back.
   - [ ] Implémenter un test qui vérifie qu'on envoie la bonne requête de GET une fois qu'on a cliqué sur le bouton.
   - [ ] Implémenter un test qui vérifie lors d'un clic sur le projet que la route GET renvoyée contient le bon id associé

3. Formulaire de création/modification de projet

   - [ ] Créer un composant ProjectForm.vue
   - [ ] Créer dedans un formulaire avec les champs :
     - nom\*
     - date de début\* (par défaut date du jour)
     - une date de fin estimé
     - url vers un dépot git
     - une description
     - un état\* (par défaut OUVERT)
   - [ ] Créer un script qui renvoie via une requete POST à l'adresse /createProject les données du formulaire si il s'agit d'un nouveau projet.
   - [ ] Créer un script qui renvoie via une requete POST à l'adresse /modifyProject les données du formulaire si il s'agit d'une modification.
   - [ ] Implémenter un test qui vérifie qu'on ne peut pas rentrer de caractères illégaux dans notre formulaire
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /modifyProject
   - [ ] Vérifie qu'on entre bien dans l'état modification quand on passe des paramètre à notre composant et dans l'état ajout sinon.

4. Requetes de création d'un projet

   - [ ] Creer un fichier useCase/CreateProject.js qui va ajouter le projet à la base de donées
   - [ ] Ajouter à app/index.js une route POST vers /createProject qui appelle un useCase/createProject.js
   - [ ] Implémenter un test qui vérifie que le projet avec les bonnes information à bien était créer.

5. Requete d'ajout d'une US

   - [ ] Creer un fichier useCase/CreateUS.js qui va ajouter l'issue à la base de donées et l'ajouter au projet correspondant.
   - [ ] Ajouter à app/index.js une route POST vers /createUS qui appelle un useCase/createUS.js
   - [ ] Implémenter un test qui vérifie que l'US avec les bonnes information à bien était créer. et qu'elle a bien était ajouté au bon projet.

6. Formulaire de création/modification d'une US

   - [ ] Créer un composant UserStoryForm.vue
   - [ ] Créer dedans un formulaire avec les champs :
     - description\*
     - une liste déroulant type (new feature, bugfix, test)
     - un état (Ouvert par défaut)
     - un état\* (par défaut OUVERT)
   - [ ] Créer des boutons "Valider", "Annuler" et "Modifier"
     - Si il s'agit d'une création on affiche le bouton Valider
     - Si il s'agit d'une modification on affiche le bouton Modifier
   - [ ] Envoie via par POST à l'addresse /createUS les données du formulaire s'il s'agit d'une nouvelle US.
   - [ ] Envoie via par POST à l'addresse /modifyUS les données du formulaire s'il s'agit d'une US déjà existante.
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /createUS
   - [ ] Implémenter un test qui vérifie qu'on ne peut pas rentrer de caractères illégaux dans notre formulaire
   - [ ] Implémenter un test qui vérifie qu'on renvoie les bonnes données dans le POST vers /modifyUS
   - [ ] Vérifie qu'on entre bien dans l'état modification quand on passe des paramètre à notre composant et dans l'état ajout sinon.

7. Affichage d'un projet
   - [ ] Créer un composant Project.vue
   - [ ] Afficher les champs : nom, date de début, état
   - [ ] Afficher les champs optionnels si ils sont présents : date de fin estimée, dépôt, description.
   - [ ] Ajouter un bouton de modification qui revoie un GET vers la route /project/id/modify
   - [ ] Implémenter un test qui vérifie que les champs du projets sont bien affichés
   - [ ] Implémenter un test qui vérifie qu'après un clic sur le bouton "Modifier" on revoie bien un GET avec l'id du projet

8. Affichage des US dans le projet
   - [ ] Créer un composant USList.vue
   - [ ] Récupérer la liste des US envoyées par le back
   - [ ] Afficher sous forme de tableau les US (id,description,difficulté,importance,sprint)
   - [ ] Ajouter pour chaque US un bouton "Modifier" qui renvoie un GET vers la route /project/:idProject/us/:idUS/modify
   - [ ] Ajouter à côté du bouton "Modifier" un bouton "Supprimer" qui renvoie un GET vers /project/:idProject/us/:idUS/delete
   - [ ] Ajouter en bas du tableau un bouton "Ajouter" qui renvoie un GET vers la route /project/:idProject/us/createUS
   - [ ] Ajouter le composant USList.vue à Project.vue

9. Affichage des Tasks dans le projet
   - [ ] Créer un composant TasksList.vue
   - [ ] Récupérer la liste des Tâches envoyées par le back
   - [ ] Afficher sous forme de tableau les Tâches (id,us,temps,dépendences,développeurs et état)
   - [ ] Ajouter l'affichage de la description d'un tâche quand on clique dessus, en dessous de la ligne de la tâche concernée
   - [ ] Ajouter pour chaque tâche un bouton "Modifier" qui renvoie un GET vers la route /project/:idProject/task/:idTask/modify
   - [ ] Ajouter à côté du bouton "Modifier" un bouton "Supprimer" qui renvoie un GET vers /project/:idProject/task/:idTask/delete
   - [ ] Ajouter en bas du tableau un bouton "Ajouter" qui renvoie un GET vers la route /project/:idProject/task/createTask
   - [ ] Ajouter le composant TasksList.vue à Project.vue

10. Affichage du Pert dans le projet
   - [ ] Créer un composant Pert.vue
   - [ ] Ajouter un bouton d'ajout de fichier (png,jpeg)
   - [ ] Afficher l'image du Pert
   - [ ] Ajouter le composant Pert.vue à Project.vue

11. Affichage du Kanban dans le projet
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


## Organisation

| id  | US  | Temps | Dépendances | dévelloppeur | état |
| --- | --- | ----- | ----------- | ------------ | ---- |

