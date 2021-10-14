import React from "react";
import Button from "../../Common/Button";

const FlashCards = ({
  flipped,
  cardNumber,
  numberOfCards,
  cardText,
  nextButtonClickHandler,
  flipButtonClickHandler,
}) => {
  const setNextButtonVisibility = () => {
    return flipped ? (
      <Button
        variant={"primary"}
        type={"button"}
        text={"Next"}
        clickHandler={nextButtonClickHandler}
      />
    ) : (
      ""
    );
  };

  if (numberOfCards < 3)
    return (
      <div className="container">
        <div className="row mt-4">
          <h3>Not Enough Cards</h3>
        </div>
        <div className="row mt-4">
          <p>
            You need at least 3 cards to study. There are only {numberOfCards}{" "}
            cards in this deck.
          </p>
        </div>
        <div className="row mt-4">
          <Button
            variant={"primary"}
            type={"button"}
            text={"Add Cards"}
            icon={"add"}
          />
        </div>
      </div>
    );

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5>
              Card {cardNumber + 1} of {numberOfCards}
            </h5>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p>{cardText}</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-auto pr-0 mr-2">
            <Button
              variant={"secondary"}
              type={"button"}
              text={"Flip"}
              clickHandler={flipButtonClickHandler}
            />
          </div>
          <div className="col-auto p-0">{setNextButtonVisibility()}</div>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
