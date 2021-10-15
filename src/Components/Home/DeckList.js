import React from "react";
import DeckListItem from "./DeckListItem";

const DeckList = ({ decks, deleteButtonClickHandler }) => {
  const listOfDecks = decks.map(({ id, name, description, cards }, index) => {
    return (
      <div key={index}>
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
  return <div className="container px-0 py-3">{listOfDecks}</div>;
};

export default DeckList;
