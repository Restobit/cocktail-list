import { Cocktail } from "../data";
import cocktailImage from "../cocktail.png";

export default function Card({
  id,
  name,
  image_name,
  own_image_name,
  ingredients,
  technique,
  decoration,
  instructions,
  other_info,
}: Cocktail) {
  return (
    <div className="card">
      <img src={cocktailImage} alt="cocktail" width="100" height="200" />

      <div className="cocktail">
        <div className="title">
          <p>{name}</p>
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
}
