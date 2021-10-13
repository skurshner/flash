import React from "react";
import Button from "../Common/Button";

const DeckListItem = ({ deckId, deckName, description, numberOfCards }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="row justify-content-between">
          <div className="col-auto me-auto">
            <h2 className="card-title">{deckName}</h2>
          </div>
          <div className="col-auto d-flex align-items-end">
            <p className="text-end">{numberOfCards} cards</p>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <p className="text-body">{description}</p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-auto">
            <div className="row">
              <div className="col-auto pr-2">
                <Button
                  variant={"secondary"}
                  type={"button"}
                  text={"View"}
                  icon={"view"}
                />
              </div>
              <div className="col-auto p-0">
                <Button
                  variant={"primary"}
                  type={"button"}
                  text={"Study"}
                  icon={"study"}
                />
              </div>
            </div>
          </div>
          <div className="col-auto">
            <Button variant={"danger"} type={"button"} icon={"trash"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckListItem;
