#Commit:

##Conventions de cloisonnement
Les commits doivent être cloisonnés par Task.
Les commits doivent porter sur une seule préocupation.
Cela permet d'héviter de modifier des parties indépendantes du code, ce qui rend plus facile la correction en cas d'erreurs.

##Conventions de nommage
Pour le début d'une tâche:
<Id de la tâche> start/"fonctionnalités implémentées" (début d'une tâche)
exmple: NF2 start "création du fichier vueForm.vue"
 
Pour les commits intermédiaires:
<Id de la tâche> "fonctionnalités implémentées"

Pour le commit final:
<Id de la tâche> done

Une fois que la tâche est terminée, mais qu'elle nécessite des modifications, un commit pourra être effectué sous cette forme:
<Id de la tâche> patch "fonctionnalités modifiées"(optionnel)

Quand un commit touche plusieurs tâches, mettre les ids des tâches concernées par la modification ainsi qu'un message explicite, permettant de comprendre quelles
tâches ont été modifiées (exceptionnel).
<Ids des tâches> "message explicite"