// レビューの型定義
export type ReviewType = {
  id: number;
  name: string;
  comment: string;
};

export type ProductType = {
  name: string;
  description: string;
  roastLevel: string;
  price: string;
  weight: string;
  origin: string;
  tastingNote: string[];
  flavorBalance: { label: string; value: number }[];
  imagePath: string;
};
