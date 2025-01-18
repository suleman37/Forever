import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryCharge = 10;
  const value = {
    products , currency , deliveryCharge
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;