import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumbs from "../Common/Breadcrumbs";
import CardList from "./DeckView/CardList";
import DeckHeader from "./DeckView/DeckHeader";

const Deck = () => {
  const deckId = useRouteMatch().params.deckId;

  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    setDeck({ cards: [] });
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
    }

    getDeck();
  }, [deckId]);

  return (
    <div className="container">
      <Breadcrumbs tier={2} currentPage={deck.name} />
      <DeckHeader deck={deck} />
      <CardList deck={deck} />
    </div>
  );
};

export default Deck;
