import React from "react";
import Button from "../Common/Button";

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
        <div className="row">
          <div className="col-auto">
            <p className="text-body">
              This is an example of the description for a deck. There could be
              multiple sentences here.
            </p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-auto">
            <div className="row">
              <div className="col-auto pr-2">
                <Button
                  type={"button"}
                  name={"view"}
                  text={"View"}
                  icon={"view"}
                />
              </div>
              <div className="col-auto p-0">
                <Button
                  type={"button"}
                  name={"study"}
                  text={"Study"}
                  icon={"study"}
                />
              </div>
            </div>
          </div>
          <div className="col-auto">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckListItem;
