import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard, readDeck } from "../../utils/api";
import CardListItem from "./CardListItem";

const CardList = ({ deckId }) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const [cards, setCards] = useState([]);

  // get deck data by it's id
  useEffect(() => {
    const getCards = async () => {
      const { cards } = await readDeck(deckId);
      setCards(cards);
    };

    getCards();
  }, [deckId]);

  // button handlers
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

  const editButtonClickHandler = id => history.push(`${url}/cards/${id}/edit`);

  // displays list of cards in deck
  const listOfCards = cards.map((card, index) => {
    return (
      <div key={index}>
        <CardListItem
          id={card.id}
          front={card.front}
          back={card.back}
          editButtonClickHandler={editButtonClickHandler}
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
