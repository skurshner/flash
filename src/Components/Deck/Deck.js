import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumbs from "../Common/Breadcrumbs";
import DeckHeader from "./DeckView/DeckHeader";

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
  }, [deckId]);

  return (
    <div className="container">
      <Breadcrumbs tier={2} currentPage={deck.name} />
      <DeckHeader deck={deck} />
    </div>
  );
};

export default Deck;
