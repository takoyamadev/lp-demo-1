// レビューの型定義
export type Review = {
  id: number;
  name: string;
  comment: string;
};

// 商品スペックの型定義
export type Spec = {
  label: string;
  value: number; // 1-5
};

// SNSリンクの型定義
export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};
