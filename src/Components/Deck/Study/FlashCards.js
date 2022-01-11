import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../Common/Button";

const FlashCards = ({
  cardsLoaded,
  deckId,
  name,
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
        variant={"secondary"}
        text={"Next"}
        icon={"next"}
        clickHandler={nextButtonClickHandler}
      />
    ) : (
      ""
    );
  const backgroundColor = flipped ? "bg-indigo-50" : "bg-indigo-200";

  // don't display anything until cards loaded
  if (!cardsLoaded)
    return (
      <div className="w-full pt-20 flex justify-center">
        <h3 className="text-xl font-semibold text-slate-50">One sec...</h3>
      </div>
    );

  // display instead of cards if there are fewer than 3 in deck
  if (numberOfCards < 3)
    return (
      <div className="my-6 mx-auto flex justify-center">
        <div className="px-4 max-w-screen-sm flex flex-col items-stretch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-6 h-20 w-20 text-indigo-50"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
              clipRule="evenodd"
            />
          </svg>

          <h3 className="text-2xl font-semibold text-indigo-50 text-center">
            Not Enough Cards
          </h3>

          <p className="mt-4 text-indigo-50">
            You need at least 3 cards to study. There are only {numberOfCards}{" "}
            cards in this deck.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              variant={"primary"}
              fullWidth={true}
              text={"Add Cards"}
              icon={"add"}
              clickHandler={() => history.push(`/decks/${deckId}/cards/new`)}
            />
          </div>
        </div>
      </div>
    );

  return (
    <div className="w-full h-full p-4 flex justify-center items-center">
      <div
        className={`${backgroundColor} w-96 min-h-[240px] rounded-md overflow-hidden flex flex-col items-stretch justify-between`}
      >
        <div>
          <div className="p-4 bg-gradient-to-br from-indigo-700 to-indigo-800 flex justify-between">
            <h3 className="text-lg font-bold text-indigo-50">{name}</h3>
            <p className="text-sm bold text-indigo-50">
              {cardNumber + 1}/{numberOfCards}
            </p>
          </div>
          <div className="p-4">
            <p className="mb-1 text-xs font-bold uppercase text-indigo-600">
              {flipped ? "Back Side" : "Front Side"}
            </p>
            <p className="text-md font-semibold text-indigo-900">{cardText}</p>
          </div>
        </div>

        <div className="p-4 grid grid-cols-2 gap-2">
          <Button
            variant={"outline"}
            text={"Flip"}
            icon={"flip"}
            clickHandler={flipButtonClickHandler}
          />
          {setNextButtonVisibility()}
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
