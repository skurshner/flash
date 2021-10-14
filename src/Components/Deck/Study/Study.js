import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { readDeck } from "../../../utils/api";
import Breadcrumbs from "../../Common/Breadcrumbs";
import Button from "../../Common/Button";

const Study = ({ deckId, deckURL }) => {
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const [cardNumber, setCardNumber] = useState(1);
  const [numberOfCards, setNumberOfCards] = useState(0);
  //   const [flipped, setFlipped] = useState(false);
  const [cardText, setCardText] = useState("");

  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
      setNumberOfCards(currentNumber => currentNumber + newDeck.cards.length);
      setCardText(newDeck.cards[0].front);
    }

    getDeck();
  }, [deckId]);

  const nextButtonClickHandler = () => {
    if (numberOfCards === cardNumber) {
      dialogPrompt();
    } else {
      setCardNumber(currentCardNumber =>
        Math.min(numberOfCards, currentCardNumber + 1)
      );
      setCardText(deck.cards[cardNumber].front);
    }
  };

  const dialogPrompt = () => {
    const restart = window.confirm(`Restart cards?

Click 'cancel' to return to the home page`);
    if (restart) {
      setCardNumber(1);
      setCardText(deck.cards[0].front);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="container">
      <Breadcrumbs
        tier={3}
        parentPage={deck.name}
        parentURL={deckURL}
        currentPage={"Study"}
      />
      <h1>Study: {deck.name}</h1>
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
              <p>{cardText}</p>
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
    </div>
  );
};

export default Study;
