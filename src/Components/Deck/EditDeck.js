import React from "react";
import { useHistory } from "react-router-dom";
import Breadcrumbs from "../Common/Breadcrumbs";
import DeckForm from "./DeckForm";

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
    <div className="container">
      <Breadcrumbs
        tier={3}
        parentPage={deckName}
        parentURL={`/decks/${deck.id}`}
        currentPage={"Edit Deck"}
      />
      <h1>Edit Deck</h1>
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

export default EditDeck;
