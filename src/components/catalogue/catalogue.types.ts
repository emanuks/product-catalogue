export interface Product {
  id: number;
  name: string;
  fullPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}