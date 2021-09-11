import { CardsList } from "./components/cards-list";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [showDeck, setShowDeck] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [deck, setDeck] = useState("");

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/")
      .then((res) => res.json())
      .then((res) => setDeck(res.deck_id))
      .catch((err) => console.log("Erro na api: " + err));
  }, []);

  useEffect(() => {
    if (deck) {
      fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=52`)
        .then((res) => res.json())
        .then((res) => setCardsList([...res.cards]));
    }
  }, [deck]);

  /*  const handleDeckRequest = () => {
    f
  };

  const handleCardsRequest = (deckId) => {
    
  }; 

  const handleShowDeck = () => {
    setShowDeck(!showDeck);
    console.log(showDeck);
  };*/

  /* useEffect(() => {
    handleDeckRequest();
  }, [deck]);

  useEffect(() => {
    if (deck) handleCardsRequest(deck);
  }, []);
 */
  return (
    <div className="main-container">
      <h1 className="main-title">Debugue para ver o baralho</h1>
      <button
        onClick={() => {
          setShowDeck(!showDeck);
        }}
        className="new-deck-button"
      >
        Novo baralho
      </button>
      {showDeck && <CardsList cardsList={cardsList} />}
    </div>
  );
};

export default App;
