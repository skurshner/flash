import React from "react";
import { useState } from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import FlashCards from "./FlashCards";

const Study = ({ deck, deckURL }) => {
  const [cardState, setCardState] = useState({ id: 1, front: true });

  const flipButtonHandler = () => {
    setCardState(currentCardState => {
      return {
        ...currentCardState,
        front: !currentCardState.front,
      };
    });
  };

  return (
    <div className="container">
      <Breadcrumbs
        tier={3}
        parentPage={deck.name}
        parentURL={deckURL}
        currentPage={"Study"}
      />
      <h1>Study: {deck.name}</h1>
      <FlashCards
        deck={deck}
        numOfCards={deck.cards.length}
        cardState={cardState}
        flipButtonHandler={flipButtonHandler}
      />
    </div>
  );
};

export default Study;
