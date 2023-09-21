export interface Ingredients {
  quantity?: number | string;
  unit?: string;
  name: string;
}

export interface Cocktail {
  id: number;
  name: string;
  image_name: string;
  own_image_name: string;
  ingredients: Ingredients[];
  technique: string;
  glass: string;
  decoration: string;
  instructions: string;
  other_info?: string;
}
