export class TypeIngredient {
  value: number;
  unit: string;
  item: string;
  image?: string;
}

export class TypeRecipe {
  id: number;
  title: string;
  image: string;
  description: string;
  instructions: string[];
  ingredient?: TypeIngredient[];
}
