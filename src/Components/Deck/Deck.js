import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck, deleteDeck, updateDeck, createCard } from "../../utils/api";
import CreateCard from "./Card/CreateCard";
import EditCard from "./Card/EditCard";
import CardList from "./CardList";
import DeckHeader from "./DeckHeader";
import EditDeck from "./EditDeck";
import Study from "./Study/Study";

const Deck = () => {
  const history = useHistory();
  const { deckId } = useRouteMatch().params;

  const [deck, setDeck] = useState({ cards: [] });
  const [updatedDeck, setUpdatedDeck] = useState({ name: "", description: "" });

  const initialCardState = { front: "", back: "" };
  const [newCard, setNewCard] = useState(initialCardState);

  // get deck data by it's id and set deck and updated deck state
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

  const addCardsButtonClickHandler = () => history.push(`${deckId}/cards/new`);

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
    setNewCard(initialCardState);
    readDeck(deckId);
  };

  const handleDone = () => {
    setNewCard(initialCardState);
    history.push(`/decks/${deckId}`);
  };

  return (
    <Switch>
      <Route exact path={"/decks/:deckId"}>
        <DeckHeader
          deck={deck}
          deleteButtonClickHandler={deleteButtonClickHandler}
        />
        <CardList
          deckId={deckId}
          addCardsButtonClickHandler={addCardsButtonClickHandler}
        />
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
        <CreateCard
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
