# Groupe2-projetMasterHistoire

Positice KIDS est une application permettant à des parents de découvrir 
les prochains évènements artistiques et culturels pour leurs enfants dans 
les musées aux alentours.

### Développement

Pour lancer le projet en développement il faut :

* Se placer dans le dossier client et faire ```npm install```
* Répéter l'action dans le dossier server
* Et pour finir se placer à la racine du projet et faire ```sudo docker-compose -f docker-compose-dev.yml up --build```

> <p>Le front est accessible au port 4200<br/>
> Le back se trouve au port 8080<br/>
> Et adminer (BDD Gui) se trouve au port 86 (Serveur : "mariadb", User : "rootSQL", Mdp : "rootsql")</p>

### Production

Pour lancer le projet en développement il faut :

* Se placer dans le dossier client et faire ```npm install```
* Répéter l'action dans le dossier server
* Et pour finir se placer à la racine du projet et faire ```sudo docker-compose up --build```

> :warning: ** Pour passer de la prod au développement ou inverse il faut faire : ** ```sudo rm -rf BDD/data```
