import React from "react";

const CardList = ({ deck }) => {
  const cardsFromDeck = deck.cards;

  const listOfCards = cardsFromDeck.map((card, index) => {
    return (
      <div key={index}>
        <p>{card.front}</p>
        <p>{card.back}</p>
      </div>
    );
  });
  return (
    <div className="container py-2 px-0">
      <h4>Cards</h4>
      <div className="container px-0 py-3">{listOfCards}</div>
    </div>
  );
};

export default CardList;
