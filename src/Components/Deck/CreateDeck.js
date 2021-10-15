import React from "react";
import { useState } from "react";
import Breadcrumbs from "../Common/Breadcrumbs";
import DeckForm from "./DeckForm";
import { createDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";

const CreateDeck = () => {
  const history = useHistory();
  const [deck, setDeck] = useState({ name: "", description: "" });

  const handleNameChange = event =>
    setDeck({ ...deck, name: event.target.value });
  const handleDescriptionChange = event =>
    setDeck({ ...deck, description: event.target.value });
  const handleSubmit = async event => {
    event.preventDefault();
    const { id } = await createDeck(deck);
    history.push(`/decks/${id}`);
  };

  const handleCancel = () => history.push("/");

  return (
    <div className="container">
      <Breadcrumbs tier={2} currentPage={"Create Deck"} />
      <h1>Create Deck</h1>
      <DeckForm
        name={deck.name}
        description={deck.description}
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default CreateDeck;
