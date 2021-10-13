import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumbs from "../Common/Breadcrumbs";

const Deck = () => {
  const deckId = useRouteMatch().params.deckId;

  const [deck, setDeck] = useState({});

  useEffect(() => {
    setDeck({});
    async function getDeck() {
      const deck = await readDeck(deckId);
      setDeck(deck);
    }

    getDeck();
  }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <p>deck {deckId}</p>
      <p>{deck.name}</p>
    </div>
  );
};

export default Deck;
