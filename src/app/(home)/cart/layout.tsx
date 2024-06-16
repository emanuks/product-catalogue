import { LayoutProps } from "@/app/global.types";

const LayoutCart = ({ children }: LayoutProps) => {
  return (
    <div className="mx-32 my-16">
      {children}
    </div>
  );
}

export default LayoutCart;