import React from "react";
import Button from "../Common/Button";
import DeckList from "./DeckList";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button
        name={"create"}
        type={"button"}
        text={"Create Deck"}
        icon={"add"}
      />
      <DeckList />
    </div>
  );
};

export default Home;
