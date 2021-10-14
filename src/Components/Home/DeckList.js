import React from "react";
import DeckListItem from "./DeckListItem";

const DeckList = ({ decks }) => {
  const listOfDecks = decks.map(({ id, name, description, cards }, index) => {
    return (
      <div key={index}>
        <DeckListItem
          id={id}
          name={name}
          description={description}
          numberOfCards={cards.length}
        />
      </div>
    );
  });
  return <div className="container px-0 py-3">{listOfDecks}</div>;
};

export default DeckList;
