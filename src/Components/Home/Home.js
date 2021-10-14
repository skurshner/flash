import { useHistory } from "react-router-dom";
import { listDecks } from "../../utils/api";
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

  return (
    <div className="container px-0">
      <Button
        variant={"secondary"}
        type={"button"}
        text={"Create Deck"}
        icon={"add"}
        clickHandler={createButtonClickHandler}
      />
      <DeckList decks={decks} />
    </div>
  );
};

export default Home;
