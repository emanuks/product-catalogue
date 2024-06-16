import { LayoutProps } from "@/app/global.types";

const ProductLayout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-32 my-16">
      {children}
    </div>
  )
}

export default ProductLayout;