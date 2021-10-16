import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";
import CardForm from "./CardForm";

const CreateCard = ({
  deck,
  newCard,
  handleFrontChange,
  handleBackChange,
  handleCardSave,
  handleDone,
}) => {
  return (
    <div className="container">
      <Breadcrumbs
        tier={3}
        parentPage={deck.name}
        parentURL={`/decks/${deck.id}`}
        currentPage={"Add Card"}
      />
      <h1>{deck.name}: Add Card</h1>
      <CardForm
        card={newCard}
        primaryButtonText={"Save"}
        secondaryButtonText={"Done"}
        handleFrontChange={handleFrontChange}
        handleBackChange={handleBackChange}
        handleSubmit={handleCardSave}
        handleSecondaryButton={handleDone}
      />
    </div>
  );
};

export default CreateCard;
