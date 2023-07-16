import { Cocktails } from "./data";
import Card from "./components/Card";
import "./App.scss";
import "./style/main.scss";

function App() {
  return (
    <div className="app">
      {Cocktails.map((cocktail) => (
        <Card key={cocktail.id} {...cocktail} />
      ))}
    </div>
  );
}
export default App;
