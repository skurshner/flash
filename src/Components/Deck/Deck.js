import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck, deleteDeck, updateDeck, createCard } from "../../utils/api";
import Breadcrumbs from "../Common/Breadcrumbs";
import AddCard from "./Card/AddCard";
import EditCard from "./Card/EditCard";
import CardList from "./CardList";
import DeckHeader from "./DeckHeader";
import EditDeck from "./EditDeck";
import Study from "./Study/Study";

const Deck = () => {
  const history = useHistory();
  const deckId = useRouteMatch().params.deckId;

  const [deck, setDeck] = useState({ cards: [] });
  const [updatedDeck, setUpdatedDeck] = useState({ name: "", description: "" });

  const initialCardState = { front: "", back: "" };
  const [newCard, setNewCard] = useState(initialCardState);

  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
      setUpdatedDeck(newDeck);
    }

    getDeck();
  }, [deckId]);

  // Button handlers for modifying deck
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

  // Button handlers for adding cards
  const handleFrontChange = event =>
    setNewCard({ ...newCard, front: event.target.value });

  const handleBackChange = event =>
    setNewCard({ ...newCard, back: event.target.value });

  const handleCardSave = async event => {
    event.preventDefault();
    await createCard(deck.id, newCard);
    await setNewCard(initialCardState);
    readDeck(deckId);
  };

  const handleDone = () => {
    history.push(`/decks/${deckId}`);
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
          <CardList deckId={deckId} />
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
        <Study deckId={deckId} />
      </Route>
      <Route path={"/decks/:deckId/cards/new"}>
        <AddCard
          deck={deck}
          newCard={newCard}
          handleFrontChange={handleFrontChange}
          handleBackChange={handleBackChange}
          handleCardSave={handleCardSave}
          handleDone={handleDone}
        />
      </Route>
      <Route path={"/decks/:deckId/cards/:cardId/edit"}>
        <EditCard deck={deck} />
      </Route>
    </Switch>
  );
};

export default Deck;
