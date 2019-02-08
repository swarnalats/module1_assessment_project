/** once the document has loaded, call the intitializeApp function */
$(initializeApp)

/**
 * A global variable called "deck" that will hold your deck of cards.
 * Its initial value should be an empty array.
 * @var {array} deck
 */
var deck = [];

/**
 * Function to call when the page has fully loaded.
 * This function should do the following:
 * 1. Call your createDeck function, and pass in your global "deck" variable.
 * 2. Call your shuffleCards function while passing in your global "deck" variable as a parameter.
 * 3. Set the "deck" global variable to be equal to the return value from your shuffleCards function call.
 * 4. Deal 7 cards using your dealCards function.
 * @function initializeApp
 * @param none
 * @return undefined
 */
function initializeApp(){
    createDeck(deck);
    deck = shuffleCards(deck);
    dealCards(7, deck);
}

/**
 * Function that builds a full deck of cards
 * This function should do the following:
 * 1. For each suit in your array of card suits, you will call the buildSuit function. Make sure you pass forward the necessary parameters!
 * 2. Add each individual card in the array that is returned from your buildSuit function call into the cardDeck you received as a parameter.
 * @function createDeck
 * @param {array} cardDeck - Array to add cards to as they are built.
 * @return undefined
 */
function createDeck(cardDeck){
    var suitArray = ["heart","club","spade", "diamond"];
    var cardValuesArray = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"];

    suitArray.map(suit => cardDeck.push(...buildSuit(suit, cardValuesArray)));
}

/**
 * Function that builds all individual cards for one suit
 * This function will create an individual card for each card type given in the "cards" parameter.
 * This function should do the following:
 * 1. Create a variable to hold all the cards you make for this suit. It should be an array.
 * 2. For each individual card value in the "cardValues" array parameter, call the buildCard function. Make sure you pass forward the necessary parameters!
 * 3. Save the card object that is returned from the buildCard function into an array.
 * 4. Return the array of cards you have built.
 * @function buildSuit
 * @param {string} suit - The name of the suit of cards being built
 * @param {array} cardValues - The array of card types you will build for this card suit
 * @return {array} - The array of cards you have created for this suit
 */
function buildSuit(suit, cardValues){
    return cardValues.map(card => buildCard(suit,card))
}

/**
 * Function that builds a single card
 * This function should do the following:
 * 1. Create an individual card object with a property of "suit" set to the value of the suit parameter, and a property of "cardValue" set to the value of the cardValue parameter.
 * 2. Return the card object you created.
 * @function buildCard
 * @param {string} suit - The name of the suit of the card being built
 * @param {string} cardValue - The name of the card type for this card
 * @return {object} - The object containing information about this individual card
 */
function buildCard(suit, cardValue){
    return {
        suit,
        cardValue
    }
}

/**
 * Function that shuffles all cards in a cardDeck array parameter.
 * This function should do the following:
 * 1. Make a copy of the cardDeck array you received as a parameter.
 * 2. Shuffle (randomize) the cards inside of the array copy you just made. You may accomplish this in any way you choose, so long as the contents of the array are randomized.
 * 3. Return the shuffled copy of the cardDeck.
 * @function shuffleCards
 * @param {array} cardDeck - The array of cards that you will shuffle
 * @return {array} Array of cards after having been shuffled
 */
function shuffleCards(cardDeck){
    for(var i = cardDeck.length - 1; i >= 0; i--){
        var randomIndex = Math.floor(Math.random() * cardDeck.length);
        var temp = cardDeck[randomIndex];
        cardDeck[randomIndex] = cardDeck[i];
        cardDeck[i] = temp;
    }
    return cardDeck;
}

/**
 * Function that deals cards on the DOM.
 * This function will take in a number and an array of cards, and deal that number of cards from the array of cards to the DOM.
 * This function should do the following:
 * 1. Remove the number of cards specified in the "num" parameter from the beginning of the "cardDeck" array parameter.
 * 2. Make a DOM element for each one of these cards dynamically.
 * 3. Place each dynamically created card element inside the DOM element with a class of "card-container".
 *      a. These DOM elements should be dynamically created using jQuery, and the element you create should follow the following format:
 *      b. <div class="card spade five"></div>
 *      c. In the above example, every card will have the "card" class, but "spade" will be the suit of the card you are creating, and "five" will be the cardValue.
 * IMPORTANT: When dynamically creating your card element, you may NOT use the form of jQuery DOM creation that is simply a string of the element in it's entirety. You must use either method chaining or object notation.
 * @function dealCards
 * @param {number} num - How many cards to deal
 * @param {array} cardDeck - The array of cards that you will deal from
 * @return none
 */
function dealCards(num, cardDeck){
    var hand = cardDeck.splice(0, num);
    for(var i = 0; i < hand.length; i++){
        var card = $("<div>").addClass(`card ${hand[i].suit} ${hand[i].cardValue}`);
        $(".card-container").append(card);
    }
}
