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
    <div className="container px-0">
      <Button
        variant={"secondary"}
        type={"button"}
        text={"Create Deck"}
        icon={"plus-lg"}
        clickHandler={createButtonClickHandler}
      />
      <DeckList
        decks={decks}
        deleteButtonClickHandler={deleteButtonClickHandler}
      />
    </div>
  );
};

export default Home;
