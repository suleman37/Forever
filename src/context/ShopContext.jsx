import { createContext } from "react";
import { productsData } from "../assets/assets";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryCharge = 10;
  const value = {
    productsData , currency , deliveryCharge
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;