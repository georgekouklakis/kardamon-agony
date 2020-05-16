module.exports = class Deck {
    constructor (deckSize) {
        this.deckSize = deckSize;
        this.setNewDeck();
    }

    setNewDeck () {
        const deck = [];
        
        for (let i = 1; i <= this.deckSize; i++) {
            deck.push(i);
        }
    
        const shuffledDeck = [];
    
        while (deck.length > 0 ) {
            const pickedCard = Math.floor(Math.random() * deck.length);
            shuffledDeck.push(deck[pickedCard]);
            deck.splice(pickedCard, 1);
        }
    
        this.deck = shuffledDeck;
    }

    setCards (cards) {
        this.deck = cards;
    }

    getCards () {
        return this.deck;
    }
    
    drawCardFromTop () {
        const cardOnTop = this.deck[this.deck.length - 1];
        this.deck.pop();
        return cardOnTop;
    }
    
    dealToPlayers (playerCount, handCount) {
        const hands = [];
    
        for (let p = 0; p < playerCount; p++) {
            const hand = [];
    
            for (let h = 0; h < handCount; h++) {
                hand.push(this.drawCardFromTop(this.deck));
            }
    
            hands.push(hand);
        }
    
        return hands;
    }    
};
