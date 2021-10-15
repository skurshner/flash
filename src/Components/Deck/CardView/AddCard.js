import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";

const AddCard = ({ deck }) => {
  return (
    <div className="container">
      <Breadcrumbs
        tier={3}
        parentPage={deck.name}
        parentURL={`/decks/${deck.id}`}
        currentPage={"Add Card"}
      />
      <p>Add Card</p>
    </div>
  );
};

export default AddCard;
