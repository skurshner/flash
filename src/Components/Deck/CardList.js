import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard, readDeck } from "../../utils/api";
import Button from "../Common/Button";
import CardListItem from "./CardListItem";

const CardList = ({ deckId, addCardsButtonClickHandler }) => {
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
      <div key={index} className="h-full">
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
    <div className="mx-auto max-w-screen-xl">
      <div className="px-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {listOfCards}
        <div className="flex flex-col items-stretch">
          <Button
            variant={"primary"}
            type={"button"}
            fullWidth={true}
            text={"Add Cards"}
            icon={"add"}
            clickHandler={() => addCardsButtonClickHandler()}
          />
        </div>
      </div>
    </div>
  );
};

export default CardList;
