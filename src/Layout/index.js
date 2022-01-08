import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Components/Home/Home";
import Deck from "../Components/Deck/Deck";
import CreateDeck from "../Components/Deck/CreateDeck";

function Layout() {
  return (
    <>
      <Header />
      <div className="bg-slate-100 h-screen">
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/decks/new"}>
            <CreateDeck />
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
