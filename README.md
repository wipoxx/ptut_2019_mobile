# IziRec (ou quelque soit son nom)

## Sommaire

* [Installation](#installation)
* [Test](#test)
* [Outils](#outils)
* [Architecture du projet](#architecture-du-projet)
* [Webographie](#webographie)

## Installation

- Se placer à l'endroit où on veut que les dossiers de code se trouvent : `cd [...]`

- Récupérer le repo depuis GitHub : `git clone https://github.com/wipoxx/ptut_2019_mobile.git`

- Installer [node.js](https://nodejs.org/en/download/) pour avoir npm sur sa machine (un gestionnaire de paquets JavaScript).

- Installer Expo : `npm install expo-cli --global`.

- Installer les modules (le faire à chaque fois que vous récupérez une nouvelle version du projet depuis GitHub) : `npm install`

  Normalement à ce moment là vous êtes capables de lancer l'application.

## Test

### Avec Android et un câble

- Activer le [mode développeur](https://www.frandroid.com/comment-faire/tutoriaux/184906_comment-acceder-au-mode-developpeur-sur-android) sur son téléphone.
- Dans le menu dev, activer le débogage par USB.

- Brancher son téléphone à son ordinateur.

- Depuis un terminal, se rendre dans le dossier du projet React Native

- Lancer `npm run usb`

### Android/iOS par WiFi

- Installer Expo sur son téléphone

- Depuis un terminal, se rendre dans le dossier du projet React Native

- Lancer `npm run wifi`

- Depuis le téléphone, sur Expo, dans Projects ouvrir le projet.

  - Il est possible qu'il faille se faire un compte Expo pour cette méthode. Dans ce cas :
  - En créer un
  - Se connecter depuis le terminal : `expo login`
  - Se connecter sur Expo depuis l'application mobile

- Si jamais ça ne fonctionne pas, essayer de lancer `expo start --lan` à la place de npm run wifi, parce que je ne sais plus si c'est --lan ou --tunnel qui permet le mieux de se connecter par wifi. Si c'est --lan, il faudra changer dans package.json > scripts > wifi.

- IL FAUT QUE LE TELEPHONE ET L'ORDINATEUR SOIENT SUR LE MÊME RESEAU WIFI.

### Simulateur

Il est possible de tester sur simulateur. Pour iOS il faudrait le faire depuis macOS. Pour Android, je vous laisse chercher. Je souhaitais juste vous noter la possibilité.

### Accès au menu développeur dans l'application sur le tel

Secouer le téléphone, un menu apparaît.

Je conseille d'activer le débogage Js à distance, ça permet d'afficher le résultat des console.log() et des erreurs dans Chrome.

## Outils

### Expo

En court : "C'est un ensemble d'outils gratuit et open source développé autour de React Native qui permet de gagner du temps dans le développement d'applicaton iOS et Android."
Expo est un ensemble d'outils qui vont nous simplifier le développement avec React Native. Expo gère le code en natif (Java pour Android et Swift pour iOs). Sans lui, on pourrait développer des fonctionnalités en natif, en plus de notre application en React Native. C'est utile lorsque l'on a besoin d'utiliser des composants très bas niveau du terminal, comme accéder à des fichiers du téléphone.

Expo permet de tester l'application mobile facilement sur nos téléphones, sans avoir de macOs pour les iPhone.

Le déploiement est plus simple, certaines étapes de configuration sont prises en charge et on peut builder sur leurs serveurs cloud sans passer par Android Studio ou XCode.

Pour plus d'informations, lire [la doc](https://docs.expo.io/versions/v34.0.0/) et [cet article](https://hackernoon.com/understanding-expo-for-react-native-7bf23054bbcd).

### Redux

Un composant React Native contient des props et des states. Les props sont passés par le parent qui le crée, ils sont statiques et n'ont pas vocation à être modifiés. Les states sont des variables uniquement disponibles dans le composant, qui lance sa mise à jour lorsqu'ils sont modifiés (voir componentWillUpdate()). Redux permet d'avoir des variables partagées entre les différents composants, sauvegardées dans un store.

### ![15258021353048_reduxarchiexplained](C:\Users\Epulapp\Downloads\15258021353048_reduxarchiexplained.png)

L'utilisateur agit sur un composant (View), en appuyant sur un bouton par exemple. On décide de dire que ce geste lance une action, qui va mettre à jour dans le store le state spécifié avec les données passées dans l'action. Les autres composants qui sont connectés à ce state en particulier vont se mettre à jour pour correspondre aux nouvelles données.

Voir la [doc](https://redux.js.org/) et ce cours d'[Open Classrooms](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5046311-decouvrez-redux)

### React Navigation

Avec React Navigation, il est très facile de naviguer d'un écran à l'autre dans l'application. On définit un type de navigation : une pile d'écrans (Stack Navigator), où lorsqu'on se rend sur un nouvel écran il est ajouté à la pile d'écrans visités, et on dépile lorsque l'on revient en arrière ; des onglets en haut ou en bas de l'écran (Tab Navigator) ; un menu qui s'ouvre sur le côté avec les différents écrans où naviguer (Drawer Navigator).

Voir la [doc](https://reactnavigation.org/docs/en/getting-started.html)

### TypeScript

Un langage open-source édité par Microsoft qui permet d’avoir un sur-ensemble à javascript offrant des fonctionnalités complémentaires comme par exemple le typage statique et générique, les classes abstraites ou bien les énumérations.

### EsLint

Pour avoir une seule convention de codage sur le projet, que l'écriture de code soit plus consistante et qu'il y ai moins de bugs. J'ai choisi le standard d'airbnb, cela permet d'avoir des règles prédéfinies et utilisées par des milliers de développeurs. EsLint s'utilise avec Prettier sur votre IDE, qui vous signalera lorsque votre code ne correspond pas au standard, voire même le modifier directement lorsque vous sauvegardez. Par exemple, l'une des règle est que les variables booléennes doivent avoir un nom spécifique. Donc `enabled` est un mauvais nom, il faudrait l'appeler `isEnabled`.

Voir les règles et comment corriger ses erreurs [juste ici](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules).



## Architecture du projet



```
project
|-assets : les médias de l'app (images, sons, ...)
|-node_modules : les modules importés
|-src
	|-App.tsx : l'entrée de l'app, où on crée le store redux et le Navigator
	|-screens : contient les dossiers pour chaque écran
	|-components : contient les composants pouvant être utilisés dans différents 					   écrans
|-App.tsx : l'entrée de l'app, qui appelle src/App.tsx
|-app.json : la configuration de l'application lors du déploiement
|-package.json : la conf du projet, avec les scripts de lancement et les modules
|-tsconfig.json : la conf de TypeScript
|-tslint.json : la conf d'ESLint
    
```

## Webographie

[Tuto pour initialiser un projet React Native avec TypeScript et ESLint](https://www.dwastudio.fr/article/demarrer-react-native-avec-expo-typescript-eslint/)
