import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api";
import Breadcrumbs from "../Common/Breadcrumbs";
import CardList from "./DeckView/CardList";
import DeckHeader from "./DeckView/DeckHeader";
import Study from "./Study/Study";

const Deck = () => {
  const history = useHistory();
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

  const deleteButtonClickHandler = async id => {
    const deleteConfirm = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it"
    );
    if (deleteConfirm) {
      await deleteDeck(id);
      history.push("/");
    }
  };

  return (
    <Switch>
      <Route exact path={url}>
        <div className="container">
          <Breadcrumbs tier={2} currentPage={deck.name} />
          <DeckHeader
            deck={deck}
            deleteButtonClickHandler={deleteButtonClickHandler}
          />
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
