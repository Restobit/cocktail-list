import { Cocktail } from "./CocktailCard.types";
import { images } from "../../Assets/Images";

export const CocktailCard = ({
  id,
  name,
  image_name,
  own_image_name,
  ingredients,
  technique,
  glass,
  decoration,
  instructions,
  other_info,
}: Cocktail) => {
  const imagePath = images[own_image_name]
    ? images[own_image_name]
    : images[image_name] ?? images["default"];

  return (
    <div className="cocktail-card">
      <img src={imagePath} alt={name} width="auto" height="200" />

      <div className="cocktail">
        <div className="title">
          <p>
            {id} {name}
          </p>
        </div>

        <div className="details">
          <div className="ingredients">
            {ingredients.map((ingredient, index) => (
              <p key={index}>
                • {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </p>
            ))}
          </div>

          <div className="technique">
            <p>
              <span>Technika:</span> {technique}
            </p>
          </div>
          <div className="technique">
            <p>
              <span>Pohár:</span> {glass}
            </p>
          </div>
          <div className="decoration">
            <p>
              <span>Dekoráció:</span> {decoration}
            </p>
          </div>
          <div className="instructions">
            <p>
              <span>Elkészítés:</span> {instructions}
            </p>
          </div>
          {other_info && (
            <>
              <div className="other_info">
                <p>
                  <span>Egyéb infó:</span> {other_info}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
