import { ProductI } from "@/app/global.types";

export const ProductsCounter = async () => {
  const response = await fetch(
		"https://my-json-server.typicode.com/emanuks/product-catalogue/products"
	);
	const products: ProductI[] = await response.json();

  return (
    <p className="font-bold text-xl">{products.length} itens encontrados</p>
  );
}