# 🃏 Piocher des cartes — Jeu interactif en ligne 🎲

Une application web interactive permettant de 🎯 tirer, 🎴 afficher et 🗂️ gérer des 🃏 cartes depuis l'API publique [deckofcardsapi.com](https://deckofcardsapi.com/). Ce projet a été développé en ⚙️ JavaScript natif avec une mise en page soignée via TailwindCSS. Il illustre les fondamentaux de l'appel API, de la manipulation DOM et d'une UX front-end fluide et agréable. 🌐

---

## ✨ Fonctionnalités 🎯

* 🆕 Création automatique d'un nouveau 🃏 deck au chargement de la page
* 🔁 Bouton **RESET** pour générer un nouveau jeu et le remélanger
* 🎯 Bouton **DRAW** pour tirer une carte et l'afficher
* 🚫 Blocage de la pioche si :

  * ❌ le deck est vide
  * ⏳ une autre pioche est encore en cours
* 🖼️ Affichage dynamique avec style responsive et espacement fluide
* 🖱️ Suppression d'une carte du DOM via clic sur celle-ci
* ⚠️ Alerte en cas d'erreur API ou de problème technique détecté

---

## 📁 Arborescence du projet 🗂️

```
.
├── index.html           # 🌐 Page principale (interface utilisateur)
├── js/
│   └── main.js          # 🔧 Logique principale : API, DOM, UI
├── css/
│   └── style.css        # 🎨 (optionnel) Styles personnalisés
├── exemple/
│   ├── index.html       # 👨‍🏫 Démo simplifiée en console
│   └── script.js        # 🧪 Script lié à l'exemple
```

---

## ⚙️ Dépendances et outils 🛠️

* 🌐 [TailwindCSS CDN](https://cdn.tailwindcss.com) : framework CSS utilitaire rapide
* 📡 [deckofcardsapi.com](https://deckofcardsapi.com) : API REST pour jeux de cartes
* 🧭 Navigateur moderne supportant `fetch` (Chrome, Firefox, Edge...)

---

## 🔧 Démarrage rapide 🚀📥💻

1. 📂 Cloner ou télécharger le projet
2. 🌐 Ouvrir `index.html` dans un navigateur
3. 🎮 Utiliser les boutons RESET et DRAW pour interagir

✅ Aucun serveur local ou installation requise

---

## 📑 Exemple d'utilisation de l'API 📡📘🔍

* 🆕 **Créer un deck** :
  `https://deckofcardsapi.com/api/deck/new/`

* 🔀 **Mélanger un deck existant** :
  `https://deckofcardsapi.com/api/deck/{deck_id}/shuffle/`

* 🎴 **Tirer des cartes** :
  `https://deckofcardsapi.com/api/deck/{deck_id}/draw/?count=1`

📬 L'API retourne les images 🖼️, valeurs 🔢, couleurs 🎨 des cartes, l'identifiant du deck 🆔 et le nombre de cartes restantes ♠️♥️♣️♦️.

---

## 💡 Idées d'amélioration 🚀

* 🔢 Ajouter un compteur de cartes restantes
* 🌀 Animer le tirage ou la suppression d'une carte
* 🤝 Intégrer un mode multijoueur (ex. 2 mains)
* 💾 Sauvegarder le deck avec localStorage
* 🎮 Créer un système de score (blackjack, memory...)

---

## 💼 Auteur 👨‍💻

Développé par **Charles Lindecker** — développeur passionné par le web interactif et les interfaces élégantes. 💬

---

## 📜 Licence MIT 📄

Projet libre sous licence MIT. Vous pouvez l'utiliser, le modifier et le partager sans restriction. ✅
