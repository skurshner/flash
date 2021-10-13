import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";
import DeckList from "./DeckList";

const Home = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks() {
      const decksList = await listDecks();
      setDecks(decksList);
    }

    getDecks();
  }, []);

  return (
    <div className="container px-0">
      <DeckList decks={decks} />
    </div>
  );
};

export default Home;
