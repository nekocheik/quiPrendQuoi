# quiPrendQuoi

Bienvenue sur mon bien modeste site qui vous permettra de créer et invité des amies a vos événement de personne confiné 😀

## installation

npm i 
npm  

## Amélioration amené

- installation de **tailwindcss** avec l'installation de **purgecss**

- installation de **websocket** : je ne voulais pas faire un timer pour faire en sorte de savoir si un nouvelle items a était ajouté, j'ai donc préféré faire avec des websocket ce qui évite un ddos de ma propres par, car nous le savon ce site est visité par des millier de français tous le jours.
- **notification:** grace au même websocket je peux tracker quand l'ajoute un items se produit, j'ai put alors facilement ajouté des notifications a ce moment.
- **17.a - 17.b - 17.c** Événement : Ajout et suppression d'item dans depuis la page party.
- possibilité de supprimer plusieurs items a la fois.
- mise en ligne du site avec toutes les fonctionnalités, attention le css généré par tailwind n'est supprimer que en production pour des gains de rapidité lors du développement.
-  **Background sync** : le Background sync est normalement fonctionnel mais je ne sais pas quel est le rendu attendu normalement et celui que j'ai, s'il ne marche pas j'aimerais bien un retour pour savoir ou est mon erreur mail : cheik.kone@hetic.net .
- 29.a - Comme dit précédemment fait avec des **websocket**
- 29.b - **Rafraîchissement automatique**.
- 29.c - j'ai utilisé un framework css j'en ai donc pas eu besoin.

## Mon Article 
### tailwindcss

tailwindcss est un framwork de classe utilitaire en css, de puis un ficher config il génére des classe qui pourront être réutiliser dans toute l'application, son but c'est de normé le plus notre css pour qu'on est le moins de style qui sort du cadre que les ui/ux designer nous aura fourni, par exemple si sur des maquette les taille de text courant sont toutes 14 px et qu'on remarque c'est trop petit il sera très facile de changer la taille de tous les text correspondent au text courant, il suffira de changer la variable dans la configuration. si j'aime bien se framework c'est parce qu'il me permet de gagner beaucoup de temps car je ne suis pas toujours entrain de changer de ficher pour trouver la class qui correspond a tel ou tel div.
### Et le responsive dans tout ça ? 
et bien il est toujours possible de faire des site en mobile first responsive avec tailwind, il suffi juste de préfixé la classe par la dénomination de la taille de l'écran qui se trouve dans la config.

exemple :

    class="text-m md:text-lg"
cela vous permet de changer la font size au moment ou la taille de l'écran correspond a medium, ah ah pratique non ?

### Mais ça n'est pas trop lourd de générer tout c'est classe
he bien oui......., mais nous avons postcss qui permet de regarder dans ton html qu'elle classe sont réellement utilisé pour supprimer celle qui s'y trouve pas. mais postcss mérite un article a lui tout seul.
