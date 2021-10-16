import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { readCard, updateCard } from "../../../utils/api";
import Breadcrumbs from "../../Common/Breadcrumbs";
import CardForm from "./CardForm";

const EditCard = ({ deck }) => {
  const history = useHistory();
  const cardId = useRouteMatch().params.cardId;
  const [card, setCard] = useState({});

  // get card data from it's id and set state
  useEffect(() => {
    const getCard = async id => {
      const card = await readCard(id);
      setCard(card);
    };

    getCard(cardId);
  }, [cardId]);

  // form and button handlers
  const handleFrontUpdate = event =>
    setCard({ ...card, front: event.target.value });

  const handleBackUpdate = event =>
    setCard({ ...card, front: event.target.value });

  const handleSubmit = async event => {
    event.preventDefault();
    await updateCard(card);
    history.push(`/decks/${deck.id}`);
  };
  const handleCancel = () => history.push(`/decks/${deck.id}`);

  return (
    <div className="container">
      <Breadcrumbs
        tier={3}
        parentPage={deck.name}
        parentURL={`/decks/${deck.id}`}
        currentPage={`Edit Card ${cardId}`}
      />
      <h1>Edit Card</h1>
      <CardForm
        card={card}
        primaryButtonText={"Submit"}
        secondaryButtonText={"Cancel"}
        handleFrontChange={handleFrontUpdate}
        handleBackChange={handleBackUpdate}
        handleSubmit={handleSubmit}
        handleSecondaryButton={handleCancel}
      />
    </div>
  );
};

export default EditCard;
