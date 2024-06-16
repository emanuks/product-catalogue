import Image from "next/image";

export const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-5">
      <Image
        src={product.image}
        alt="Product Image"
        width={330}
        height={320}
        className="w-1/3 h-80"
      />
      <p className="text-gray-500">-</p>
      <h3 className="text-xl">{product.name}</h3>
      <p className="text-gray-500 line-through">De: R$ {product.fullPrice}</p>
      <h2 className="text-2xl">
        {product.discountedPrice}
        <span className="text-orange-500">10% OFF</span>
      </h2>

      <button>Adicionar ao carrinho</button>
    </div>
  );
}