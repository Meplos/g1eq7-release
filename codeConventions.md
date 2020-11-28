# Conventions et gestion de code :

## Les commits :

### Cloisonnement
1. Les commits doivent être cloisonnés par Task.
2. Les commits doivent porter sur une seule préocupation.

Cela permet d'éviter de modifier des parties indépendantes du code, ce qui rend plus facile la correction en cas d'erreurs.

### Nommage

- Pour le **début** d'une tâche :
"**<Id tâche>** Start (fonctionnalités implémentées)"
```shell
git commit -m "NF1 Start Create form"
```

- Pour le **suivi** d'une tâche :
"**<Id tâche>** fonctionnalités implémentées"
```shell
git commit -m "NF1 Add Button"
```

- Pour **cloturer** une tâche :
"**<Id tâche>** Done"
```shell
git commit -m "NF1 Done"
```

Une fois que la tâche est **terminée**, si elle nécessite des **modifications**, un commit pourra être effectué sous cette forme:
```shell
git commit -m "NF1 Patch (fonctionnalité patchée)"
```

Dans le cas **exceptionnel** où un commit toucherait **plusieurs tâches**. Il faut que les **modifications** apportées soient **le plus claires possibles** dans le message et essayer **joindre** tous les **id des tâches concernées**.

```shell
git commit -m "Patch (fonctionnalité patchée) NF1 TU20 NF33"
```

Dans le cas ou le commit **ne concerne pas** une **tâche en particulier** (modification des fichiers md, docker, ect...) préciser juste explicitement les modifications apportées.
```shell
git commit -m "Modify Task List"
```

## Mise en place de pull requests

Les **commits** et **push** de développement se font sur un **dépôt dev**, qui est un **fork** du **dépôt release**.

Lors de la fin d'un sprint, une **pull request** de la **nouvelle release** va être effectuée sur le **dépôt release**.
Si une fois anaylse faite elle **correspond aux attentes** alors la **pull request** est **acceptée**.

## Atelier Craft Promyze

Afin de se mettre d'accord sur des bonnes **conventions communes de codage**, mais aussi de faire un **retour sur ce qui a été réalisé**, l'équipe fera au moins un atelier craft sur la plateforme **Promyze**.