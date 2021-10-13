import React from "react";
import Button from "../../Common/Button";

const DeckHeader = ({ deck }) => {
  return (
    <div className="container my-4">
      <div className="row">
        <h2>{deck.name}</h2>
      </div>
      <div className="row">
        <p>{deck.description}</p>
      </div>
      <div className="row justify-content-between my-3">
        <div className="col-auto p-0">
          <div className="row">
            <div className="col-auto pr-0 mr-2">
              <Button
                variant={"secondary"}
                type={"button"}
                text={"Edit"}
                icon={"edit"}
              />
            </div>
            <div className="col-auto px-0 mr-2">
              <Button
                variant={"primary"}
                type={"button"}
                text={"Study"}
                icon={"study"}
              />
            </div>
            <div className="col-auto px-0">
              <Button
                variant={"primary"}
                type={"button"}
                text={"Add Cards"}
                icon={"add"}
              />
            </div>
          </div>
        </div>
        <div className="col-auto p-0">
          <Button variant={"danger"} type={"button"} icon={"trash"} />
        </div>
      </div>
    </div>
  );
};

export default DeckHeader;