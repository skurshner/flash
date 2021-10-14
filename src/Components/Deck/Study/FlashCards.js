import React from "react";
import Button from "../../Common/Button";

const FlashCards = ({ numberOfCards, cardNumber, nextButtonClickHandler }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5>
              Card {cardNumber} of {numberOfCards}
            </h5>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p>card</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-auto pr-0 mr-2">
            <Button variant={"secondary"} type={"button"} text={"Flip"} />
          </div>
          <div className="col-auto p-0">
            <Button
              variant={"primary"}
              type={"button"}
              text={"Next"}
              clickHandler={nextButtonClickHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
