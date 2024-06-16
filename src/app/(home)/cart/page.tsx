import { CartProducts } from "@/components/cart-products";
import { TotalCard } from "@/components/total-card/total-card";

const CartPage = () => {
  return (
    <section className="grid grid-cols-3 gap-10 mx-32 my-16">
      <div className="flex flex-row gap-3 col-span-2">
        <CartProducts />
      </div>
      <aside className="col-span-1 p-10 border border-gray-200 rounded max-h-80">
        <TotalCard />
      </aside>
    </section>
  );
}

export default CartPage;