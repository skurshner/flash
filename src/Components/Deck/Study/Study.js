import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { readDeck } from "../../../utils/api";
import Breadcrumbs from "../../Common/Breadcrumbs";
import FlashCards from "./FlashCards";

const Study = ({ deckId, deckURL }) => {
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const [cardNumber, setCardNumber] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [flipped, setFlipped] = useState(false);
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

  const flipButtonClickHandler = () => {
    if (!flipped) {
      setFlipped(true);
      setCardText(deck.cards[cardNumber].back);
    } else {
      setFlipped(false);
      setCardText(deck.cards[cardNumber].front);
    }
  };

  const nextButtonClickHandler = () => {
    if (numberOfCards === cardNumber + 1) {
      dialogPrompt();
    } else {
      setCardNumber(currentCardNumber =>
        Math.min(numberOfCards, currentCardNumber + 1)
      );
      setCardText(deck.cards[cardNumber + 1].front);
      setFlipped(false);
    }
  };

  const dialogPrompt = () => {
    const restart = window.confirm(
      "Restart cards?\n\nClick 'cancel' to return to the home page"
    );
    if (restart) {
      setCardNumber(0);
      setFlipped(false);
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
      <FlashCards
        flipped={flipped}
        cardNumber={cardNumber}
        numberOfCards={numberOfCards}
        cardText={cardText}
        nextButtonClickHandler={nextButtonClickHandler}
        flipButtonClickHandler={flipButtonClickHandler}
      />
    </div>
  );
};

export default Study;
