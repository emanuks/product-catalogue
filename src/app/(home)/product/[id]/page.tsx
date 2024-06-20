import Image from "next/image";

import { ProductI } from "@/app/global.types";
import { AddToCartButton } from "@/components/add-to-cart-button";

interface ProductPageProps {
  params: {
    id: string;
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/emanuks/product-catalogue/products/${params.id}`
  );
  const product: ProductI = await response.json();

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-10 gap-5 lg:gap-10">
      <div className="col-span-1 flex lg:flex-col gap-3 justify-center items-center">
        <Image src={product.image} alt="Product Image" width={105} height={100} className="max-w-16 lg:max-w-full" />
        <Image src={product.image} alt="Product Image" width={105} height={100} className="max-w-16 lg:max-w-full" />
        <Image src={product.image} alt="Product Image" width={105} height={100} className="max-w-16 lg:max-w-full" />
        <Image src={product.image} alt="Product Image" width={105} height={100} className="max-w-16 lg:max-w-full" />
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <Image src={product.image} alt="Product Image" width={460} height={480} />
      </div>
      <div className="col-span-6 flex flex-col justify-between gap-5">
        <p className="text-gray-500">
          {product.categories.map(category => category.name).join(', ')}
        </p>

        <h2 className="text-4xl">{product.name}</h2>

        <div className="h-72 bg-gray-50 flex flex-col gap-3 justify-center items-center">
          <p className="text-gray-400 line-through">De R$ {product.fullPrice.toFixed(2)}</p>

          <h2 className="text-4xl font-bold">R$ {product.discountedPrice.toFixed(2)}</h2>

          <p className="text-gray-500">
            no pix <span className="text-orange-500">{product.discount * 100}%</span> de desconto
          </p>
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

export default ProductPage;