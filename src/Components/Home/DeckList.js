import React from "react";
import Button from "../Common/Button";
import DeckListItem from "./DeckListItem";

const DeckList = ({ decks }) => {
  const listOfDecks = decks.map(({ id, name, description, cards }, index) => {
    return (
      <div key={index}>
        <DeckListItem
          deckId={id}
          deckName={name}
          description={description}
          numberOfCards={cards.length}
        />
      </div>
    );
  });
  return (
    <div className="container px-0">
      <Button
        variant={"secondary"}
        type={"button"}
        text={"Create Deck"}
        icon={"add"}
      />
      <div className="container px-0 py-3">{listOfDecks}</div>
    </div>
  );
};

export default DeckList;
