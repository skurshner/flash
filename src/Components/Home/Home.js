import DeckList from "./DeckList";

const Home = ({ decks }) => {
  return (
    <div className="container px-0">
      <DeckList decks={decks} />
    </div>
  );
};

export default Home;
