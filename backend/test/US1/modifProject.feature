Feature: Création d'un projet

    US : 1
    On doit pouvoir modifier les informations d'un porjet existant

    Scenario: Modification sans problème / t4_2.js
        Given un utilisateur sur la page d'accueil qui veut modifier un projet
        And il existe un projet déjà créé
        When il clique sur le bouton pour modifier
        And il change au moins le titre
        And il clique sur le bouton "Modifier"
        Then le projet est modifié en BD