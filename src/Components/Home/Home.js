import { useHistory } from "react-router-dom";
import Button from "../Common/Button";
import DeckList from "./DeckList";

const Home = ({ decks }) => {
  const history = useHistory();
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
