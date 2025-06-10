const API_ENDPOINT_NEW_DECK = "https://deckofcardsapi.com/api/deck/new/";
let idDeck = null;

async function callAPI(uri) {
    const reponse = await fetch(uri);
    const data = await reponse.json();
    return data;
}

async function getNewDeck() {
    return await callAPI(API_ENDPOINT_NEW_DECK);
}

const getApiEndpointShuffleDeck = () => `https://deckofcardsapi.com/api/deck/${idDeck}/shuffle/`

async function shuffleDeck() {
    return await callAPI(getApiEndpointShuffleDeck());
}

const getApiEndpointDrawCard = () => `https://deckofcardsapi.com/api/deck/${idDeck}/draw/?count=1`;
async function drawCard() {
    return await callAPI(getApiEndpointDrawCard());
}

const cleanDomCardsFromPreviousDeck = () => document.querySelectorAll(".card").forEach(child => child.remove());
async function actionReset() {
    cleanDomCardsFromPreviousDeck();

    const newDeckReponse = await getNewDeck();
    idDeck = newDeckReponse.deck_id;

    await shuffleDeck();
} 

const cardsContainer = document.getElementById("cards-container");
function addCardToDomByImgUri(imgUri) {
    const imgCardHtmlElement = document.createElement("img");
    imgCardHtmlElement.classList.add("card");
    imgCardHtmlElement.src = imgUri;

    cardsContainer.append(imgCardHtmlElement);
}
async function actionDraw() {
    const drawCardReponse = await drawCard();
    const imgCardUri = drawCardReponse.cards[0].image;

    addCardToDomByImgUri(imgCardUri);
}

actionReset();


const actionRestButton =  document.getElementById("action-reset");
actionRestButton.addEventListener("click", actionReset);

const actionDrawButton = document.getElementById("action-draw")
actionDrawButton.addEventListener("click", actionDraw);
