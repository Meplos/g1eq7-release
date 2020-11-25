Feature: Création d'un projet

    US : 1
    On doit pouvoir créer un projet qui comporte au moins un titre et une date de début

    Scenario: Création sans problème / t4_1.js
        Given un utilisateur sur la page d'accueil qui veut créer un projet
        When il clique sur "New Project"
        And il remplit le titre
        And la date de début n'est pas nulle
        And il clique sur le bouton "Create"
        Then le projet est enregistré