import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../Common/Button";

const FlashCards = ({
  deckId,
  flipped,
  cardNumber,
  numberOfCards,
  cardText,
  nextButtonClickHandler,
  flipButtonClickHandler,
}) => {
  const history = useHistory();

  // Next button is only visible when viewing back of card
  const setNextButtonVisibility = () =>
    flipped ? (
      <Button
        variant={"primary"}
        type={"button"}
        text={"Next"}
        clickHandler={nextButtonClickHandler}
      />
    ) : (
      ""
    );

  // display instead of cards if there are fewer than 3 in deck
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
            icon={"plus-lg"}
            clickHandler={() => history.push(`/decks/${deckId}/cards/new`)}
          />
        </div>
      </div>
    );

  return (
    <div className="card flashcard mt-4">
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
