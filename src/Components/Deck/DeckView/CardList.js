import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { deleteCard, readDeck } from "../../../utils/api";
import CardListItem from "./CardListItem";

const CardList = ({ deckId }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const { cards } = await readDeck(deckId);
      setCards(cards);
    };

    getCards();
  }, [deckId]);

  const deleteButtonClickHandler = async id => {
    const confirm = window.confirm(
      "Delete this card?\n\nYou will not be able to recover it"
    );
    if (confirm) {
      await deleteCard(id);
      const { cards } = await readDeck(deckId);
      setCards(cards);
    }
  };

  const listOfCards = cards.map((card, index) => {
    return (
      <div key={index}>
        <CardListItem
          id={card.id}
          front={card.front}
          back={card.back}
          deleteButtonClickHandler={deleteButtonClickHandler}
        />
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
