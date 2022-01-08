import React from "react";
import DeckListItem from "./DeckListItem";

const DeckList = ({ decks, deleteButtonClickHandler }) => {
  const listOfDecks = decks.map(({ id, name, description, cards }) => {
    return (
      <div className="flex items-stretch" key={id}>
        <DeckListItem
          id={id}
          name={name}
          description={description}
          numberOfCards={cards.length}
          deleteButtonClickHandler={deleteButtonClickHandler}
        />
      </div>
    );
  });
  return (
    <div className="mt-4 grid items-stretch grid-cols-1 sm:grid-cols-2 sm:gap-2">
      {listOfDecks}
    </div>
  );
};

export default DeckList;
