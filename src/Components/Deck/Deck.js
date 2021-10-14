import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumbs from "../Common/Breadcrumbs";
import CardList from "./DeckView/CardList";
import DeckHeader from "./DeckView/DeckHeader";
import Study from "./Study/Study";

const Deck = () => {
  const { url } = useRouteMatch();
  const deckId = useRouteMatch().params.deckId;

  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
    }

    getDeck();
  }, [deckId]);

  return (
    <Switch>
      <Route exact path={url}>
        <div className="container">
          <Breadcrumbs tier={2} currentPage={deck.name} />
          <DeckHeader deck={deck} />
          <CardList deck={deck} />
        </div>
      </Route>
      <Route path={`/decks/:deckId/study`}>
        <Study deckId={deckId} deckURL={url} />
      </Route>
    </Switch>
  );
};

export default Deck;
