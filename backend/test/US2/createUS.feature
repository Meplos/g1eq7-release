Feature: Création d'une US

    US : 2
    On doit pouvoir créer une US à partir de la page d'un projet 

    Scenario: Création sans problème / t9_1.js
        Given un utilisateur sur la page d'un projet
        When il clique sur le bouton pour ajouter une US
        And il remplit le formulaire correctement
        Then l'US est créée
        And elle est affichée dans la page du projet