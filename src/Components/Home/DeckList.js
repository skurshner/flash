import React from "react";
import Button from "../Common/Button";
import DeckListItem from "./DeckListItem";

const DeckList = () => {
  return (
    <div className="container px-0">
      <Button
        variant={"secondary"}
        type={"button"}
        text={"Create Deck"}
        icon={"add"}
      />
      <div className="container px-0 py-3">
        <DeckListItem />
        <DeckListItem />
        <DeckListItem />
      </div>
    </div>
  );
};

export default DeckList;
