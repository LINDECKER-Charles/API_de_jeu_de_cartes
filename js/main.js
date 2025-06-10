/** On définit les endpoint
 * Respectivement:
 * - celui d'un nouveau deck
 * - celui pour mélanger un deck
 * - Et celui pour tirer une carte
 */  
const API_ENDPOINT_NEW_DECK = "https://deckofcardsapi.com/api/deck/new/";
const getApiEndpointShuffleDeck = () => `https://deckofcardsapi.com/api/deck/${idDeck}/shuffle/`
const getApiEndpointDrawCard = () => `https://deckofcardsapi.com/api/deck/${idDeck}/draw/?count=1`;
const getApiEndpointReturnCard = (code) => `https://deckofcardsapi.com/api/deck/${idDeck}/return/?cards=${code}`;
let idDeck = null; // On initialise idDeck
let isDrawing = false; //Vérifie si on est entrain de tirer une carte

/** 
 * On crée une function d'appel d'API
 * @param {string} uri l'uri appelé 
 * @returns {json} retourne les donnés au format json
 * */ 
async function callAPI(uri) {
    try{
        const reponse = await fetch(uri);
        if(!reponse.ok){
            throw new Error(`Erreur ${response.status} : ${response.statusText}`);
        }
        const data = await reponse.json();
        return data;
    }catch(error){
        alert("Erreur lors de l'appel API :" + error.message);
        return null;
    }
}

/**
 * Appel l'endpoint pour crée un nouveau deck
 * @returns {json} retourne les donnés au format json 
 */
async function getNewDeck() {
    return await callAPI(API_ENDPOINT_NEW_DECK);
}
/**
 * Appel l'endpoint pour mélanger notre deck
 * @returns {json} retourne les donnés au format json
 */
async function shuffleDeck() {
    return await callAPI(getApiEndpointShuffleDeck());
}
/**
 * Appel l'endpoint pour tirer une cart
 * @returns {json} retourne les donnés au format json
 */
async function drawCard() {
    return await callAPI(getApiEndpointDrawCard());
}
/**
 * Appel l'endpoint pour tirer une cart
 * @returns {json} retourne les donnés au format json
 */
async function returnToDeck(code) {
    return await callAPI(getApiEndpointReturnCard(code))
}

/**
 * Retire tous les élements .card du DOM 
 */
const cleanDomCardsFromPreviousDeck = () => document.querySelectorAll(".card").forEach(child => child.remove());
/**
 * Retire toutes les cartes de la page, crée un nouveau deck puis attribut l'id du nouveau deck à `ìdDeck`
 */
async function actionReset() {
    cleanDomCardsFromPreviousDeck();

    const newDeckReponse = await getNewDeck();
    idDeck = newDeckReponse.deck_id;

    await shuffleDeck();
} 


const cardsContainer = document.getElementById("cards-container"); //L'élément qui contient toutes les cartes
/**
 * On crée une balise image, on lui rajoute la class .card et la src.
 * Puis on l'ajoute au contenaire
 * @param {json} card 
 */
function addCardToDomByImgUri(card) {
    const imgCardHtmlElement = document.createElement("img");
    imgCardHtmlElement.classList.add("card");
    imgCardHtmlElement.src = card.image;
    imgCardHtmlElement.addEventListener("click", () => {
        returnToDeck(card.code);
        imgCardHtmlElement.remove();
    })

    cardsContainer.append(imgCardHtmlElement);
}

/**
 * On tire une carte puis appel la fonction d'ajout de carte dans le HTML
 */
async function actionDraw() {
    if (isDrawing) return; // empêche un clic pendant le tirage
    isDrawing = true;

    const drawCardReponse = await drawCard();
    if (drawCardReponse.remaining === 0) {
        alert("Le deck est vide !");
        isDrawing = false;
        return;
    }
    addCardToDomByImgUri(drawCardReponse.cards[0]);
    isDrawing = false;
}

actionReset(); //appel du reset pour avoir un jeu de base


/**
 * Gestion des buttons
 */
    //On récupère les buttons
const actionRestButton =  document.getElementById("action-reset");
const actionDrawButton = document.getElementById("action-draw");
    //On leur associs leurs actions
actionRestButton.addEventListener("click", actionReset);
actionDrawButton.addEventListener("click", actionDraw);
