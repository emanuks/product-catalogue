export interface CartProduct {
  id: number;
  name: string;
  image: string;
  quantity: number;
  fullPrice: number;
  discountedPrice: number;
  discount: number;
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}