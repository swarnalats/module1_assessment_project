//Global variable which stores the deck of cards
var deck = [];


$(document).ready(function() {
    initializeApp();
});    

//This function is called when the document is ready 
function initializeApp()
{
    createDeck(deck);
    deck=shuffleCards(deck);
    console.log("This is the new deck",deck);
    dealCards(7,deck);
}

//Creates the deck of cards 
function createDeck(cardDeck) {
    var cardSuit = ['spade','club','heart','diamond'];
    
    for(var x = 0; x < cardSuit.length ; x++) {
            cardDeck = cardDeck.concat(buildSuit(cardSuit[x]));     
    }
    deck = cardDeck;
}

//This function creates and returns an array for a particular suit that is sent as a parameter 
function buildSuit(cards)
{
    var thisSuit = [];
    var cardValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

    for(var y=0; y < cardValues.length; y++){
        thisSuit.push(buildCard(cards,cardValues[y]));   
    }
    return thisSuit;
}

//This function is called to create and return individual cards using the suit and value parameter
function buildCard(Suit,Value){
    var card = {
                suit:Suit,
                value:Value
                };
    return card;            
}

//Function to shuffle the deck of cards and return the shuffled deck
function shuffleCards(cardDeck)
{
    var shuffleDeck = [];
    while(cardDeck.length )
    {
        var posItemRemove = Math.floor(Math.random() * (cardDeck.length - 1));
        shuffleDeck.push(cardDeck[posItemRemove]);
        cardDeck.splice(posItemRemove,1);
    }
    return shuffleDeck;
}

//Function to deal 7 cards on the DOM from the shuffled deck of cards
function dealCards(num, cardDeck)
{
    var sevenCards = [];

    for(var x=0; x < num ; x++)
        sevenCards.push(cardDeck[x]);        
       
    console.log("This the newpack of seven cards:",sevenCards);
    
    var value = "";     
    var suitValue;
    for(var x=0; x < sevenCards.length ; x++)
    {
            if(sevenCards[x].value == '2')
                value = "two"; 
            if(sevenCards[x].value == '3')
                value = "three";     
            if(sevenCards[x].value == '4')
                value = "four";     
            if(sevenCards[x].value == '5')
                value = "five"; 
            if(sevenCards[x].value == '6')
                value = "six"; 
            if(sevenCards[x].value == '7')
                value = "seven"; 
            if(sevenCards[x].value == '8')
                value = "eight";    
            if(sevenCards[x].value == '9')
                value = "nine";    
            if(sevenCards[x].value == '10')
                value = "ten"; 
            if(sevenCards[x].value == 'J')
                value = "jack";    
            if(sevenCards[x].value == 'Q')
                value = "queen";
            if(sevenCards[x].value == 'K')
                value = "king";  
            if(sevenCards[x].value == 'A')
                value = "ace";           
                             
            suitValue = "card" + " " + sevenCards[x].suit + " " + value; 
            console.log(suitValue);
            
            $("<div>", {
                'class': suitValue,
            }).appendTo($(".card-container"));                   
    }
}
        


