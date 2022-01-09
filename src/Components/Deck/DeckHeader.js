import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Button from "../Common/Button";
import UtilityBar from "../Common/UtilityBar";

const DeckHeader = ({ deck, deleteButtonClickHandler }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  // button handlers
  const studyButtonClickHandler = () => history.push(`${url}/study`);

  const editButtonClickHandler = () => history.push(`${url}/edit`);

  return (
    <div>
      <UtilityBar
        deck={true}
        editButtonClickHandler={editButtonClickHandler}
        deleteButtonClickHandler={deleteButtonClickHandler}
      />
      <div className="mx-auto max-w-screen-xl py-4 px-4">
        <h1 className="text-3xl font-bold text-slate-700">{deck.name}</h1>

        <p className=" mt-3 text-slate-700">{deck.description}</p>
        <div className="mt-4 sm:w-40 sm:flex sm:flex-col sm:items-stretch">
          <Button
            variant={"secondary"}
            fullWidth={true}
            text={"Study"}
            icon={"study"}
            clickHandler={studyButtonClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default DeckHeader;
