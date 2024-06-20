import { LayoutProps } from "@/app/global.types";

const LayoutCart = ({ children }: LayoutProps) => {
  return (
    <div className="mx-5 lg:mx-32 my-5 lg:my-16">
      {children}
    </div>
  );
}

export default LayoutCart;