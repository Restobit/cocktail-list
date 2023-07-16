import { Cocktails } from "./data";
import Card from "./components/Card";
import "./App.scss";
import "./style/main.scss";
import { useRef, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [cocktailsData, setCocktailsData] = useState(Cocktails);
  const inputRef = useRef<HTMLInputElement>(null);
  const [debouncedFilter] = useDebounce(inputRef.current?.value, 500);

  useEffect(() => {
    if (searchInput.length > 0) {
      console.log("inputRef", inputRef.current?.value);

      const filteredCoctailsData = Cocktails.filter((cocktail) => {
        if (inputRef.current) {
          return cocktail.name.match(inputRef?.current?.value.toLowerCase());
        }
        return [];
      });

      setCocktailsData(filteredCoctailsData);

      console.log(filteredCoctailsData);
    } else {
      setCocktailsData(Cocktails);
    }
  }, [debouncedFilter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <div className="app">
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Keresés"
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
      </div>

      <div className="cocktail-list">
        {cocktailsData.map((cocktail) => (
          <Card key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </div>
  );
}
export default App;
