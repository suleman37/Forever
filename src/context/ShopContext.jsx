import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryCharge = 10;
  const [search, setSearch] = useState("");
  const [showsearch, setShowSearch] = useState(false);
  const value = {
    products,
    currency,
    deliveryCharge,
    search,
    setSearch,
    showsearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;