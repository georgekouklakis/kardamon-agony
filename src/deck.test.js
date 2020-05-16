const Deck = require('./deck');

let deck;

beforeEach(() => {
    deck = new Deck(52);
});

test('the deck size should be 52', () => {
    expect(deck.getCards().length).toBe(52);
});

test('when drawing a card the deck size is reduced by one', () => {
    const cards = deck.getCards();
    const lastCard = cards[cards.length - 1];
    expect(deck.drawCardFromTop()).toBe(lastCard);
    expect(cards.length).toBe(51);
});

test('dealing 7 cards to 4 players should remove 28 cards from the deck', () => {
    const hands = deck.dealToPlayers(4, 7);
    expect(hands.length).toBe(4);
    hands.forEach(hand => {
        expect(hand.length).toBe(7);
    });
    expect(deck.getCards().length).toBe(52 - 28);
});
