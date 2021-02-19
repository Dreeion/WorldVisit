## WorldVisit

Related repo: https://github.com/Dreeion/WorldVisit.git

---

The "WoldVisit" application is a student project aiming to use and develop our skills in a two-weeks-long project.

The goal is to develop an application allowing users to see and choose the countries they are visiting or are going to visit.

------

L'application «WoldVisit» est un projet étudiant visant à utiliser et développer nos compétences dans un projet de deux semaines.

L'objectif est de développer une application permettant aux utilisateurs de voir et de choisir les pays qu'ils visitent ou vont visiter.

---

Ce projet est un fork de l'application "CoinCoin Insolite" 
fait par : 
- @Amestyale - Mobile Lead Dev
- @camillenaulet3 - Web Dev
- @Dreeion - Mobile Dev
- @maeldebon - Project Lead
- @Theia01 - Web Lead Dev

--

**Maintainers:**

- @Dreeion - Mobile Dev
- @simonbourrasseau - Dev
All information related to the advancement can be found in the [progress.md](./progress.md) document.

---

**Setup the project**

In order to run the project, you will need to run a few commands.

First, create and setup the `android` and `www` folders by using the following commands:
```sh
ionic cordova platform add android
mkdir www
```

Then, prepare the build by typing this command:
```sh 
ionic cordova prepare android
```

Once this is done, simply run the following command to build your APK:
```sh 
ionic cordova build android
```

Finally, run this command to run the app:
```sh 
ionic cordova run android -l -s -c
```
