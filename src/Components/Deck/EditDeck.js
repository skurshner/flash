import React from "react";
import { useHistory } from "react-router-dom";
import DeckForm from "./DeckForm";
import UtilityBar from "../Common/UtilityBar.js";

const EditDeck = ({
  deck,
  deckName,
  handleNameChange,
  handleDescriptionChange,
  handleSubmit,
}) => {
  const history = useHistory();

  const handleCancel = () => history.push(`/decks/${deck.id}`);

  return (
    <>
      <UtilityBar />
      <div className="mx-auto p-4 w-full max-w-screen-md">
        <h1 className="text-3xl font-semibold text-slate-700">Edit Deck</h1>
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

export default EditDeck;
