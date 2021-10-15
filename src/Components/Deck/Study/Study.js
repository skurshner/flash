import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { readDeck } from "../../../utils/api";
import Breadcrumbs from "../../Common/Breadcrumbs";
import FlashCards from "./FlashCards";

const Study = ({ deckId, deckURL }) => {
  const history = useHistory();
  const initialCardState = { number: 0, flipped: false, text: "" };

  const [deck, setDeck] = useState({});
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [studyCard, setStudyCard] = useState(initialCardState);

  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
      setNumberOfCards(currentNumber => currentNumber + newDeck.cards.length);
      if (newDeck.cards.length > 0)
        setStudyCard(currentStudyCard => {
          return { ...currentStudyCard, text: newDeck.cards[0].front };
        });
    }

    getDeck();
  }, [deckId]);

  const flipButtonClickHandler = () => {
    if (!studyCard.flipped) {
      setStudyCard({
        ...studyCard,
        flipped: true,
        text: deck.cards[studyCard.number].back,
      });
    } else {
      setStudyCard({
        ...studyCard,
        flipped: false,
        text: deck.cards[studyCard.number].front,
      });
    }
  };

  const nextButtonClickHandler = () => {
    if (numberOfCards === studyCard.number + 1) {
      dialogPrompt();
    } else {
      setStudyCard(currentStudyCard => {
        return {
          ...currentStudyCard,
          number: Math.min(numberOfCards, studyCard.number + 1),
          text: deck.cards[studyCard.number + 1].front,
          flipped: false,
        };
      });
    }
  };

  const dialogPrompt = () => {
    const restart = window.confirm(
      "Restart cards?\n\nClick 'cancel' to return to the home page"
    );
    if (restart) {
      setStudyCard({
        ...studyCard,
        number: 0,
        flipped: false,
        text: deck.cards[0].front,
      });
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
        deckId={deck.id}
        flipped={studyCard.flipped}
        cardNumber={studyCard.number}
        numberOfCards={numberOfCards}
        cardText={studyCard.text}
        nextButtonClickHandler={nextButtonClickHandler}
        flipButtonClickHandler={flipButtonClickHandler}
      />
    </div>
  );
};

export default Study;
