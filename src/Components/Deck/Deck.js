import React from "react";
import { useRouteMatch } from "react-router-dom";

const Deck = () => {
  const deckId = useRouteMatch().params.deckId;
  return <p>Deck {deckId}</p>;
};

export default Deck;
