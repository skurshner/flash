import React from "react";
import { useState } from "react";
import Breadcrumbs from "../Common/Breadcrumbs";
import DeckForm from "./DeckForm";
import { createDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";

const CreateDeck = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = event => setName(event.target.value);
  const handleDescriptionChange = event => setDescription(event.target.value);
  const handleSubmit = async event => {
    event.preventDefault();
    const newDeck = { name, description };
    const { id } = await createDeck(newDeck);
    history.push(`/decks/${id}`);
  };

  return (
    <div className="container">
      <Breadcrumbs tier={2} currentPage={"Create Deck"} />
      <h1>Create Deck</h1>
      <DeckForm
        name={name}
        description={description}
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateDeck;
