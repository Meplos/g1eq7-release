Feature: Modification d'une US

    US : 2
    On doit pouvoir modifier les données d'une US déjà créée

    Scenario: Modification sans problème
        Given un utilisateur sur la page d'accueil
        And un projet est enregistré
        And une US associée au projet est enregistrée
        When il clique sur le projet
        And il clique sur l'onglet US