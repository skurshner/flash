import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Components/Home/Home";
import Deck from "../Components/Deck/Deck";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    setDecks([]);
    async function getDecks() {
      const decksList = await listDecks();
      setDecks(decksList);
    }

    getDecks();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={"/"}>
            <Home decks={decks} />
          </Route>
          <Route path={"/decks/:deckId"}>
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
