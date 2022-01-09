import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import UtilityBar from "../Common/UtilityBar.js";
import DeckForm from "./DeckForm";

const CreateDeck = () => {
  const history = useHistory();
  const [deck, setDeck] = useState({ name: "", description: "" });

  // form and button handlers
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
    <>
      <UtilityBar />
      <div className="mx-auto p-4 w-full max-w-screen-md">
        <h1 className="text-3xl font-semibold text-slate-700">
          Make a New Deck
        </h1>
        <DeckForm
          name={deck.name}
          description={deck.description}
          handleNameChange={handleNameChange}
          handleDescriptionChange={handleDescriptionChange}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      </div>
    </>
  );
};

export default CreateDeck;
