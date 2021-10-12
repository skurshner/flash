import React from "react";

const DeckListItem = () => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="row justify-content-between">
          <div className="col-auto me-auto">
            <h2 className="card-title">Deck Name Here</h2>
          </div>
          <div className="col-auto">
            <p className="text-end"># cards</p>
          </div>
        </div>
        <p>Deck List Item</p>
      </div>
    </div>
  );
};

export default DeckListItem;
