import React from "react";

const EditDeck = () => {
  return (
    <div className="container">
      <Breadcrumbs tier={2} currentPage={"Create Deck"} />
      <h1>Edit Deck</h1>
      {/* <DeckForm
      name={name}
      description={description}
      handleNameChange={handleNameChange}
      handleDescriptionChange={handleDescriptionChange}
      handleSubmit={handleSubmit}
    /> */}
    </div>
  );
};

export default EditDeck;
