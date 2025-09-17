// 商品の型定義
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  roastLevel: number; // 1-5の焙煎度
  taste: {
    acidity: number; // 酸味 1-5
    bitterness: number; // 苦味 1-5
    sweetness: number; // 甘味 1-5
    body: number; // コク 1-5
  };
  origin: string;
  imageUrl: string;
};

// レビューの型定義
export type Review = {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  purchaseDate: string;
};

// SNSリンクの型定義
export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};
