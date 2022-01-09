import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Common/Button";

const DeckListItem = ({
  id,
  name,
  description,
  numberOfCards,
  deleteButtonClickHandler,
}) => {
  const history = useHistory();

  // button handlers
  const viewButtonClickHandler = id => {
    history.push(`decks/${id}`);
  };

  const studyButtonClickHandler = id => {
    history.push(`decks/${id}/study`);
  };

  return (
    <div className="w-full p-4 mb-2 flex flex-col justify-between bg-gradient-to-br from-indigo-700 to-indigo-800 rounded-md shadow-lg">
      <div>
        <div className="mr-4 flex justify-between items-baseline">
          <h2 className="text-2xl font-semibold text-indigo-50">{name}</h2>
          <div className="flex items-center">
            <p className="font-medium text-indigo-100">{numberOfCards}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 text-indigo-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          </div>
        </div>

        <p className="mt-4 text-indigo-50">{description}</p>
      </div>

      <div className="mt-6 flex justify-between">
        <Button
          variant={"primary"}
          type={"button"}
          text={"Study"}
          icon={"study"}
          clickHandler={() => studyButtonClickHandler(id)}
        />
        <div className="flex">
          <Button
            variant={"icon"}
            type={"button"}
            icon={"view"}
            clickHandler={() => viewButtonClickHandler(id)}
          />

          <Button
            variant={"icon"}
            type={"button"}
            icon={"trash"}
            clickHandler={() => deleteButtonClickHandler(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default DeckListItem;
