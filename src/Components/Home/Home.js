import { useHistory } from "react-router-dom";
import { deleteDeck, listDecks } from "../../utils/api";
import Button from "../Common/Button";
import DeckList from "./DeckList";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const history = useHistory();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks() {
      const decksList = await listDecks();
      setDecks(decksList);
    }

    getDecks();
  }, []);

  const createButtonClickHandler = () => {
    history.push("/decks/new");
  };

  const deleteButtonClickHandler = async id => {
    await deleteDeck(id);
    const decksList = await listDecks();
    setDecks(decksList);
  };

  return (
    <div className="container px-0">
      <Button
        variant={"secondary"}
        type={"button"}
        text={"Create Deck"}
        icon={"add"}
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
