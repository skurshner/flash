import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck, deleteDeck, updateDeck } from "../../utils/api";
import Breadcrumbs from "../Common/Breadcrumbs";
import CardList from "./DeckView/CardList";
import DeckHeader from "./DeckView/DeckHeader";
import EditDeck from "./EditDeck";
import Study from "./Study/Study";

const Deck = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const deckId = useRouteMatch().params.deckId;

  const [deck, setDeck] = useState({ cards: [] });
  const [updatedDeck, setUpdatedDeck] = useState({});

  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
      setUpdatedDeck(newDeck);
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

  const handleNameChange = event => {
    setUpdatedDeck({ ...updatedDeck, name: event.target.value });
  };

  const handleDescriptionChange = event => {
    setUpdatedDeck({ ...updatedDeck, description: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await updateDeck(updatedDeck);
    history.push(`/decks/${deckId}`);
    setDeck(updatedDeck);
  };

  return (
    <Switch>
      <Route exact path={"/decks/:deckId"}>
        <div className="container">
          <Breadcrumbs tier={2} currentPage={deck.name} />
          <DeckHeader
            deck={deck}
            deleteButtonClickHandler={deleteButtonClickHandler}
          />
          <CardList deck={deck} />
        </div>
      </Route>
      <Route path={"/decks/:deckId/edit"}>
        <EditDeck
          deck={updatedDeck}
          deckName={deck.name}
          handleNameChange={handleNameChange}
          handleDescriptionChange={handleDescriptionChange}
          handleSubmit={handleSubmit}
        />
      </Route>
      <Route path={"/decks/:deckId/study"}>
        <Study deckId={deckId} deckURL={url} />
      </Route>
    </Switch>
  );
};

export default Deck;
