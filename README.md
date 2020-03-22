# quiPrendQuoi

Bienvenue sur mon bien modeste site qui vous permettra de créer et d'inviter des amis à vos événement de personne confiné 😀

link : https://quiprendquoi2.herokuapp.com/

## Installation

npm i 
npm run dev

## Améliorations Amenées

- Installation de **tailwindcss** avec l'installation de **purgecss**

- Installation de **websocket** : je ne voulais pas faire un timer pour faire en sorte de savoir si un nouvel items a était ajouté, j'ai donc préféré faire avec des websocket ce qui évite un ddos de ma propres par, car nous le savons ce site est visité par des milliers de français tous les jours.
- **notification:** grâce au même websocket je peux tracker quand l'ajout d'un items se produit, j'ai pu alors facilement ajouter des notifications a ce moment.
- **17.a - 17.b - 17.c** Événement : Ajout et suppression d'item dans depuis la page party.
- possibilité de supprimer plusieurs items à la fois.
- mise en ligne du site avec toutes les fonctionnalités, attention le css généré par tailwind n'est supprimer que en production pour des gains de rapidité lors du développement.
-  **Background sync** : le Background sync est normalement fonctionnel mais je ne sais pas quel est le rendu attendu. Celui que j'ai, s'il ne marche pas j'aimerais bien un retour pour savoir où est mon erreur mail : cheik.kone@hetic.net .
- 29.a - Comme dit précédemment fait avec des **websocket**
- 29.b - **Rafraîchissement automatique**.
- 29.c - j'ai utilisé un framework css j'en ai donc pas eu besoin.

## Mon Article 
### tailwindcss

**tailwindcss** est un **framwork** de classe utilitaire en css. Depuis un ficher config il **génére** des classes qui pourront être réutiliser dans toute l'application. Son but c'est de normé le plus notre css pour qu'on est le moins de style qui sort du cadre que les **ui/ux** designer nous aura fourni, par exemple si sur des maquettes les tailles de text courant sont toutes 14 px et qu'on remarque c'est trop petit il sera très facile de changer la taille de tous les textes corresponde-ant au texte courant, il suffira de changer la variable dans la configuration. Si j'aime bien ce framework c'est parce qu'il me permet de gagner beaucoup de temps car je ne suis pas toujours entrain de changer de ficher pour trouver la classe qui correspond à tel ou tel div.
### Et le responsive dans tout ça ? 
Et bien il est toujours possible de faire des sites en mobile first responsive avec tailwind, il suffit juste de préfixé la classe par la dénomination de la taille de l'écran qui se trouve dans la config.

exemple :

    class="text-m md:text-lg"
cela vous permet de changer la font size au moment où la taille de l'écran correspond au medium, ah ah pratique non ?

### Mais ça n'est pas trop lourd de générer tout c'est classe
he bien oui......., mais nous avons postcss qui permet de regarder dans ton html quelles classes sont réellement utilisées pour supprimer celles qui ne s'y trouve pas. Mais postcss mérite un article à lui tout seul.
