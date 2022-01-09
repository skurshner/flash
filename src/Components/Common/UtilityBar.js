import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";

const UtilityBar = ({
  deck = false,
  editButtonClickHandler = "",
  deleteButtonClickHandler = "",
  backURL = "home",
}) => {
  const history = useHistory();
  const { deckId } = useParams();

  const showDeckButtons = () =>
    deck && (
      <div className="flex gap-2">
        <Button
          variant="utility"
          icon="edit"
          clickHandler={editButtonClickHandler}
        />
        <Button
          variant="utility"
          icon="trash"
          clickHandler={() => deleteButtonClickHandler(deckId)}
        />
      </div>
    );

  const backButtonClickHandler = () => {
    backURL === "home" ? history.push("/") : history.goBack();
  };

  return (
    <div className="px-4 py-3 bg-slate-200">
      <div className="mx-auto max-w-screen-xl flex justify-between">
        <button
          className="py-3 pr-3 flex items-center cursor-pointer"
          onClick={backButtonClickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <p className="ml-2 text-lg font-semibold text-indigo-600">Back</p>
        </button>
        {showDeckButtons()}
      </div>
    </div>
  );
};

export default UtilityBar;
