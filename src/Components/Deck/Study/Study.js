import React from "react";
import Breadcrumbs from "../../Common/Breadcrumbs";

const Study = ({ deck, deckURL }) => {
  return (
    <div className="container">
      <Breadcrumbs
        tier={3}
        parentPage={deck.name}
        parentURL={deckURL}
        currentPage={"Study"}
      />
      <p>Study</p>
    </div>
  );
};

export default Study;
