import React from "react";
import CardForm from "./CardForm";
import UtilityBar from "../../Common/UtilityBar";

const CreateCard = ({
  deck,
  newCard,
  handleFrontChange,
  handleBackChange,
  handleCardSave,
  handleDone,
}) => {
  return (
    <>
      <UtilityBar />
      <div className="mx-auto p-4 w-full max-w-screen-md">
        <h1 className="text-3xl font-semibold text-slate-700">
          {deck.name}: Add Card
        </h1>
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
    </>
  );
};

export default CreateCard;
