export type PriceRange = '$' | '$$' | '$$$';

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  blurb: string;
  image: string;
  url: string;
  priceRange: PriceRange;
  rating?: number;
  categories: string[];
  tags: string[];
}

export interface Category {
  slug: string;
  title: string;
  blurb: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
