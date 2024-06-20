import { CartProducts } from "@/components/cart-products";
import { TotalCard } from "@/components/total-card";

const CartPage = () => {
  return (
    <section className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-10">
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