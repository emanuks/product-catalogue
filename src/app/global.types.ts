export interface ProductI {
  id: number;
  name: string;
  fullPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
  categories: CategoryI[];
}

export interface CategoryI {
  id: number;
  name: string;
}