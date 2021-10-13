import React from "react";
import { useRouteMatch } from "react-router-dom";
import Breadcrumbs from "../Common/Breadcrumbs";

const Deck = () => {
  const deckId = useRouteMatch().params.deckId;
  return (
    <div className="container">
      <Breadcrumbs />
      <p>deck {deckId}</p>
    </div>
  );
};

export default Deck;
