import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { readDeck } from "../../../utils/api";
import Breadcrumbs from "../../Common/Breadcrumbs";
import FlashCards from "./FlashCards";

const Study = ({ deckId, deckURL }) => {
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const [cardNumber, setCardNumber] = useState(1);
  const [numberOfCards, setNumberOfCards] = useState(0);

  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
      setNumberOfCards(currentNumber => currentNumber + newDeck.cards.length);
    }

    getDeck();
  }, [deckId]);

  const nextButtonClickHandler = () => {
    setCardNumber(currentCardNumber =>
      Math.min(numberOfCards, currentCardNumber + 1)
    );
    if (numberOfCards === cardNumber) {
      dialogPrompt();
    }
  };

  const dialogPrompt = () => {
    const restart = window.confirm(`Restart cards?

Click 'cancel' to return to the home page`);
    if (restart) {
      setCardNumber(1);
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
      <FlashCards
        numberOfCards={numberOfCards}
        cardNumber={cardNumber}
        nextButtonClickHandler={nextButtonClickHandler}
      />
    </div>
  );
};

export default Study;
