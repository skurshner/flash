import React from "react";
import { useRouteMatch } from "react-router-dom";

const EditCard = () => {
  const cardId = useRouteMatch().params.cardId;
  return (
    <div className="container">
      <p>Edit Card {cardId}</p>
    </div>
  );
};

export default EditCard;
