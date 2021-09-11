import { useState } from "react";
import { Card } from "./../card";
import "./style.css";

export const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState(false);
  const [nipeFilter, setNipeFilter] = useState("");

  const handleSuitFilter = (e) => {
    if (e.target) {
      setSuitFilter(true);
      setNipeFilter(e.target.id);
      e.target.checked = true;
    }
    if (e.target.id === nipeFilter) {
      setSuitFilter(false);
      setNipeFilter("");
      e.target.checked = false;
    }
  };

  return (
    <>
      <div className="filter-container">
        <p>Filtrar por naipe</p>
        <div>
          <input
            onClick={handleSuitFilter}
            type="radio"
            id="SPADES"
            name="suit"
          />
          <label for="SPADES">Espadas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="HEARTS"
            name="suit"
          />
          <label for="HEARTS">Copas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="CLUBS"
            name="suit"
          />
          <label for="CLUBS">Paus</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="DIAMONDS"
            name="suit"
          />
          <label for="DIAMONDS">Ouros</label>
        </div>
      </div>
      <div>
        {!suitFilter &&
          cardsList.map((actual, index) => <Card card={actual} key={index} />)}

        {suitFilter &&
          cardsList
            .filter((actual) => actual.suit === nipeFilter)
            .map((actual, index) => <Card card={actual} key={index} />)}
      </div>
    </>
  );
};
