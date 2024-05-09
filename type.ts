export type id = {
  params: { id: string };
};

interface Review {
  user: string;
  name: string;
  rating: number;
  comment: string;
}

export interface Color {
  color: string;
  code: string;
}
export interface ProductType {
  _id: string;
  user: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string[];
  reviews: Review[];
  rating: number;
  numReviews: number;
  price: number;
  color: Color[];
  countInStock: number;
}
