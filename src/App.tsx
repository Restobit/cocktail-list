import { useState } from "react";
import { Cocktails } from "./cocktails_data";
import { CocktailCard } from "./Components/CocktailCard";
import { useDebouncedCallback } from "use-debounce";
import "./App.scss";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const debounced = useDebouncedCallback((value) => {
    setSearchQuery(value);
  }, 300);

  type SearchPropTypes =
    | "name"
    | "technique"
    | "glass"
    | "decoration"
    | "instructions";

  const searchProps: SearchPropTypes[] = [
    "name",
    "technique",
    "glass",
    "decoration",
    "instructions",
  ];

  const filteredCocktails = Cocktails.filter((cocktail) => {
    return (
      searchProps.some((searchProp) =>
        cocktail[searchProp].toLowerCase().includes(searchQuery)
      ) ||
      cocktail.ingredients.some((ingredient) =>
        ingredient.name.toLowerCase().includes(searchQuery)
      )
    );
  });

  return (
    <div className="app">
      <div className="header">
        <div className="search">
          <input
            type="text"
            className="search-term"
            placeholder="Keresés"
            onChange={(e) => debounced(e.target.value)}
          />
        </div>
      </div>

      <div className="cocktail-list">
        {filteredCocktails.map((cocktail) => (
          <CocktailCard key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </div>
  );
}
export default App;
