export interface Product {
  id: string;
  name: string;
  strength: string;
  form: string;
  volume: string;
  description: string;
  defaultImage: string;
  accent: string;
}

export type ProductImageMap = Record<string, string>;
