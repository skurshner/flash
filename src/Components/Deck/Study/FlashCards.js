import React from "react";
import Button from "../../Common/Button";

const FlashCards = ({ deck, numOfCards, cardState, flipButtonHandler }) => {
  const cardId = cardState.id;
  let cardText = "";
  cardState.front
    ? (cardText = deck.cards[cardId - 1].front)
    : (cardText = deck.cards[cardId - 1].back);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5>
              Card {cardId} of {numOfCards}
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
              clickHandler={() => flipButtonHandler()}
            />
          </div>
          <div className="col-auto p-0">
            <Button variant={"primary"} type={"button"} text={"Next"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
