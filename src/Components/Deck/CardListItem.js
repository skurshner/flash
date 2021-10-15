import React from "react";
import Button from "../Common/Button";

const CardListItem = ({
  id,
  front,
  back,
  deleteButtonClickHandler,
  editButtonClickHandler,
}) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="row justify-content-between">
          <div className="col-6">
            <p>{front}</p>
          </div>
          <div className="col-6">
            <p>{back}</p>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-auto p-0 mr-2">
            <Button
              variant={"secondary"}
              type={"button"}
              text={"Edit"}
              icon={"pencil-fill"}
              clickHandler={() => editButtonClickHandler(id)}
            />
          </div>
          <div className="col-auto ml-0 pl-0">
            <Button
              variant={"danger"}
              type={"button"}
              icon={"trash-fill"}
              clickHandler={() => deleteButtonClickHandler(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListItem;