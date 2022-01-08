import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck, listDecks } from "../../utils/api";
import Button from "../Common/Button";
import DeckList from "./DeckList";

const Home = () => {
  const history = useHistory();
  const [decks, setDecks] = useState([]);

  // get all decks and set state
  useEffect(() => {
    async function getDecks() {
      const decksList = await listDecks();
      setDecks(decksList);
    }

    getDecks();
  }, []);

  // button handlers
  const createButtonClickHandler = () => {
    history.push("/decks/new");
  };

  const deleteButtonClickHandler = async id => {
    const deleteConfirm = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it"
    );
    if (deleteConfirm) {
      await deleteDeck(id);
      const decksList = await listDecks();
      setDecks(decksList);
    }
  };

  return (
    <div className="p-4 flex-col items-stretch">
      <h1 className="mt-2  text-3xl font-bold text-slate-700">All Decks</h1>
      <div className="py-4">
        <Button
          variant={"primary"}
          fullWidth={true}
          type={"button"}
          text={"Make a New Deck"}
          icon={"add"}
          clickHandler={createButtonClickHandler}
        />
      </div>

      <DeckList
        decks={decks}
        deleteButtonClickHandler={deleteButtonClickHandler}
      />
    </div>
  );
};

export default Home;
