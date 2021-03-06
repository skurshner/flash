import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { readDeck } from "../../../utils/api";
import UtilityBar from "../../Common/UtilityBar";
import FlashCards from "./FlashCards";

const Study = ({ deckId }) => {
  const history = useHistory();
  const initialCardState = { number: 0, flipped: false, text: "" };

  const [deck, setDeck] = useState({ cards: [] });
  const [studyCard, setStudyCard] = useState(initialCardState);
  const [cardsLoaded, setCardsLoaded] = useState(false);

  // get deck data from it's id, set deck state only when there are cards
  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
      setCardsLoaded(true);
      if (newDeck.cards.length > 0)
        setStudyCard(currentStudyCard => {
          return { ...currentStudyCard, text: newDeck.cards[0].front };
        });
    }

    getDeck();
  }, [deckId]);

  // button handlers
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
    if (deck.cards.length === studyCard.number + 1) {
      dialogPrompt();
    } else {
      setStudyCard(currentStudyCard => {
        return {
          ...currentStudyCard,
          number: Math.min(deck.cards.length, studyCard.number + 1),
          text: deck.cards[studyCard.number + 1].front,
          flipped: false,
        };
      });
    }
  };
  // prompt user sees when reaching end of the deck
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
    <div className="">
      <UtilityBar backURL="back" />
      <div className="absolute top-40 inset-0 bg-gradient-to-br from-indigo-800 to-slate-800 flex flex-col items-stretch">
        <FlashCards
          cardsLoaded={cardsLoaded}
          deckId={deck.id}
          name={deck.name}
          flipped={studyCard.flipped}
          cardNumber={studyCard.number}
          numberOfCards={deck.cards.length}
          cardText={studyCard.text}
          nextButtonClickHandler={nextButtonClickHandler}
          flipButtonClickHandler={flipButtonClickHandler}
        />
      </div>
    </div>
  );
};

export default Study;
