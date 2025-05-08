import { ReactNode } from "react";
import Icon from "../../constant/icons/Icon";
import { Footer } from "../../features/footer/Footer";
import { Nav } from "../common/Nav";

interface LayoutProps {
  children: ReactNode;
}

export const MainLayouts = ({ children }: LayoutProps) => {
  return (
    <div className="relative text-[3AA6B9] overflow-hidden">
      <Nav />
      <div>{children}</div>
      <Footer />
      <div className="fixed animate-bounce bottom-[70px] right-[12%] lg:right-[6%] z-40">
        <Icon type="whatsapp" />
      </div>
    </div>
  );
};
